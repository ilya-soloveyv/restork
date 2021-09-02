const { Router } = require('express')
const router = Router()

const Place = require('../../models').place

router.post('/list', async (req, res, next) => {
  const response = await Place.findAll();
  // const iObjectOptionID = req.body.id
  // const iObjectOptionActive = req.body.iObjectOptionActive
  // let response = null
  // if (iObjectOptionID) {
  //   response = await ObjectOption.findByPk(iObjectOptionID)
  // } else {
  //   const where = {}
  //   if (iObjectOptionActive !== undefined) {
  //     where.iObjectOptionActive = iObjectOptionActive
  //   }
  //   response = await ObjectOption.findAll({
  //     where,
  //     order: [
  //       ['iObjectOptionActive', 'DESC'],
  //       ['iObjectOptionSort', 'ASC'],
  //       ['iObjectOptionID', 'ASC']
  //     ]
  //   })
  // }
  res.json(response)
})

module.exports = router
