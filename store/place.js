const state = () => ({
  list: []
})

const getters = {}

const mutations = {
  SET_LIST(state, payload) {
    state.list = payload
  }
}

const actions = {
  async GET_LIST({ state, commit, rootState }) {
    const places = await this.$axios.$post('/api/place/list', {
      iPlaceActive: true
    })
    commit('SET_LIST', places)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
