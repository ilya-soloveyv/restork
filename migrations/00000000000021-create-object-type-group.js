'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('object_type_group', {
      iObjectTypeGroupID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      sObjectTypeGroupTitle: {
        allowNull: false,
        type: Sequelize.STRING
      },
      iObjectTypeGroupSort: {
        allowNull: false,
        type: Sequelize.INTEGER,
        defaultValue: 9999
      },
      iObjectTypeGroupActive: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      }
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('object_type_group')
  }
}
