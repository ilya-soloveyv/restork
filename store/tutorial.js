const state = () => ({
  step: 1,
  minStep: 1,
  maxStep: 10,
  steps: [
    'Категория объекта',
    'Основные параметры',
    'Удобства',
    'Удобства',
    'Особенности',
    'Местоположение',
    'Значимые места рядом',
    'Фотографии',
    'Название и описание',
    'Статус жилья',
    'Приготовьтесь к приёму гостей'
  ],
  object: { iObjectTypeID: 0 },
  places: []
})

const getters = {
  currentStepDesc: (state) => {
    return state.steps[state.step - 1]
  }
}

const mutations = {
  SET_STEP(state, step) {
    state.step = step
  },
  INCREMENT(state, step) {
    state.step++
  },
  DECREMENT(state, step) {
    state.step--
  },
  SET_iObjectTypeID(state, iObjectTypeID) {
    state.object.iObjectTypeID = iObjectTypeID
  },
  ADD_PLACE(state, place) {
    state.places.push(place)
  },
  DELETE_PLACE(state, index) {
    state.places.splice(index, 1)
  },
  SET_OBJECT(state, object) {
    state.object = object
  }
}

const actions = {
  SET_iObjectTypeID({ commit }, iObjectTypeID) {
    commit('SET_iObjectTypeID', iObjectTypeID)
  },
  ADD_PLACE({ commit }, place) {
    commit('ADD_PLACE', place)
  },
  DELETE_PLACE({ commit }, index) {
    commit('DELETE_PLACE', index)
  },
  async GET_OBJECT({ commit, rootState }, { iObjectID }) {
    if (iObjectID) {
      const { object } = await this.$axios.$post('/api/tutorial/object', {
        iObjectID
      })
      commit('SET_OBJECT', object)
    } else {
      const object = {
        iObjectTypeID: null,
        iUserID: rootState.auth.user.iUserID
      }
      commit('SET_OBJECT', object)
    }
  },
  async NEXT_STEP({ state, commit }) {
    const response = {
      error: [],
      object: {}
    }
    if (state.step === 1) {
      if (!state.object.iObjectTypeID) {
        response.error.push('iObjectTypeID')
      } else {
        const { object } = await this.$axios.$post(
          '/api/tutorial/object',
          state.object
        )
        response.object = object
        commit('SET_OBJECT', object)
      }
      return response
    }
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
