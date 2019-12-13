const state = () => ({
  hotelTypes: [],
  type: {}
})

const mutations = {
  setHotelTypes(state, hotelTypes) {
    state.hotelTypes = hotelTypes
  },
  setType(state, type) {
    state.type = type
  }
}

const actions = {
  async getHotelTypes({ commit }, param) {
    const hotelTypes = await this.$axios.$get('/api/hotel_type', {
      params: param
    })
    commit('setHotelTypes', hotelTypes)
  },
  async getType({ commit }, param) {
    const type = await this.$axios.$get('/api/hotel_type/type', {
      params: param
    })
    commit('setType', type)
  },
  async updateType({ commit }, params) {
    await this.$axios.$put('/api/hotel_type/type', params)
    commit('setType', params)
  },
  async removeType({ commit }, params) {
    await this.$axios.$delete('/api/hotel_type/type', { data: params })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
