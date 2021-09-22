<template>
  <div class="tutorial-hint">
    <div v-b-toggle.hints class="tutorial-hint__hint-trigger">
      <svg
        width="24"
        heigth="24"
        viewBox="0 0 24 24"
        class="tutorial-hint__hint-icon"
      >
        <path
          fill="currentColor"
          d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z"
        />
      </svg>
      <div class="tutorial-hint__hint-title">Подсказка</div>
    </div>
    <b-sidebar id="hints" title="Подсказки" backdrop shadow right>
      <TutorialHintList :hints="hints" />
    </b-sidebar>
    <div class="tutorial-hint__hints">
      <TutorialHintList :hints="hints" />
    </div>
  </div>
</template>

<script>
import TutorialHintList from '@/components/Tutorial/TutorialHintList.vue'

export default {
  components: {
    TutorialHintList
  },
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
  background: white;

  @media (max-width: 1199px) {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0 0 0 30px;
  }

  &__hints {
    @media (max-width: 1199px) {
      display: none;
    }
  }

  &__hint-trigger {
    display: none;

    @media (max-width: 1199px) {
      cursor: pointer;
      display: flex;
      align-items: center;
      border: 1px solid #ccc;
      padding: 6px 16px 6px 6px;
      border-radius: 18px;

      @media (max-width: 767px) {
        padding: 3px;
      }
    }
  }

  &__hint-icon {
    margin-right: 8px;

    @media (max-width: 767px) {
      margin: 0;
    }
  }

  &__hint-title {
    font-size: 14px;
    line-height: 24px;

    @media (max-width: 767px) {
      display: none;
    }
  }
}
</style>
