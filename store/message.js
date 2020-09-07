const state = () => ({
  list: [],
  item: {}
})

const getters = {}

const mutations = {
  SET_LIST(state, messages) {
    state.list = messages
  },
  ADD_MESSAGE(state, message) {
    state.list.push(message)
  }
}

const actions = {
  async GET_LIST({ state, commit, rootState }, { iApplicationObjectID }) {
    // console.log('iApplicationObjectID', iApplicationObjectID)
    const messages = await this.$axios.$post('/api/message/get', {
      iApplicationObjectID
    })
    commit('SET_LIST', messages)
  },
  async ADD_MESSAGE(
    { state, commit },
    { iApplicationObjectID, iUserID, tMessageText }
  ) {
    const message = await this.$axios.$post('/api/message/add', {
      iApplicationObjectID,
      iUserID,
      tMessageText
    })
    return message
  },
  ADD_MESSAGE_TEST({ commit }, message) {
    commit('ADD_MESSAGE', message)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
