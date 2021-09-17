<template>
  <div class="tutorial-form-label">
    {{ title }}
    <div v-if="desc" class="tutorial-form-label__desc">
      {{ desc }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'TutorialFormLabel',
  props: {
    title: {
      type: String,
      required: true
    },
    desc: {
      type: String,
      default: undefined
    }
  }
}
</script>

<style lang="scss" scoped>
.tutorial-form-label {
  width: 100%;
  padding: 0 0 15px;
  font-weight: 500;
  font-size: 16px;

  &__desc {
    padding-top: 16px;
    font-size: 14px;
    font-weight: 400px;
  }
}
</style>
