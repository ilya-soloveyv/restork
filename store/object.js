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
  async GET_ITEM({ commit }, params) {
    let { object } = await this.$axios.$post('/api/object/item', params)
    // console.log(object)
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
    // console.log(state.item)
    // const { object } = await this.$axios.$post('/api/object/update', state.item)
    // commit('SET_ITEM', object)
  },
  UPDATE_objectRoomOptionsArray({ state, commit }, params) {
    commit('UPDATE_objectRoomOptionsArray', params)
    // console.log(state.item)
    // const { object } = await this.$axios.$post('/api/object/update', state.item)
    // commit('SET_ITEM', object)
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
    // console.log(objectImages)
  },
  SET_OBJECT_IMAGES({ state, commit }, { objectImages }) {
    console.log(objectImages)
    commit('SET_OBJECT_IMAGES', { objectImages })
  },
  UPDATE_tObjectDesc({ state, commit }, { tObjectDesc }) {
    commit('UPDATE_tObjectDesc', { tObjectDesc })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
