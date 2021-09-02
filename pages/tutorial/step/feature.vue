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
        title="Выберите какие из особенностей есть в Вашем объекте"
      />
      <!-- <pre>{{ selectedFeature }}</pre> -->
      <!-- <pre>{{ feature }}</pre> -->
      <b-form-checkbox-group v-model="selectedFeature">
        <b-row>
          <b-col v-for="item in feature" :key="item.iFeatureID" xl="6">
            <TutorialCheckbox
              :value="item.iFeatureID"
              :desc="item.sFeatureTitle"
            />
          </b-col>
        </b-row>
      </b-form-checkbox-group>
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
import TutorialCheckbox from '@/components/Tutorial/TutorialCheckbox.vue'

export default {
  layout: 'tutorial',
  components: {
    TutorialPage,
    TutorialHeader,
    TutorialHint,
    TutorialControls,
    TutorialFormLabel,
    TutorialCheckbox
  },
  computed: {
    feature() {
      return this.$store.state.feature.list
    },
    selectedFeature: {
      get() {
        return this.$store.state.tutorial.object_feature
      },
      set(payload) {
        this.$store.commit('tutorial/SET_objectFeature', payload)
      }
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
    await store.dispatch('feature/GET_LIST')
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
