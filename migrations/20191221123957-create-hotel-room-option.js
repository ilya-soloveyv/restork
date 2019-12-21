'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('hotel_room_option', {
      iHotelRoomOptionID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      iHotelID: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      iRoomOptionID: {
        type: Sequelize.INTEGER,
        allowNull: false
      }
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('hotel_room_option')
  }
}
