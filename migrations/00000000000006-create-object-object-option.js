'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('object_object_option', {
      iObjectObjectOptionID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      iObjectID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'object',
          key: 'iObjectID'
        },
        onUpdate: 'NO ACTION',
        onDelete: 'NO ACTION'
      },
      iObjectOptionID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'object_option',
          key: 'iObjectOptionID'
        },
        onUpdate: 'NO ACTION',
        onDelete: 'NO ACTION'
      }
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('object_object_option')
  }
}
