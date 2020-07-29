'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'message',
      [
        {
          iMessageID: 1,
          iApplicationObjectID: 2,
          iUserID: 1,
          tMessageText: 'Первое сообщение',
          dDate: '2020-06-16 10:02:04'
        },
        {
          iMessageID: 2,
          iApplicationObjectID: 2,
          iUserID: 2,
          tMessageText: 'Второе сообщение',
          dDate: '2020-06-16 10:05:04'
        },
        {
          iMessageID: 3,
          iApplicationObjectID: 1,
          iUserID: 1,
          tMessageText: 'Третье сообщение',
          dDate: '2020-06-16 10:09:04'
        },
        {
          iMessageID: 4,
          iApplicationObjectID: 2,
          iUserID: 2,
          tMessageText: 'Четвертое сообщение',
          dDate: '2020-06-16 11:09:04'
        },
        {
          iMessageID: 5,
          iApplicationObjectID: 2,
          iUserID: 1,
          tMessageText: 'Пятое сообщение',
          dDate: '2020-06-16 12:09:04'
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('message', null, {})
  }
}
