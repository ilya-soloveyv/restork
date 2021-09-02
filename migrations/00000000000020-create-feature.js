'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('feature', {
      iFeatureID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      sFeatureTitle: {
        type: Sequelize.STRING,
        allowNull: false
      },
      iFeatureSort: {
        allowNull: false,
        type: Sequelize.INTEGER,
        defaultValue: 9999
      },
      iFeatureActive: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('feature')
  }
}
