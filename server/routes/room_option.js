const { Router } = require('express')
const router = Router()

const RoomOption = require('../../models').room_option

router.post('/get', async (req, res, next) => {
  const iRoomOptionID = req.body.id
  const iRoomOptionActive = req.body.iRoomOptionActive
  let response = null
  if (iRoomOptionID) {
    response = await RoomOption.findByPk(iRoomOptionID)
  } else {
    const where = {}
    if (iRoomOptionActive !== undefined) {
      where.iRoomOptionActive = iRoomOptionActive
    }
    response = await RoomOption.findAll({
      where,
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
  const iRoomOptionID = req.body.iRoomOptionID || false
  const sRoomOptionTitle = req.body.sRoomOptionTitle || false
  const iRoomOptionSort = req.body.iRoomOptionSort || 9999
  const iRoomOptionActive = req.body.iRoomOptionActive || false
  let response = {}

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
  } else {
    response = await RoomOption.create({
      sRoomOptionTitle,
      iRoomOptionSort,
      iRoomOptionActive
    })
  }

  res.json(response)
})

module.exports = router
