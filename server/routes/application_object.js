const { Router } = require('express')
const router = Router()

const ApplicationObject = require('../../models').application_object

router.post('/get', async (req, res, next) => {
  const iApplicationObjectID = req.body.iApplicationObjectID
  console.log('----------')
  await ApplicationObject.objectView({ iApplicationObjectID })
  console.log('----------')
  await ApplicationObject.userView({ iApplicationObjectID })
  const response = await ApplicationObject.get({ iApplicationObjectID })
  res.json(response)
})

router.post('/update', async (req, res, next) => {
  const response = {}
  const applicationObject = req.body.applicationObject
  // console.log(applicationObject)
  await ApplicationObject.updateApplicationObject(applicationObject)
  // await ApplicationObject.userView({ iApplicationObjectID })
  // const response = await ApplicationObject.get({ iApplicationObjectID })
  res.json(response)
})

module.exports = router
