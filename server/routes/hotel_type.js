const { Router } = require('express')
const router = Router()

const HotelType = require('../../models').hotel_type

router.get('/', async (req, res, next) => {
  const types = await HotelType.paginate({
    paginate: 4,
    page: req.query.page
  })
  res.json(types)
})

router.get('/type', async (req, res, next) => {
  const type = await HotelType.findByPk(req.query.id)
  res.json(type)
})

router.put('/type', async (req, res, next) => {
  const type = await HotelType.update(
    {
      sHotelTypeName: req.body.sHotelTypeName
    },
    {
      where: {
        iHotelTypeID: req.body.iHotelTypeID
      }
    }
  )
  res.json(type)
})

router.delete('/type', async (req, res, next) => {
  const type = await HotelType.destroy({
    where: { iHotelTypeID: req.body.iHotelTypeID }
  })
  res.json(type)
})

module.exports = router
