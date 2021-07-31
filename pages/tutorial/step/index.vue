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
import TutorialPage from '@/components/Tutorial/TutorialPage.vue'
import TutorialHeader from '@/components/Tutorial/TutorialHeader.vue'
import TutorialHint from '@/components/Tutorial/TutorialHint.vue'
import TutorialControls from '@/components/Tutorial/TutorialControls.vue'

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
