<template>
  <div class="tutorial-form-label">
    {{ title }}
  </div>
</template>

<script>
export default {
  name: 'TutorialFormLabel',
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style>
.tutorial-form-label {
  padding: 0 0 15px;
}
</style>
