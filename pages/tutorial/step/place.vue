<template>
  <TutorialPage>
    <template slot="header">
      <TutorialHeader
        :step="currentStep.stepNumber"
        :title="currentStep.title"
      />
    </template>
    <template slot="hint">
      <TutorialHint />
    </template>
    <template slot="content">
      <TutorialFormLabel
        title="Перечислите какие значимые места есть рядом с вашим объектом, напишите их названия и расстояния до них"
      />
      <TutorialPlaceItem
        v-for="(place, i) in selectedPlace"
        :key="i"
        :iObjectPlaceID="place.iObjectPlaceID"
        :iObjectID="place.iObjectID"
        :iPlaceID="place.iPlaceID"
        :sPlaceTitle="place.sPlaceTitle"
        :iPlaceDistance="place.iPlaceDistance"
        :index="i"
        :places="places"
        @select="change_iPlaceID($event)"
        @title="change_sPlaceTitle($event)"
        @distance="change_iPlaceDistance($event)"
        @remove="removePlace"
      />
      <b-btn @click="addPlace" variant="outline-secondary" pill size="sm">
        Добавить
      </b-btn>
    </template>
    <template slot="controls">
      <TutorialControls
        :currentStep="currentStep"
        :prevStep="prevStep"
        :nextStep="nextStep"
        :countSteps="countSteps"
        :currentStepIndex="currentStepIndex"
        @click="changeStep"
      />
    </template>
  </TutorialPage>
</template>

<script>
import TutorialPage from '@/components/Tutorial/TutorialPage.vue'
import TutorialHeader from '@/components/Tutorial/TutorialHeader.vue'
import TutorialHint from '@/components/Tutorial/TutorialHint.vue'
import TutorialControls from '@/components/Tutorial/TutorialControls.vue'

import TutorialFormLabel from '@/components/Tutorial/TutorialFormLabel.vue'
import TutorialPlaceItem from '@/components/Tutorial/TutorialPlaceItem.vue'

export default {
  layout: 'tutorial',
  components: {
    TutorialPage,
    TutorialHeader,
    TutorialHint,
    TutorialControls,
    TutorialFormLabel,
    TutorialPlaceItem
  },
  computed: {
    places() {
      return this.$store.state.place.list
    },
    selectedPlace() {
      return this.$store.state.tutorial.object.object_places
    },
    currentStep() {
      return this.$store.getters['tutorial/currentStep']
    },
    prevStep() {
      return this.$store.getters['tutorial/prevStep']
    },
    nextStep() {
      return this.$store.getters['tutorial/nextStep']
    },
    countSteps() {
      return this.$store.getters['tutorial/countSteps']
    },
    currentStepIndex() {
      return this.$store.getters['tutorial/currentStepIndex']
    }
  },
  async asyncData({ store }) {
    await store.dispatch('place/GET_LIST')
  },
  methods: {
    changeStep(type) {
      this.$store.dispatch('tutorial/CHANGE_STEP', {
        type,
        currentStep: this.currentStep
      })
    },
    change_iPlaceID(payload) {
      this.$store.dispatch('tutorial/CHANGE_iPlaceID_in_places', payload)
    },
    change_sPlaceTitle(payload) {
      this.$store.dispatch('tutorial/CHANGE_sPlaceTitle_in_places', payload)
    },
    change_iPlaceDistance(payload) {
      this.$store.dispatch('tutorial/CHANGE_iPlaceDistance_in_places', payload)
    },
    addPlace() {
      this.$store.dispatch('tutorial/ADD_iPlaceID_in_places')
    },
    removePlace(index) {
      this.$store.dispatch('tutorial/REMOVE_place_in_places', index)
    }
  }
}
</script>
