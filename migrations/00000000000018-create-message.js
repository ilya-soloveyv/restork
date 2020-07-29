'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('message', {
      iMessageID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      iApplicationObjectID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'application_object',
          key: 'iApplicationObjectID'
        },
        onUpdate: 'NO ACTION',
        onDelete: 'CASCADE'
      },
      iUserID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'user',
          key: 'iUserID'
        },
        onUpdate: 'NO ACTION',
        onDelete: 'CASCADE'
      },
      tMessageText: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      dDate: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      }
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('message')
  }
}
