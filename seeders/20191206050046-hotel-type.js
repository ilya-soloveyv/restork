'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'hotel_type',
      [
        {
          iHotelTypeID: 1,
          sHotelTypeTitle: 'Квартира',
          iHotelTypeSort: 9999,
          iHotelTypeActive: true
        },
        {
          iHotelTypeID: 2,
          sHotelTypeTitle: 'Дом',
          iHotelTypeSort: 1000,
          iHotelTypeActive: true
        },
        {
          iHotelTypeID: 3,
          sHotelTypeTitle: 'Номер',
          iHotelTypeSort: 9999,
          iHotelTypeActive: true
        },
        {
          iHotelTypeID: 4,
          sHotelTypeTitle: 'Апартаменты',
          iHotelTypeSort: 9999,
          iHotelTypeActive: false
        },
        {
          iHotelTypeID: 5,
          sHotelTypeTitle: 'Хостел',
          iHotelTypeSort: 9999,
          iHotelTypeActive: true
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('hotel_type', null, {})
  }
}
