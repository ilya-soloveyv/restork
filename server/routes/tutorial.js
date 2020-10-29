const { Router } = require('express')
const router = Router()
require('dotenv').config()

router.post('/object', async (req, res, next) => {
  const response = {}
  const Object = require('../../models').object
  const iObjectID = req.body.iObjectID
  const iObjectTypeID = req.body.iObjectTypeID
  const iUserID = req.body.iUserID
  const sObjectTitle = req.body.sObjectTitle

  if (!iObjectID) {
    const { iObjectID } = await Object.add({
      iUserID,
      iObjectTypeID,
      sObjectTitle
    })
    if (iObjectID) {
      response.object = await Object.getObject(iObjectID)
    } else {
      response.object = false
    }
  } else {
    response.object = await Object.getObject(iObjectID)
  }
  res.json(response)
})

module.exports = router
