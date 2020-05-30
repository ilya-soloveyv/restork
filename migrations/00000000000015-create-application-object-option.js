'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('application_object_option', {
      iApplicationObjectOptionID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      iApplicationID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'application',
          key: 'iApplicationID'
        },
        onUpdate: 'NO ACTION',
        onDelete: 'CASCADE'
      },
      iObjectOptionID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'object_option',
          key: 'iObjectOptionID'
        },
        onUpdate: 'NO ACTION',
        onDelete: 'CASCADE'
      }
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('application_object_option')
  }
}
