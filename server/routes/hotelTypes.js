const { Router } = require('express')
const router = Router()
const hotelType = require('../../models').hotelType

// /api/hoteltypes
router.get('/', async (req, res, next) => {
  const hotelTypes = await hotelType.findAll()
  
  //console.log("ObjTypes:", objtypes)
  res.json(hotelTypes)
  //res.json({message: 'hello'})
})

module.exports = router