<template>
  <div class="tutorial-hint">
    <div v-for="hint in hints" :key="hint.id" class="tutorial-hint__hint">
      <img v-if="hint.img" :src="hint.img" class="tutorial-hint__image" />
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
