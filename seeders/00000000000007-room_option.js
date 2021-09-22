'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'room_option',
      [
        {
          iRoomOptionID: 1,
          sRoomOptionTitle: 'Дополнительное место',
          iRoomOptionSort: 9999,
          iRoomOptionActive: true,
          sRoomOptionIcon: 'sleep.svg',
          sRoomOptionDesc:
            'для размещения гостей дополнительно можно предоставить раскладушку или надувной матрас'
        },
        {
          iRoomOptionID: 2,
          sRoomOptionTitle: 'Кухня собственная',
          iRoomOptionSort: 9999,
          iRoomOptionActive: true,
          sRoomOptionIcon: 'kitchen.svg',
          sRoomOptionDesc: null
        },
        {
          iRoomOptionID: 3,
          sRoomOptionTitle: 'Туалет',
          iRoomOptionSort: 9999,
          iRoomOptionActive: true,
          sRoomOptionIcon: 'restroom.svg',
          sRoomOptionDesc: null
        },
        {
          iRoomOptionID: 4,
          sRoomOptionTitle: 'Душевая',
          iRoomOptionSort: 9999,
          iRoomOptionActive: true,
          sRoomOptionIcon: 'shower.svg',
          sRoomOptionDesc: null
        },
        {
          iRoomOptionID: 5,
          sRoomOptionTitle: 'Ванна',
          iRoomOptionSort: 9999,
          iRoomOptionActive: true,
          sRoomOptionIcon: 'bathroom.svg',
          sRoomOptionDesc: null
        },
        {
          iRoomOptionID: 6,
          sRoomOptionTitle: 'Кондиционер',
          iRoomOptionSort: 9999,
          iRoomOptionActive: true,
          sRoomOptionIcon: 'air-conditioner.svg',
          sRoomOptionDesc: null
        },
        {
          iRoomOptionID: 7,
          sRoomOptionTitle: 'Сплит-система',
          iRoomOptionSort: 9999,
          iRoomOptionActive: true,
          sRoomOptionIcon: 'air-conditioner2.svg',
          sRoomOptionDesc: null
        },
        {
          iRoomOptionID: 8,
          sRoomOptionTitle: 'Балкон',
          iRoomOptionSort: 9999,
          iRoomOptionActive: true,
          sRoomOptionIcon: 'balcony.svg',
          sRoomOptionDesc: null
        },
        {
          iRoomOptionID: 9,
          sRoomOptionTitle: 'Чайник',
          iRoomOptionSort: 9999,
          iRoomOptionActive: true,
          sRoomOptionIcon: 'kettle.svg',
          sRoomOptionDesc: null
        },
        {
          iRoomOptionID: 10,
          sRoomOptionTitle: 'Микроволновка',
          iRoomOptionSort: 9999,
          iRoomOptionActive: true,
          sRoomOptionIcon: 'microwave.svg',
          sRoomOptionDesc: null
        },
        {
          iRoomOptionID: 11,
          sRoomOptionTitle: 'Телевизор',
          iRoomOptionSort: 9999,
          iRoomOptionActive: true,
          sRoomOptionIcon: 'tv.svg',
          sRoomOptionDesc: null
        },
        {
          iRoomOptionID: 12,
          sRoomOptionTitle: 'Полотенца',
          iRoomOptionSort: 9999,
          iRoomOptionActive: true,
          sRoomOptionIcon: 'hanger.svg',
          sRoomOptionDesc:
            'гостям удобно брать с собой меньше вещей. Предоставьте в пользование гостей полотенца'
        },
        {
          iRoomOptionID: 13,
          sRoomOptionTitle: 'Постельное бельё',
          iRoomOptionSort: 9999,
          iRoomOptionActive: true,
          sRoomOptionIcon: 'blanket.svg',
          sRoomOptionDesc: 'как правило гости не берут с собой постельное белье'
        },
        {
          iRoomOptionID: 14,
          sRoomOptionTitle: 'Туалетные принадлежности',
          iRoomOptionSort: 9999,
          iRoomOptionActive: true,
          sRoomOptionIcon: 'toiletries.svg',
          sRoomOptionDesc:
            'гости могут отметить, если Вы предоставите им мыло, шампунь, туалетную бумагу'
        },
        {
          iRoomOptionID: 15,
          sRoomOptionTitle: 'Халаты',
          iRoomOptionSort: 9999,
          iRoomOptionActive: true,
          sRoomOptionIcon: 'robe.svg',
          sRoomOptionDesc: null
        },
        {
          iRoomOptionID: 16,
          sRoomOptionTitle: 'Чай/Кофе',
          iRoomOptionSort: 9999,
          iRoomOptionActive: true,
          sRoomOptionIcon: 'food.svg',
          sRoomOptionDesc: null
        },
        {
          iRoomOptionID: 17,
          sRoomOptionTitle: 'Приветственные напитки',
          iRoomOptionSort: 9999,
          iRoomOptionActive: true,
          sRoomOptionIcon: 'mug.svg',
          sRoomOptionDesc: null
        },
        {
          iRoomOptionID: 18,
          sRoomOptionTitle: 'Утюг',
          iRoomOptionSort: 9999,
          iRoomOptionActive: true,
          sRoomOptionIcon: 'iron.svg',
          sRoomOptionDesc: null
        },
        {
          iRoomOptionID: 19,
          sRoomOptionTitle: 'Кухонные принадлежности',
          iRoomOptionSort: 9999,
          iRoomOptionActive: true,
          sRoomOptionIcon: 'fork.svg',
          sRoomOptionDesc:
            'предоставьте в распоряжение гостей кухонные принадлежности (посуду, столовые приборы и т.п.)'
        },
        {
          iRoomOptionID: 20,
          sRoomOptionTitle: 'USB-зарядка',
          iRoomOptionSort: 9999,
          iRoomOptionActive: true,
          sRoomOptionIcon: 'usb.svg',
          sRoomOptionDesc: null
        },
        {
          iRoomOptionID: 21,
          sRoomOptionTitle: 'Стиральная машина',
          iRoomOptionSort: 9999,
          iRoomOptionActive: true,
          sRoomOptionIcon: 'washer.svg',
          sRoomOptionDesc: null
        },
        {
          iRoomOptionID: 22,
          sRoomOptionTitle: 'Рабочий стол',
          iRoomOptionSort: 9999,
          iRoomOptionActive: true,
          sRoomOptionIcon: 'desk.svg',
          sRoomOptionDesc:
            'иногда гости нуждаются в рабочем столе. Укажите, есть ли у Вас в объекте место, которое может стать рабочим'
        },
        {
          iRoomOptionID: 23,
          sRoomOptionTitle: 'Холодильник',
          iRoomOptionSort: 9999,
          iRoomOptionActive: true,
          sRoomOptionIcon: 'fridge.svg',
          sRoomOptionDesc: null
        },
        {
          iRoomOptionID: 24,
          sRoomOptionTitle: 'Детская кроватка',
          iRoomOptionSort: 9999,
          iRoomOptionActive: true,
          sRoomOptionIcon: 'bed.svg',
          sRoomOptionDesc:
            'гости с маленькими детьми иногда предпочитают пользоваться детской кроваткой. Держите ее для таких случаев'
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('room_option', null, {})
  }
}
