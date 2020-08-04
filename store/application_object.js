import moment from 'moment'
moment.locale('ru')

const state = () => ({
  list: [],
  item: {}
})

const getters = {
  applicationObjectOptionsString: (state) => {
    return state.item.application.applicationObjectOptions
      .map((option) => option.object_option.sObjectOptionTitle)
      .join(', ')
  },
  applicationRoomOptionsString: (state) => {
    return state.item.application.applicationRoomOptions
      .map((option) => option.room_option.sRoomOptionTitle)
      .join(', ')
  },
  applicationDateRange: (state) => {
    return (
      'c ' +
      moment(state.item.application.dApplicationDateFrom).format(
        'D MMMM YYYY'
      ) +
      ' по ' +
      moment(state.item.application.dApplicationDateTo).format('D MMMM YYYY')
    )
  },
  objectOptionWithSelected: (state, getters, rootState) => {
    const objectOption = []
    const applicationObjectOptions = state.item.object.object_object_options.map(
      (option) => option.iObjectOptionID
    )
    // console.log(applicationObjectOptions)
    rootState.objectOption.list.forEach((option) => {
      const check = applicationObjectOptions.find(
        (iObjectOptionID) => iObjectOptionID === option.iObjectOptionID
      )
      const item = {
        sObjectOptionTitle: option.sObjectOptionTitle,
        selected: !!check || false
      }
      objectOption.push(item)
    })
    return objectOption
  },
  roomOptionWithSelected: (state, getters, rootState) => {
    const roomOption = []
    const applicationRoomOptions = state.item.object.object_room_options.map(
      (option) => option.iRoomOptionID
    )
    rootState.roomOption.list.forEach((option) => {
      const check = applicationRoomOptions.find(
        (iRoomOptionID) => iRoomOptionID === option.iRoomOptionID
      )
      const item = {
        sRoomOptionTitle: option.sRoomOptionTitle,
        selected: !!check || false
      }
      roomOption.push(item)
    })
    return roomOption
  }
}

const mutations = {
  SET_ITEM(state, applicationObject) {
    state.item = applicationObject
  },
  SET_iObjectPrice(state, iObjectPrice) {
    state.item.iObjectPrice = iObjectPrice
  },
  SET_CANCEL(state) {
    state.item.iUserCancel = true
    state.item.dUserCancelDate = moment()
  },
  SET_SELECTED(state) {
    state.item.iUserSelected = true
    state.item.dUserSelectedDate = moment()
  },
  SET_LIST(state, applicationObject) {
    state.list = applicationObject
  }
}

const actions = {
  async GET_ITEM({ state, commit }, params) {
    const applicationObject = await this.$axios.$post(
      '/api/application_object/get',
      {
        iApplicationObjectID: params.iApplicationObjectID
      }
    )
    commit('SET_ITEM', applicationObject)
  },
  SET_iObjectPrice({ state, commit }, iObjectPrice) {
    commit('SET_iObjectPrice', iObjectPrice)
  },
  async UPDATE({ state, commit }) {
    await this.$axios.$post('/api/application_object/update', {
      applicationObject: state.item
    })
  },
  async SET_CANCEL({ state, commit, dispatch }) {
    commit('SET_CANCEL')
    await dispatch('UPDATE')
  },
  async SET_SELECTED({ state, commit, dispatch }) {
    commit('SET_SELECTED')
    await dispatch('UPDATE')
  },
  async GET_LIST({ state, commit }, params) {
    const applicationObject = await this.$axios.$post(
      '/api/application_object/list',
      params
    )
    commit('SET_LIST', applicationObject)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
