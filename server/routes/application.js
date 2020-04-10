const { Router } = require('express')
const router = Router()

const Application = require('../../models').application

router.post('/list', async (req, res, next) => {
  const response = {}

  response.applications = await Application.findAll({
    where: {
      iUserID: req.body.iUserID
    }
  })

  res.json(response)
})

router.post('/get', async (req, res, next) => {
  const response = {}

  response.application = await Application.findByPk(req.body.iApplicationID)

  res.json(response)
})

router.post('/add', async (req, res, next) => {
  const response = {}
  response.application = await Application.add(req.body)
  res.json(response)
})

router.post('/searchObjects', async (req, res, next) => {
  const response = {}
  const Object = require('../../models').object
  const coo0 = req.body.aApplicationCoordinate[0]
  const coo1 = req.body.aApplicationCoordinate[1]
  const radius = req.body.radius
  response.objects = await Object.get(coo0, coo1, radius)
  res.json(response)
})

module.exports = router
