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
      <TutorialFormLabel title="Напишите название отеля" />
      <b-row>
        <b-col xl="12">
          <div class="form-group-wrap">
            <b-form-group label="Напишите название отеля">
              <b-form-input
                v-model="sObjectTitle"
                :state="sObjectTitleValid"
                placeholder="Напишите название отеля"
              />
              <b-form-invalid-feedback class="error-message">
                Укажите Напишите название отеля
              </b-form-invalid-feedback>
            </b-form-group>
          </div>
        </b-col>
      </b-row>
      <TutorialFormLabel title="Укажите сколько всего номеров в гостинице" />
      <b-row>
        <b-col xl="4">
          <div class="form-group-wrap">
            <b-form-group label="Кол-во номеров">
              <b-form-input
                v-model="iObjectRoomHotelCount"
                :state="iObjectRoomHotelCountValid"
                placeholder="Кол-во номеров"
              />
              <b-form-invalid-feedback class="error-message">
                Укажите Кол-во номеров
              </b-form-invalid-feedback>
            </b-form-group>
          </div>
        </b-col>
      </b-row>
      <TutorialFormLabel
        title="Напишите какое общее колличество этажей строения"
      />
      <b-row>
        <b-col xl="4">
          <div class="form-group-wrap">
            <b-form-group label="Кол-во этажей">
              <b-form-input
                v-model="iObjectFloorAll"
                :state="iObjectFloorAllValid"
                placeholder="Кол-во этажей"
              />
              <b-form-invalid-feedback class="error-message">
                Укажите Кол-во этажей
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
      iObjectRoomHotelCountValid: null,
      iObjectFloorAllValid: null
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
    iObjectRoomHotelCount: {
      get() {
        return this.$store.state.tutorial.object.iObjectRoomHotelCount
      },
      set(value) {
        this.$store.commit('tutorial/SET_iObjectRoomHotelCount', value)
      }
    },
    iObjectFloorAll: {
      get() {
        return this.$store.state.tutorial.object.iObjectFloorAll
      },
      set(value) {
        this.$store.commit('tutorial/SET_iObjectFloorAll', value)
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
