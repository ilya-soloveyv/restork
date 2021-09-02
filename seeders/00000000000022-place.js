'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'place',
      [
        {
          iPlaceID: 1,
          sPlaceTitle: 'Центр города',
          iPlaceSort: 9999,
          iPlaceActive: true
        },
        {
          iPlaceID: 2,
          sPlaceTitle: 'Море',
          iPlaceSort: 9999,
          iPlaceActive: true
        },
        {
          iPlaceID: 3,
          sPlaceTitle: 'Озеро',
          iPlaceSort: 9999,
          iPlaceActive: true
        },
        {
          iPlaceID: 4,
          sPlaceTitle: 'Река',
          iPlaceSort: 9999,
          iPlaceActive: true
        },
        {
          iPlaceID: 5,
          sPlaceTitle: 'Горнолыжный курорт',
          iPlaceSort: 9999,
          iPlaceActive: true
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('place', null, {})
  }
}
