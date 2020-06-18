const state = () => ({
  list: [],
  item: {}
})

const getters = {
  itemStatusRedirect: (state) => {
    let redirect = false
    const iObjectID = state.item.iObjectID
    if (state.item.object_type.iRoomPermission) {
      if (!state.item.object_object_options.length) {
        redirect = '/dashboard/object/' + iObjectID + '/option'
      } else if (!state.item.sObjectAddress) {
        redirect = '/dashboard/object/' + iObjectID + '/adress'
      }
    } else {
      // redirect = '/dashboard/object'
    }
    return redirect
  }
}

const mutations = {
  SET_LIST(state, objects) {
    state.list = objects
  },
  SET_ITEM(state, object) {
    if (object.object_object_options) {
      object.object_object_options_array = []
      object.object_object_options.forEach((option) => {
        object.object_object_options_array.push(option.iObjectOptionID)
      })
    }
    if (object.object_room_options) {
      object.object_room_options_array = []
      object.object_room_options.forEach((option) => {
        object.object_room_options_array.push(option.iRoomOptionID)
      })
    }
    state.item = object
  },
  UPDATE_sObjectTitle(state, sObjectTitle) {
    state.item.sObjectTitle = sObjectTitle
  },
  UPDATE_iObjectTypeID(state, iObjectTypeID) {
    state.item.iObjectTypeID = iObjectTypeID
  },
  UPDATE_objectObjectOptionsArray(state, params) {
    state.item.object_object_options_array = params
  },
  UPDATE_objectRoomOptionsArray(state, params) {
    state.item.object_room_options_array = params
  },
  UPDATE_MARKER_COORDINATES(state, params) {
    state.item.aObjectCoordinate.coordinates = params
  },
  UPDATE_sObjectAddress(state, sObjectAddress) {
    state.item.sObjectAddress = sObjectAddress
  },
  SET_OBJECT_IMAGES(state, { objectImages }) {
    state.item.object_images = objectImages
  },
  UPDATE_tObjectDesc(state, { tObjectDesc }) {
    state.item.tObjectDesc = tObjectDesc
  },
  SET_OBJECT_iObjectArea(state, iObjectArea) {
    state.item.iObjectArea = Number(iObjectArea)
  },
  SET_OBJECT_iObjectRoomCount(state, iObjectRoomCount) {
    state.item.iObjectRoomCount = Number(iObjectRoomCount)
  },
  SET_OBJECT_iObjectBed(state, iObjectBed) {
    state.item.iObjectBed = Number(iObjectBed)
  },
  SET_OBJECT_iObjectPlace(state, iObjectPlace) {
    state.item.iObjectPlace = Number(iObjectPlace)
  },
  SET_OBJECT_iObjectPlaceDop(state, iObjectPlaceDop) {
    state.item.iObjectPlaceDop = Number(iObjectPlaceDop)
  }
}

const actions = {
  async GET_LIST({ state, commit, rootState }) {
    const iUserID = rootState.auth.user.iUserID
    const { objects } = await this.$axios.$post('/api/object/list', { iUserID })
    commit('SET_LIST', objects)
  },
  SET_ITEM({ commit }, params) {
    commit('SET_ITEM', params)
  },
  async GET_ITEM({ commit }, { iObjectID }) {
    let { object } = await this.$axios.$post('/api/object/item', { iObjectID })
    object = object || {}
    commit('SET_ITEM', object)
  },
  UPDATE_sObjectTitle({ commit }, { sObjectTitle }) {
    commit('UPDATE_sObjectTitle', sObjectTitle)
  },
  UPDATE_iObjectTypeID({ commit }, { iObjectTypeID }) {
    commit('UPDATE_iObjectTypeID', iObjectTypeID)
  },
  async OBJECT_ADD({ state, commit, rootState }) {
    const iUserID = rootState.auth.user.iUserID
    const params = state.item
    params.iUserID = iUserID
    const { object } = await this.$axios.$post('/api/object/update', params)
    commit('SET_ITEM', object)
  },
  UPDATE_objectObjectOptionsArray({ state, commit }, params) {
    commit('UPDATE_objectObjectOptionsArray', params)
  },
  UPDATE_objectRoomOptionsArray({ state, commit }, params) {
    commit('UPDATE_objectRoomOptionsArray', params)
  },
  async UPDATE({ state, commit }) {
    const { object } = await this.$axios.$post('/api/object/update', state.item)
    commit('SET_ITEM', object)
  },
  UPDATE_MARKER_COORDINATES({ state, commit }, params) {
    commit('UPDATE_MARKER_COORDINATES', params)
  },
  UPDATE_sObjectAddress({ state, commit }, sObjectAddress) {
    commit('UPDATE_sObjectAddress', sObjectAddress)
  },
  async REMOVE_IMAGE({ state, commit }, params) {
    const { objectImages } = await this.$axios.$post(
      '/api/object/removeObjectImage',
      params
    )
    commit('SET_OBJECT_IMAGES', { objectImages })
  },
  SET_OBJECT_IMAGES({ state, commit }, { objectImages }) {
    commit('SET_OBJECT_IMAGES', { objectImages })
  },
  UPDATE_tObjectDesc({ state, commit }, { tObjectDesc }) {
    commit('UPDATE_tObjectDesc', { tObjectDesc })
  },
  SET_OBJECT_iObjectArea({ state, commit }, iObjectArea) {
    commit('SET_OBJECT_iObjectArea', iObjectArea)
  },
  SET_OBJECT_iObjectRoomCount({ state, commit }, iObjectRoomCount) {
    commit('SET_OBJECT_iObjectRoomCount', iObjectRoomCount)
  },
  SET_OBJECT_iObjectBed({ state, commit }, iObjectBed) {
    commit('SET_OBJECT_iObjectBed', iObjectBed)
  },
  SET_OBJECT_iObjectPlace({ state, commit }, iObjectPlace) {
    commit('SET_OBJECT_iObjectPlace', iObjectPlace)
  },
  SET_OBJECT_iObjectPlaceDop({ state, commit }, iObjectPlaceDop) {
    commit('SET_OBJECT_iObjectPlaceDop', iObjectPlaceDop)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
