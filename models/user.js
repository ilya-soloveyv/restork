'use strict'

const Sequelize = require('sequelize')
const Op = Sequelize.Op
const fs = require('fs')
const selectel = require('selectel-storage-promise')
const fileExtension = require('file-extension')
const Jimp = require('jimp')

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
      sUserEmail: {
        type: DataTypes.STRING
      },
      dUserBirthday: {
        type: DataTypes.DATEONLY
      },
      sUserAvatar: {
        type: DataTypes.STRING
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

  User.searchUsers = async function(search) {
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
        'sUserEmail',
        'dUserBirthday',
        'sUserAvatar',
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

  User.uploadAvatar = async function(iUserID, file) {
    const response = {}
    await selectel.auth(
      process.env.SELECTEL_USER,
      process.env.SELECTEL_PASSWORD
    )
    const ext = fileExtension(file.originalname)
    const localPath = 'static/upload/'
    const localPathOriginal = localPath + file.filename
    const sUserAvatar = file.filename + '.' + ext
    response.sUserAvatar = sUserAvatar
    const localPathPreview = localPath + sUserAvatar
    const container = process.env.SELECTEL_CONTAINER
    const sUserAvatarPathOriginal =
      '/' + container + '/user/original/' + sUserAvatar
    const sUserAvatarPathPreview =
      '/' + container + '/user/preview/' + sUserAvatar
    await User.resizeAvatar(file)
    await selectel.uploadFile(localPathOriginal, sUserAvatarPathOriginal)
    await selectel.uploadFile(localPathPreview, sUserAvatarPathPreview)
    fs.unlinkSync(localPathOriginal)
    fs.unlinkSync(localPathPreview)
    // await User.update(
    //   {
    //     sUserAvatar
    //   },
    //   {
    //     where: {
    //       iUserID
    //     }
    //   }
    // )
    return response
  }

  User.resizeAvatar = function(file) {
    const ext = fileExtension(file.originalname)
    const sUserAvatar = file.filename + '.' + ext
    return Jimp.read(file.path)
      .then((preview) => {
        return preview
          .cover(200, 200)
          .quality(90)
          .write('static/upload/' + sUserAvatar, () => {
            return sUserAvatar
          })
      })
      .catch((err) => {
        return err
      })
  }

  return User
}
