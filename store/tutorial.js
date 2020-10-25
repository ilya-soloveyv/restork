const state = () => ({
  step: 1,
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
    'Приготовьтесь к приёму гостей'
  ],
  object: { iObjectTypeID: null },
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
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
