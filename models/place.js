'use strict'

module.exports = (sequelize, DataTypes) => {
  const Place = sequelize.define(
    'place',
    {
      iPlaceID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      sPlaceTitle: {
        allowNull: false,
        type: DataTypes.STRING
      },
      iPlaceSort: {
        allowNull: false,
        type: DataTypes.INTEGER,
        defaultValue: 9999
      },
      iPlaceActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
      }
    },
    {
      timestamps: false,
      freezeTableName: true,
      tableName: 'place'
    }
  )
  Place.associate = function(models) {
    // associations can be defined here
  }

  Place.list = async function() {
    const places = await Place.findAll({
      order: [
        ['iPlaceActive', 'DESC'],
        ['iPlaceSort', 'ASC'],
        ['iPlaceID', 'ASC']
      ]
    })
    return places
  }

  return Place
}
