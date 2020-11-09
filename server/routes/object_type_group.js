const { Router } = require('express')
const router = Router()

const ObjectTypeGroup = require('../../models').objectTypeGroup

router.post('/list', async (req, res, next) => {
  const response = {}
  const params = req.body
  response.objectTypeGroup = await ObjectTypeGroup.list({ where: params })
  res.json(response)
})

router.post('/item', async (req, res, next) => {
  const response = {}
  const iObjectTypeGroupID = req.body.iObjectTypeGroupID
  response.objectTypeGroup = await ObjectTypeGroup.item(iObjectTypeGroupID)
  res.json(response)
})

router.post('/update', async (req, res, next) => {
  const response = await ObjectTypeGroup.up(req.body)
  res.json(response)
})

router.post('/delete', async (req, res, next) => {
  const response = await ObjectTypeGroup.delete(req.body.iObjectTypeGroupID)
  res.json(response)
})

module.exports = router
