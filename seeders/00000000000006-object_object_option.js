'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'object_object_option',
      [
        {
          iObjectObjectOptionID: 1,
          iObjectID: 3,
          iObjectOptionID: 1
        },
        {
          iObjectObjectOptionID: 2,
          iObjectID: 3,
          iObjectOptionID: 3
        },
        {
          iObjectObjectOptionID: 3,
          iObjectID: 3,
          iObjectOptionID: 4
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('object_object_option', null, {})
  }
}
