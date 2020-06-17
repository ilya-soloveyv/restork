const { Router } = require('express')
const router = Router()

const Message = require('../../models').message

router.post('/get', async (req, res, next) => {
  const iApplicationObjectID = req.body.iApplicationObjectID
  res.json(await Message.get({ iApplicationObjectID }))
})

router.post('/add', async (req, res, next) => {
  const iApplicationObjectID = req.body.iApplicationObjectID
  const iUserID = req.body.iUserID
  const tMessageText = req.body.tMessageText
  const message = await Message.add({
    iApplicationObjectID,
    iUserID,
    tMessageText
  })
  res.json(message)
})

module.exports = router
