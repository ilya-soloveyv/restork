const state = () => ({
  list: []
})

const getters = {
  list: (state) => {
    return state.list
  }
}

const mutations = {
  SET_LIST(state, objectType) {
    state.list = objectType
  }
}

const actions = {
  async GET_LIST({ state, commit, rootState }) {
    const { objectType } = await this.$axios.$post('/api/object_type/list', {
      iObjectTypeActive: true
    })
    commit('SET_LIST', objectType)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
