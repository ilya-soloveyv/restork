const { Router } = require('express')
const router = Router()

// const md5 = require('md5')

router.get('/callback', (req, res, next) => {
  const response = {}
  console.log(req.body)
  console.log(req.query)
  console.log(req.params)
  res.json(response)
})

router.get('/register', async (req, res, next) => {
  const response = {}

  const axios = require('axios')

  response.b2p = await axios.get(process.env.B2P_URL + 'Register')

  res.json(response)
})

module.exports = router
