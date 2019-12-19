'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'hotel_option',
      [
        {
          iHotelOptionID: 1,
          sHotelOptionTitle: 'Зона мангала',
          iHotelOptionSort: 9999,
          iHotelOptionActive: true
        },
        {
          iHotelOptionID: 2,
          sHotelOptionTitle: 'Бассейн',
          iHotelOptionSort: 1000,
          iHotelOptionActive: true
        },
        {
          iHotelOptionID: 3,
          sHotelOptionTitle: 'Детская площадка',
          iHotelOptionSort: 9999,
          iHotelOptionActive: true
        },
        {
          iHotelOptionID: 4,
          sHotelOptionTitle: 'Общая кухня',
          iHotelOptionSort: 9999,
          iHotelOptionActive: false
        },
        {
          iHotelOptionID: 5,
          sHotelOptionTitle: 'Парковка',
          iHotelOptionSort: 9999,
          iHotelOptionActive: true
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('hotel_option', null, {})
  }
}
