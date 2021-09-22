'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'object_option',
      [
        {
          iObjectOptionID: 1,
          sObjectOptionTitle: 'Бассейн',
          iObjectOptionSort: 9999,
          iObjectOptionActive: true,
          sObjectOptionIcon: 'swimming-pool.svg',
          sObjectOptionDesc: null
        },
        {
          iObjectOptionID: 2,
          sObjectOptionTitle: 'Мангальная зона',
          iObjectOptionSort: 9999,
          iObjectOptionActive: true,
          sObjectOptionIcon: 'bbq.svg',
          sObjectOptionDesc: 'гости любят проводить за готовкой еды на мангале'
        },
        {
          iObjectOptionID: 3,
          sObjectOptionTitle: 'Детская площадка',
          iObjectOptionSort: 9999,
          iObjectOptionActive: true,
          sObjectOptionIcon: 'playground.svg',
          sObjectOptionDesc:
            'гости будут рады наличию места где будут проводить время их дети'
        },
        {
          iObjectOptionID: 4,
          sObjectOptionTitle: 'Парковка',
          iObjectOptionSort: 9999,
          iObjectOptionActive: true,
          sObjectOptionIcon: 'bicycle-parking.svg',
          sObjectOptionDesc:
            'предоставьте гостям, путешествующим на автомобиле, парковочное место'
        },
        {
          iObjectOptionID: 5,
          sObjectOptionTitle: 'Кухня общая',
          iObjectOptionSort: 9999,
          iObjectOptionActive: true,
          sObjectOptionIcon: 'kitchen.svg',
          sObjectOptionDesc: null
        },
        {
          iObjectOptionID: 6,
          sObjectOptionTitle: 'Wi-Fi',
          iObjectOptionSort: 9999,
          iObjectOptionActive: true,
          sObjectOptionIcon: 'wireless-router.svg',
          sObjectOptionDesc: null
        },
        {
          iObjectOptionID: 7,
          sObjectOptionTitle: 'Аптечка',
          iObjectOptionSort: 9999,
          iObjectOptionActive: true,
          sObjectOptionIcon: 'hospital.svg',
          sObjectOptionDesc: null
        },
        {
          iObjectOptionID: 8,
          sObjectOptionTitle: 'Кафе или ресторан',
          iObjectOptionSort: 9999,
          iObjectOptionActive: true,
          sObjectOptionIcon: 'food.svg',
          sObjectOptionDesc: null
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('object_option', null, {})
  }
}
