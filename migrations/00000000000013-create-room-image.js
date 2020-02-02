'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('room_image', {
      iRoomImageID: {
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
      sRoomImage: {
        type: Sequelize.STRING,
        allowNull: false
      }
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('room_image')
  }
}
