const { Router } = require('express')
const router = Router()
const jsonwebtoken = require('jsonwebtoken')
const md5 = require('md5')
const multer = require('multer')
const upload = multer({ dest: 'static/upload/' })

const User = require('../../models').user

router.post('/login', async (req, res, next) => {
  const user = await User.findOne({
    where: {
      sUserPhone: req.body.phone
    }
  })

  if (user && user.sUserPassword === md5(req.body.password + user.iUserKey)) {
    const accessToken = jsonwebtoken.sign(
      {
        iUserID: user.iUserID,
        sUserLastName: user.sUserLastName,
        sUserMiddleName: user.sUserMiddleName,
        sUserFirstName: user.sUserFirstName,
        sUserPhone: user.sUserPhone,
        sUserEmail: user.sUserEmail,
        dUserBirthday: user.dUserBirthday,
        sUserAvatar: user.sUserAvatar,
        iUserAdmin: user.iUserAdmin
      },
      'dummy'
    )
    res.json({
      token: {
        accessToken
      }
    })
  } else {
    res.status(401).json({ message: 'Bad credentials' })
  }
})

router.post('/logout', (req, res, next) => {
  res.sendStatus(200)
})

router.get('/user', async (req, res, next) => {
  const user = await User.findByPk(req.user.iUserID)
  res.json({ user })
})

router.post('/update', async (req, res, next) => {
  const response = {}
  const sUserLastName = req.body.user.sUserLastName
    ? req.body.user.sUserLastName
    : null
  const sUserMiddleName = req.body.user.sUserMiddleName
    ? req.body.user.sUserMiddleName
    : null
  const sUserFirstName = req.body.user.sUserFirstName
    ? req.body.user.sUserFirstName
    : null
  const dUserBirthday = req.body.user.dUserBirthday
    ? req.body.user.dUserBirthday
    : null
  const sUserEmail = req.body.user.sUserEmail ? req.body.user.sUserEmail : null
  const sUserAvatar = req.body.user.sUserAvatar
    ? req.body.user.sUserAvatar
    : null
  response.update = await User.update(
    {
      sUserLastName,
      sUserMiddleName,
      sUserFirstName,
      dUserBirthday,
      sUserEmail,
      sUserAvatar
    },
    {
      where: {
        iUserID: req.user.iUserID
      }
    }
  )
  res.json(response)
})

router.post('/upload', upload.single('file'), async (req, res, next) => {
  const response = {}
  response.upload = await User.uploadAvatar(req.body.iUserID, req.file)
  res.json(response)
})

module.exports = router
