'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('object_type', {
      iObjectTypeID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      iObjectTypeGroupID: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      sObjectTypeTitle: {
        allowNull: false,
        type: Sequelize.STRING
      },
      iObjectTypeSort: {
        allowNull: false,
        type: Sequelize.INTEGER,
        defaultValue: 9999
      },
      iObjectTypeActive: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
      iRoomPermission: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      }
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('object_type')
  }
}
