'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('object_place', {
      iObjectPlaceID: {
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
      iPlaceID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'place',
          key: 'iPlaceID'
        },
        onUpdate: 'NO ACTION',
        onDelete: 'NO ACTION'
      },
      sPlaceTitle: {
        type: Sequelize.STRING,
        allowNull: true
      },
      iPlaceDistance: {
        type: Sequelize.INTEGER,
        allowNull: true
      }
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('object_place')
  }
}
