const { Router } = require('express')
const router = Router()
// const CronJob = require('cron').CronJob

const Application = require('../../models').application

// const job = new CronJob(
//   '*/5 * * * * *',
//   async function() {
//     await Application.searchObject()
//   },
//   null,
//   true,
//   'Europe/Moscow'
// )
// job.start()

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
  const response = await Application.add(req.body)
  await Application.searchObjectInApplication({
    iApplicationID: response.application.iApplicationID
  })
  res.json(response)
})

router.post('/searchObjects', async (req, res, next) => {
  const response = await Application.searchObject()
  res.json(response)
})

// router.post('/searchObjectInApplication', async (req, res, next) => {
//   const response = await Application.searchObjectInApplication({
//     iApplicationID: req.body.iApplicationID
//   })
//   res.json(response)
// })

module.exports = router
