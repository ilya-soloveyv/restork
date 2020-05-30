const { Router } = require('express')
const router = Router()

const User = require('../../models').user

router.post('/search', async (req, res, next) => {
  const search = req.body.search || null
  const response = {}

  response.users = await User.searchUsers(search)

  res.json(response)
})

module.exports = router
