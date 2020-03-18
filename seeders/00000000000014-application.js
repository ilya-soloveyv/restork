'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'application',
      [
        {
          iApplicationID: 1,
          iUserID: 1,
          sApplicationAddress: 'Красная поляна',
          aApplicationCoordinate: Sequelize.fn(
            'ST_GeomFromText',
            'POINT(43.6636072 40.3143871)'
          ),
          dApplicationDateFrom: '2020-03-15',
          dApplicationDateTo: '2020-03-17',
          iApplicationAdult: 1,
          iApplicationChild: 0,
          dApplicationDate: '2020-03-14',
          iActive: true
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('application', null, {})
  }
}
