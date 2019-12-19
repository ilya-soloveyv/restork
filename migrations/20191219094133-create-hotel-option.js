'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('hotel_option', {
      iHotelOptionID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      sHotelOptionTitle: {
        allowNull: false,
        type: Sequelize.STRING
      },
      iHotelOptionSort: {
        allowNull: false,
        type: Sequelize.INTEGER,
        defaultValue: 9999
      },
      iHotelOptionActive: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      }
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('hotel_option')
  }
}
