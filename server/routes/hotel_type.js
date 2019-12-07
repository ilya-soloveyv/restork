const { Router } = require('express')
const router = Router()

const Hotel_type = require('../../models').hotel_type

router.get('/', async (req, res, next) => {
  const types = await Hotel_type.findAll()
  res.json(types)
})

module.exports = router
