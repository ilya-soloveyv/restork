'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('application_room_option', {
      iApplicationRoomOptionID: {
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
      iRoomOptionID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'room_option',
          key: 'iRoomOptionID'
        },
        onUpdate: 'NO ACTION',
        onDelete: 'CASCADE'
      }
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('application_room_option')
  }
}
