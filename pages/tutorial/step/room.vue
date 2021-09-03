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
      <TutorialFormLabel title="Номер" />
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

export default {
  layout: 'tutorial',
  components: {
    TutorialPage,
    TutorialHeader,
    TutorialHint,
    TutorialControls,
    TutorialFormLabel
  },
  computed: {
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
    // await store.dispatch('place/GET_LIST')
  },
  methods: {
    changeStep(type) {
      this.$store.dispatch('tutorial/CHANGE_STEP', {
        type,
        currentStep: this.currentStep
      })
    }
  }
}
</script>
