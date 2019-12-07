'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('hotel_type', {
      iHotelTypeID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      sHotelTypeName: {
        allowNull: false,
        type: Sequelize.STRING
      },
      iHotelTypeDeactivated: {
        // удален ли тип размещения?
        type: Sequelize.INTEGER,
        defaultValue: 0
      }
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('hotel_type')
  }
}
