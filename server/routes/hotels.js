const { Router } = require('express')
const router = Router()
const Hotel = require('../../models').hotel

// /api/hotels
router.get('/', async (req, res, next) => {
  const hotels = await Hotel.paginate({
    paginate: 4,
    page: req.query.page
  })
  res.json(hotels)
})

module.exports = router
