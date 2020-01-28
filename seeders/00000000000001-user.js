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
          sUserPhone: '79031111111',
          sUserPassword: '3fc0a7acf087f549ac2b266baf94b8b1', // qwerty
          iUserKey: 123,
          iUserAdmin: 1
        },
        {
          iUserID: 2,
          sUserLastName: null,
          sUserMiddleName: null,
          sUserFirstName: 'Леонард',
          sUserPhone: '79032222222',
          sUserPassword: '3fc0a7acf087f549ac2b266baf94b8b1', // qwerty
          iUserKey: 123,
          iUserAdmin: 0
        },
        {
          iUserID: 3,
          sUserLastName: 'Пушкин',
          sUserMiddleName: 'Сергеевич',
          sUserFirstName: 'Александр',
          sUserPhone: '79033333333',
          sUserPassword: '3fc0a7acf087f549ac2b266baf94b8b1', // qwerty
          iUserKey: 123,
          iUserAdmin: 0
        },
        {
          iUserID: 4,
          sUserLastName: 'Достоевский',
          sUserMiddleName: 'Михайлович',
          sUserFirstName: 'Фёдор',
          sUserPhone: '79034444444',
          sUserPassword: '3fc0a7acf087f549ac2b266baf94b8b1', // qwerty
          iUserKey: 123,
          iUserAdmin: 0
        },
        {
          iUserID: 5,
          sUserLastName: 'Гоголь',
          sUserMiddleName: 'Васильевич',
          sUserFirstName: 'Николaй',
          sUserPhone: '79035555555',
          sUserPassword: '3fc0a7acf087f549ac2b266baf94b8b1', // qwerty
          iUserKey: 123,
          iUserAdmin: 0
        },
        {
          iUserID: 6,
          sUserLastName: 'Бунин',
          sUserMiddleName: 'Алексеевич',
          sUserFirstName: 'Иван',
          sUserPhone: '79036666666',
          sUserPassword: '3fc0a7acf087f549ac2b266baf94b8b1', // qwerty
          iUserKey: 123,
          iUserAdmin: 0
        },
        {
          iUserID: 7,
          sUserLastName: 'Куприн',
          sUserMiddleName: 'Иванович',
          sUserFirstName: 'Александр',
          sUserPhone: '79037777777',
          sUserPassword: '3fc0a7acf087f549ac2b266baf94b8b1', // qwerty
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
