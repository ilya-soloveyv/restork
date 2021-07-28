<template>
  <div class="tutorial-page" sticky-container>
    <div class="tutorial-page__header">
      <div v-sticky sticky-side="both" sticky-offset="{ top: 0, bottom: 100 }">
        <slot name="header" />
      </div>
    </div>
    <div class="tutorial-page__hint">
      <div v-sticky sticky-side="both" sticky-offset="{ top: 0, bottom: 100 }">
        <slot name="hint" />
      </div>
    </div>
    <div class="tutorial-page__content">
      <slot name="content" />
    </div>
    <div class="tutorial-page__controls">
      <div v-sticky sticky-side="bottom" sticky-offset="{ top: 0, bottom: 0 }">
        <slot name="controls" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tutorial-page {
  flex-grow: 1;
  background: green;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 100px 1fr 100px;
  min-height: calc(100vh - 79px);

  &__header {
    background: orange;
    grid-column: 1/2;
    grid-row: 1/2;
  }

  &__hint {
    background: blueviolet;
    grid-column: 2/3;
    grid-row: 2/4;
  }

  &__content {
    background: fuchsia;
    grid-column: 1/2;
    grid-row: 2/3;
  }

  &__controls {
    // position: fixed;
    // left: 0;
    // bottom: 0;
    background: teal;
    grid-column: 1/2;
    grid-row: 3/4;
  }
}
</style>
