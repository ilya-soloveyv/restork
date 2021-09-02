'use strict'

module.exports = (sequelize, DataTypes) => {
  const ObjectFeature = sequelize.define(
    'object_feature',
    {
      iObjectFeatureID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      iObjectID: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      iFeatureID: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {
      timestamps: false,
      freezeTableName: true,
      tableName: 'object_feature'
    }
  )
  ObjectFeature.associate = function(models) {
    ObjectFeature.belongsTo(models.feature, {
      foreignKey: 'iFeatureID'
    })
  }

  return ObjectFeature
}
