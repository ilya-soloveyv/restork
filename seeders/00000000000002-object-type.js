'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'object_type',
      [
        {
          iObjectTypeID: 1,
          sObjectTypeTitle: 'Дом',
          iObjectTypeSort: 9999,
          iObjectTypeActive: true,
          iRoomPermission: false
        },
        {
          iObjectTypeID: 2,
          sObjectTypeTitle: 'Коттедж',
          iObjectTypeSort: 1000,
          iObjectTypeActive: true,
          iRoomPermission: false
        },
        {
          iObjectTypeID: 3,
          sObjectTypeTitle: 'Вилла',
          iObjectTypeSort: 9999,
          iObjectTypeActive: true,
          iRoomPermission: false
        },
        {
          iObjectTypeID: 4,
          sObjectTypeTitle: 'Квартира',
          iObjectTypeSort: 9999,
          iObjectTypeActive: false,
          iRoomPermission: false
        },
        {
          iObjectTypeID: 5,
          sObjectTypeTitle: 'Апартаменты',
          iObjectTypeSort: 9999,
          iObjectTypeActive: true,
          iRoomPermission: false
        },
        {
          iObjectTypeID: 6,
          sObjectTypeTitle: 'Таунхаус',
          iObjectTypeSort: 9999,
          iObjectTypeActive: true,
          iRoomPermission: false
        },
        {
          iObjectTypeID: 7,
          sObjectTypeTitle: 'Отель',
          iObjectTypeSort: 9999,
          iObjectTypeActive: true,
          iRoomPermission: true
        },
        {
          iObjectTypeID: 8,
          sObjectTypeTitle: 'Гостиница',
          iObjectTypeSort: 9999,
          iObjectTypeActive: true,
          iRoomPermission: true
        },
        {
          iObjectTypeID: 9,
          sObjectTypeTitle: 'Мини-гостиница',
          iObjectTypeSort: 9999,
          iObjectTypeActive: true,
          iRoomPermission: true
        },
        {
          iObjectTypeID: 10,
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
