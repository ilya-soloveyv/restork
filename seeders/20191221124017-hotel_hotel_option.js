'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'hotel_hotel_option',
      [
        {
          iHotelHotelOptionID: 1,
          iHotelID: 3,
          iHotelOptionID: 1
        },
        {
          iHotelHotelOptionID: 2,
          iHotelID: 3,
          iHotelOptionID: 3
        },
        {
          iHotelHotelOptionID: 3,
          iHotelID: 3,
          iHotelOptionID: 4
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('hotel_hotel_option', null, {})
  }
}
