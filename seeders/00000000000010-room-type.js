'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'room_type',
      [
        {
          iRoomTypeID: 1,
          sRoomTypeTitle: 'Эконом',
          iRoomTypeSort: 9999,
          iRoomTypeActive: true
        },
        {
          iRoomTypeID: 2,
          sRoomTypeTitle: 'Стандарт',
          iRoomTypeSort: 9999,
          iRoomTypeActive: true
        },
        {
          iRoomTypeID: 3,
          sRoomTypeTitle: 'Люкс',
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
