'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'object_image',
      [
        {
          iObjectImageID: 1,
          iObjectID: 3,
          sObjectImage: '1.jpg',
          iObjectImageSort: 9999,
          iObjectImageIndex: false
        },
        {
          iObjectImageID: 2,
          iObjectID: 3,
          sObjectImage: '2.jpg',
          iObjectImageSort: 9999,
          iObjectImageIndex: false
        },
        {
          iObjectImageID: 3,
          iObjectID: 3,
          sObjectImage: '3.jpg',
          iObjectImageSort: 9999,
          iObjectImageIndex: false
        },
        {
          iObjectImageID: 4,
          iObjectID: 3,
          sObjectImage: '4.jpg',
          iObjectImageSort: 9999,
          iObjectImageIndex: false
        },
        {
          iObjectImageID: 5,
          iObjectID: 3,
          sObjectImage: '5.jpg',
          iObjectImageSort: 9999,
          iObjectImageIndex: false
        },
        {
          iObjectImageID: 6,
          iObjectID: 3,
          sObjectImage: '6.jpg',
          iObjectImageSort: 9999,
          iObjectImageIndex: false
        },
        {
          iObjectImageID: 7,
          iObjectID: 3,
          sObjectImage: '7.jpg',
          iObjectImageSort: 9999,
          iObjectImageIndex: false
        },
        {
          iObjectImageID: 8,
          iObjectID: 3,
          sObjectImage: '8.jpg',
          iObjectImageSort: 9999,
          iObjectImageIndex: false
        },
        {
          iObjectImageID: 9,
          iObjectID: 3,
          sObjectImage: '9.jpg',
          iObjectImageSort: 9999,
          iObjectImageIndex: false
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('object_image', null, {})
  }
}
