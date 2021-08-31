<template>
  <TutorialPage>
    <template slot="content">
      Loading...
    </template>
  </TutorialPage>
</template>

<script>
import TutorialPage from '@/components/Tutorial/TutorialPage.vue'

export default {
  layout: 'tutorial',
  components: {
    TutorialPage
  },
  computed: {
    object() {
      return this.$store.state.tutorial.object
    }
  },
  created() {
    this.$store.dispatch('tutorial/CHECK_OBJECT')
  }
}
</script>
