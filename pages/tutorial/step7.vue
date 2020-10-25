<template>
  <div class="wrapTutorial">
    <div class="wrapTitle">
      <Title />
    </div>
    <div class="wrapStep">
      Step7
    </div>
    <div class="wrapHint">
      Hint
    </div>
    <div class="wrapProgress">
      <ProgressBar />
    </div>
    <PopupStep />
  </div>
</template>

<script>
import ProgressBar from '~/components/Tutorial/ProgressBar'
import Title from '~/components/Tutorial/Title'
import PopupStep from '~/components/Tutorial/PopupStep'
// import PopupStep from '~/components/PopupStep'

export default {
  data() {
    return {
      currentStepNumber: 1
    }
  },
  layout: 'dashboardV2Tutorial',
  components: {
    Title,
    ProgressBar,
    PopupStep
  },
  computed: {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.wrapTutorial {
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: auto 1fr auto;
  height: 100%;
  @media (max-width: 991px) {
    grid-template-columns: 1fr;
  }
  .wrapTitle {
    // background: blue;
    grid-column: 1/2;
    grid-row: 1/2;
  }
  .wrapStep {
    background: red;
    grid-column: 1/2;
    grid-row: 2/3;
    overflow: auto;
  }
  .wrapHint {
    // background: green;
    grid-column: 2/3;
    grid-row: 2/4;
    overflow: auto;
    display: flex;
    justify-content: flex-end;
    @media (max-width: 991px) {
      display: none;
    }
  }
  .wrapProgress {
    // background: yellow;
    grid-column: 1/2;
    grid-row: 3/4;
  }
}
</style>
