const { Router } = require('express')
const router = Router()
require('dotenv').config()
const Object = require('../../models').object

router.post('/check_object', async (req, res, next) => {
  const response = {}

  const iUserID = req.user.iUserID
  const objects = await Object.getList({ iUserID })
  const isTutorialObject = objects.find(
    (object) => !!object.sTutorialStepActive
  )
  response.object = isTutorialObject
    ? await Object.getObject(isTutorialObject.iObjectID, iUserID)
    : null

  res.json(response)
})

router.post('/get_object', async (req, res, next) => {
  const response = {}
  const iUserID = req.user.iUserID

  response.object = await Object.getObject(req.body.iObjectID, iUserID)

  res.json(response)
})

router.post('/change_object_step', async (req, res, next) => {
  const iObjectID = req.body.iObjectID
  const sTutorialStepActive = req.body.sTutorialStepActive

  const response = await Object.update(
    {
      sTutorialStepActive
    },
    {
      where: {
        iObjectID
      }
    }
  )
  res.json(response)
})

router.post('/update_object_type', async (req, res, next) => {
  const iUserID = req.user.iUserID
  let iObjectID = req.body.iObjectID
  const iObjectTypeID = req.body.iObjectTypeID
  const iRoomTypeID = req.body.iRoomTypeID

  const response = {}

  if (iObjectID) {
    response.update = await Object.update(
      {
        iObjectTypeID,
        iRoomTypeID,
        sTutorialStepActive: 'object_type'
      },
      {
        where: {
          iObjectID,
          iUserID
        }
      }
    )
  } else {
    response.create = await Object.create({
      iUserID,
      iObjectTypeID,
      iRoomTypeID,
      sTutorialStepActive: 'object_type'
    })
    iObjectID = response.create.iObjectID
  }

  response.object = await Object.getObject(iObjectID)

  res.json(response)
})

router.post('/update_basic', async (req, res, next) => {
  const iUserID = req.user.iUserID
  const iObjectID = req.body.iObjectID
  const iObjectArea = req.body.iObjectArea
  const iObjectAreaLocation = req.body.iObjectAreaLocation
  const iObjectFloorAll = req.body.iObjectFloorAll
  const iObjectFloor = req.body.iObjectFloor
  const iObjectRoomCount = req.body.iObjectRoomCount
  const iObjectRoomHotelCount = req.body.iObjectRoomHotelCount
  const iObjectPlace = req.body.iObjectPlace

  const response = {}

  response.update = await Object.update(
    {
      iObjectArea,
      iObjectAreaLocation,
      iObjectFloorAll,
      iObjectFloor,
      iObjectRoomCount,
      iObjectRoomHotelCount,
      iObjectPlace,
      sTutorialStepActive: 'basic'
    },
    {
      where: {
        iObjectID,
        iUserID
      }
    }
  )

  response.object = await Object.getObject(iObjectID)

  res.json(response)
})

router.post('/update_object_options', async (req, res, next) => {
  const ObjectObjectOption = require('../../models').object_object_option
  const iObjectID = req.body.iObjectID
  const objectOptions = req.body.objectOptions
  const response = {}

  await ObjectObjectOption.destroy({
    where: {
      iObjectID
    }
  })

  const options = []
  objectOptions.forEach((option) => {
    options.push({
      iObjectID,
      iObjectOptionID: option
    })
  })

  if (options) {
    await ObjectObjectOption.bulkCreate(options)
  }

  response.object = await Object.getObject(iObjectID)

  res.json(response)
})

router.post('/update_room_options', async (req, res, next) => {
  const ObjectRoomOption = require('../../models').object_room_option
  const iObjectID = req.body.iObjectID
  const roomOptions = req.body.roomOptions
  const response = {}

  await ObjectRoomOption.destroy({
    where: {
      iObjectID
    }
  })

  const options = []
  roomOptions.forEach((option) => {
    options.push({
      iObjectID,
      iRoomOptionID: option
    })
  })

  if (options) {
    await ObjectRoomOption.bulkCreate(options)
  }

  response.object = await Object.getObject(iObjectID)

  res.json(response)
})

