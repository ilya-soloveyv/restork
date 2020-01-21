'use strict'

module.exports = (sequelize, DataTypes) => {
  const ObjectImage = sequelize.define(
    'object_image',
    {
      iObjectImageID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      iObjectID: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      sObjectImage: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      timestamps: false,
      freezeTableName: true,
      tableName: 'object_image'
    }
  )
  ObjectImage.associate = function(models) {
    // associations can be defined here
  }

  return ObjectImage
}
