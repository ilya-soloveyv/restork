const { Router } = require('express')
const router = Router()

const ObjectOption = require('../../models').object_option

router.post('/get', async (req, res, next) => {
  const iObjectOptionID = req.body.id
  let response = null
  if (iObjectOptionID) {
    response = await ObjectOption.findByPk(iObjectOptionID)
  } else {
    response = await ObjectOption.findAll({
      order: [
        ['iObjectOptionActive', 'DESC'],
        ['iObjectOptionSort', 'ASC'],
        ['iObjectOptionID', 'ASC']
      ]
    })
  }
  res.json(response)
})

router.post('/update', async (req, res, next) => {
  const iObjectOptionID = req.body.iObjectOptionID || false
  const sObjectOptionTitle = req.body.sObjectOptionTitle || false
  const iObjectOptionSort = req.body.iObjectOptionSort || 9999
  const iObjectOptionActive = req.body.iObjectOptionActive || false
  let response = {}

  if (iObjectOptionID) {
    await ObjectOption.update(
      {
        sObjectOptionTitle,
        iObjectOptionSort,
        iObjectOptionActive
      },
      {
        where: {
          iObjectOptionID
        }
      }
    )
    response = await ObjectOption.findByPk(iObjectOptionID)
  } else {
    response = await ObjectOption.create({
      sObjectOptionTitle,
      iObjectOptionSort,
      iObjectOptionActive
    })
  }

  res.json(response)
})

module.exports = router
