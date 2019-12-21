const { Router } = require('express')
const router = Router()
const env = require("dotenv").config()
const Sequelize = require('sequelize')

const NodeGeocoder = require('node-geocoder')
var options = {
  provider: 'yandex',
  httpAdapter: 'https',
  apiKey: process.env.YANDEX_MAP_KEY,
  formatter: null
}
const geocoder = NodeGeocoder(options)

const Hotel = require('../../models').hotel
const Hotel_type = require('../../models').hotel_type
const Hotel_guest = require('../../models').hotel_guest
const Hotel_option = require('../../models').hotel_option
const Room_option = require('../../models').room_option
const Hotel_hotel_option = require('../../models').hotel_hotel_option
const Hotel_room_option = require('../../models').hotel_room_option

router.post('/get', async (req, res, next) => {
  const iHotelID = req.body.id
  let response = null
  if (iHotelID) {
    response = await Hotel.findByPk(iHotelID, {
      include: [
        {
          model: Hotel_type
        }
      ]
    })
  }
  else {
    response = await Hotel.paginate({
      order: [
        ['iHotelID', 'DESC']
      ],
      include: [
        {
          model: Hotel_type
        }
      ]
    })
  }
  res.json(response)
})

router.post('/get_edit', async (req, res, next) => {
  const iHotelID = req.body.id
  const response = {}
  response.hotel = await Hotel.getHotel(iHotelID)
  response.hotel_type = await Hotel_type.getTypes()
  response.hotel_guest = await Hotel_guest.getGuests()
  response.hotel_option = await Hotel_option.getOptions()
  response.room_option = await Room_option.getOptions()

  res.json(response)
})

router.post('/update', async (req, res, next) => {
  var iHotelID = req.body.iHotelID || false
  let sHotelTitle = req.body.sHotelTitle || false
  var aHotelCoordinate = null
  if (req.body.aHotelCoordinate.coordinates[0] && req.body.aHotelCoordinate.coordinates[1]) {
    var aHotelCoordinate = req.body.aHotelCoordinate
  }
  
  if (aHotelCoordinate) {
    aHotelCoordinate = Sequelize.fn('ST_GeomFromText', 'POINT(' + aHotelCoordinate.coordinates[0] + ' ' + aHotelCoordinate.coordinates[1] + ')')
  }
  // var point = null
  // if (aHotelCoordinate) {
  //   console.log(aHotelCoordinate.coordinates)
  //   point = {}
  //   point.type = 'Point'
  //   point.coordinates = aHotelCoordinate.coordinates
  //   // User.create({username: 'username', geometry: point });
  // }
  let iHotelTypeID = req.body.iHotelTypeID || 1
  let iHotelFloor = req.body.iHotelFloor || 1  
  let iHotelGuestID = req.body.iHotelGuestID || 1
  let iHotelBedroom = req.body.iHotelBedroom || 1
  let iHotelBed = req.body.iHotelBed || 1
  let iHotelPlace = req.body.iHotelPlace || 1
  let iHotelPlaceDop = req.body.iHotelPlaceDop || 0
  let sHotelAddress = req.body.sHotelAddress || null
  let iHotelActive = req.body.iHotelActive || false
  let iHotelVerification = req.body.iHotelVerification || false

  let hotel_hotel_options_array = req.body.hotel_hotel_options_array || []
  let hotel_room_options_array = req.body.hotel_room_options_array || []

  var response = {}

  if (iHotelID) {
    await Hotel.update(
      {
        sHotelTitle,
        aHotelCoordinate,
        iHotelTypeID,
        iHotelFloor,
        iHotelGuestID,
        iHotelBedroom,
        iHotelBed,
        iHotelPlace,
        iHotelPlaceDop,
        sHotelAddress,
        iHotelActive,
        iHotelVerification
      },
      {
        where: {
          iHotelID
        }
      }
    )
  }
  else {
    var { iHotelID } = await Hotel.create(
      {
        sHotelTitle,
        aHotelCoordinate,
        iHotelTypeID,
        iHotelFloor,
        iHotelGuestID,
        iHotelBedroom,
        iHotelBed,
        iHotelPlace,
        iHotelPlaceDop,
        sHotelAddress,
        iHotelActive,
        iHotelVerification
      }
    )
  }

  const hotel_hotel_option_action = async () => {
    await Hotel_hotel_option.destroy({
      where: {
        iHotelID
      }
    })
    for (const iHotelOptionID of hotel_hotel_options_array) {
      await Hotel_hotel_option.create({
        iHotelID,
        iHotelOptionID
      })
    }
  }
  await hotel_hotel_option_action()

  const hotel_room_option_action = async () => {
    await Hotel_room_option.destroy({
      where: {
        iHotelID
      }
    })
    for (const iRoomOptionID of hotel_room_options_array) {
      await Hotel_room_option.create({
        iHotelID,
        iRoomOptionID
      })
    }
  }
  await hotel_room_option_action()

  response.hotel = await Hotel.getHotel(iHotelID)

  res.json(response)
})

router.post('/upload', async (req, res, next) => {
  const response = {}

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
