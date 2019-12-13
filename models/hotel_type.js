'use strict'

const sequelizePaginate = require('sequelize-paginate')

module.exports = (sequelize, DataTypes) => {
  const hotelType = sequelize.define(
    'hotel_type',
    {
      iHotelTypeID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      sHotelTypeName: {
        allowNull: false,
        type: DataTypes.STRING
      },
      iHotelTypeDeactivated: {
        // удален ли тип размещения?
        type: DataTypes.INTEGER,
        defaultValue: 0
      }
    },
    {
      timestamps: false,
      freezeTableName: true,
      tableName: 'hotel_type'
    }
  )
  hotelType.associate = function(models) {
    // associations can be defined here
  }
  sequelizePaginate.paginate(hotelType)
  return hotelType
}
