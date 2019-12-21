'use strict'

const sequelizePaginate = require('sequelize-paginate')

module.exports = (sequelize, DataTypes) => {
  const Hotel = sequelize.define(
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
      aHotelCoordinate: {
        type: DataTypes.GEOMETRY('POINT')
      },
      iHotelTypeID: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      iHotelFloor: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
      },
      iHotelGuestID: {
        type: DataTypes.INTEGER,
        defaultValue: 1
      },
      iHotelBedroom: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
      },
      iHotelBed: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
      },
      iHotelPlace: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
      },
      iHotelPlaceDop: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      sHotelAddress: {
        type: DataTypes.STRING
      },
      iHotelActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
      },
      iHotelVerification: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }
    },
    {
      timestamps: false,
      freezeTableName: true,
      tableName: 'hotel'
    }
  )
  Hotel.associate = function(models) {
    Hotel.belongsTo(models.hotel_type, {
      foreignKey: 'iHotelTypeID'
    })
    Hotel.belongsTo(models.hotel_guest, {
      foreignKey: 'iHotelGuestID'
    })
    Hotel.hasMany(models.hotel_hotel_option, {
      foreignKey: 'iHotelID'
    })
    Hotel.hasMany(models.hotel_room_option, {
      foreignKey: 'iHotelID'
    })
    Hotel.hasMany(models.hotel_image, {
      foreignKey: 'iHotelID'
    })
  }

  Hotel.getHotel = async function (iHoteID) {
    var hotel = await Hotel.findByPk(iHoteID, {
      include: [
        {
          model: sequelize.models.hotel_type
        },
        {
          model: sequelize.models.hotel_guest
        },
        {
          model: sequelize.models.hotel_hotel_option
        },
        {
          model: sequelize.models.hotel_room_option
        },
        {
          model: sequelize.models.hotel_image
        }
      ]
    })

    hotel = hotel || {}

    hotel.hotel_hotel_options = hotel.hotel_hotel_options || []
    hotel.hotel_room_options = hotel.hotel_room_options || []

    if (hotel.aHotelCoordinate == null) {
      hotel.aHotelCoordinate = {}
      hotel.aHotelCoordinate.type = 'Point'
      hotel.aHotelCoordinate.coordinates = [null, null]
    }

    return hotel
  }


  sequelizePaginate.paginate(Hotel)
  return Hotel
}
