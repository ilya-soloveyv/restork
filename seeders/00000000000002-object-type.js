'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'object_type',
      [
        {
          iObjectTypeID: 1,
          iObjectTypeGroupID: 1,
          sObjectTypeTitle: 'Коттедж',
          iObjectTypeSort: 1,
          iObjectTypeActive: true,
          iRoomPermission: false
        },
        {
          iObjectTypeID: 2,
          iObjectTypeGroupID: 1,
          sObjectTypeTitle: 'Дом',
          iObjectTypeSort: 2,
          iObjectTypeActive: true,
          iRoomPermission: false
        },
        {
          iObjectTypeID: 3,
          iObjectTypeGroupID: 1,
          sObjectTypeTitle: 'Вилла',
          iObjectTypeSort: 3,
          iObjectTypeActive: true,
          iRoomPermission: false
        },
        {
          iObjectTypeID: 4,
          iObjectTypeGroupID: 1,
          sObjectTypeTitle: 'Апартаменты',
          iObjectTypeSort: 4,
          iObjectTypeActive: true,
          iRoomPermission: false
        },
        {
          iObjectTypeID: 5,
          iObjectTypeGroupID: 1,
          sObjectTypeTitle: 'Квартира',
          iObjectTypeSort: 5,
          iObjectTypeActive: true,
          iRoomPermission: false
        },
        {
          iObjectTypeID: 6,
          iObjectTypeGroupID: 2,
          sObjectTypeTitle: 'Отель',
          iObjectTypeSort: 6,
          iObjectTypeActive: true,
          iRoomPermission: true
        },
        {
          iObjectTypeID: 7,
          iObjectTypeGroupID: 2,
          sObjectTypeTitle: 'Гостиница',
          iObjectTypeSort: 7,
          iObjectTypeActive: true,
          iRoomPermission: true
        },
        {
          iObjectTypeID: 8,
          iObjectTypeGroupID: 3,
          sObjectTypeTitle: 'Хостел',
          iObjectTypeSort: 8,
          iObjectTypeActive: true,
          iRoomPermission: true
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('object_type', null, {})
  }
}
