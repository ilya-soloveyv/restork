'use strict'

module.exports = (sequelize, DataTypes) => {
  const HotelImage = sequelize.define(
    'hotel_image',
    {
      iHotelImageID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      iHotelID: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      sHotelImage: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      timestamps: false,
      freezeTableName: true,
      tableName: 'hotel_image'
    }
  )
  HotelImage.associate = function(models) {
    // associations can be defined here
  }

  return HotelImage
}
