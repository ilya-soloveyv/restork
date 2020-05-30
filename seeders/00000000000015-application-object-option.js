'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'application_object_option',
      [
        {
          iApplicationObjectOptionID: 1,
          iApplicationID: 1,
          iObjectOptionID: 2
        },
        {
          iApplicationObjectOptionID: 2,
          iApplicationID: 1,
          iObjectOptionID: 4
        },
        {
          iApplicationObjectOptionID: 3,
          iApplicationID: 1,
          iObjectOptionID: 5
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('application_object_option', null, {})
  }
}
