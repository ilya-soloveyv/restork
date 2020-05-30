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
          sApplicationCountry: 'Россия',
          sApplicationState: 'Краснодарский край',
          sApplicationCity: 'посёлок городского типа Красная Поляна',
          dApplicationDateFrom: '2020-03-15',
          dApplicationDateTo: '2020-03-17',
          iApplicationAdult: 1,
          iApplicationChild: 0,
          dDate: '2020-03-14',
          iActive: true,
          iObjectID: null,
          iSearchRadius: 0
        },
        {
          iApplicationID: 2,
          iUserID: 1,
          sApplicationAddress:
            'Россия, Краснодарский край, Сочи, подъёмник-гондола K1, Красная Поляна',
          aApplicationCoordinate: Sequelize.fn(
            'ST_GeomFromText',
            'POINT(43.669088 40.25923)'
          ),
          sApplicationCountry: 'Россия',
          sApplicationState: 'Краснодарский край',
          sApplicationCity: 'Сочи',
          dApplicationDateFrom: '2020-04-20',
          dApplicationDateTo: '2020-04-23',
          iApplicationAdult: 2,
          iApplicationChild: 0,
          dDate: '2020-04-10',
          iActive: true,
          iObjectID: 3,
          iSearchRadius: 2
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('application', null, {})
  }
}
