<template>
  <div class="tutorial-page" sticky-container>
    <div v-if="currentStep.id" class="tutorial-page__header">
      <TutorialHeader
        :currentStepIndex="currentStepIndex"
        :currentStepTitle="currentStepTitle"
        :steps="steps"
        @useStep="useStep"
      />
    </div>
    <div ref="hint" class="tutorial-page__hint">
      <slot name="hint" />
    </div>
    <div class="tutorial-page__content">
      <slot name="content" />
    </div>
    <div v-if="currentStep.id" class="tutorial-page__controls">
      <TutorialControls
        :countSteps="countSteps"
        :currentStepIndex="currentStepIndex"
        :checkPrevStep="checkPrevStep"
        :checkNextStep="checkNextStep"
        @click="changeStep"
      />
    </div>
  </div>
</template>

<script>
import TutorialHeader from '@/components/Tutorial/TutorialHeader.vue'
import TutorialControls from '@/components/Tutorial/TutorialControls.vue'

export default {
  components: {
    TutorialHeader,
    TutorialControls
  },
  computed: {
    steps() {
      return this.$store.getters['tutorial/currentSteps']
    },
    currentStep() {
      return this.$store.getters['tutorial/currentStep']
    },
    currentStepIndex() {
      return this.$store.getters['tutorial/currentStepIndex']
    },
    checkPrevStep() {
      return this.$store.getters['tutorial/checkPrevStep']
    },
    checkNextStep() {
      return this.$store.getters['tutorial/checkNextStep']
    },
    countSteps() {
      return this.$store.getters['tutorial/countSteps']
    },
    currentStepTitle() {
      return this.$store.getters['tutorial/currentStepTitle']
    }
  },
  created() {
    this.$store.dispatch('tutorial/GET_OBJECT')
    this.$store.dispatch('objectType/GET_LIST')
    this.$store.dispatch('objectTypeGroup/GET_LIST')
    this.$store.dispatch('roomType/GET_LIST')
  },
  mounted() {
    window.addEventListener('scroll', this.autoHeightHintBlock)
    this.autoHeightHintBlock()
  },
  destroyed() {
    window.removeEventListener('scroll', this.autoHeightHintBlock)
  },
  methods: {
    autoHeightHintBlock() {
      const windowHeight = window.innerHeight
      const hintEl = this.$refs.hint
      const topOffset = document.scrollingElement.scrollTop
      if (topOffset <= 79) {
        hintEl.style.height = windowHeight - (79 - topOffset) + 'px'
      } else {
        hintEl.style.height = windowHeight + 'px'
      }
    },
    changeStep(type) {
      this.$store.dispatch('tutorial/CHANGE_STEP', {
        type
      })
    },
    useStep(stepID) {
      this.$store.dispatch('tutorial/CHANGE_STEP', {
        stepID
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.tutorial-page {
  flex-grow: 1;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 100px 1fr 100px;
  min-height: calc(100vh - 79px);

  @media (max-width: 1199px) {
    grid-template-columns: 1fr auto;
  }

  &__header {
    grid-column: 1/2;
    grid-row: 1/2;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 100;
    height: auto !important;
  }

  &__hint {
    grid-column: 2/3;
    grid-row: 1/4;
    position: sticky;
    left: 0;
    top: 0;
    overflow: auto;
    height: auto !important;
    z-index: 101;

    @media (max-width: 1199px) {
      grid-row: 1/2;
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
  }

  &__content {
    grid-column: 1/2;
    grid-row: 2/3;
    padding-bottom: 32px;

    @media (max-width: 1199px) {
      grid-column: 1/3;
    }
  }

  &__controls {
    grid-column: 1/2;
    grid-row: 3/4;
    position: sticky;
    left: 0;
    bottom: 0;
    z-index: 100;

    @media (max-width: 1199px) {
      grid-column: 1/3;
    }
  }
}
</style>
