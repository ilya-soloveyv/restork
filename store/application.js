const state = () => ({
  item: {},
  list: []
})

const getters = {}

const mutations = {
  SET_LIST(state, applications) {
    state.list = applications
  },
  SET_ITEM(state, application) {
    state.item = application
  }
}

const actions = {
  async ADD({ state, commit, rootState }, params) {
    params.iUserID = rootState.auth.user.iUserID
    const res = await this.$axios.$post('/api/application/add', params)
    return res
  },
  async GET_LIST({ state, commit, rootState }, params) {
    const iUserID = rootState.auth.user.iUserID
    const { applications } = await this.$axios.$post('/api/application/list', {
      iUserID
    })
    commit('SET_LIST', applications)
  },
  async GET_ITEM({ state, commit }, params) {
    const application = await this.$axios.$post('/api/application/get', {
      iApplicationID: params.iApplicationID
    })
    commit('SET_ITEM', application)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
