'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'object_image',
      [
        {
          iObjectImageID: 1,
          iObjectID: 3,
          sObjectImage: '1.jpg'
        },
        {
          iObjectImageID: 2,
          iObjectID: 3,
          sObjectImage: '2.jpg'
        },
        {
          iObjectImageID: 3,
          iObjectID: 3,
          sObjectImage: '3.jpg'
        },
        {
          iObjectImageID: 4,
          iObjectID: 3,
          sObjectImage: '4.jpg'
        },
        {
          iObjectImageID: 5,
          iObjectID: 3,
          sObjectImage: '5.jpg'
        },
        {
          iObjectImageID: 6,
          iObjectID: 3,
          sObjectImage: '6.jpg'
        },
        {
          iObjectImageID: 7,
          iObjectID: 3,
          sObjectImage: '7.jpg'
        },
        {
          iObjectImageID: 8,
          iObjectID: 3,
          sObjectImage: '8.jpg'
        },
        {
          iObjectImageID: 9,
          iObjectID: 3,
          sObjectImage: '9.jpg'
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('object_image', null, {})
  }
}
