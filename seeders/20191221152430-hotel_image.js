'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'hotel_image',
      [
        {
          iHotelImageID: 1,
          iHotelID: 3,
          sHotelImage: '1.jpg'
        },
        {
          iHotelImageID: 2,
          iHotelID: 3,
          sHotelImage: '2.jpg'
        },
        {
          iHotelImageID: 3,
          iHotelID: 3,
          sHotelImage: '3.jpg'
        },
        {
          iHotelImageID: 4,
          iHotelID: 3,
          sHotelImage: '4.jpg'
        },
        {
          iHotelImageID: 5,
          iHotelID: 3,
          sHotelImage: '5.jpg'
        },
        {
          iHotelImageID: 6,
          iHotelID: 3,
          sHotelImage: '6.jpg'
        },
        {
          iHotelImageID: 7,
          iHotelID: 3,
          sHotelImage: '7.jpg'
        },
        {
          iHotelImageID: 8,
          iHotelID: 3,
          sHotelImage: '8.jpg'
        },
        {
          iHotelImageID: 9,
          iHotelID: 3,
          sHotelImage: '9.jpg'
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('hotel_image', null, {})
  }
}
