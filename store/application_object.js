const state = () => ({
  item: {}
})

const getters = {}

const mutations = {
  SET_ITEM(state, applicationObject) {
    state.item = applicationObject
  },
  SET_iObjectPrice(state, iObjectPrice) {
    state.item.iObjectPrice = iObjectPrice
  }
}

const actions = {
  async GET_ITEM({ state, commit }, params) {
    const applicationObject = await this.$axios.$post(
      '/api/application_object/get',
      {
        iApplicationObjectID: params.iApplicationObjectID
      }
    )
    commit('SET_ITEM', applicationObject)
  },
  SET_iObjectPrice({ state, commit }, iObjectPrice) {
    commit('SET_iObjectPrice', iObjectPrice)
  },
  async UPDATE({ state, commit }) {
    await this.$axios.$post('/api/application_object/update', {
      applicationObject: state.item
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
