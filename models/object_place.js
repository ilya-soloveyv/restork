'use strict'

module.exports = (sequelize, DataTypes) => {
  const ObjectPlace = sequelize.define(
    'object_place',
    {
      iObjectPlaceID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      iObjectID: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      iPlaceID: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      sPlaceTitle: {
        type: DataTypes.STRING,
        allowNull: true
      },
      iPlaceDistance: {
        type: DataTypes.INTEGER,
        allowNull: true
      }
    },
    {
      timestamps: false,
      freezeTableName: true,
      tableName: 'object_place'
    }
  )
  ObjectPlace.associate = function(models) {
    ObjectPlace.belongsTo(models.place, {
      foreignKey: 'iPlaceID'
    })
  }

  return ObjectPlace
}
