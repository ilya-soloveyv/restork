'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'application_room_option',
      [
        {
          iApplicationRoomOptionID: 1,
          iApplicationID: 1,
          iRoomOptionID: 2
        },
        {
          iApplicationRoomOptionID: 2,
          iApplicationID: 1,
          iRoomOptionID: 4
        },
        {
          iApplicationRoomOptionID: 3,
          iApplicationID: 1,
          iRoomOptionID: 5
        },
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('application_room_option', null, {})
  }
}
