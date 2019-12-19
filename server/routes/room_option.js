const { Router } = require('express')
const router = Router()

const RoomOption = require('../../models').room_option

router.post('/get', async (req, res, next) => {
  const iRoomOptionID = req.body.id
  let response = null
  if (iRoomOptionID) {
    response = await RoomOption.findByPk(iRoomOptionID)
  }
  else {
    response = await RoomOption.findAll({
      order: [
        ['iRoomOptionActive', 'DESC'],
        ['iRoomOptionSort', 'ASC'],
        ['iRoomOptionID', 'ASC']
      ]
    })
  }
  res.json(response)
})

router.post('/update', async (req, res, next) => {
  let iRoomOptionID = req.body.iRoomOptionID || false
  let sRoomOptionTitle = req.body.sRoomOptionTitle || false
  let iRoomOptionSort = req.body.iRoomOptionSort || 9999
  let iRoomOptionActive = req.body.iRoomOptionActive || false
  var response = {}

  if (iRoomOptionID) {
    await RoomOption.update(
      {
        sRoomOptionTitle,
        iRoomOptionSort,
        iRoomOptionActive
      },
      {
        where: {
          iRoomOptionID
        }
      }
    )
    response = await RoomOption.findByPk(iRoomOptionID)
  }
  else {
    response = await RoomOption.create(
      {
        sRoomOptionTitle,
        iRoomOptionSort,
        iRoomOptionActive
      }
    )
  }

  res.json(response)
})

module.exports = router
