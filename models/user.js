'use strict'

const Sequelize = require('sequelize')
const Op = Sequelize.Op
const fs = require('fs')
const selectel = require('selectel-storage-promise')
const fileExtension = require('file-extension')
const Jimp = require('jimp')
const jsonwebtoken = require('jsonwebtoken')
const md5 = require('md5')
const validator = require('validator')
const randomstring = require('randomstring')
const axios = require('axios')
const urlencode = require('urlencode')

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
        allowNull: false,
        unique: true
      },
      sUserPhoneKod: {
        type: DataTypes.STRING
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

  User.signin = async function(sUserPhone, sUserPassword) {
    const sUserPhoneValidate = User.sUserPhoneValidate(sUserPhone)
    if (!sUserPhoneValidate) {
      return {
        error: {
          ref: 'sUserPhone',
          message: 'Неверный формат мобильного телефона'
        }
      }
    }
    const sUserPasswordValidate = User.sUserPasswordValidate(sUserPassword)
    if (!sUserPasswordValidate) {
      return {
        error: {
          ref: 'sUserPassword',
          message: 'Неверный формат пароля'
        }
      }
    }
    const user = await User.findOne({
      where: {
        sUserPhone
      }
    })
    if (user === null) {
      return {
        error: {
          ref: 'sUserPhone',
          message: 'Пользователь не зарегистрирован'
        }
      }
    }
    const iUserKey = user.iUserKey
    const sUserPasswordHash = user.sUserPassword
    const sUserPasswordHashReq = md5(sUserPassword + iUserKey)
    const checkSignIn = sUserPasswordHash === sUserPasswordHashReq
    if (!checkSignIn) {
      return {
        error: {
          ref: 'sUserPassword',
          message: 'Логин или пароль не совпадают'
        }
      }
    }
    const accessToken = jsonwebtoken.sign(
      {
        iUserID: user.iUserID,
        sUserLastName: user.sUserLastName,
        sUserMiddleName: user.sUserMiddleName,
        sUserFirstName: user.sUserFirstName,
        sUserPhone: user.sUserPhone,
        sUserPhoneKod: user.sUserPhoneKod,
        sUserEmail: user.sUserEmail,
        dUserBirthday: user.dUserBirthday,
        sUserAvatar: user.sUserAvatar,
        iUserAdmin: user.iUserAdmin
      },
      'dummy'
    )
    return {
      accessToken
    }
  }

  User.signup = async function(sUserFirstName, sUserPhone, sUserPassword) {
    const sUserFirstNameValidate = User.sUserFirstNameValidate(sUserFirstName)
    if (!sUserFirstNameValidate) {
      return {
        error: {
          ref: 'sUserFirstName',
          message: 'Необходимо ввести Ваше имя'
        }
      }
    }
    const sUserPhoneValidate = User.sUserPhoneValidate(sUserPhone)
    if (!sUserPhoneValidate) {
      return {
        error: {
          ref: 'sUserPhone',
          message: 'Неверный формат мобильного телефона'
        }
      }
    }
    const sUserPasswordValidate = User.sUserPasswordValidate(sUserPassword)
    if (!sUserPasswordValidate) {
      return {
        error: {
          ref: 'sUserPassword',
          message: 'Неверный формат пароля'
        }
      }
    }
    const user = await User.findOne({
      where: {
        sUserPhone
      }
    })
    if (user !== null) {
      return {
        error: {
          ref: 'sUserPhone',
          message: 'Пользователь уже зарегистрирован'
        }
      }
    }
    const iUserKey = randomstring.generate({
      length: 3,
      charset: 'numeric'
    })
    const sUserPhoneKod = randomstring.generate({
      length: 4,
      charset: 'numeric'
    })
    const sUserPasswordHash = md5(sUserPassword + iUserKey)
    await User.create({
      sUserFirstName,
      sUserPhone,
      sUserPassword: sUserPasswordHash,
      iUserKey,
      sUserPhoneKod
    })
    User.sendSMSKod(sUserPhone, sUserPhoneKod)
    return true
  }

  User.sUserPhoneValidate = function(sUserPhone) {
    if (
      !validator.isEmpty(sUserPhone) &&
      validator.isNumeric(sUserPhone) &&
      validator.isLength(sUserPhone, {
        min: 10,
        max: 10
      })
    ) {
      return true
    } else {
      return false
    }
  }

  User.sUserPasswordValidate = function(sUserPassword) {
    if (
      !validator.isEmpty(sUserPassword) &&
      validator.isLength(sUserPassword, { min: 6, max: 24 })
    ) {
      return true
    } else {
      return false
    }
  }

  User.sUserFirstNameValidate = function(sUserFirstName) {
    if (
      !validator.isEmpty(sUserFirstName) &&
      validator.isLength(sUserFirstName, { min: 2 })
    ) {
      return true
    } else {
      return false
    }
  }

  User.sendSMSKod = function(sUserPhone, sUserPhoneKod) {
    const smsText = urlencode('Код подтверждения: ' + sUserPhoneKod)
    axios.get(
      process.env.SMS_HOST +
        '?user=' +
        process.env.SMS_USER +
        '&pwd=' +
        process.env.SMS_PASS +
        '&dadr=' +
        '7' +
        sUserPhone +
        '&text=' +
        smsText +
        '&sadr=' +
        process.env.SMS_SADR
    )
  }

  return User
}
