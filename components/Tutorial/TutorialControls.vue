<template>
  <div class="tutorial-controls">
    <div class="tutorial-controls__dots">
      <div
        v-for="i in countSteps"
        :key="i"
        :class="{ 'tutorial-controls__dot_active': i <= currentStepIndex + 1 }"
        class="tutorial-controls__dot"
      />
    </div>
    <div class="tutorial-controls__button">
      <b-button
        @click="clickButton('prev')"
        :disabled="!prevStep"
        variant="primary"
        size="lg"
        block
      >
        Назад
      </b-button>
    </div>
    <div class="tutorial-controls__info">
      {{ currentStep.stepNumber }} / {{ countSteps }}
      <!-- {{ currentStepIndex }} -->
      <!-- {{ prevStep }} -->
      <!-- {{ !nextStep }} -->
    </div>
    <div class="tutorial-controls__button">
      <b-button
        @click="clickButton('next')"
        :disabled="!nextStep"
        variant="primary"
        size="lg"
        block
      >
        Далее
      </b-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    currentStep: {
      type: Object,
      default: undefined
    },
    prevStep: {
      type: Object,
      default: undefined
    },
    nextStep: {
      type: Object,
      default: undefined
    },
    countSteps: {
      type: Number,
      default: undefined
    },
    currentStepIndex: {
      type: Number,
      default: undefined
    }
  },
  methods: {
    clickButton(type) {
      this.$emit('click', type)
    }
  }
}
</script>

<style lang="scss" scoped>
.tutorial-controls {
  position: relative;
  background: white;
  height: 100px;
  display: flex;
  gap: 15px;
  align-items: center;
  padding-top: 3px;

  &__dots {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 3px;
    display: flex;
    gap: 3px;
  }

  &__dot {
    background: #eee;
    height: 100%;
    flex-grow: 1;

    &_active {
      background: #007bff;
    }
  }

  &__button {
    flex-shrink: 0;
    flex-basis: 160px;
  }

  &__info {
    flex-grow: 1;
    font-size: 14px;
    color: #999;
    text-align: center;
  }
}
</style>
