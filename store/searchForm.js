const state = () => ({
  sApplicationAddress: {},
  dApplicationDateFrom: null,
  dApplicationDateTo: null,
  iApplicationAdult: null,
  iApplicationChild: null
})

const getters = {}

const mutations = {
  SET_sApplicationAddress(state, sApplicationAddress) {
    state.sApplicationAddress = sApplicationAddress
  },
  SET_dApplicationDateFrom(state, dApplicationDateFrom) {
    state.dApplicationDateFrom = dApplicationDateFrom
  },
  SET_dApplicationDateTo(state, dApplicationDateTo) {
    state.dApplicationDateTo = dApplicationDateTo
  },
  SET_iApplicationAdult(state, iApplicationAdult) {
    state.iApplicationAdult = iApplicationAdult
  },
  SET_iApplicationChild(state, iApplicationChild) {
    state.iApplicationChild = iApplicationChild
  }
}

const actions = {
  SET_sApplicationAddress({ state, commit, rootState }, sApplicationAddress) {
    commit('SET_sApplicationAddress', sApplicationAddress)
  },
  SET_dApplicationDateFrom({ state, commit, rootState }, dApplicationDateFrom) {
    commit('SET_dApplicationDateFrom', dApplicationDateFrom)
  },
  SET_dApplicationDateTo({ state, commit, rootState }, dApplicationDateTo) {
    commit('SET_dApplicationDateTo', dApplicationDateTo)
  },
  SET_iApplicationAdult({ state, commit, rootState }, iApplicationAdult) {
    commit('SET_iApplicationAdult', iApplicationAdult)
  },
  SET_iApplicationChild({ state, commit, rootState }, iApplicationChild) {
    commit('SET_iApplicationChild', iApplicationChild)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
