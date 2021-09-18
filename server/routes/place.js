const { Router } = require('express')
const router = Router()

const Place = require('../../models').place

router.post('/list', async (req, res, next) => {
  const response = await Place.findAll()
  res.json(response)
})

module.exports = router
