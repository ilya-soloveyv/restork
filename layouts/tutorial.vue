<template>
  <div class="tutorial-layout">
    <b-container class="tutorial-layout__container">
      <TopNav />
      <nuxt name="default" />
    </b-container>
  </div>
</template>

<script>
import TopNav from '~/components/TopNav'

export default {
  components: {
    TopNav
  }
}
</script>

<style lang="scss">
.tutorial-layout {
  min-height: 100vh;

  &__container {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
}
</style>
