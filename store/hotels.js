const state = () => ({
  hotels: []
})

const mutations = {
  setHotels(state, hotels) {
    state.hotels = hotels
  }
}

const actions = {
  async getHotels({ commit }, param) {
    const hotels = await this.$axios.$get('/api/hotels/', { params: param })
    commit('setHotels', hotels)
  }
}

const getters = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
