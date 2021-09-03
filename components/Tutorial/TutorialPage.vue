<template>
  <div class="tutorial-page" sticky-container>
    <div class="tutorial-page__header">
      <div v-sticky :sticky-offset="{ top: 0, bottom: 100 }" sticky-side="both">
        <slot name="header" />
      </div>
    </div>
    <div class="tutorial-page__hint">
      <slot name="hint" />
    </div>
    <div class="tutorial-page__content">
      <slot name="content" />
    </div>
    <div class="tutorial-page__controls">
      <slot name="controls" />
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('tutorial/GET_OBJECT')
    this.$store.dispatch('objectType/GET_LIST')
    this.$store.dispatch('roomType/GET_LIST')
  }
}
</script>

<style lang="scss" scoped>
.tutorial-page {
  flex-grow: 1;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 100px 1fr 100px;
  min-height: calc(100vh - 79px);

  &__header {
    grid-column: 1/2;
    grid-row: 1/2;
  }

  &__hint {
    grid-column: 2/3;
    grid-row: 1/4;
    position: sticky;
    left: 0;
    top: 0;
    overflow: auto;
    height: calc(100vh - 79px);

    @media (max-width: 1199px) {
      grid-row: 1/2;
    }
  }

  &__content {
    grid-column: 1/2;
    grid-row: 2/3;

    @media (max-width: 1199px) {
      grid-column: 1/3;
    }
  }

  &__controls {
    grid-column: 1/2;
    grid-row: 3/4;
    position: sticky;
    left: 0;
    bottom: 0;

    @media (max-width: 1199px) {
      grid-column: 1/3;
    }
  }
}
</style>
