const state = () => ({
  list: [],
  item: {}
})

const getters = {}

const mutations = {
  SET_LIST(state, objectTypeGroup) {
    state.list = objectTypeGroup
  },
  SET_ITEM(state, objectTypeGroup) {
    state.item = objectTypeGroup || {}
  },
  SET_sObjectTypeGroupTitle(state, sObjectTypeGroupTitle) {
    state.item.sObjectTypeGroupTitle = sObjectTypeGroupTitle
  },
  SET_iObjectTypeGroupSort(state, iObjectTypeGroupSort) {
    state.item.iObjectTypeGroupSort = iObjectTypeGroupSort
  },
  SET_iObjectTypeGroupActive(state, iObjectTypeGroupActive) {
    state.item.iObjectTypeGroupActive = iObjectTypeGroupActive
  },
  SET_iObjectTypeGroupID(state, iObjectTypeGroupID) {
    state.item.iObjectTypeGroupID = iObjectTypeGroupID
  }
}

const actions = {
  async GET_LIST({ commit }) {
    const { objectTypeGroup } = await this.$axios.$post(
      '/api/object_type_group/list',
      {
        iObjectTypeGroupActive: true
      }
    )
    commit('SET_LIST', objectTypeGroup)
  },
  async GET_ITEM({ state, commit, rootState }, params) {
    const { objectTypeGroup } = await this.$axios.$post(
      '/api/object_type_group/item',
      params
    )
    commit('SET_ITEM', objectTypeGroup)
  },
  SET_sObjectTypeGroupTitle({ commit }, sObjectTypeGroupTitle) {
    commit('SET_sObjectTypeGroupTitle', sObjectTypeGroupTitle)
  },
  SET_iObjectTypeGroupSort({ commit }, iObjectTypeGroupSort) {
    commit('SET_iObjectTypeGroupSort', iObjectTypeGroupSort)
  },
  SET_iObjectTypeGroupActive({ commit }, iObjectTypeGroupActive) {
    commit('SET_iObjectTypeGroupActive', iObjectTypeGroupActive)
  },
  async UPDATE({ state, commit }) {
    const data = await this.$axios.$post(
      '/api/object_type_group/update',
      state.item
    )
    commit('SET_ITEM', data)
  },
  async DELETE({ state, commit }) {
    await this.$axios.post('/api/object_type_group/delete', {
      iObjectTypeGroupID: state.item.iObjectTypeGroupID
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
