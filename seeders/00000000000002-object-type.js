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
          iObjectTypeSort: 9999,
          iObjectTypeActive: true,
          iRoomPermission: false
        },
        {
          iObjectTypeID: 2,
          iObjectTypeGroupID: 1,
          sObjectTypeTitle: 'Дом',
          iObjectTypeSort: 1000,
          iObjectTypeActive: true,
          iRoomPermission: false
        },
        {
          iObjectTypeID: 3,
          iObjectTypeGroupID: 1,
          sObjectTypeTitle: 'Вилла',
          iObjectTypeSort: 9999,
          iObjectTypeActive: true,
          iRoomPermission: false
        },
        {
          iObjectTypeID: 4,
          iObjectTypeGroupID: 1,
          sObjectTypeTitle: 'Таунхаус',
          iObjectTypeSort: 9999,
          iObjectTypeActive: false,
          iRoomPermission: false
        },
        {
          iObjectTypeID: 5,
          iObjectTypeGroupID: 1,
          sObjectTypeTitle: 'Апартаменты',
          iObjectTypeSort: 9999,
          iObjectTypeActive: true,
          iRoomPermission: false
        },
        {
          iObjectTypeID: 6,
          iObjectTypeGroupID: 1,
          sObjectTypeTitle: 'Квартира',
          iObjectTypeSort: 9999,
          iObjectTypeActive: true,
          iRoomPermission: false
        },
        {
          iObjectTypeID: 7,
          iObjectTypeGroupID: 2,
          sObjectTypeTitle: 'Отель',
          iObjectTypeSort: 9999,
          iObjectTypeActive: true,
          iRoomPermission: true
        },
        {
          iObjectTypeID: 8,
          iObjectTypeGroupID: 2,
          sObjectTypeTitle: 'Гостиница',
          iObjectTypeSort: 9999,
          iObjectTypeActive: true,
          iRoomPermission: true
        },
        {
          iObjectTypeID: 9,
          iObjectTypeGroupID: 3,
          sObjectTypeTitle: 'Хостел',
          iObjectTypeSort: 9999,
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
