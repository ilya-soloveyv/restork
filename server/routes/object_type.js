const { Router } = require('express')
const router = Router()

const ObjectType = require('../../models').object_type

router.post('/get', async (req, res, next) => {
  const iObjectTypeID = req.body.id
  let response = null
  if (iObjectTypeID) {
    response = await ObjectType.findByPk(iObjectTypeID)
  } else {
    response = await ObjectType.findAll({
      order: [
        ['iObjectTypeActive', 'DESC'],
        ['iObjectTypeSort', 'ASC'],
        ['iObjectTypeID', 'ASC']
      ]
    })
  }
  res.json(response)
})

router.post('/update', async (req, res, next) => {
  const iObjectTypeID = req.body.iObjectTypeID || false
  const sObjectTypeTitle = req.body.sObjectTypeTitle || false
  const iObjectTypeSort = req.body.iObjectTypeSort || 9999
  const iObjectTypeActive = req.body.iObjectTypeActive || false
  const iRoomPermission = req.body.iRoomPermission || false
  let response = {}

  if (iObjectTypeID) {
    await ObjectType.update(
      {
        sObjectTypeTitle,
        iObjectTypeSort,
        iObjectTypeActive,
        iRoomPermission
      },
      {
        where: {
          iObjectTypeID
        }
      }
    )
    response = await ObjectType.findByPk(iObjectTypeID)
  } else {
    response = await ObjectType.create({
      sObjectTypeTitle,
      iObjectTypeSort,
      iObjectTypeActive,
      iRoomPermission
    })
  }

  res.json(response)
})

module.exports = router
