const { Router } = require('express')
const router = Router()

const HotelOption = require('../../models').hotel_option

router.post('/get', async (req, res, next) => {
  const iHotelOptionID = req.body.id
  let response = null
  if (iHotelOptionID) {
    response = await HotelOption.findByPk(iHotelOptionID)
  }
  else {
    response = await HotelOption.findAll({
      order: [
        ['iHotelOptionActive', 'DESC'],
        ['iHotelOptionSort', 'ASC'],
        ['iHotelOptionID', 'ASC']
      ]
    })
  }
  res.json(response)
})

router.post('/update', async (req, res, next) => {
  let iHotelOptionID = req.body.iHotelOptionID || false
  let sHotelOptionTitle = req.body.sHotelOptionTitle || false
  let iHotelOptionSort = req.body.iHotelOptionSort || 9999
  let iHotelOptionActive = req.body.iHotelOptionActive || false
  var response = {}

  if (iHotelOptionID) {
    await HotelOption.update(
      {
        sHotelOptionTitle,
        iHotelOptionSort,
        iHotelOptionActive
      },
      {
        where: {
          iHotelOptionID
        }
      }
    )
    response = await HotelOption.findByPk(iHotelOptionID)
  }
  else {
    response = await HotelOption.create(
      {
        sHotelOptionTitle,
        iHotelOptionSort,
        iHotelOptionActive
      }
    )
  }

  res.json(response)
})

module.exports = router
