<template>
  <TutorialPage>
    <template slot="header">
      <TutorialHeader />
    </template>
    <template slot="hint">
      <TutorialHint />
    </template>
    <template slot="content">
      <p v-for="(num, index) in 40" :key="index">perferendis!</p>
    </template>
    <template slot="controls">
      <TutorialControls />
    </template>
  </TutorialPage>
</template>

<script>
import TutorialPage from './tutorialPage.vue'
import TutorialHeader from './tutorialHeader.vue'
import TutorialHint from './tutorialHint.vue'
import TutorialControls from './tutorialControls.vue'

export default {
  layout: 'tutorial',
  components: {
    TutorialPage,
    TutorialHeader,
    TutorialHint,
    TutorialControls
  }
}
</script>

<style lang="scss" scoped>
.tutorial {
  background: red;
}
</style>
