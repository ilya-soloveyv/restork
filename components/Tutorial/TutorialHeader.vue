<template>
  <div v-if="step && title" class="tutorial-header">
    <div class="tutorial-header__wrapper">
      <!-- <div class="tutorial-header__icon"></div> -->
      <div class="tutorial-header__step">
        Шаг
        {{ step }}
      </div>
      <div class="tutorial-header__title">
        {{ title }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    step: {
      type: Number,
      required: false
    },
    title: {
      type: String,
      required: false
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

  &__wrapper {
    display: flex;
    gap: 8px;
  }

  &__title {
    border-left: 1px solid black;
    padding-left: 8px;
  }
}
</style>
