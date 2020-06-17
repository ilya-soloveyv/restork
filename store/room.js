const state = () => ({
  list: [],
  item: {}
})

const getters = {}

const mutations = {
  SET_ITEM(state, room) {
    if (room.room_room_options) {
      room.room_room_options_array_id = room.room_room_options.map((option) => {
        return option.iRoomOptionID
      })
    } else {
      room.room_room_options_array_id = []
    }
    state.item = room
  },
  SET_ITEM_iRoomTypeID(state, { iRoomTypeID }) {
    state.item.iRoomTypeID = Number(iRoomTypeID)
  },
  SET_ITEM_iRoomArea(state, { iRoomArea }) {
    state.item.iRoomArea = Number(iRoomArea)
  },
  SET_ITEM_iRoomCount(state, { iRoomCount }) {
    state.item.iRoomCount = Number(iRoomCount)
  },
  SET_ITEM_iRoomBed(state, { iRoomBed }) {
    state.item.iRoomBed = Number(iRoomBed)
  },
  SET_ITEM_iRoomPlace(state, { iRoomPlace }) {
    state.item.iRoomPlace = Number(iRoomPlace)
  },
  SET_ITEM_iRoomPlaceDop(state, { iRoomPlaceDop }) {
    state.item.iRoomPlaceDop = Number(iRoomPlaceDop)
  },
  SET_ITEM_tRoomDesc(state, { tRoomDesc }) {
    state.item.tRoomDesc = tRoomDesc
  },
  SET_ITEM_iRoomActive(state, { iRoomActive }) {
    state.item.iRoomActive = iRoomActive
  },
  SET_ITEM_room_room_options(state, { options }) {
    state.item.room_room_options = options
  }
}

const actions = {
  async GET_ITEM({ commit }, { iRoomID }) {
    let room = await this.$axios.$post('/api/room/item', { iRoomID })
    room = room || {}
    commit('SET_ITEM', room)
  },
  SET_ITEM_iRoomTypeID({ commit }, { iRoomTypeID }) {
    commit('SET_ITEM_iRoomTypeID', { iRoomTypeID })
  },
  SET_ITEM_iRoomArea({ commit }, { iRoomArea }) {
    commit('SET_ITEM_iRoomArea', { iRoomArea })
  },
  SET_ITEM_iRoomCount({ commit }, { iRoomCount }) {
    commit('SET_ITEM_iRoomCount', { iRoomCount })
  },
  SET_ITEM_iRoomBed({ commit }, { iRoomBed }) {
    commit('SET_ITEM_iRoomBed', { iRoomBed })
  },
  SET_ITEM_iRoomPlace({ commit }, { iRoomPlace }) {
    commit('SET_ITEM_iRoomPlace', { iRoomPlace })
  },
  SET_ITEM_iRoomPlaceDop({ commit }, { iRoomPlaceDop }) {
    commit('SET_ITEM_iRoomPlaceDop', { iRoomPlaceDop })
  },
  SET_ITEM_tRoomDesc({ commit }, { tRoomDesc }) {
    commit('SET_ITEM_tRoomDesc', { tRoomDesc })
  },
  SET_ITEM_iRoomActive({ commit }, { iRoomActive }) {
    commit('SET_ITEM_iRoomActive', { iRoomActive })
  },
  SET_ITEM_room_room_options({ commit }, { options }) {
    commit('SET_ITEM_room_room_options', { options })
  },
  async UPDATE({ commit, state }) {
    await this.$axios.$post('/api/room/update', {
      room: state.item
    })
    // console.log(room)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
