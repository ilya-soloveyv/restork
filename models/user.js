'use strict'

const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'user',
    {
      iUserID: {
        allowNull: false,
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      sUserLastName: {
        type: DataTypes.STRING
      },
      sUserMiddleName: {
        type: DataTypes.STRING
      },
      sUserFirstName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      sUserPhone: {
        type: DataTypes.STRING,
        allowNull: false
      },
      sUserPassword: {
        type: DataTypes.STRING,
        allowNull: false
      },
      iUserKey: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      iUserAdmin: {
        type: DataTypes.BOOLEAN,
        defaultValue: 0
      }
    },
    {
      timestamps: false,
      freezeTableName: true,
      tableName: 'user'
    }
  )
  User.associate = function(models) {}

  User.searchUsers = async function (search) {
    // search = search.split(' ')

    // search.forEach(item => {

    //   where[Sequelize.or()].push(
    //     Sequelize.or({
    //       sUserLastName: {
    //         [Op.substring]: item
    //       }
    //     })
    //   )

    // })

    // console.log(search)
    const users = await User.findAll({
      attributes: [
        'iUserID',
        'sUserLastName',
        'sUserMiddleName',
        'sUserFirstName',
        'sUserPhone',
        'iUserAdmin'
      ],
      where: Sequelize.or(
        Sequelize.or({
          sUserLastName: {
            [Op.substring]: search
          }
        }),
        Sequelize.or({
          sUserMiddleName: {
            [Op.substring]: search
          }
        }),
        Sequelize.or({
          sUserFirstName: {
            [Op.substring]: search
          }
        })
      )
    })
    return users
  }


  return User
}
