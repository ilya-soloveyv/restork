'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'hotel_room_option',
      [
        {
          iHotelRoomOptionID: 1,
          iHotelID: 3,
          iRoomOptionID: 1
        },
        {
          iHotelRoomOptionID: 2,
          iHotelID: 3,
          iRoomOptionID: 3
        },
        {
          iHotelRoomOptionID: 3,
          iHotelID: 3,
          iRoomOptionID: 4
        },
        {
          iHotelRoomOptionID: 4,
          iHotelID: 3,
          iRoomOptionID: 5
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('hotel_room_option', null, {})
  }
}
