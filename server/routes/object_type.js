const { Router } = require('express')
const router = Router()

const ObjectType = require('../../models').object_type

router.post('/get', async (req, res, next) => {
  const iObjectTypeID = req.body.id
  let response = null
  if (iObjectTypeID) {
    response = await ObjectType.findByPk(iObjectTypeID)
  }
  else {
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
  let iObjectTypeID = req.body.iObjectTypeID || false
  let sObjectTypeTitle = req.body.sObjectTypeTitle || false
  let iObjectTypeSort = req.body.iObjectTypeSort || 9999
  let iObjectTypeActive = req.body.iObjectTypeActive || false
  let iRoomPermission = req.body.iRoomPermission || false
  var response = {}

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
  }
  else {
    response = await ObjectType.create(
      {
        sObjectTypeTitle,
        iObjectTypeSort,
        iObjectTypeActive,
        iRoomPermission
      }
    )
  }

  res.json(response)
})

module.exports = router
