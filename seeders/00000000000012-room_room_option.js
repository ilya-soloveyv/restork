'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'room_room_option',
      [
        {
          iRoomRoomOptionID: 1,
          iRoomID: 2,
          iRoomOptionID: 1
        },
        {
          iRoomRoomOptionID: 2,
          iRoomID: 2,
          iRoomOptionID: 3
        },
        {
          iRoomRoomOptionID: 3,
          iRoomID: 2,
          iRoomOptionID: 4
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('room_room_option', null, {})
  }
}
