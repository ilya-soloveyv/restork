'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'user',
      [
        {
          iUserID: 1,
          sUserLastName: null,
          sUserMiddleName: null,
          sUserFirstName: 'Шелдон',
          sUserPhone: '9031111111',
          sUserPhoneKod: null,
          sUserPassword: '3fc0a7acf087f549ac2b266baf94b8b1', // qwerty
          sUserEmail: null,
          dUserBirthday: null,
          sUserAvatar: null,
          iUserKey: 123,
          iUserAdmin: 1
        },
        {
          iUserID: 2,
          sUserLastName: null,
          sUserMiddleName: null,
          sUserFirstName: 'Леонард',
          sUserPhone: '9032222222',
          sUserPhoneKod: null,
          sUserPassword: '3fc0a7acf087f549ac2b266baf94b8b1', // qwerty
          sUserEmail: null,
          dUserBirthday: null,
          sUserAvatar: null,
          iUserKey: 123,
          iUserAdmin: 0
        },
        {
          iUserID: 3,
          sUserLastName: 'Пушкин',
          sUserMiddleName: 'Сергеевич',
          sUserFirstName: 'Александр',
          sUserPhone: '9033333333',
          sUserPhoneKod: null,
          sUserPassword: '3fc0a7acf087f549ac2b266baf94b8b1', // qwerty
          sUserEmail: null,
          dUserBirthday: null,
          sUserAvatar: null,
          iUserKey: 123,
          iUserAdmin: 0
        },
        {
          iUserID: 4,
          sUserLastName: 'Достоевский',
          sUserMiddleName: 'Михайлович',
          sUserFirstName: 'Фёдор',
          sUserPhone: '9034444444',
          sUserPhoneKod: null,
          sUserPassword: '3fc0a7acf087f549ac2b266baf94b8b1', // qwerty
          sUserEmail: null,
          dUserBirthday: null,
          sUserAvatar: null,
          iUserKey: 123,
          iUserAdmin: 0
        },
        {
          iUserID: 5,
          sUserLastName: 'Гоголь',
          sUserMiddleName: 'Васильевич',
          sUserFirstName: 'Николaй',
          sUserPhone: '9035555555',
          sUserPhoneKod: null,
          sUserPassword: '3fc0a7acf087f549ac2b266baf94b8b1', // qwerty
          sUserEmail: null,
          dUserBirthday: null,
          sUserAvatar: null,
          iUserKey: 123,
          iUserAdmin: 0
        },
        {
          iUserID: 6,
          sUserLastName: 'Бунин',
          sUserMiddleName: 'Алексеевич',
          sUserFirstName: 'Иван',
          sUserPhone: '9036666666',
          sUserPhoneKod: null,
          sUserPassword: '3fc0a7acf087f549ac2b266baf94b8b1', // qwerty
          sUserEmail: null,
          dUserBirthday: null,
          sUserAvatar: null,
          iUserKey: 123,
          iUserAdmin: 0
        },
        {
          iUserID: 7,
          sUserLastName: 'Куприн',
          sUserMiddleName: 'Иванович',
          sUserFirstName: 'Александр',
          sUserPhone: '9037777777',
          sUserPhoneKod: null,
          sUserPassword: '3fc0a7acf087f549ac2b266baf94b8b1', // qwerty
          sUserEmail: null,
          dUserBirthday: null,
          sUserAvatar: null,
          iUserKey: 123,
          iUserAdmin: 0
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('user', null, {})
  }
}
