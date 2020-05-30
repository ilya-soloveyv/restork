'use strict'

const fs = require('fs')
const selectel = require('selectel-storage-promise')
const fileExtension = require('file-extension')
const Jimp = require('jimp')

module.exports = (sequelize, DataTypes) => {
  const RoomImage = sequelize.define(
    'room_image',
    {
      iRoomImageID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      iRoomID: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      sRoomImage: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      timestamps: false,
      freezeTableName: true,
      tableName: 'room_image'
    }
  )
  RoomImage.associate = function(models) {
    // associations can be defined here
  }

  RoomImage.upload = async function(iRoomID, files) {
    const response = []
    await selectel.auth(
      process.env.SELECTEL_USER,
      process.env.SELECTEL_PASSWORD
    )
    for (const file of files) {
      const ext = fileExtension(file.originalname)
      const localPath = 'static/upload/'
      const localPathOriginal = localPath + file.filename
      const sRoomImage = file.filename + '.' + ext
      const localPathPreview = localPath + sRoomImage
      const container = process.env.SELECTEL_CONTAINER
      const sRoomImagePathOriginal =
        '/' + container + '/room/' + iRoomID + '/original/' + sRoomImage
      const sRoomImagePathPreview =
        '/' + container + '/room/' + iRoomID + '/preview/' + sRoomImage
      await RoomImage.resize(file)
      await selectel.uploadFile(localPathOriginal, sRoomImagePathOriginal)
      await selectel.uploadFile(localPathPreview, sRoomImagePathPreview)
      fs.unlinkSync(localPathOriginal)
      fs.unlinkSync(localPathPreview)
      await RoomImage.create({ iRoomID, sRoomImage })
    }
    return response
  }

  RoomImage.resize = function(file) {
    const ext = fileExtension(file.originalname)
    const sRoomImage = file.filename + '.' + ext
    return Jimp.read(file.path)
      .then((preview) => {
        return preview
          .cover(300, 300)
          .quality(90)
          .write('static/upload/' + sRoomImage, () => {
            return sRoomImage
          })
      })
      .catch((err) => {
        return err
      })
  }

  RoomImage.remove = async function(image) {
    const roomImage = await RoomImage.findByPk(image.iRoomImageID)
    const selectelContainer = process.env.SELECTEL_CONTAINER
    const iRoomID = roomImage.iRoomID
    const sRoomImage = roomImage.sRoomImage
    const sRoomImagePathOriginal =
      selectelContainer + '/room/' + iRoomID + '/original/' + sRoomImage
    const sRoomImagePathPreview =
      selectelContainer + '/room/' + iRoomID + '/preview/' + sRoomImage
    await RoomImage.destroy({
      where: {
        iRoomImageID: image.iRoomImageID
      }
    })
    selectel.deleteFile(sRoomImagePathOriginal, (err, data) => () => {
      if (err) throw err
    })
    selectel.deleteFile(sRoomImagePathPreview, (err, data) => () => {
      if (err) throw err
    })
  }

  return RoomImage
}
