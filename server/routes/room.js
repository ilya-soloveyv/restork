const { Router } = require('express')
const router = Router()

const Room = require('../../models').room

router.post('/item', async (req, res, next) => {
  res.json(await Room.getRoom(req.body.iRoomID))
})

router.post('/update', async (req, res, next) => {
  res.json(await Room.up(req.body.room))
})

module.exports = router
