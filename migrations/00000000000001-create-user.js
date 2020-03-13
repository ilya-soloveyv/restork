'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('user', {
      iUserID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      sUserLastName: {
        type: Sequelize.STRING
      },
      sUserMiddleName: {
        type: Sequelize.STRING
      },
      sUserFirstName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      sUserPhone: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      sUserPhoneKod: {
        type: Sequelize.STRING
      },
      sUserEmail: {
        type: Sequelize.STRING
      },
      dUserBirthday: {
        type: Sequelize.DATEONLY
      },
      sUserAvatar: {
        type: Sequelize.STRING
      },
      sUserPassword: {
        type: Sequelize.STRING,
        allowNull: false
      },
      iUserKey: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      iUserAdmin: {
        type: Sequelize.BOOLEAN,
        defaultValue: 0
      }
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('user')
  }
}
