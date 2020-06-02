const { Router } = require('express')
const router = Router()
require('dotenv').config()
const Sequelize = require('sequelize')

const NodeGeocoder = require('node-geocoder')
const NodeGeocoderOptions = {
  provider: 'yandex',
  httpAdapter: 'https',
  apiKey: process.env.YANDEX_MAP_KEY,
  formatter: null
}
const geocoder = NodeGeocoder(NodeGeocoderOptions)

const multer = require('multer')
const upload = multer({ dest: 'static/upload/' })

const Object = require('../../models').object
const Room = require('../../models').room
const ObjectType = require('../../models').object_type
const ObjectOption = require('../../models').object_option
const ObjectImage = require('../../models').object_image
const RoomOption = require('../../models').room_option
const RoomImage = require('../../models').room_image
const ObjectObjectOption = require('../../models').object_object_option
const ObjectRoomOption = require('../../models').object_room_option
const RoomType = require('../../models').room_type
const RoomRoomOption = require('../../models').room_room_option

router.post('/get', async (req, res, next) => {
  const iObjectID = req.body.id
  let response = null
  if (iObjectID) {
    response = await Object.findByPk(iObjectID, {
      include: [
        {
          model: ObjectType
        }
      ]
    })
  } else {
    response = await Object.paginate({
      order: [['iObjectID', 'DESC']],
      include: [
        {
          model: ObjectType
        }
      ]
    })
  }
  res.json(response)
})

router.post('/get_edit', async (req, res, next) => {
  const iObjectID = req.body.id
  const response = {}
  response.object = await Object.getObject(iObjectID)
  response.object_type = await ObjectType.getTypes()
  response.object_option = await ObjectOption.getOptions()
  response.room_option = await RoomOption.getOptions()
  response.room_type = await RoomType.getTypes()

  res.json(response)
})

