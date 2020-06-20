const state = () => ({
  list: [],
  item: {}
})

const getters = {}

const mutations = {
  SET_LIST(state, users) {
    state.list = users
  },
  SET_ITEM(state, user) {
    state.item = user
  }
}

const actions = {
  async GET_LIST({ commit }, { page }) {
    const { users } = await this.$axios.$post('/api/user/search', {
      limit: 5,
      page
    })
    commit('SET_LIST', users)
  },
  async GET_ITEM({ commit }, { iUserID }) {
    let user = await this.$axios.$post('/api/user/item', { iUserID })
    user = user || {}
    commit('SET_ITEM', user)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
