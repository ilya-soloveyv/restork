'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('hotel', [
      {
        iHotelID: 1,
        sHotelTitle: "AYS Design Hotel Роза Хутор",
        iHotelFloorNumber: 3,
        iHotelGuestOnly: 1,
        iHotelBedroomNumber: 20,
        iHotelBedNumber: 50,
        iHotelPlaceNumber: 100,
        iHotelPlaceAuxiliary: 1,
        iHotelDeactivated: 0,
        iHotelVerified: 0
      },
      {
        iHotelID: 2,
        sHotelTitle: "Medical Spa Hotel Rosa Springs",
        iHotelFloorNumber: 5,
        iHotelGuestOnly: 1,
        iHotelBedroomNumber: 30,
        iHotelBedNumber: 70,
        iHotelPlaceNumber: 200,
        iHotelPlaceAuxiliary: 1,
        iHotelDeactivated: 0,
        iHotelVerified: 1
      },
      {
        iHotelID: 3,
        sHotelTitle: "Роза Ски Инн",
        iHotelFloorNumber: 2,
        iHotelGuestOnly: 0,
        iHotelBedroomNumber: 40,
        iHotelBedNumber: 90,
        iHotelPlaceNumber: 150,
        iHotelPlaceAuxiliary: 0,
        iHotelDeactivated: 1,
        iHotelVerified: 1
      },
      {
        iHotelID: 4,
        sHotelTitle: "Спа Отель Грейс Империал",
        iHotelFloorNumber: 7,
        iHotelGuestOnly: 0,
        iHotelBedroomNumber: 80,
        iHotelBedNumber: 200,
        iHotelPlaceNumber: 400,
        iHotelPlaceAuxiliary: 0,
        iHotelDeactivated: 1,
        iHotelVerified: 0
      },
      {
        iHotelID: 5,
        sHotelTitle: "Отель У Лукоморья",
        iHotelFloorNumber: 2,
        iHotelGuestOnly: 1,
        iHotelBedroomNumber: 10,
        iHotelBedNumber: 30,
        iHotelPlaceNumber: 130,
        iHotelPlaceAuxiliary: 1,
        iHotelDeactivated: 0,
        iHotelVerified: 1
      },
      {
        iHotelID: 6,
        sHotelTitle: "ABC-Hostel",
        iHotelFloorNumber: 3,
        iHotelGuestOnly: 0,
        iHotelBedroomNumber: 15,
        iHotelBedNumber: 40,
        iHotelPlaceNumber: 120,
        iHotelPlaceAuxiliary: 1,
        iHotelDeactivated: 0,
        iHotelVerified: 0
      },
      {
        iHotelID: 7,
        sHotelTitle: "Отель Гала Плаза",
        iHotelFloorNumber: 10,
        iHotelGuestOnly: 1,
        iHotelBedroomNumber: 60,
        iHotelBedNumber: 150,
        iHotelPlaceNumber: 400,
        iHotelPlaceAuxiliary: 1,
        iHotelDeactivated: 0,
        iHotelVerified: 1
      },
      {
        iHotelID: 8,
        sHotelTitle: "Отель Олимп",
        iHotelFloorNumber: 4,
        iHotelGuestOnly: 1,
        iHotelBedroomNumber: 80,
        iHotelBedNumber: 150,
        iHotelPlaceNumber: 300,
        iHotelPlaceAuxiliary: 0,
        iHotelDeactivated: 1,
        iHotelVerified: 0
      },
      {
        iHotelID: 9,
        sHotelTitle: "Skypark",
        iHotelFloorNumber: 3,
        iHotelGuestOnly: 1,
        iHotelBedroomNumber: 120,
        iHotelBedNumber: 250,
        iHotelPlaceNumber: 1000,
        iHotelPlaceAuxiliary: 1,
        iHotelDeactivated: 1,
        iHotelVerified: 0
      },
      {
        iHotelID: 10,
        sHotelTitle: "Приют Панды ",
        iHotelFloorNumber: 8,
        iHotelGuestOnly: 1,
        iHotelBedroomNumber: 60,
        iHotelBedNumber: 140,
        iHotelPlaceNumber: 200,
        iHotelPlaceAuxiliary: 1,
        iHotelDeactivated: 0,
        iHotelVerified: 1
      }

    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('hotel', null, {})
  }
};
