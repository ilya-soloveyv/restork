const { Router } = require('express')
const router = Router()

const md5 = require('md5')
const Base64 = require('js-base64').Base64
const request = require('request')

const B2P = require('../../models').b2p_order
const User = require('../../models').user

router.post('/callback', async (req, res, next) => {
  const response = {}

  const iOrderIDB2P = req.body.operation.order_id
  const B2POrderState = req.body.operation.order_state
  const B2PPan = req.body.operation.pan

  const order = await B2P.findOne({
    where: {
      iOrderIDB2P
    }
  })

  await B2P.update(
    {
      B2POrderState
    },
    {
      where: {
        iOrderIDB2P
      }
    }
  )

  await User.update(
    {
      B2PPan
    },
    {
      where: {
        iUserID: order.iUserID
      }
    }
  )

  res.json(response)
})

router.get('/getLinkForCardEnroll', (req, res) => {
  const response = {}
  const id = req.query.id
  response.id = id
  const signatureString =
    process.env.B2P_SECTOR_ID.toString() +
    id.toString() +
    process.env.B2P_SECTOR_PASS.toString()
  const signatureMD5 = md5(signatureString)
  const signatureBase64 = Base64.encode(signatureMD5)

  response.signatureString = signatureString
  response.signatureMD5 = signatureMD5
  response.signatureBase64 = signatureBase64

  response.url =
    'https://test.best2pay.net/webapi/CardEnroll?sector=' +
    process.env.B2P_SECTOR_ID +
    '&id=' +
    id +
    '&signature=' +
    signatureBase64
  res.json(response)
})

router.get('/register', (req, res, next) => {
  const response = {}

  const B2P_SECTOR_ID = Number(process.env.B2P_SECTOR_ID)
  const B2P_SECTOR_PASS = process.env.B2P_SECTOR_PASS
  const amountMin = 1
  const amountMax = 9
  const amount =
    (amountMin + Math.floor((amountMax - amountMin) * Math.random())) * 100
  const currency = 643

  response.amount = amount
  response.currency = currency
  response.B2P_SECTOR_ID = B2P_SECTOR_ID
  response.B2P_SECTOR_PASS = B2P_SECTOR_PASS
  response.signatureString =
    B2P_SECTOR_ID.toString() +
    amount.toString() +
    currency.toString() +
    B2P_SECTOR_PASS.toString()
  const signatureMD5 = md5(response.signatureString)
  response.signatureMD5 = signatureMD5
  response.signature = Base64.encode(signatureMD5)

  request.post(
    {
      url: process.env.B2P_URL + 'Register',
      form: {
        sector: process.env.B2P_SECTOR_ID,
        amount,
        currency,
        description: 'test 1',
        life_period: 60 * 20,
        url: 'https://restork.ru/dashboard/finance/success',
        failurl: 'https://restork.ru/dashboard/finance/error',
        email: 'ilya.soloveyv@gmail.com',
        phone: '79037876601',
        signature: response.signature
      }
    },
    // formData: {
    //   sector: B2P_SECTOR_ID,
    //   amount: amount,
    //   currency: currency,
    //   description: 'test 1',
    //   signature: response.signature
    // },
    function(error, resp, body) {
      // console.error('error:', error)
      // console.log('statusCode:', response && response.statusCode)
      // console.log('body:', body)
      response.error = error
      response.resp = resp
      response.body = JSON.parse(body)
      res.json(response)
    }
  )

  // const axios = require('axios')

  // response.b2p = await axios.get(process.env.B2P_URL + 'Register')
})

router.post('/addOrder', async (req, res) => {
  const iUserID = req.body.iUserID
  const sOrderDescription = 'Регистрация банковской карты'
  const response = await B2P.addOrder({ iUserID, sOrderDescription })
  res.json(response)
})

module.exports = router
