'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('hotel', {
      iHotelID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      sHotelTitle: {
        type: Sequelize.STRING,
        allowNull: false
      },
      // Добавить поле Вид объекта
      iHotelFloorNumber: {
        type: Sequelize.INTEGER,
        defaultValue: 1
      },
      iHotelGuestOnly: {
        // согласен ли путешественник делить объект размещения с другими путешественниками
        type: Sequelize.INTEGER,
        defaultValue: 1
      },
      iHotelBedroomNumber: {
        // число спален
        type: Sequelize.INTEGER,
        defaultValue: 1
      },
      iHotelBedNumber: {
        // число кроватей
        type: Sequelize.INTEGER,
        defaultValue: 1
      },
      iHotelPlaceNumber: {
        // число спальных мест
        type: Sequelize.INTEGER,
        defaultValue: 1
      },
      iHotelPlaceAuxiliary: {
        // дополнительное спальное место
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      // Добавить поле Адрес
      // Добавить поле Географические координаты
      // Добавить поле Дополнительные удобства
      iHotelDeactivated: {
        // удален ли отель?
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      iHotelVerified: {
        // прошел ли отель модерацию?
        type: Sequelize.INTEGER,
        defaultValue: 0
      }
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('hotel')
  }
}
