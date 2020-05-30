const state = () => ({
  list: []
})

const getters = {}

const mutations = {
  SET_LIST(state, objectOption) {
    state.list = objectOption
  }
}

const actions = {
  async GET_LIST({ state, commit, rootState }) {
    const objectOption = await this.$axios.$post('/api/object_option/get', {
      iObjectOptionActive: true
    })
    commit('SET_LIST', objectOption)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
