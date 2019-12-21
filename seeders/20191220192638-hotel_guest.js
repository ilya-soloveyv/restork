'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'hotel_guest',
      [
        {
          iHotelGuestID: 1,
          sHotelGuestTitle: 'Да',
          iHotelGuestSort: 200,
          iHotelGuestActive: true
        },
        {
          iHotelGuestID: 2,
          sHotelGuestTitle: 'Нет',
          iHotelGuestSort: 100,
          iHotelGuestActive: true
        },
        {
          iHotelGuestID: 3,
          sHotelGuestTitle: 'По договоренности',
          iHotelGuestSort: 300,
          iHotelGuestActive: true
        },
        {
          iHotelGuestID: 4,
          sHotelGuestTitle: 'Возможно',
          iHotelGuestSort: 400,
          iHotelGuestActive: false
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('hotel_guest', null, {})
  }
}
