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
      iRoomTypeID: {
        // Тип комнаты
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'room_type',
          key: 'iRoomTypeID'
        },
        onUpdate: 'NO ACTION',
        onDelete: 'NO ACTION'
      },
      sObjectTitle: {
        // Название объекта
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: null
      },
      iObjectArea: {
        // Площадь объекта
        type: Sequelize.INTEGER,
        allowNull: true
      },
      iObjectAreaLocation: {
        // Площадь объекта
        type: Sequelize.INTEGER,
        allowNull: true
      },
      iObjectFloorAll: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      iObjectFloor: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      iObjectRoomCount: {
        // Кол-во комнат
        type: Sequelize.INTEGER,
        allowNull: true
      },
      iObjectRoomHotelCount: {
        // Кол-во номеров
        type: Sequelize.INTEGER,
        allowNull: true
      },
      iObjectBed: {
        // Кол-во кроватей
        type: Sequelize.INTEGER,
        allowNull: true
      },
      iObjectPlace: {
        // Кол-во спальных мест
        type: Sequelize.INTEGER,
        allowNull: true
      },
      iObjectPlaceDop: {
        // Кол-во дополнительных мест
        type: Sequelize.INTEGER,
        allowNull: true
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
      },
      sTutorialStepActive: {
        type: Sequelize.STRING,
        defaultValue: null
      }
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('object')
  }
}
