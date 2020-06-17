const state = () => ({
  list: []
})

const getters = {}

const mutations = {
  SET_LIST(state, roomTypes) {
    state.list = roomTypes
  }
}

const actions = {
  async GET_LIST({ state, commit, rootState }) {
    const roomTypes = await this.$axios.$post('/api/room_type/list')
    commit('SET_LIST', roomTypes)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
