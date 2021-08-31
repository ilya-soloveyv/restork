'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'room_type',
      [
        {
          iRoomTypeID: 1,
          sRoomTypeTitle: 'Single',
          iRoomTypeSort: 9999,
          iRoomTypeActive: true
        },
        {
          iRoomTypeID: 2,
          sRoomTypeTitle: 'Double',
          iRoomTypeSort: 9999,
          iRoomTypeActive: true
        },
        {
          iRoomTypeID: 3,
          sRoomTypeTitle: 'Triple',
          iRoomTypeSort: 9999,
          iRoomTypeActive: true
        },
        {
          iRoomTypeID: 4,
          sRoomTypeTitle: 'Family Room',
          iRoomTypeSort: 9999,
          iRoomTypeActive: true
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('room_type', null, {})
  }
}
