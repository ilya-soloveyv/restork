'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'object_type_group',
      [
        {
          iObjectTypeGroupID: 1,
          sObjectTypeGroupTitle: 'Жилье целиком',
          iObjectTypeGroupSort: 1,
          iObjectTypeGroupActive: true
        },
        {
          iObjectTypeGroupID: 2,
          sObjectTypeGroupTitle: 'Номер в отеле',
          iObjectTypeGroupSort: 2,
          iObjectTypeGroupActive: true
        },
        {
          iObjectTypeGroupID: 3,
          sObjectTypeGroupTitle: 'Место в комнате',
          iObjectTypeGroupSort: 4,
          iObjectTypeGroupActive: false
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('object_type_group', null, {})
  }
}
