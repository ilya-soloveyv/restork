<template>
  <div class="tutorial-hint">
    <div
      v-for="(hint, index) in hints"
      :key="index"
      class="tutorial-hint__hint"
    >
      <img v-if="hint.img" :src="hint.img" class="tutorial-hint__image" />
      <div v-if="hint.icon" class="tutorial-hint__icon-wrap">
        <img
          v-if="hint.icon"
          :src="`/icon/${hint.icon}`"
          class="tutorial-hint__icon"
        />
      </div>
      <div v-if="hint.title || hint.desc" class="tutorial-hint__data">
        <span v-if="hint.title" class="tutorial-hint__title">
          {{ hint.title }}
        </span>
        <span v-if="hint.title && hint.desc" class="tutorial-hint__dash">
          -
        </span>
        <span v-if="hint.desc" class="tutorial-hint__desc">
          {{ hint.desc }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    hints: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
.tutorial-hint {
  padding: 100px 0 100px 30px;
  height: 100%;
  overflow: auto;

  @media (max-width: 1199px) {
    height: 100px;
  }

  &__hint {
    overflow: hidden;
    border-radius: 6px;
    background: #f5f5f5;

    &:not(:last-child) {
      margin-bottom: 24px;
    }
  }

  &__image {
    width: 100%;
  }

  &__icon-wrap {
    padding: 12px 16px 0;
  }

  &__icon {
    height: 48px;
  }

  &__data {
    padding: 12px 16px;
  }

  &__title {
    font-size: 14px;
    font-weight: 600;
  }

  &__dash {
    color: #666;
  }

  &__desc {
    font-size: 14px;
    color: #666;
  }
}
</style>
