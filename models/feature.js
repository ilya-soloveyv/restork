'use strict'

module.exports = (sequelize, DataTypes) => {
  const Feature = sequelize.define(
    'feature',
    {
      iFeatureID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      sFeatureTitle: {
        allowNull: false,
        type: DataTypes.STRING
      },
      iFeatureSort: {
        allowNull: false,
        type: DataTypes.INTEGER,
        defaultValue: 9999
      },
      iFeatureActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
      }
    },
    {
      timestamps: false,
      freezeTableName: true,
      tableName: 'feature'
    }
  )
  Feature.associate = function(models) {
    // associations can be defined here
  }

  Feature.list = async function() {
    const features = await Feature.findAll({
      order: [
        ['iFeatureActive', 'DESC'],
        ['iFeatureSort', 'ASC'],
        ['iFeatureID', 'ASC']
      ]
    })
    return features
  }

  return Feature
}
