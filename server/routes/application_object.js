const { Router } = require('express')
const router = Router()

const ApplicationObject = require('../../models').application_object

router.post('/get', async (req, res, next) => {
  const iApplicationObjectID = req.body.iApplicationObjectID
  await ApplicationObject.objectView({ iApplicationObjectID })
  await ApplicationObject.userView({ iApplicationObjectID })
  const response = await ApplicationObject.get({ iApplicationObjectID })
  res.json(response)
})

router.post('/update', async (req, res, next) => {
  const response = {}
  const applicationObject = req.body.applicationObject
  await ApplicationObject.updateApplicationObject(applicationObject)
  res.json(response)
})

module.exports = router
