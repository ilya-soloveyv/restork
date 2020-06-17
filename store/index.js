const state = () => ({})

const getters = {}

const mutations = {
  SET_PROGRESS(state, objects) {
    // console.log('mutation SET_PROGRESS')
  }
}

const actions = {
  FORMAT_MESSAGE({ state, commit, rootState }) {
    // console.log('action FORMAT_MESSAGE')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
