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
    const features = await this.$axios.$post('/api/feature/list', {
      iFeatureActive: true
    })
    commit('SET_LIST', features)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
