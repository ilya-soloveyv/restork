'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('application', {
      iApplicationID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      iUserID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'user',
          key: 'iUserID'
        },
        onUpdate: 'NO ACTION',
        onDelete: 'CASCADE'
      },
      sApplicationAddress: {
        type: Sequelize.STRING,
        allowNull: false
      },
      aApplicationCoordinate: {
        type: Sequelize.GEOMETRY('POINT'),
        allowNull: false
      },
      dApplicationDateFrom: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      dApplicationDateTo: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      iApplicationAdult: {
        type: Sequelize.INTEGER
      },
      iApplicationChild: {
        type: Sequelize.INTEGER
      },
      dApplicationDate: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      iActive: {
        type: Sequelize.BOOLEAN
      }
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('application')
  }
}
