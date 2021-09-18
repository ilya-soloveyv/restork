'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('place', {
      iPlaceID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      sPlaceTitle: {
        type: Sequelize.STRING,
        allowNull: false
      },
      iPlaceSort: {
        allowNull: false,
        type: Sequelize.INTEGER,
        defaultValue: 9999
      },
      iPlaceActive: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      }
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('place')
  }
}
