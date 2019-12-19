'use strict'

module.exports = (sequelize, DataTypes) => {
  const HotelType = sequelize.define(
    'hotel_type',
    {
      iHotelTypeID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      sHotelTypeTitle: {
        allowNull: false,
        type: DataTypes.STRING
      },
      iHotelTypeSort: {
        allowNull: false,
        type: DataTypes.INTEGER,
        defaultValue: 9999
      },
      iHotelTypeActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
      }
    },
    {
      timestamps: false,
      freezeTableName: true,
      tableName: 'hotel_type'
    }
  )
  HotelType.associate = function(models) {
    // associations can be defined here
  }
  return HotelType
}
