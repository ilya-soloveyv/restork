const { Router } = require('express')
const router = Router()
const env = require("dotenv").config()
const Sequelize = require('sequelize')

const NodeGeocoder = require('node-geocoder')
var NodeGeocoderOptions = {
  provider: 'yandex',
  httpAdapter: 'https',
  apiKey: process.env.YANDEX_MAP_KEY,
  formatter: null
}
const geocoder = NodeGeocoder(NodeGeocoderOptions)

const multer  = require('multer')
const upload = multer({ dest: 'static/upload/' })

const Object = require('../../models').object
const Object_type = require('../../models').object_type
const Object_option = require('../../models').object_option
const Room_option = require('../../models').room_option
const Object_object_option = require('../../models').object_object_option
const Object_room_option = require('../../models').object_room_option

router.post('/get', async (req, res, next) => {
  const iObjectID = req.body.id
  let response = null
  if (iObjectID) {
    response = await Object.findByPk(iObjectID, {
      include: [
        {
          model: Object_type
        }
      ]
    })
  }
  else {
    response = await Object.paginate({
      order: [
        ['iObjectID', 'DESC']
      ],
      include: [
        {
          model: Object_type
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
  response.object_type = await Object_type.getTypes()
  response.object_option = await Object_option.getOptions()
  response.room_option = await Room_option.getOptions()

  res.json(response)
})

router.post('/update', async (req, res, next) => {
  var iObjectID = req.body.iObjectID || false
  let iUserID = req.body.iUserID || false
  let iObjectTypeID = req.body.iObjectTypeID || 1
  let sObjectTitle = req.body.sObjectTitle || false
  let iObjectArea = req.body.iObjectArea || null
  let iObjectRoomCount = req.body.iObjectRoomCount || null
  let iObjectBed = req.body.iObjectBed || 1
  let iObjectPlace = req.body.iObjectPlace || 1
  let iObjectPlaceDop = req.body.iObjectPlaceDop || 0
  let sObjectAddress = req.body.sObjectAddress || null
  var aObjectCoordinate = null
  if (req.body.aObjectCoordinate.coordinates[0] && req.body.aObjectCoordinate.coordinates[1]) {
    var aObjectCoordinate = req.body.aObjectCoordinate
  }
  if (aObjectCoordinate) {
    aObjectCoordinate = Sequelize.fn('ST_GeomFromText', 'POINT(' + aObjectCoordinate.coordinates[0] + ' ' + aObjectCoordinate.coordinates[1] + ')')
  }
  let tObjectDesc = req.body.tObjectDesc || null
  let iObjectActive = req.body.iObjectActive || false
  let iObjectVerification = req.body.iObjectVerification || false

  let object_object_options_array = req.body.object_object_options_array || []
  let object_room_options_array = req.body.object_room_options_array || []

  var response = {}

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
  }
  else {
    var { iObjectID } = await Object.create(
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
      }
    )
  }

  const object_object_option_action = async () => {
    await Object_object_option.destroy({
      where: {
        iObjectID
      }
    })
    for (const iObjectOptionID of object_object_options_array) {
      await Object_object_option.create({
        iObjectID,
        iObjectOptionID
      })
    }
  }
  await object_object_option_action()

  const object_room_option_action = async () => {
    await Object_room_option.destroy({
      where: {
        iObjectID
      }
    })
    for (const iRoomOptionID of object_room_options_array) {
      await Object_room_option.create({
        iObjectID,
        iRoomOptionID
      })
    }
  }
  await object_room_option_action()

  response.object = await Object.getObject(iObjectID)

  res.json(response)
})

router.post('/upload', upload.single('file'), (req, res, next) => {
  const response = {}

  response.file = req.file
  // var filename = randomString() + '.' + req.headers.extension

  // var storage = multer.diskStorage({
  //     destination: function (req, file, cb) {
  //         cb(null, 'static/upload/')
  //     },
  //     filename: function (req, file, cb) {
  //         cb(null, filename)
  //     }
  // })

  // var upload = multer({ storage: storage }).single('file')

  // upload(req, res, function (err, responce) {
  //     res.json(req.file)
  // })



  // console.log(req.file)
  // upload(req, res, function (err, responce) {
  //   res.json(req.file)
  // })
  // req.files is array of `photos` files
  // req.body will contain the text fields, if there were any
  res.json(response)
})

router.post('/search_address', async (req, res, next) => {
  const response = {}
  response.list = []

  const search = req.body.search || false

  if (search) {
    response.list = await geocoder.geocode(search)
  }

  res.json(response)
})

module.exports = router
