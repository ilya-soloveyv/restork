const { Router } = require('express')
const router = Router()

const ApplicationObject = require('../../models').application_object

router.post('/get', async (req, res, next) => {
  const iApplicationObjectID = req.body.iApplicationObjectID
  await ApplicationObject.objectView({
    iApplicationObjectID,
    iUserID: req.user.iUserID
  })
  await ApplicationObject.userView({
    iApplicationObjectID,
    iUserID: req.user.iUserID
  })
  const response = await ApplicationObject.get({ iApplicationObjectID })
  res.json(response)
})

router.post('/update', async (req, res, next) => {
  const response = {}
  await ApplicationObject.updateApplicationObject(req.body.applicationObject)
  res.json(response)
})

module.exports = router
