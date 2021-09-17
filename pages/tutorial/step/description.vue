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
      <TutorialFormLabel title="Напишите название вашего объекта" />
      <b-row>
        <b-col xl="12">
          <div class="form-group-wrap">
            <b-form-group label="Название">
              <b-form-input
                v-model="sObjectTitle"
                :state="sObjectTitleValid"
                placeholder="Название"
              />
              <b-form-invalid-feedback class="error-message">
                Укажите Название
              </b-form-invalid-feedback>
            </b-form-group>
          </div>
        </b-col>
      </b-row>
      <TutorialFormLabel
        title="Расскажите, чем интересен ваш район, и укажите особенности жилья, например быстрый Wi-Fi или парковку"
      />
      <b-row>
        <b-col xl="12">
          <div class="form-group-wrap">
            <b-form-group label="Описание">
              <b-form-textarea
                v-model="tObjectDesc"
                :state="tObjectDescValid"
                placeholder="Описание"
                rows="4"
              />
              <b-form-invalid-feedback class="error-message">
                Укажите Описание
              </b-form-invalid-feedback>
            </b-form-group>
          </div>
        </b-col>
      </b-row>
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
  data() {
    return {
      sObjectTitleValid: null,
      tObjectDescValid: null
    }
  },
  computed: {
    sObjectTitle: {
      get() {
        return this.$store.state.tutorial.object.sObjectTitle
      },
      set(value) {
        this.$store.commit('tutorial/SET_sObjectTitle', value)
      }
    },
    tObjectDesc: {
      get() {
        return this.$store.state.tutorial.object.tObjectDesc
      },
      set(value) {
        this.$store.commit('tutorial/SET_tObjectDesc', value)
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
