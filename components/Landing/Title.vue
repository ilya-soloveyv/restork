<template>
  <h2 class="wrapTitle">
    {{ title }}
  </h2>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
h2 {
  font-size: 30px;
  font-weight: 500;
  line-height: 30px;
  padding: 40px 0;
  @media (max-width: 767px) {
    font-size: 26px;
    padding: 30px 0;
  }
}
</style>
