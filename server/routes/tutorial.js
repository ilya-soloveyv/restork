const { Router } = require('express')
const router = Router()
require('dotenv').config()
const Object = require('../../models').object

router.post('/check_object', async (req, res, next) => {
  const response = {}

  const iUserID = req.user.iUserID
  const objects = await Object.getList({ iUserID })
  const isTutorialObject = objects.find((object) => !!object.sTutorialStepActive)
  response.object = isTutorialObject ? await Object.getObject(isTutorialObject.iObjectID) : null

  res.json(response)
})

router.post('/get_object', async (req, res, next) => {
  const response = {}

  response.object = await Object.getObject(req.body.iObjectID)

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

module.exports = router
