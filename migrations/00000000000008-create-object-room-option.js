'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('object_room_option', {
      iObjectRoomOptionID: {
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
    return queryInterface.dropTable('object_room_option')
  }
}
