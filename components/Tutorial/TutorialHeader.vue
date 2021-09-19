<template>
  <div class="tutorial-header">
    <div class="tutorial-header__wrapper">
      <TutorialStepsMenu :steps="steps" @useStep="useStep" />
      <!-- <div v-b-toggle.stepsMenu class="tutorial-header__icon">
        <svg width="16" height="16" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"
          />
        </svg>
      </div>
      <b-sidebar id="stepsMenu" class="steps-menu" :left="300">
        <div class="px-3 py-2">
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio
        </div>
      </b-sidebar> -->
      <div class="tutorial-header__step">
        Шаг
        {{ number }}
      </div>
      <div class="tutorial-header__title">
        {{ currentStepTitle }}
      </div>
    </div>
  </div>
</template>

<script>
import TutorialStepsMenu from '@/components/Tutorial/TutorialStepsMenu.vue'

export default {
  components: {
    TutorialStepsMenu
  },
  props: {
    steps: {
      type: Array,
      default: () => []
    },
    currentStepIndex: {
      type: Number,
      default: undefined
    },
    currentStepTitle: {
      type: String,
      required: false,
      default: undefined
    }
  },
  computed: {
    number() {
      return this.currentStepIndex + 1
    }
  },
  methods: {
    useStep(stepID) {
      this.$emit('useStep', stepID)
    }
  }
}
</script>

<style lang="scss" scoped>
.tutorial-header {
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 14px;
  line-height: 18px;
  font-weight: 400;
  background: white;

  &__wrapper {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  &__icon {
    width: 32px;
    height: 32px;
    border: 1px solid #ccc;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: black;
  }

  &__title {
    border-left: 1px solid black;
    padding-left: 8px;
  }
}

.steps-menu {
  ::v-deep .b-sidebar {
    // height: auto !important;
    // top: 100px;
    // left: 100px;
  }
}
</style>
