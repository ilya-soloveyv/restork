const state = () => ({
  object: {
    iObjectID: undefined,
    iObjectTypeID: null,
    iRoomTypeID: null
  },
  object_object_options: [],
  object_room_options: [],
  steps: [
    {
      id: 'object_type',
      url: 'object-type',
      stepNumber: 1,
      title: 'Категория объекта',
      current: true
    },
    {
      id: 'basic',
      url: 'basic',
      stepNumber: 2,
      title: 'Основные параметры',
      current: false
    },
    {
      id: 'object_options',
      url: 'object-options',
      stepNumber: 3,
      title: 'Удобства',
      current: false
    },
    {
      id: 'room_options',
      url: 'room-options',
      stepNumber: 4,
      title: 'Удобства',
      current: false
    }
  ]
})

const getters = {
  currentStep: (state) => {
    return state.steps.find((step) => step.current)
  },
  currentStepIndex: (state) => {
    return state.steps.findIndex((step) => step.current)
  },
  prevStep: (state) => {
    const currentIndex = state.steps.findIndex((step) => step.current)
    return currentIndex > 0 && state.steps[currentIndex - 1]
      ? state.steps[currentIndex - 1]
      : null
  },
  nextStep: (state) => {
    const currentIndex = state.steps.findIndex((step) => step.current)
    return currentIndex >= 0 && state.steps[currentIndex + 1]
      ? state.steps[currentIndex + 1]
      : null
  },
  countSteps: (state) => {
    return state.steps.length
  }
}

const mutations = {
  SET_object(state, payload) {
    state.object = payload
    state.object_object_options = []
    state.object.object_object_options.forEach((option) => {
      state.object_object_options.push(option.iObjectOptionID)
    })
    state.object_room_options = []
    state.object.object_room_options.forEach((option) => {
      state.object_room_options.push(option.iRoomOptionID)
    })
  },
  SET_iObjectID(state, payload) {
    state.object.iObjectID = payload
  },
  SET_iObjectTypeID(state, payload) {
    state.object.iObjectTypeID = payload
  },
  SET_iRoomTypeID(state, payload) {
    state.object.iRoomTypeID = payload
  },
  SET_currentStep(state, payload) {
    // console.log(payload)
    state.steps.map((step) => {
      if (step.id === payload.id) {
        step.current = true
      } else {
        step.current = false
      }
      return step
    })
    // this.$router.push(`/tutorial/step/${payload.url}`)
  },
  SET_iObjectArea(state, payload) {
    state.object.iObjectArea = payload
  },
  SET_iObjectAreaLocation(state, payload) {
    state.object.iObjectAreaLocation = payload
  },
  SET_iObjectFloorAll(state, payload) {
    state.object.iObjectFloorAll = payload
  },
  SET_iObjectFloor(state, payload) {
    state.object.iObjectFloor = payload
  },
  SET_iObjectRoomCount(state, payload) {
    state.object.iObjectRoomCount = payload
  },
  SET_iObjectRoomHotelCount(state, payload) {
    state.object.iObjectRoomHotelCount = payload
  },
  SET_iObjectPlace(state, payload) {
    state.object.iObjectPlace = payload
  },
  SET_objectOptions(state, payload) {
    state.object_object_options = payload
  },
  SET_roomOptions(state, payload) {
    state.object_room_options = payload
  }
}

const actions = {
  async CHECK_OBJECT({ state, commit }) {
    const response = await this.$axios.$post('/api/tutorial/check_object')
    if (response.object) {
      commit('SET_object', response.object)
      const currentStep = state.steps.find(
        (step) => step.id === response.object.sTutorialStepActive
      )
      commit('SET_currentStep', currentStep)
      this.$router.push(`/tutorial/step/${currentStep.url}`)
    } else {
      const firstStepURL = state.steps[0]
      commit('SET_currentStep', firstStepURL)
      this.$router.push(`/tutorial/step/${firstStepURL.url}`)
    }
  },
  async GET_OBJECT({ state, commit, actions }) {
    if (state.object.iObjectID) {
      const response = await this.$axios.$post('/api/tutorial/get_object', {
        iObjectID: state.object.iObjectID
      })
      // console.log(response.object)
      commit('SET_object', response.object)
    } else {
      const response = await this.$axios.$post('/api/tutorial/check_object')
      if (response.object) {
        commit('SET_object', response.object)
        const currentStep = state.steps.find(
          (step) => step.id === response.object.sTutorialStepActive
        )
        commit('SET_currentStep', currentStep)
      } else {
        const firstStepURL = state.steps[0]
        commit('SET_currentStep', firstStepURL)
        this.$router.push(`/tutorial/step/${firstStepURL.url}`)
      }
      // console.log(response)
    }
  },
  async CHANGE_STEP({ state, commit, getters }, { type, currentStep }) {
    const step =
      type === 'prev' && getters.prevStep
        ? getters.prevStep
        : type === 'next' && getters.nextStep
        ? getters.nextStep
        : null
    if (step) {
      let response = null
      switch (currentStep && currentStep.id) {
        case 'object_type':
          response = await this.$axios.$post(
            '/api/tutorial/update_object_type',
            {
              iObjectID: state.object.iObjectID,
              iObjectTypeID: state.object.iObjectTypeID,
              iRoomTypeID: state.object.iRoomTypeID
            }
          )
          commit('SET_object', response.object)
          break
        case 'basic':
          response = await this.$axios.$post('/api/tutorial/update_basic', {
            iObjectID: state.object.iObjectID,
            iObjectArea: state.object.iObjectArea,
            iObjectAreaLocation: state.object.iObjectAreaLocation,
            iObjectFloorAll: state.object.iObjectFloorAll,
            iObjectFloor: state.object.iObjectFloor,
            iObjectRoomCount: state.object.iObjectRoomCount,
            iObjectRoomHotelCount: state.object.iObjectRoomHotelCount,
            iObjectPlace: state.object.iObjectPlace
          })
          commit('SET_object', response.object)
          break
        case 'object_options':
          response = await this.$axios.$post(
            '/api/tutorial/update_object_options',
            {
              iObjectID: state.object.iObjectID,
              objectOptions: state.object_object_options
            }
          )
          commit('SET_object', response.object)
          break
        case 'room_options':
          response = await this.$axios.$post(
            '/api/tutorial/update_room_options',
            {
              iObjectID: state.object.iObjectID,
              roomOptions: state.object_room_options
            }
          )
          commit('SET_object', response.object)
          break
        default:
          break
      }
      commit('SET_currentStep', step)
      if (state.object.iObjectID) {
        await this.$axios.$post('/api/tutorial/change_object_step', {
          iObjectID: state.object.iObjectID,
          sTutorialStepActive: step.id
        })
      }
      this.$router.push(`/tutorial/step/${step.url}`)
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
