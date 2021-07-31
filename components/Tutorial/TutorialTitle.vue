<template>
  <h1 class="tutorial-title">
    {{ title }}
  </h1>
</template>

<script>
export default {
  name: 'TutorialTitle',
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style>
.tutorial-title {
  margin: 0 0 45px;
}
</style>
