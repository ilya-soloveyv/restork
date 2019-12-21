'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('hotel_image', {
      iHotelImageID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      iHotelID: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      sHotelImage: {
        type: Sequelize.STRING,
        allowNull: false
      }
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('hotel_image')
  }
}