router.post('/update', async (req, res, next) => {
  let iObjectID = req.body.iObjectID || false
  const iUserID = req.body.iUserID || false
  const iObjectTypeID = req.body.iObjectTypeID || 1
  const sObjectTitle = req.body.sObjectTitle || false
  const iObjectArea = req.body.iObjectArea || null
  const iObjectRoomCount = req.body.iObjectRoomCount || null
  const iObjectBed = req.body.iObjectBed || 1
  const iObjectPlace = req.body.iObjectPlace || 1
  const iObjectPlaceDop = req.body.iObjectPlaceDop || 0
  const sObjectAddress = req.body.sObjectAddress || null
  let aObjectCoordinate = null
  if (
    req.body.aObjectCoordinate &&
    req.body.aObjectCoordinate.coordinates[0] &&
    req.body.aObjectCoordinate.coordinates[1]
  ) {
    aObjectCoordinate = req.body.aObjectCoordinate
  }
  if (aObjectCoordinate) {
    aObjectCoordinate = Sequelize.fn(
      'ST_GeomFromText',
      'POINT(' +
        aObjectCoordinate.coordinates[0] +
        ' ' +
        aObjectCoordinate.coordinates[1] +
        ')'
    )
  }
  const tObjectDesc = req.body.tObjectDesc || null
  const iObjectActive = req.body.iObjectActive || false
  const iObjectVerification = req.body.iObjectVerification || false

  const objectObjectOptionsArray = req.body.object_object_options_array || []
  const objectRoomOptionsArray = req.body.object_room_options_array || []

  const rooms = req.body.rooms || []

  const response = {}

  if (iObjectID) {
    await Object.update(
      {
        iUserID,
        iObjectTypeID,
        sObjectTitle,
        iObjectArea,
        iObjectRoomCount,
        iObjectBed,
        iObjectPlace,
        iObjectPlaceDop,
        sObjectAddress,
        aObjectCoordinate,
        tObjectDesc,
        iObjectActive,
        iObjectVerification
      },
      {
        where: {
          iObjectID
        }
      }
    )
  } else {
    const create = await Object.create({
      iUserID,
      iObjectTypeID,
      sObjectTitle,
      iObjectArea,
      iObjectRoomCount,
      iObjectBed,
      iObjectPlace,
      iObjectPlaceDop,
      sObjectAddress,
      aObjectCoordinate,
      tObjectDesc,
      iObjectActive,
      iObjectVerification
    })
    iObjectID = create.iObjectID
  }

  const objectObjectOptionAction = async () => {
    await ObjectObjectOption.destroy({
      where: {
        iObjectID
      }
    })
    for (const iObjectOptionID of objectObjectOptionsArray) {
      await ObjectObjectOption.create({
        iObjectID,
        iObjectOptionID
      })
    }
  }
  await objectObjectOptionAction()

  const objectRoomOptionAction = async () => {
    await ObjectRoomOption.destroy({
      where: {
        iObjectID
      }
    })
    for (const iRoomOptionID of objectRoomOptionsArray) {
      await ObjectRoomOption.create({
        iObjectID,
        iRoomOptionID
      })
    }
  }
  await objectRoomOptionAction()

  const roomRoomOptionAction = async (iRoomID, options) => {
    await RoomRoomOption.destroy({
      where: {
        iRoomID
      }
    })
    for (const iRoomOptionID of options) {
      await RoomRoomOption.create({
        iRoomID,
        iRoomOptionID
      })
    }
  }

  const roomsAction = async () => {
    for (const room of rooms) {
      let iRoomID = room.iRoomID || false
      const iRoomTypeID = room.iRoomTypeID || false
      const iRoomArea = room.iRoomArea || null
      const iRoomCount = room.iRoomCount || null
      const iRoomBed = room.iRoomBed || 1
      const iRoomPlace = room.iRoomPlace || 1
      const iRoomPlaceDop = room.iRoomPlaceDop || 0
      const tRoomDesc = room.tRoomDesc || null
      const iRoomActive = room.iRoomActive || false
      const roomRoomOptionsArray = room.room_room_options_array || []

      if (iRoomID) {
        await Room.update(
          {
            iRoomTypeID,
            iRoomArea,
            iRoomCount,
            iRoomBed,
            iRoomPlace,
            iRoomPlaceDop,
            tRoomDesc,
            iRoomActive
          },
          {
            where: {
              iRoomID
            }
          }
        )
      } else {
        const create = await Room.create({
          iObjectID,
          iRoomTypeID,
          iRoomArea,
          iRoomCount,
          iRoomBed,
          iRoomPlace,
          iRoomPlaceDop,
          tRoomDesc,
          iRoomActive
        })
        iRoomID = create.iRoomID
      }

      await roomRoomOptionAction(iRoomID, roomRoomOptionsArray)
    }
  }
  await roomsAction()

  response.object = await Object.getObject(iObjectID)

  res.json(response)
})

router.post('/uploadObjectImages', upload.any(), async (req, res, next) => {
  const response = {}
  const iObjectID = req.body.iObjectID

  await ObjectImage.upload(iObjectID, req.files)

  response.objectImages = await ObjectImage.findAll({
    where: {
      iObjectID
    }
  })

  res.json(response)
})

router.post('/removeObjectImage', async (req, res, next) => {
  const response = {}

  const image = req.body.image
  await ObjectImage.remove(image)

  response.objectImages = await ObjectImage.findAll({
    where: {
      iObjectID: image.iObjectID
    }
  })

  res.json(response)
})

router.post('/uploadRoomImages', upload.any(), async (req, res, next) => {
  const response = {}
  const iRoomID = req.body.iRoomID

  await RoomImage.upload(iRoomID, req.files)

  response.roomImages = await RoomImage.findAll({
    where: {
      iRoomID
    }
  })

  res.json(response)
})

router.post('/removeRoomImage', async (req, res, next) => {
  const response = {}

  const image = req.body.image
  await RoomImage.remove(image)

  response.roomImages = await RoomImage.findAll({
    where: {
      iRoomID: image.iRoomID
    }
  })

  res.json(response)
})

router.post('/search_address', async (req, res, next) => {
  const response = {}
  response.list = []

  const search = req.body.search || false

  if (search) {
    response.list = await geocoder.geocode('Россия, ' + search)
  }

  res.json(response)
})

router.post('/list', async (req, res, next) => {
  const response = {}
  const iUserID = req.body.iUserID
  response.objects = await Object.getList({ iUserID })
  res.json(response)
})

router.post('/item', async (req, res, next) => {
  const response = {}
  response.object = await Object.getObject(req.body.id)
  res.json(response)
})

module.exports = router
