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
        title="Итак, нам осталось только открыть ваш объект для бронирования"
        desc="Для этого установите статус вашего жилья с помощью переключателя ниже. Если ваш объект уже свободен и готов принимать гостей, установите статус «Свободен», если освобождается завтра или послезавтра, то «Освобождается завтра» или «Освобождается послезавтра». Если ваше жильё не освобождается в ближайшие два дня или вы передумали его сдавать, установите статус «Занят»."
      />
      <div class="form-group-wrap">
        <b-form-group label="Статус объекта">
          <b-form-select
            v-model="iObjectStatusID"
            :state="iObjectStatusIDValid"
          >
            <option class="placeholder" value="null">
              Выберите один из вариантов
            </option>
            <option
              v-for="(status, index) in objectStatus"
              :key="index"
              :value="status.iObjectStatusID"
            >
              {{ status.sObjectStatusTitle }}
            </option>
          </b-form-select>
          <b-form-invalid-feedback class="error-message">
            Укажите Статус объекта
          </b-form-invalid-feedback>
        </b-form-group>
      </div>
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
      iObjectStatusIDValid: null,
      iObjectStatusID: 2,
      objectStatus: [
        {
          iObjectStatusID: 1,
          sObjectStatusTitle: 'Занят'
        },
        {
          iObjectStatusID: 2,
          sObjectStatusTitle: 'Освобождается сегодня'
        },
        {
          iObjectStatusID: 3,
          sObjectStatusTitle: 'Освобождается завтра'
        },
        {
          iObjectStatusID: 4,
          sObjectStatusTitle: 'Освобождается послезавтра'
        }
      ]
    }
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
