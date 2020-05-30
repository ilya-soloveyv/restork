const state = () => ({
  list: []
})

const getters = {}

const mutations = {
  SET_LIST(state, roomOption) {
    state.list = roomOption
  }
}

const actions = {
  async GET_LIST({ state, commit, rootState }) {
    const roomOption = await this.$axios.$post('/api/room_option/get', {
      iRoomOptionActive: true
    })
    commit('SET_LIST', roomOption)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
