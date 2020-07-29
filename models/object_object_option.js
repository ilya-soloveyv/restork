'use strict'

module.exports = (sequelize, DataTypes) => {
  const ObjectObjectOption = sequelize.define(
    'object_object_option',
    {
      iObjectObjectOptionID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      iObjectID: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      iObjectOptionID: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {
      timestamps: false,
      freezeTableName: true,
      tableName: 'object_object_option'
    }
  )
  ObjectObjectOption.associate = function(models) {
    ObjectObjectOption.belongsTo(models.object_option, {
      foreignKey: 'iObjectOptionID'
    })
  }

  return ObjectObjectOption
}
