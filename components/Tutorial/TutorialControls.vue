<template>
  <div class="tutorial-controls">
    <div class="tutorial-controls__dots">
      <div
        v-for="i in countSteps"
        :key="i"
        :class="{ 'tutorial-controls__dot_active': i <= number }"
        class="tutorial-controls__dot"
      />
    </div>
    <div class="tutorial-controls__button">
      <!-- <nuxt-link to="/tutorial/step/object-type">object-type</nuxt-link> -->
      <b-button
        @click="clickButton('prev')"
        :disabled="!checkPrevStep"
        variant="primary"
        size="lg"
        block
      >
        Назад
      </b-button>
    </div>
    <div class="tutorial-controls__info">
      {{ number }} / {{ countSteps }}
      <!-- {{ currentStep.stepNumber }} / {{ countSteps }} -->
      <!-- {{ currentStepIndex }} -->
      <!-- {{ prevStep }} -->
      <!-- {{ !nextStep }} -->
      <!-- {{ prevStep }} -->
      <!-- {{ nextStep }} -->
    </div>
    <div class="tutorial-controls__button">
      <!-- <nuxt-link to="/tutorial/step/basic">basic</nuxt-link> -->
      <b-button
        @click="clickButton('next')"
        :disabled="!checkNextStep"
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
    countSteps: {
      type: Number,
      default: 0
    },
    currentStepIndex: {
      type: Number,
      default: 0
    },
    checkPrevStep: {
      type: Boolean,
      default: true
    },
    checkNextStep: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    number() {
      return this.currentStepIndex + 1
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
