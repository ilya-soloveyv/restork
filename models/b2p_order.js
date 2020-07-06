'use strict'

const md5 = require('md5')
const Base64 = require('js-base64').Base64
// const request = require('request')
// const fetch = require('node-fetch')
const axios = require('axios')
const qs = require('qs')
const consola = require('consola')

module.exports = (sequelize, DataTypes) => {
  const b2pOrder = sequelize.define(
    'b2p_order',
    {
      iOrderID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      iUserID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'user',
          key: 'iUserID'
        },
        onUpdate: 'NO ACTION',
        onDelete: 'CASCADE'
      },
      iAmountValue: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      iAmountCurrency: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      sOrderDescription: {
        type: DataTypes.STRING,
        allowNull: false
      },
      iOrderIDB2P: {
        type: DataTypes.INTEGER
      },
      B2POrderState: {
        type: DataTypes.STRING
      }
    },
    {
      timestamps: false,
      freezeTableName: true,
      tableName: 'b2p_order'
    }
  )

  b2pOrder.associate = function(models) {
    b2pOrder.belongsTo(models.user, {
      foreignKey: 'iUserID'
    })
  }

  b2pOrder.signatureRegister = ({ iAmountValue, iAmountCurrency }) => {
    const signatureString =
      process.env.B2P_SECTOR_ID +
      iAmountValue +
      iAmountCurrency +
      process.env.B2P_SECTOR_PASS
    const signatureMD5 = md5(signatureString)
    const signatureBase64 = Base64.encode(signatureMD5)
    return {
      signatureString,
      signatureMD5,
      signatureBase64
    }
  }

  b2pOrder.sendRegister = async ({
    iAmountValue,
    iAmountCurrency,
    sOrderDescription,
    signature,
    sUserPhone,
    sUserEmail
  }) => {
    try {
      const response = await axios.post(
        process.env.B2P_URL + 'Register',
        qs.stringify({
          sector: process.env.B2P_SECTOR_ID,
          amount: iAmountValue,
          currency: iAmountCurrency,
          description: sOrderDescription,
          life_period: 60 * 20,
          url: 'https://restork.ru/dashboard/finance/success',
          failurl: 'https://restork.ru/dashboard/finance/error',
          email: sUserEmail,
          phone: sUserPhone,
          signature
        }),
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }
      )
      // console.log(response)
      return response.data
    } catch (error) {
      return error
    }
  }

  b2pOrder.addOrder = async ({
    iUserID = false,
    sOrderDescription = null
  } = {}) => {
    const amountMin = 1
    const amountMax = 9
    const iAmountValue =
      (amountMin + Math.floor((amountMax - amountMin) * Math.random())) * 100
    const iAmountCurrency = 643

    const User = sequelize.models.user
    const user = await User.item({ iUserID })

    const signature = await b2pOrder.signatureRegister({
      iAmountValue,
      iAmountCurrency
    })

    // return {
    //   user,
    //   iAmountValue,
    //   signature
    // }

    const { order } = await b2pOrder.sendRegister({
      iAmountValue,
      iAmountCurrency,
      sOrderDescription,
      signature: signature.signatureBase64,
      sUserPhone: user.sUserPhone,
      sUserEmail: user.sUserEmail
    })
    consola.log(order)
    // return order

    const id = order.id
    const signatureString =
      process.env.B2P_SECTOR_ID + order.id + process.env.B2P_SECTOR_PASS
    const signatureMD5 = md5(signatureString)
    const signatureBase64 = Base64.encode(signatureMD5)

    if (iUserID && id) {
      await b2pOrder.create({
        iUserID,
        iAmountValue,
        iAmountCurrency,
        sOrderDescription,
        iOrderIDB2P: id
      })
    }

    return {
      url:
        'https://test.best2pay.net/webapi/CardEnroll?sector=' +
        process.env.B2P_SECTOR_ID +
        '&id=' +
        id +
        '&signature=' +
        signatureBase64
    }
  }

  return b2pOrder
}
