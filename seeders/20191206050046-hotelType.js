'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('hotel_type', [
      {
        iHotelTypeID: 1,
        sHotelTypeName: "аппартаменты",
        iHotelTypeDeactivated: 0,
      },
      {
        iHotelTypeID: 2,
        sHotelTypeName: "отель",
        iHotelTypeDeactivated: 0,
      },
      {
        iHotelTypeID: 3,
        sHotelTypeName: "гостевой дом",
        iHotelTypeDeactivated: 0,
      },
      {
        iHotelTypeID: 4,
        sHotelTypeName: "тест1",
        iHotelTypeDeactivated: 1,
      },
      {
        iHotelTypeID: 5,
        sHotelTypeName: "тест2",
        iHotelTypeDeactivated: 0,
      },
      {
        iHotelTypeID: 6,
        sHotelTypeName: "тест3",
        iHotelTypeDeactivated: 1,
      },
      {
        iHotelTypeID: 7,
        sHotelTypeName: "тест4",
        iHotelTypeDeactivated: 0,
      },
      {
        iHotelTypeID: 8,
        sHotelTypeName: "тест5",
        iHotelTypeDeactivated: 0,
      },
      {
        iHotelTypeID: 9,
        sHotelTypeName: "тест6",
        iHotelTypeDeactivated: 0,
      },
      

    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('hotel_type', null, {})
  }
};
