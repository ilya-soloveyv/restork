'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'room',
      [
        {
          iRoomID: 1,
          iObjectID: 3,
          iRoomTypeID: 1,
          iRoomArea: 20,
          iRoomCount: 1,
          iRoomBed: 1,
          iRoomPlace: 2,
          iRoomPlaceDop: 1,
          tRoomDesc: 'Обычный номер с видом на стройку',
          iRoomActive: 1
        },
        {
          iRoomID: 2,
          iObjectID: 3,
          iRoomTypeID: 2,
          iRoomArea: 30,
          iRoomCount: 1,
          iRoomBed: 1,
          iRoomPlace: 2,
          iRoomPlaceDop: 1,
          tRoomDesc: 'Номер с видом на горы',
          iRoomActive: 1
        },
        {
          iRoomID: 3,
          iObjectID: 3,
          iRoomTypeID: 2,
          iRoomArea: 40,
          iRoomCount: 2,
          iRoomBed: 2,
          iRoomPlace: 4,
          iRoomPlaceDop: 2,
          tRoomDesc: 'Президентский номер с террасой и видом на горы',
          iRoomActive: 1
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('room', null, {})
  }
}
