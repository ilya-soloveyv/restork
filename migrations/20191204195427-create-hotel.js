'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('hotel', {
      iHotelID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      sHotelTitle: {
        type: Sequelize.STRING,
        allowNull: false
      },
      aHotelCoordinate: {
        type: Sequelize.GEOMETRY('POINT')
      },
      iHotelTypeID: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      iHotelFloor: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1
      },
      iHotelGuestID: {
        type: Sequelize.INTEGER,
        defaultValue: 1
      },
      iHotelBedroom: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1
      },
      iHotelBed: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1
      },
      iHotelPlace: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1
      },
      iHotelPlaceDop: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      sHotelAddress: {
        type: Sequelize.STRING
      },
      iHotelActive: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
      iHotelVerification: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      }
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('hotel')
  }
}
