const { Router } = require('express')
const router = Router()

const RoomType = require('../../models').room_type

router.post('/get', async (req, res, next) => {
  const iRoomTypeID = req.body.id
  let response = null
  if (iRoomTypeID) {
    response = await RoomType.findByPk(iRoomTypeID)
  }
  else {
    response = await RoomType.findAll({
      order: [
        ['iRoomTypeActive', 'DESC'],
        ['iRoomTypeSort', 'ASC'],
        ['iRoomTypeID', 'ASC']
      ]
    })
  }
  res.json(response)
})

router.post('/update', async (req, res, next) => {
  let iRoomTypeID = req.body.iRoomTypeID || false
  let sRoomTypeTitle = req.body.sRoomTypeTitle || false
  let iRoomTypeSort = req.body.iRoomTypeSort || 9999
  let iRoomTypeActive = req.body.iRoomTypeActive || false
  var response = {}

  if (iRoomTypeID) {
    await RoomType.update(
      {
        sRoomTypeTitle,
        iRoomTypeSort,
        iRoomTypeActive
      },
      {
        where: {
          iRoomTypeID
        }
      }
    )
    response = await RoomType.findByPk(iRoomTypeID)
  }
  else {
    response = await RoomType.create(
      {
        sRoomTypeTitle,
        iRoomTypeSort,
        iRoomTypeActive
      }
    )
  }

  res.json(response)
})

module.exports = router
