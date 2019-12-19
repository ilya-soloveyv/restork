const { Router } = require('express')
const router = Router()

const HotelType = require('../../models').hotel_type

router.post('/get', async (req, res, next) => {
  const iHotelTypeID = req.body.id
  let response = null
  if (iHotelTypeID) {
    response = await HotelType.findByPk(iHotelTypeID)
  }
  else {
    response = await HotelType.findAll({
      order: [
        ['iHotelTypeActive', 'DESC'],
        ['iHotelTypeSort', 'ASC'],
        ['iHotelTypeID', 'ASC']
      ]
    })
  }
  res.json(response)
})

router.post('/update', async (req, res, next) => {
  let iHotelTypeID = req.body.iHotelTypeID || false
  let sHotelTypeTitle = req.body.sHotelTypeTitle || false
  let iHotelTypeSort = req.body.iHotelTypeSort || 9999
  let iHotelTypeActive = req.body.iHotelTypeActive || false
  var response = {}

  if (iHotelTypeID) {
    await HotelType.update(
      {
        sHotelTypeTitle,
        iHotelTypeSort,
        iHotelTypeActive
      },
      {
        where: {
          iHotelTypeID
        }
      }
    )
    response = await HotelType.findByPk(iHotelTypeID)
  }
  else {
    response = await HotelType.create(
      {
        sHotelTypeTitle,
        iHotelTypeSort,
        iHotelTypeActive
      }
    )
  }

  res.json(response)
})


// router.get('/', async (req, res, next) => {
//   const types = await HotelType.paginate({
//     paginate: 4,
//     page: req.query.page
//   })
//   res.json(types)
// })

// router.get('/type', async (req, res, next) => {
//   const type = await HotelType.findByPk(req.query.id)
//   res.json(type)
// })

// router.put('/type', async (req, res, next) => {
//   const type = await HotelType.update(
//     {
//       sHotelTypeName: req.body.sHotelTypeName
//     },
//     {
//       where: {
//         iHotelTypeID: req.body.iHotelTypeID
//       }
//     }
//   )
//   res.json(type)
// })

// router.delete('/type', async (req, res, next) => {
//   const type = await HotelType.destroy({
//     where: { iHotelTypeID: req.body.iHotelTypeID }
//   })
//   res.json(type)
// })

module.exports = router
