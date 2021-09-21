'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('object_option', {
      iObjectOptionID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      sObjectOptionTitle: {
        allowNull: false,
        type: Sequelize.STRING
      },
      iObjectOptionSort: {
        allowNull: false,
        type: Sequelize.INTEGER,
        defaultValue: 9999
      },
      iObjectOptionActive: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
      sObjectOptionIcon: {
        type: Sequelize.STRING,
        defaultValue: null
      },
      sObjectOptionDesc: {
        type: Sequelize.STRING,
        defaultValue: null
      }
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('object_option')
  }
}
