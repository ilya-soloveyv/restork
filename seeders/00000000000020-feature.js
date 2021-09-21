'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'feature',
      [
        {
          iFeatureID: 1,
          sFeatureTitle: 'Можно с животными',
          iFeatureSort: 9999,
          iFeatureActive: true,
          sFeatureOptionIcon: 'dog.svg',
          sFeatureOptionDesc: 'иногда гости путешествуют с домашними животными'
        },
        {
          iFeatureID: 2,
          sFeatureTitle: 'Есть место для курения',
          iFeatureSort: 9999,
          iFeatureActive: true,
          sFeatureOptionIcon: 'smoke.svg',
          sFeatureOptionDesc: null
        },
        {
          iFeatureID: 3,
          sFeatureTitle: 'Уборка',
          iFeatureSort: 9999,
          iFeatureActive: true,
          sFeatureOptionIcon: 'cleaning.svg',
          sFeatureOptionDesc: 'вы можете платно или бесплатно предоставлять гостям услугу уборки жилья в течении их отдыха'
        },
        {
          iFeatureID: 4,
          sFeatureTitle: 'Услуги прачечной',
          iFeatureSort: 9999,
          iFeatureActive: true,
          sFeatureOptionIcon: 'person.svg',
          sFeatureOptionDesc: null
        },
        {
          iFeatureID: 5,
          sFeatureTitle: 'Смена постельного белья',
          iFeatureSort: 9999,
          iFeatureActive: true,
          sFeatureOptionIcon: 'blanket.svg',
          sFeatureOptionDesc: null
        },
        {
          iFeatureID: 6,
          sFeatureTitle: 'Смена полотенец',
          iFeatureSort: 9999,
          iFeatureActive: true,
          sFeatureOptionIcon: 'hanger.svg',
          sFeatureOptionDesc: null
        },
        {
          iFeatureID: 7,
          sFeatureTitle: 'Завтраки',
          iFeatureSort: 9999,
          iFeatureActive: true,
          sFeatureOptionIcon: 'breakfast.svg',
          sFeatureOptionDesc: null
        },
        {
          iFeatureID: 8,
          sFeatureTitle: 'Трансфер',
          iFeatureSort: 9999,
          iFeatureActive: true,
          sFeatureOptionIcon: 'bus.svg',
          sFeatureOptionDesc: null
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('feature', null, {})
  }
}
