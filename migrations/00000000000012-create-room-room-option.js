'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('room_room_option', {
      iRoomRoomOptionID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      iRoomID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'room',
          key: 'iRoomID'
        },
        onUpdate: 'NO ACTION',
        onDelete: 'NO ACTION'
      },
      iRoomOptionID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'room_option',
          key: 'iRoomOptionID'
        },
        onUpdate: 'NO ACTION',
        onDelete: 'NO ACTION'
      }
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('room_room_option')
  }
}
