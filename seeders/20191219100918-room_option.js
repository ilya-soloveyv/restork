'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'room_option',
      [
        {
          iRoomOptionID: 1,
          sRoomOptionTitle: 'Кондиционер',
          iRoomOptionSort: 9999,
          iRoomOptionActive: true
        },
        {
          iRoomOptionID: 2,
          sRoomOptionTitle: 'Холодильник',
          iRoomOptionSort: 1000,
          iRoomOptionActive: true
        },
        {
          iRoomOptionID: 3,
          sRoomOptionTitle: 'Телевизор',
          iRoomOptionSort: 9999,
          iRoomOptionActive: true
        },
        {
          iRoomOptionID: 4,
          sRoomOptionTitle: 'Балкон',
          iRoomOptionSort: 9999,
          iRoomOptionActive: false
        },
        {
          iRoomOptionID: 5,
          sRoomOptionTitle: 'Собственая кухня',
          iRoomOptionSort: 9999,
          iRoomOptionActive: true
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('room_option', null, {})
  }
}
