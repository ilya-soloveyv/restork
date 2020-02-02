'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'room_image',
      [
        {
          iRoomImageID: 1,
          iRoomID: 1,
          sRoomImage: '1.jpg'
        },
        {
          iRoomImageID: 2,
          iRoomID: 1,
          sRoomImage: '2.jpg'
        },
        {
          iRoomImageID: 3,
          iRoomID: 1,
          sRoomImage: '3.jpg'
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('room_image', null, {})
  }
}
