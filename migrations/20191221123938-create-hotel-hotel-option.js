'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('hotel_hotel_option', {
      iHotelHotelOptionID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      iHotelID: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      iHotelOptionID: {
        type: Sequelize.INTEGER,
        allowNull: false
      }
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('hotel_hotel_option')
  }
}
