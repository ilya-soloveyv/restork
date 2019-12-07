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
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('user', null, {})
  }
}
