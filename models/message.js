'use strict'

module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define(
    'message',
    {
      iMessageID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      iApplicationObjectID: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      iUserID: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      tMessageText: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      dDate: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
      }
    },
    {
      timestamps: false,
      freezeTableName: true,
      tableName: 'message'
    }
  )

  Message.associate = function(models) {
    Message.belongsTo(models.user, {
      foreignKey: 'iUserID'
    })
    Message.belongsTo(models.application_object, {
      foreignKey: 'iApplicationObjectID'
    })
  }

  Message.get = async function({ iApplicationObjectID }) {
    let response = []
    iApplicationObjectID = iApplicationObjectID || false
    if (iApplicationObjectID) {
      response = await Message.findAll({
        where: {
          iApplicationObjectID
        },
        order: [['dDate', 'ASC']]
      })
    }
    return response
  }

  Message.add = async function({
    iApplicationObjectID,
    iUserID,
    tMessageText
  }) {
    const response = await Message.create({
      iApplicationObjectID,
      iUserID,
      tMessageText
    })
    return response
  }

  return Message
}
