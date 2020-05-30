'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('object', {
      iObjectID: {
        // ID объекта
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      iUserID: {
        // Пользователь которому принадлежит объект
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'user',
          key: 'iUserID'
        },
        onUpdate: 'NO ACTION',
        onDelete: 'NO ACTION'
      },
      iObjectTypeID: {
        // Тип объекта
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'object_type',
          key: 'iObjectTypeID'
        },
        onUpdate: 'NO ACTION',
        onDelete: 'NO ACTION'
      },
      sObjectTitle: {
        // Название объекта
        type: Sequelize.STRING,
        allowNull: false
      },
      iObjectArea: {
        // Площадь объекта
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      iObjectRoomCount: {
        // Кол-во комнат/номеров
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      iObjectBed: {
        // Кол-во кроватей
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1
      },
      iObjectPlace: {
        // Кол-во спальных мест
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1
      },
      iObjectPlaceDop: {
        // Кол-во дополнительных мест
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      sObjectAddress: {
        // Адрес
        type: Sequelize.STRING,
        allowNull: true
      },
      aObjectCoordinate: {
        // Координаты объекта
        type: Sequelize.GEOMETRY('POINT'),
        allowNull: true
      },
      tObjectDesc: {
        // Описание объекта
        type: Sequelize.TEXT,
        allowNull: true
      },
      iObjectActive: {
        // Активность объекта
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
      iObjectVerification: {
        // Верификация объекта
        type: Sequelize.BOOLEAN,
        defaultValue: false
      }
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('object')
  }
}
