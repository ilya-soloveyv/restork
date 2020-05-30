'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'object_room_option',
      [
        {
          iObjectRoomOptionID: 1,
          iObjectID: 3,
          iRoomOptionID: 1
        },
        {
          iObjectRoomOptionID: 2,
          iObjectID: 3,
          iRoomOptionID: 3
        },
        {
          iObjectRoomOptionID: 3,
          iObjectID: 3,
          iRoomOptionID: 4
        },
        {
          iObjectRoomOptionID: 4,
          iObjectID: 3,
          iRoomOptionID: 5
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('object_room_option', null, {})
  }
}
