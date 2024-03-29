'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'object',
      [
        {
          iObjectID: 1,
          iUserID: 3,
          iObjectTypeID: 1,
          iRoomTypeID: null,
          sObjectTitle: 'AYS Design Hotel Роза Хутор',
          iObjectArea: 150,
          iObjectAreaLocation: null,
          iObjectFloorAll: null,
          iObjectFloor: null,
          iObjectRoomCount: 4,
          iObjectRoomHotelCount: null,
          iObjectBed: 50,
          iObjectPlace: 100,
          iObjectPlaceDop: 1,
          sObjectAddress: null,
          aObjectCoordinate: Sequelize.fn(
            'ST_GeomFromText',
            'POINT(43.6636072 40.3143871)'
          ),
          tObjectDesc: null,
          iObjectActive: true,
          iObjectVerification: true,
          sTutorialStepActive: null
        },
        {
          iObjectID: 2,
          iUserID: 4,
          iObjectTypeID: 3,
          iRoomTypeID: null,
          sObjectTitle: 'Medical Spa Hotel Rosa Springs',
          iObjectArea: 150,
          iObjectAreaLocation: null,
          iObjectFloorAll: null,
          iObjectFloor: null,
          iObjectRoomCount: 4,
          iObjectRoomHotelCount: null,
          iObjectBed: 50,
          iObjectPlace: 100,
          iObjectPlaceDop: 1,
          sObjectAddress: null,
          aObjectCoordinate: Sequelize.fn(
            'ST_GeomFromText',
            'POINT(43.6607279 40.3172543)'
          ),
          tObjectDesc: null,
          iObjectActive: true,
          iObjectVerification: true,
          sTutorialStepActive: null
        },
        {
          iObjectID: 3,
          iUserID: 1,
          iObjectTypeID: 7,
          iRoomTypeID: null,
          sObjectTitle: 'Роза Ски Инн',
          iObjectArea: 150,
          iObjectAreaLocation: null,
          iObjectFloorAll: null,
          iObjectFloor: null,
          iObjectRoomCount: 4,
          iObjectRoomHotelCount: null,
          iObjectBed: 50,
          iObjectPlace: 100,
          iObjectPlaceDop: 1,
          sObjectAddress: 'Россия, Сочи, Красная поляна',
          aObjectCoordinate: Sequelize.fn(
            'ST_GeomFromText',
            'POINT(43.6617826 40.315748)'
          ),
          tObjectDesc:
            'Оказаться на склонах одного из лучших горнолыжных курортов России первым – ведь склоны и подъемники «Роза Хутор» в 10 метрах от нашей лыжной комнаты с услугами сушки и проката',
          iObjectActive: true,
          iObjectVerification: false,
          sTutorialStepActive: null
        },
        {
          iObjectID: 4,
          iUserID: 6,
          iObjectTypeID: 2,
          iRoomTypeID: null,
          sObjectTitle: 'Спа Отель Грейс Империал',
          iObjectArea: 150,
          iObjectAreaLocation: null,
          iObjectFloorAll: null,
          iObjectFloor: null,
          iObjectRoomCount: 4,
          iObjectRoomHotelCount: null,
          iObjectBed: 50,
          iObjectPlace: 100,
          iObjectPlaceDop: 1,
          sObjectAddress: null,
          aObjectCoordinate: Sequelize.fn(
            'ST_GeomFromText',
            'POINT(43.6879868 40.2456634)'
          ),
          tObjectDesc: null,
          iObjectActive: true,
          iObjectVerification: true,
          sTutorialStepActive: null
        },
        {
          iObjectID: 5,
          iUserID: 7,
          iObjectTypeID: 3,
          iRoomTypeID: null,
          sObjectTitle: 'Отель У Лукоморья',
          iObjectArea: 150,
          iObjectAreaLocation: null,
          iObjectFloorAll: null,
          iObjectFloor: null,
          iObjectRoomCount: 4,
          iObjectRoomHotelCount: null,
          iObjectBed: 50,
          iObjectPlace: 100,
          iObjectPlaceDop: 1,
          sObjectAddress: null,
          aObjectCoordinate: Sequelize.fn(
            'ST_GeomFromText',
            'POINT(43.6735925 40.1984666)'
          ),
          tObjectDesc: null,
          iObjectActive: false,
          iObjectVerification: true,
          sTutorialStepActive: null
        },
        {
          iObjectID: 6,
          iUserID: 1,
          iObjectTypeID: 4,
          iRoomTypeID: null,
          sObjectTitle: 'ABC-Hostel',
          iObjectArea: 150,
          iObjectAreaLocation: null,
          iObjectFloorAll: null,
          iObjectFloor: null,
          iObjectRoomCount: 4,
          iObjectRoomHotelCount: null,
          iObjectBed: 50,
          iObjectPlace: 100,
          iObjectPlaceDop: 1,
          sObjectAddress: null,
          aObjectCoordinate: Sequelize.fn(
            'ST_GeomFromText',
            'POINT(43.6779219 40.2014193)'
          ),
          tObjectDesc: null,
          iObjectActive: true,
          iObjectVerification: true,
          sTutorialStepActive: null
        },
        {
          iObjectID: 7,
          iUserID: 4,
          iObjectTypeID: 1,
          iRoomTypeID: null,
          sObjectTitle: 'Отель Гала Плаза',
          iObjectArea: 150,
          iObjectAreaLocation: null,
          iObjectFloorAll: null,
          iObjectFloor: null,
          iObjectRoomCount: 4,
          iObjectRoomHotelCount: null,
          iObjectBed: 50,
          iObjectPlace: 100,
          iObjectPlaceDop: 1,
          sObjectAddress: null,
          aObjectCoordinate: Sequelize.fn(
            'ST_GeomFromText',
            'POINT(43.6774891 40.2800648)'
          ),
          tObjectDesc: null,
          iObjectActive: true,
          iObjectVerification: true,
          sTutorialStepActive: null
        },
        {
          iObjectID: 8,
          iUserID: 5,
          iObjectTypeID: 2,
          iRoomTypeID: null,
          sObjectTitle: 'Отель Олимп',
          iObjectArea: 150,
          iObjectAreaLocation: null,
          iObjectFloorAll: null,
          iObjectFloor: null,
          iObjectRoomCount: 4,
          iObjectRoomHotelCount: null,
          iObjectBed: 50,
          iObjectPlace: 100,
          iObjectPlaceDop: 1,
          sObjectAddress: null,
          aObjectCoordinate: Sequelize.fn(
            'ST_GeomFromText',
            'POINT(43.6846422 40.2587425)'
          ),
          tObjectDesc: null,
          iObjectActive: false,
          iObjectVerification: true,
          sTutorialStepActive: null
        },
        {
          iObjectID: 9,
          iUserID: 6,
          iObjectTypeID: 3,
          iRoomTypeID: null,
          sObjectTitle: 'Skypark',
          iObjectArea: 150,
          iObjectAreaLocation: null,
          iObjectFloorAll: null,
          iObjectFloor: null,
          iObjectRoomCount: 4,
          iObjectRoomHotelCount: null,
          iObjectBed: 50,
          iObjectPlace: 100,
          iObjectPlaceDop: 1,
          sObjectAddress: null,
          aObjectCoordinate: Sequelize.fn(
            'ST_GeomFromText',
            'POINT(43.52470150818218 39.99700319516752)'
          ),
          tObjectDesc: null,
          iObjectActive: true,
          iObjectVerification: true,
          sTutorialStepActive: null
        },
        {
          iObjectID: 10,
          iUserID: 7,
          iObjectTypeID: 5,
          iRoomTypeID: null,
          sObjectTitle: 'Приют Панды',
          iObjectArea: 150,
          iObjectAreaLocation: null,
          iObjectFloorAll: null,
          iObjectFloor: null,
          iObjectRoomCount: 4,
          iObjectRoomHotelCount: null,
          iObjectBed: 50,
          iObjectPlace: 100,
          iObjectPlaceDop: 1,
          sObjectAddress: null,
          aObjectCoordinate: Sequelize.fn(
            'ST_GeomFromText',
            'POINT(43.66341410912246 40.31542441877973)'
          ),
          tObjectDesc: null,
          iObjectActive: true,
          iObjectVerification: true,
          sTutorialStepActive: null
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('object', null, {})
  }
}
