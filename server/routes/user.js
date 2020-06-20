const { Router } = require('express')
const router = Router()

const User = require('../../models').user

router.post('/search', async (req, res, next) => {
  const search = req.body.search || null
  const page = req.body.page || 1
  const limit = req.body.limit || false
  const response = {}

  response.users = await User.searchUsers({ search, limit, page })

  res.json(response)
})

router.post('/item', async (req, res, next) => {
  const iUserID = req.body.iUserID
  const response = await User.item({ iUserID })
  res.json(response)
})

module.exports = router
