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
      sApplicationCountry: {
        type: Sequelize.STRING
      },
      sApplicationState: {
        type: Sequelize.STRING
      },
      sApplicationCity: {
        type: Sequelize.STRING
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
      dDate: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      iActive: {
        type: Sequelize.BOOLEAN
      },
      iObjectID: {
        type: Sequelize.INTEGER,
        references: {
          model: 'object',
          key: 'iObjectID'
        },
        onUpdate: 'NO ACTION',
        onDelete: 'CASCADE'
      },
      iSearchRadius: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      }
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('application')
  }
}
