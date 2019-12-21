const { Router } = require('express')
const router = Router()

const HotelGuest = require('../../models').hotel_guest

router.post('/get', async (req, res, next) => {
  const iHotelGuestID = req.body.id
  let response = null
  if (iHotelGuestID) {
    response = await HotelGuest.findByPk(iHotelGuestID)
  }
  else {
    response = await HotelGuest.findAll({
      order: [
        ['iHotelGuestActive', 'DESC'],
        ['iHotelGuestSort', 'ASC'],
        ['iHotelGuestID', 'ASC']
      ]
    })
  }
  res.json(response)
})

router.post('/update', async (req, res, next) => {
  let iHotelGuestID = req.body.iHotelGuestID || false
  let sHotelGuestTitle = req.body.sHotelGuestTitle || false
  let iHotelGuestSort = req.body.iHotelGuestSort || 9999
  let iHotelGuestActive = req.body.iHotelGuestActive || false
  var response = {}

  if (iHotelGuestID) {
    await HotelGuest.update(
      {
        sHotelGuestTitle,
        iHotelGuestSort,
        iHotelGuestActive
      },
      {
        where: {
          iHotelGuestID
        }
      }
    )
    response = await HotelGuest.findByPk(iHotelGuestID)
  }
  else {
    response = await HotelGuest.create(
      {
        sHotelGuestTitle,
        iHotelGuestSort,
        iHotelGuestActive
      }
    )
  }

  res.json(response)
})

module.exports = router
