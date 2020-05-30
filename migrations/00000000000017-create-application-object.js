'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('application_object', {
      iApplicationObjectID: {
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
      iObjectID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'object',
          key: 'iObjectID'
        },
        onUpdate: 'NO ACTION',
        onDelete: 'CASCADE'
      },
      dDate: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      },
      iObjectView: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      dObjectViewDate: {
        type: Sequelize.DATE
      },
      iObjectPrice: {
        type: Sequelize.INTEGER
      },
      iUserView: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      dUserViewDate: {
        type: Sequelize.DATE
      },
      iUserCancel: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      dUserCancelDate: {
        type: Sequelize.DATE
      },
      iUserSelected: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      dUserSelectedDate: {
        type: Sequelize.DATE
      }
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('application_object')
  }
}
