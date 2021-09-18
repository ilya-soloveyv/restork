const { Router } = require('express')
const router = Router()

const Feature = require('../../models').feature

router.post('/list', async (req, res, next) => {
  const response = await Feature.findAll()
  res.json(response)
})

module.exports = router
