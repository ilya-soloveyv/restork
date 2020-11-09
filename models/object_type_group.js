'use strict'

module.exports = (sequelize, DataTypes) => {
  const ObjectTypeGroup = sequelize.define(
    'objectTypeGroup',
    {
      iObjectTypeGroupID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      sObjectTypeGroupTitle: {
        allowNull: false,
        type: DataTypes.STRING
      },
      iObjectTypeGroupSort: {
        allowNull: false,
        type: DataTypes.INTEGER,
        defaultValue: 9999
      },
      iObjectTypeGroupActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
      }
    },
    {
      timestamps: false,
      freezeTableName: true,
      tableName: 'object_type_group'
    }
  )
  ObjectTypeGroup.associate = function(models) {}

  ObjectTypeGroup.list = async function() {
    const response = await ObjectTypeGroup.findAll({
      order: [
        ['iObjectTypeGroupActive', 'DESC'],
        ['iObjectTypeGroupSort', 'ASC'],
        ['iObjectTypeGroupID', 'ASC']
      ]
    })
    return response
  }

  ObjectTypeGroup.item = async function(iObjectTypeGroupID) {
    const response = await ObjectTypeGroup.findByPk(iObjectTypeGroupID)
    return response
  }

  ObjectTypeGroup.up = async function({
    iObjectTypeGroupID = false,
    sObjectTypeGroupTitle = null,
    iObjectTypeGroupSort = 9999,
    iObjectTypeGroupActive = false
  }) {
    if (iObjectTypeGroupID) {
      await ObjectTypeGroup.update(
        {
          sObjectTypeGroupTitle,
          iObjectTypeGroupSort,
          iObjectTypeGroupActive
        },
        {
          where: {
            iObjectTypeGroupID
          }
        }
      )
    } else {
      const response = await ObjectTypeGroup.create({
        sObjectTypeGroupTitle,
        iObjectTypeGroupSort,
        iObjectTypeGroupActive
      })
      iObjectTypeGroupID = response.iObjectTypeGroupID
    }
    const response = await ObjectTypeGroup.item(iObjectTypeGroupID)
    return response
  }

  ObjectTypeGroup.delete = async function(iObjectTypeGroupID) {
    const response = await ObjectTypeGroup.destroy({
      where: {
        iObjectTypeGroupID
      }
    })
    return response
  }

  return ObjectTypeGroup
}
