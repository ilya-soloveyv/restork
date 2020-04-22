'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'application_object',
      [
        {
          iApplicationObjectID: 1,
          iApplicationID: 2,
          iObjectID: 1,
          dDate: '2020-04-10 10:02:04',
          iObjectView: true,
          dObjectViewDate: '2020-04-10 10:03:10',
          iObjectPrice: 5000,
          iUserView: true,
          dUserViewDate: '2020-04-10 10:23:15',
          iUserCancel: false,
          dUserCancelDate: null,
          iUserSelected: false,
          dUserSelectedDate: null
        },
        {
          iApplicationObjectID: 2,
          iApplicationID: 2,
          iObjectID: 3,
          dDate: '2020-04-10 10:02:05',
          iObjectView: true,
          dObjectViewDate: '2020-04-10 10:04:02',
          iObjectPrice: 8000,
          iUserView: true,
          dUserViewDate: '2020-04-10 10:24:40',
          iUserCancel: false,
          dUserCancelDate: null,
          iUserSelected: true,
          dUserSelectedDate: '2020-04-10 10:25:00'
        },
        {
          iApplicationObjectID: 3,
          iApplicationID: 2,
          iObjectID: 6,
          dDate: '2020-04-10 10:02:06',
          iObjectView: false,
          dObjectViewDate: null,
          iObjectPrice: null,
          iUserView: false,
          dUserViewDate: null,
          iUserCancel: false,
          dUserCancelDate: null,
          iUserSelected: false,
          dUserSelectedDate: null
        },
        {
          iApplicationObjectID: 4,
          iApplicationID: 2,
          iObjectID: 7,
          dDate: '2020-04-10 10:12:06',
          iObjectView: true,
          dObjectViewDate: '2020-04-10 10:25:02',
          iObjectPrice: 3500,
          iUserView: false,
          dUserViewDate: null,
          iUserCancel: false,
          dUserCancelDate: null,
          iUserSelected: false,
          dUserSelectedDate: null
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('application_object', null, {})
  }
}
