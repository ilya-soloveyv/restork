'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'object_place',
      [
        {
          iObjectPlaceID: 1,
          iObjectID: 7,
          iPlaceID: 1,
          sPlaceTitle: null,
          iPlaceDistance: 350
        },
        {
          iObjectPlaceID: 2,
          iObjectID: 7,
          iPlaceID: 3,
          sPlaceTitle: 'Бирюзовое озеро',
          iPlaceDistance: 200
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('object_place', null, {})
  }
}
