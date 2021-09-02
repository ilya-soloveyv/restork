'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('object_feature', {
      iObjectFeatureID: {
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
      iFeatureID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'feature',
          key: 'iFeatureID'
        },
        onUpdate: 'NO ACTION',
        onDelete: 'NO ACTION'
      }
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('object_feature')
  }
}
