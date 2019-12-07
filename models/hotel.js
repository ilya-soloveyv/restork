'use strict'

const sequelizePaginate = require('sequelize-paginate')

module.exports = (sequelize, DataTypes) => {
  const hotel = sequelize.define(
    'hotel',
    {
      iHotelID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      sHotelTitle: {
        type: DataTypes.STRING,
        allowNull: false
      },
      // Добавить поле Вид объекта
      iHotelFloorNumber: {
        type: DataTypes.INTEGER,
        defaultValue: 1
      },
      iHotelGuestOnly: {
        // согласен ли путешественник делить объект размещения с другими путешественниками
        type: DataTypes.INTEGER,
        defaultValue: 1
      },
      iHotelBedroomNumber: {
        // число спален
        type: DataTypes.INTEGER,
        defaultValue: 1
      },
      iHotelBedNumber: {
        // число кроватей
        type: DataTypes.INTEGER,
        defaultValue: 1
      },
      iHotelPlaceNumber: {
        // число спальных мест
        type: DataTypes.INTEGER,
        defaultValue: 1
      },
      iHotelPlaceAuxiliary: {
        // дополнительное спальное место
        type: DataTypes.INTEGER,
        defaultValue: 0
      },
      // Добавить поле Адрес
      // Добавить поле Географические координаты
      // Добавить поле Дополнительные удобства
      iHotelDeactivated: {
        // удален ли отель?
        type: DataTypes.INTEGER,
        defaultValue: 0
      },
      iHotelVerified: {
        // прошел ли отель модерацию?
        type: DataTypes.INTEGER,
        defaultValue: 0
      }
    },
    {
      timestamps: false,
      freezeTableName: true,
      tableName: 'hotel'
    }
  )
  hotel.associate = function(models) {}
  sequelizePaginate.paginate(hotel)
  return hotel
}