router.post('/update_feature', async (req, res, next) => {
  const ObjectFeature = require('../../models').object_feature
  const iObjectID = req.body.iObjectID
  const featuresList = req.body.object_feature
  const response = {}

  await ObjectFeature.destroy({
    where: {
      iObjectID
    }
  })

  const features = []
  featuresList.forEach((feature) => {
    features.push({
      iObjectID,
      iFeatureID: feature
    })
  })

  if (features) {
    await ObjectFeature.bulkCreate(features)
  }

  response.object = await Object.getObject(iObjectID)

  res.json(response)
})

router.post('/update_location', async (req, res, next) => {
  const Sequelize = require('sequelize')

  const iUserID = req.user.iUserID
  const iObjectID = req.body.iObjectID
  const sObjectAddress = req.body.sObjectAddress
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

  const response = {}

  response.update = await Object.update(
    {
      sObjectAddress,
      aObjectCoordinate,
      sTutorialStepActive: 'location'
    },
    {
      where: {
        iObjectID,
        iUserID
      }
    }
  )

  response.object = await Object.getObject(iObjectID)

  res.json(response)
})

router.post('/update_place', async (req, res, next) => {
  const ObjectPlace = require('../../models').object_place

  const iObjectID = req.body.iObjectID
  const objectPlaces = req.body.places

  const response = {}

  await ObjectPlace.destroy({
    where: {
      iObjectID
    }
  })

  const places = []
  objectPlaces.forEach((place) => {
    places.push({
      iObjectID: place.iObjectID,
      iPlaceID: place.iPlaceID,
      sPlaceTitle: place.sPlaceTitle,
      iPlaceDistance: place.iPlaceDistance
    })
  })

  if (places) {
    await ObjectPlace.bulkCreate(places)
  }

  response.object = await Object.getObject(iObjectID)

  res.json(response)
})

router.post('/update_hotel', async (req, res, next) => {
  const iUserID = req.user.iUserID
  const iObjectID = req.body.iObjectID
  const sObjectTitle = req.body.sObjectTitle
  const iObjectRoomHotelCount = req.body.iObjectRoomHotelCount
  const iObjectFloorAll = req.body.iObjectFloorAll

  const response = {}

  response.update = await Object.update(
    {
      sObjectTitle,
      iObjectRoomHotelCount,
      iObjectFloorAll,
      sTutorialStepActive: 'hotel'
    },
    {
      where: {
        iObjectID,
        iUserID
      }
    }
  )

  response.object = await Object.getObject(iObjectID)

  res.json(response)
})

router.post('/update_room', async (req, res, next) => {
  const iUserID = req.user.iUserID
  const iObjectID = req.body.iObjectID
  const iObjectArea = req.body.iObjectArea
  const iObjectRoomCount = req.body.iObjectRoomCount
  const iObjectPlace = req.body.iObjectPlace

  const response = {}

  response.update = await Object.update(
    {
      iObjectArea,
      iObjectRoomCount,
      iObjectPlace,
      sTutorialStepActive: 'room'
    },
    {
      where: {
        iObjectID,
        iUserID
      }
    }
  )

  response.object = await Object.getObject(iObjectID)

  res.json(response)
})

router.post('/update_description', async (req, res, next) => {
  const iUserID = req.user.iUserID
  const iObjectID = req.body.iObjectID
  const sObjectTitle = req.body.sObjectTitle
  const tObjectDesc = req.body.tObjectDesc

  const response = {}

  response.update = await Object.update(
    {
      sObjectTitle,
      tObjectDesc,
      sTutorialStepActive: 'description'
    },
    {
      where: {
        iObjectID,
        iUserID
      }
    }
  )

  response.object = await Object.getObject(iObjectID)

  res.json(response)
})

router.post('/object_done', async (req, res, next) => {
  const iUserID = req.user.iUserID
  const iObjectID = req.body.iObjectID

  await Object.update(
    {
      sTutorialStepActive: null
    },
    {
      where: {
        iObjectID,
        iUserID
      }
    }
  )

  res.json({})
})

router.post('/set_object_image_index', async (req, res, next) => {
  const ObjectImage = require('../../models').object_image

  const iObjectID = req.body.iObjectID
  const iObjectImageID = req.body.iObjectImageID

  await ObjectImage.setImageIndex(iObjectID, iObjectImageID)

  const response = await ObjectImage.findAll({
    where: {
      iObjectID
    },
    order: [
      ['iObjectImageIndex', 'DESC'],
      ['iObjectImageSort', 'ASC'],
      ['iObjectImageID', 'ASC']
    ]
  })

  res.json(response)
})

module.exports = router
