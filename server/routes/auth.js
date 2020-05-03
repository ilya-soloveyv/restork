const { Router } = require('express')
const router = Router()
const multer = require('multer')
const upload = multer({ dest: 'static/upload/' })

const User = require('../../models').user

router.post('/login', async (req, res, next) => {
  const signin = await User.signin(req.body.sUserPhone, req.body.sUserPassword)
  if (signin.error) {
    res.status(401).json(signin)
  } else {
    res.json({
      token: {
        accessToken: signin.accessToken
      }
    })
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

router.post('/updatePassword', async (req, res, next) => {
  const md5 = require('md5')
  const randomstring = require('randomstring')

  const response = {}
  const iUserID = req.user.iUserID
  const oldPassword = req.body.oldPassword
  const newPassword = req.body.newPassword
  const user = await User.findByPk(iUserID)
  const sUserPassword = user.sUserPassword
  const iUserKey = user.iUserKey
  if (md5(oldPassword + iUserKey) !== sUserPassword) {
    response.error = {
      ref: 'oldPassword',
      message: 'Вы ввели неверный пароль'
    }
    return res.status(401).json(response)
  }
  const sUserPasswordValidate = User.sUserPasswordValidate(newPassword)
  if (!sUserPasswordValidate) {
    response.error = {
      ref: 'newPassword',
      message: 'Неверный формат пароля'
    }
    return res.status(401).json(response)
  }
  const iUserKeyNew = randomstring.generate({
    length: 3,
    charset: 'numeric'
  })
  const sUserPasswordNewHash = md5(newPassword + iUserKeyNew)
  response.update = await User.update(
    {
      sUserPassword: sUserPasswordNewHash,
      iUserKey: iUserKeyNew
    },
    {
      where: {
        iUserID
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

router.post('/singup', async (req, res, next) => {
  const signup = await User.signup(
    req.body.sUserFirstName,
    req.body.sUserPhone,
    req.body.sUserPassword
  )
  if (signup.error) {
    res.status(401).json(signup)
  } else {
    res.json({ status: true })
  }
})

router.post('/confirmPhone', async (req, res, next) => {
  const response = {}

  const iUserID = req.user.iUserID
  const sUserPhoneKod = req.body.sUserPhoneKod

  const user = await User.findOne({
    where: {
      iUserID,
      sUserPhoneKod
    }
  })

  if (user === null) {
    response.error = {
      ref: 'sUserPhoneKod',
      message: 'Код подтверждения неверный'
    }
    return res.status(401).json(response)
  }

  await User.update(
    {
      sUserPhoneKod: null
    },
    {
      where: {
        iUserID
      }
    }
  )

  res.json(response)
})

router.post('/resendKod', async (req, res, next) => {
  const axios = require('axios')
  const randomstring = require('randomstring')
  // const urlencode = require('urlencode')

  const iUserID = req.user.iUserID
  const sUserPhone = req.user.sUserPhone
  const sUserPhoneKod = randomstring.generate({
    length: 4,
    charset: 'numeric'
  })
  await User.update(
    {
      sUserPhoneKod
    },
    {
      where: {
        iUserID
      }
    }
  )

  const smsText = sUserPhoneKod + ' - код подтверждения'
  // const url =
  //   process.env.SMS_HOST +
  //   '?user=' +
  //   process.env.SMS_USER +
  //   '&pwd=' +
  //   process.env.SMS_PASS +
  //   '&dadr=' +
  //   sUserPhone +
  //   '&text=' +
  //   smsText +
  //   '&sadr=' +
  //   process.env.SMS_SADR

  axios
    .get(process.env.SMS_HOST, {
      params: {
        user: process.env.SMS_USER,
        pwd: process.env.SMS_PASS,
        dadr: sUserPhone,
        text: smsText,
        sadr: process.env.SMS_SADR
      }
    })
    .then(({ data }) => {
      return res.json(data)
    })

  // response.sms = await User.sendSMSKod(req.user.sUserPhone, sUserPhoneKod)
  // res.json(response)
})

module.exports = router
