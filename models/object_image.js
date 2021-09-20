'use strict'

const fs = require('fs')
const selectel = require('selectel-storage-promise')
const fileExtension = require('file-extension')
const Jimp = require('jimp')

module.exports = (sequelize, DataTypes) => {
  const ObjectImage = sequelize.define(
    'object_image',
    {
      iObjectImageID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      iObjectID: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      sObjectImage: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      timestamps: false,
      freezeTableName: true,
      tableName: 'object_image'
    }
  )
  ObjectImage.associate = function(models) {
    // associations can be defined here
  }

  ObjectImage.upload = async function(iObjectID, files) {
    const response = []
    await selectel.auth(
      process.env.SELECTEL_USER,
      process.env.SELECTEL_PASSWORD
    )
    for (const file of files) {
      const ext = fileExtension(file.originalname)
      const localPath = `static/upload/`
      const sObjectImage = `${file.filename}.${ext}`
      const localPathOriginal = `${localPath}${file.filename}`
      const localPathPreview = `${localPath}/preview/${sObjectImage}`
      const localPathInterface = `${localPath}/interface/${sObjectImage}`
      const container = process.env.SELECTEL_CONTAINER
      const sObjectImagePathOriginal =
        `/${container}/object/${iObjectID}/original/${sObjectImage}`
      const sObjectImagePathPreview =
        `/${container}/object/${iObjectID}/preview/${sObjectImage}`
      const sObjectImagePathInterface =
        `/${container}/object/${iObjectID}/interface/${sObjectImage}`
      await ObjectImage.resize(file, 'preview', 300, 300)
      await ObjectImage.resize(file, 'interface', 600, 400)
      await selectel.uploadFile(localPathOriginal, sObjectImagePathOriginal)
      await selectel.uploadFile(localPathPreview, sObjectImagePathPreview)
      await selectel.uploadFile(localPathInterface, sObjectImagePathInterface)
      fs.unlinkSync(localPathOriginal)
      fs.unlinkSync(localPathPreview)
      fs.unlinkSync(localPathInterface)
      await ObjectImage.create({ iObjectID, sObjectImage })
    }
    return response
  }

  ObjectImage.resize = async function(file, path, width, height) {
    const ext = fileExtension(file.originalname)
    const sObjectImage = file.filename + '.' + ext
    await Jimp.read(file.path)
      .then((preview) => {
        return preview
          .cover(width, height)
          .quality(90)
          .write(`static/upload/${path}/${sObjectImage}`, () => {
            return sObjectImage
          })
      })
      .catch((err) => {
        return err
      })
  }

  ObjectImage.remove = async function(image) {
    const objectImage = await ObjectImage.findByPk(image.iObjectImageID)
    const selectelContainer = process.env.SELECTEL_CONTAINER
    const iObjectID = objectImage.iObjectID
    const sObjectImage = objectImage.sObjectImage
    const sObjectImagePathOriginal =
      selectelContainer + '/object/' + iObjectID + '/original/' + sObjectImage
    const sObjectImagePathPreview =
      selectelContainer + '/object/' + iObjectID + '/preview/' + sObjectImage
    const sObjectImagePathInterface =
      selectelContainer + '/object/' + iObjectID + '/interface/' + sObjectImage
    await ObjectImage.destroy({
      where: {
        iObjectImageID: image.iObjectImageID
      }
    })
    await selectel.auth(
      process.env.SELECTEL_USER,
      process.env.SELECTEL_PASSWORD
    )
    await selectel.deleteFile(sObjectImagePathOriginal)
    await selectel.deleteFile(sObjectImagePathPreview)
    await selectel.deleteFile(sObjectImagePathInterface)
    return true
  }

  return ObjectImage
}
