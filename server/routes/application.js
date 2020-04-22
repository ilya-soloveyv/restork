const { Router } = require('express')
const router = Router()
const CronJob = require('cron').CronJob

const Application = require('../../models').application

const job = new CronJob(
  '*/5 * * * * *',
  async function() {
    await Application.searchObject()
  },
  null,
  true,
  'Europe/Moscow'
)
job.start()

router.post('/list', async (req, res, next) => {
  const response = {}

  response.applications = await Application.list({
    iUserID: req.body.iUserID || false
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

// router.post('/searchObjects', async (req, res, next) => {
//   const response = {}
//   const Object = require('../../models').object
//   const coo0 = req.body.aApplicationCoordinate[0]
//   const coo1 = req.body.aApplicationCoordinate[1]
//   const radius = req.body.radius
//   response.objects = await Object.get(coo0, coo1, radius)
//   res.json(response)
// })

router.post('/searchObjects', async (req, res, next) => {
  const response = await Application.searchObject()
  res.json(response)
})

module.exports = router
