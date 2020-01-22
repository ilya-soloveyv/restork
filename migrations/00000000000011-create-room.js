'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('room', {
      iRoomID: { // ID номера
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      iObjectID: { // ID объекта
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'object',
          key: 'iObjectID'
        },
        onUpdate: 'NO ACTION',
        onDelete: 'NO ACTION'
      },
      iRoomTypeID: { // Категория номера
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'room_type',
          key: 'iRoomTypeID'
        },
        onUpdate: 'NO ACTION',
        onDelete: 'NO ACTION'
      },
      iRoomArea: { // Площадь номера
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      iRoomCount: { // Кол-во комнат в номере
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      iRoomBed: { // Кол-во кроватей
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1
      },
      iRoomPlace: { // Кол-во спальных мест
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1
      },
      iRoomPlaceDop: { // Кол-во дополнительных мест
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      tRoomDesc: { // Описание номера
        type: Sequelize.TEXT,
        allowNull: true
      },
      iRoomActive: { // Активность номера
        type: Sequelize.BOOLEAN,
        defaultValue: true
      }
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('room')
  }
}
