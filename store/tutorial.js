const state = () => ({
  object: {
    iObjectID: undefined,
    iObjectTypeID: null,
    iRoomTypeID: null
  },
  object_object_options: [],
  object_room_options: [],
  object_feature: [],
  steps: [
    {
      id: 'object_type',
      url: 'object-type',
      stepNumber: 1,
      title: 'Категория объекта',
      current: false,
      iObjectTypeGroupID: [1, 2, 3]
    },
    {
      id: 'basic',
      url: 'basic',
      stepNumber: 2,
      title: 'Основные параметры',
      current: false,
      iObjectTypeGroupID: [1, 3]
    },
    {
      id: 'hotel',
      url: 'hotel',
      stepNumber: 2,
      title: 'Отель',
      current: false,
      iObjectTypeGroupID: [2]
    },
    {
      id: 'room',
      url: 'room',
      stepNumber: 2,
      title: 'Номер',
      current: false,
      iObjectTypeGroupID: [2]
    },
    {
      id: 'object_options',
      url: 'object-options',
      stepNumber: 3,
      title: 'Удобства',
      current: false,
      iObjectTypeGroupID: [1, 2, 3]
    },
    {
      id: 'room_options',
      url: 'room-options',
      stepNumber: 4,
      title: 'Удобства',
      current: false,
      iObjectTypeGroupID: [1, 2, 3]
    },
    {
      id: 'feature',
      url: 'feature',
      stepNumber: 5,
      title: 'Особенности',
      current: false,
      iObjectTypeGroupID: [1, 2, 3]
    },
    {
      id: 'location',
      url: 'location',
      stepNumber: 6,
      title: 'Местоположение',
      current: false,
      iObjectTypeGroupID: [1, 2, 3]
    },
    {
      id: 'place',
      url: 'place',
      stepNumber: 7,
      title: 'Значимые места рядом',
      current: false,
      iObjectTypeGroupID: [1, 2, 3]
    },
    {
      id: 'photo',
      url: 'photo',
      stepNumber: 8,
      title: 'Фотографии',
      current: false,
      iObjectTypeGroupID: [1, 2, 3]
    },
    {
      id: 'description',
      url: 'description',
      stepNumber: 9,
      title: 'Название и описание',
      current: false,
      iObjectTypeGroupID: [1, 2, 3]
    },
    {
      id: 'status',
      url: 'status',
      stepNumber: 10,
      title: 'Статус жилья',
      current: false,
      iObjectTypeGroupID: [1, 2, 3]
    }
  ]
})

const getters = {
  currentSteps: (state) => {
    const iObjectTypeGroupID =
      state.object && state.object.object_type
        ? state.object.object_type.iObjectTypeGroupID
        : false
    if (!iObjectTypeGroupID) return []
    return state.steps.filter((step) => {
      const check = step.iObjectTypeGroupID.indexOf(iObjectTypeGroupID)
      if (check !== -1) {
        return step
      }
    })
  },
  currentStep: (state) => {
    return state.steps.find((step) => step.current) || {}
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
    state.object_feature = []
    state.object.object_features.forEach((option) => {
      state.object_feature.push(option.iFeatureID)
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
    state.steps.map((step) => {
      if (step.id === payload.id) {
        step.current = true
      } else {
        step.current = false
      }
      return step
    })
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
  },
  SET_objectFeature(state, payload) {
    state.object_feature = payload
  },
  SET_sObjectAddress(state, { sObjectAddress, coordinates }) {
    state.object.sObjectAddress = sObjectAddress
    state.object.aObjectCoordinate.coordinates = coordinates
  },
  CHANGE_iPlaceID_in_places(state, { iPlaceID, index }) {
    state.object.object_places[index].iPlaceID = Number(iPlaceID)
  },
  CHANGE_sPlaceTitle_in_places(state, { sPlaceTitle, index }) {
    state.object.object_places[index].sPlaceTitle = sPlaceTitle
  },
  CHANGE_iPlaceDistance_in_places(state, { iPlaceDistance, index }) {
    state.object.object_places[index].iPlaceDistance = Number(iPlaceDistance)
  },
  ADD_iPlaceID_in_places(state, payload) {
    state.object.object_places.push(payload)
  },
  REMOVE_place_in_places(state, payload) {
    state.object.object_places.splice(payload, 1)
  },
  SET_sObjectTitle(state, payload) {
    state.object.sObjectTitle = payload
  },
  SET_tObjectDesc(state, payload) {
    state.object.tObjectDesc = payload
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
        case 'hotel':
          response = await this.$axios.$post('/api/tutorial/update_hotel', {
            iObjectID: state.object.iObjectID,
            sObjectTitle: state.object.sObjectTitle,
            iObjectRoomHotelCount: state.object.iObjectRoomHotelCount,
            iObjectFloorAll: state.object.iObjectFloorAll
          })
          commit('SET_object', response.object)
          break
        case 'room':
          response = await this.$axios.$post('/api/tutorial/update_room', {
            iObjectID: state.object.iObjectID,
            iObjectArea: state.object.iObjectArea,
            iObjectRoomCount: state.object.iObjectRoomCount,
            iObjectPlace: state.object.iObjectPlace
          })
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
        case 'feature':
          response = await this.$axios.$post('/api/tutorial/update_feature', {
            iObjectID: state.object.iObjectID,
            object_feature: state.object_feature
          })
          commit('SET_object', response.object)
          break
        case 'location':
          response = await this.$axios.$post('/api/tutorial/update_location', {
            iObjectID: state.object.iObjectID,
            sObjectAddress: state.object.sObjectAddress,
            aObjectCoordinate: state.object.aObjectCoordinate
          })
          commit('SET_object', response.object)
          break
        case 'place':
          response = await this.$axios.$post('/api/tutorial/update_place', {
            iObjectID: state.object.iObjectID,
            places: state.object.object_places
          })
          commit('SET_object', response.object)
          break
        case 'description':
          response = await this.$axios.$post(
            '/api/tutorial/update_description',
            {
              iObjectID: state.object.iObjectID,
              sObjectTitle: state.object.sObjectTitle,
              tObjectDesc: state.object.tObjectDesc
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
  },
  CHANGE_iPlaceID_in_places({ state, commit }, { iPlaceID, index }) {
    commit('CHANGE_iPlaceID_in_places', { iPlaceID, index })
  },
  CHANGE_sPlaceTitle_in_places({ state, commit }, { sPlaceTitle, index }) {
    commit('CHANGE_sPlaceTitle_in_places', { sPlaceTitle, index })
  },
  CHANGE_iPlaceDistance_in_places(
    { state, commit },
    { iPlaceDistance, index }
  ) {
    commit('CHANGE_iPlaceDistance_in_places', { iPlaceDistance, index })
  },
  ADD_iPlaceID_in_places({ state, commit }) {
    commit('ADD_iPlaceID_in_places', {
      iObjectPlaceID: null,
      iObjectID: state.object.iObjectID,
      iPlaceID: null,
      sPlaceTitle: null,
      iPlaceDistance: null
    })
  },
  REMOVE_place_in_places({ commit }, { index }) {
    commit('REMOVE_place_in_places', index)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
