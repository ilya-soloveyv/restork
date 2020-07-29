'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('b2p_order', {
      iOrderID: {
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
      iAmountValue: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      iAmountCurrency: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      sOrderDescription: {
        type: Sequelize.STRING,
        allowNull: false
      },
      iOrderIDB2P: {
        type: Sequelize.INTEGER
      },
      B2POrderState: {
        type: Sequelize.STRING
      }
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('b2p_order')
  }
}
