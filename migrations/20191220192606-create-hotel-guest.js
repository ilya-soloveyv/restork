'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('hotel_guest', {
      iHotelGuestID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      sHotelGuestTitle: {
        allowNull: false,
        type: Sequelize.STRING
      },
      iHotelGuestSort: {
        allowNull: false,
        type: Sequelize.INTEGER,
        defaultValue: 9999
      },
      iHotelGuestActive: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      }
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('hotel_guest')
  }
}
