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
          iFeatureActive: true
        },
        {
          iFeatureID: 2,
          sFeatureTitle: 'Есть место для курения',
          iFeatureSort: 9999,
          iFeatureActive: true
        },
        {
          iFeatureID: 3,
          sFeatureTitle: 'Уборка',
          iFeatureSort: 9999,
          iFeatureActive: true
        },
        {
          iFeatureID: 4,
          sFeatureTitle: 'Услуги прачечной',
          iFeatureSort: 9999,
          iFeatureActive: true
        },
        {
          iFeatureID: 5,
          sFeatureTitle: 'Смена постельного белья',
          iFeatureSort: 9999,
          iFeatureActive: true
        },
        {
          iFeatureID: 6,
          sFeatureTitle: 'Смена полотенец',
          iFeatureSort: 9999,
          iFeatureActive: true
        },
        {
          iFeatureID: 7,
          sFeatureTitle: 'Завтраки',
          iFeatureSort: 9999,
          iFeatureActive: true
        },
        {
          iFeatureID: 8,
          sFeatureTitle: 'Трансфер',
          iFeatureSort: 9999,
          iFeatureActive: true
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('feature', null, {})
  }
}
