'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'object_feature',
      [
        {
          iObjectFeatureID: 1,
          iObjectID: 7,
          iFeatureID: 1
        },
        {
          iObjectFeatureID: 2,
          iObjectID: 7,
          iFeatureID: 4
        },
        {
          iObjectFeatureID: 3,
          iObjectID: 7,
          iFeatureID: 5
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('object_feature', null, {})
  }
}
