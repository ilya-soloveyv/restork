'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'hotel',
      [
        {
          iHotelID: 1,
          sHotelTitle: 'AYS Design Hotel Роза Хутор',
          aHotelCoordinate: null,
          iHotelTypeID: 1,
          iHotelFloor: 1,
          iHotelGuestID: 1,
          iHotelBedroom: 20,
          iHotelBed: 50,
          iHotelPlace: 100,
          iHotelPlaceDop: 1,
          sHotelAddress: null,
          iHotelActive: true,
          iHotelVerification: true
        },
        {
          iHotelID: 2,
          sHotelTitle: 'Medical Spa Hotel Rosa Springs',
          aHotelCoordinate: null,
          iHotelTypeID: 3,
          iHotelFloor: 2,
          iHotelGuestID: 1,
          iHotelBedroom: 20,
          iHotelBed: 50,
          iHotelPlace: 100,
          iHotelPlaceDop: 1,
          sHotelAddress: null,
          iHotelActive: true,
          iHotelVerification: true
        },
        {
          iHotelID: 3,
          sHotelTitle: 'Роза Ски Инн',
          aHotelCoordinate: Sequelize.fn('ST_GeomFromText', 'POINT(43.67726160215207 40.20679698684688)'),
          iHotelTypeID: 2,
          iHotelFloor: 4,
          iHotelGuestID: 2,
          iHotelBedroom: 20,
          iHotelBed: 50,
          iHotelPlace: 100,
          iHotelPlaceDop: 1,
          sHotelAddress: 'Россия, Сочи, Красная поляна',
          iHotelActive: true,
          iHotelVerification: false
        },
        {
          iHotelID: 4,
          sHotelTitle: 'Спа Отель Грейс Империал',
          aHotelCoordinate: null,
          iHotelTypeID: 2,
          iHotelFloor: 1,
          iHotelGuestID: 1,
          iHotelBedroom: 20,
          iHotelBed: 50,
          iHotelPlace: 100,
          iHotelPlaceDop: 1,
          sHotelAddress: null,
          iHotelActive: true,
          iHotelVerification: true
        },
        {
          iHotelID: 5,
          sHotelTitle: 'Отель У Лукоморья',
          aHotelCoordinate: null,
          iHotelTypeID: 3,
          iHotelFloor: 3,
          iHotelGuestID: 1,
          iHotelBedroom: 20,
          iHotelBed: 50,
          iHotelPlace: 100,
          iHotelPlaceDop: 1,
          sHotelAddress: null,
          iHotelActive: false,
          iHotelVerification: true
        },
        {
          iHotelID: 6,
          sHotelTitle: 'ABC-Hostel',
          aHotelCoordinate: null,
          iHotelTypeID: 4,
          iHotelFloor: 1,
          iHotelGuestID: 1,
          iHotelBedroom: 20,
          iHotelBed: 50,
          iHotelPlace: 100,
          iHotelPlaceDop: 1,
          sHotelAddress: null,
          iHotelActive: true,
          iHotelVerification: true
        },
        {
          iHotelID: 7,
          sHotelTitle: 'Отель Гала Плаза',
          aHotelCoordinate: null,
          iHotelTypeID: 1,
          iHotelFloor: 8,
          iHotelGuestID: 1,
          iHotelBedroom: 20,
          iHotelBed: 50,
          iHotelPlace: 100,
          iHotelPlaceDop: 1,
          sHotelAddress: null,
          iHotelActive: true,
          iHotelVerification: true
        },
        {
          iHotelID: 8,
          sHotelTitle: 'Отель Олимп',
          aHotelCoordinate: null,
          iHotelTypeID: 2,
          iHotelFloor: 4,
          iHotelGuestID: 1,
          iHotelBedroom: 20,
          iHotelBed: 50,
          iHotelPlace: 100,
          iHotelPlaceDop: 1,
          sHotelAddress: null,
          iHotelActive: false,
          iHotelVerification: true
        },
        {
          iHotelID: 9,
          sHotelTitle: 'Skypark',
          aHotelCoordinate: null,
          iHotelTypeID: 3,
          iHotelFloor: 9,
          iHotelGuestID: 1,
          iHotelBedroom: 20,
          iHotelBed: 50,
          iHotelPlace: 100,
          iHotelPlaceDop: 1,
          sHotelAddress: null,
          iHotelActive: true,
          iHotelVerification: true
        },
        {
          iHotelID: 10,
          sHotelTitle: 'Приют Панды',
          aHotelCoordinate: null,
          iHotelTypeID: 5,
          iHotelFloor: 5,
          iHotelGuestID: 1,
          iHotelBedroom: 20,
          iHotelBed: 50,
          iHotelPlace: 100,
          iHotelPlaceDop: 1,
          sHotelAddress: null,
          iHotelActive: true,
          iHotelVerification: true
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('hotel', null, {})
  }
}
