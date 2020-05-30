'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'object_option',
      [
        {
          iObjectOptionID: 1,
          sObjectOptionTitle: 'Зона мангала',
          iObjectOptionSort: 9999,
          iObjectOptionActive: true
        },
        {
          iObjectOptionID: 2,
          sObjectOptionTitle: 'Бассейн',
          iObjectOptionSort: 1000,
          iObjectOptionActive: true
        },
        {
          iObjectOptionID: 3,
          sObjectOptionTitle: 'Детская площадка',
          iObjectOptionSort: 9999,
          iObjectOptionActive: true
        },
        {
          iObjectOptionID: 4,
          sObjectOptionTitle: 'Общая кухня',
          iObjectOptionSort: 9999,
          iObjectOptionActive: false
        },
        {
          iObjectOptionID: 5,
          sObjectOptionTitle: 'Парковка',
          iObjectOptionSort: 9999,
          iObjectOptionActive: true
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('object_option', null, {})
  }
}
