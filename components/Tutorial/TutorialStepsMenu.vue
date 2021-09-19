<template>
  <b-dropdown
    no-caret
    variant="link"
    toggle-class="text-decoration-none"
    class="tutorial-steps-menu"
  >
    <template #button-content>
      <svg width="16" height="16" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"
        />
      </svg>
    </template>
    <b-dropdown-item
      v-for="(step, stepIndex) in steps"
      :key="step.id"
      :active="step.current"
      @click="useStep(step.id)"
      class="tutorial-steps-menu__item"
    >
      <div class="tutorial-steps-menu__item-step">Шаг {{ stepIndex + 1 }}</div>
      <div class="tutorial-steps-menu__item-title">{{ step.title }}</div>
    </b-dropdown-item>
    <!-- <b-dropdown-item>First Action</b-dropdown-item>
    <b-dropdown-item>Second Action</b-dropdown-item>
    <b-dropdown-item>Third Action</b-dropdown-item>
    <b-dropdown-divider></b-dropdown-divider>
    <b-dropdown-item active>Active action</b-dropdown-item>
    <b-dropdown-item disabled>Disabled action</b-dropdown-item>
    <pre>{{ steps }}</pre> -->
  </b-dropdown>
</template>

<script>
export default {
  props: {
    steps: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    useStep(stepID) {
      this.$emit('useStep', stepID)
    }
  }
}
</script>

<style lang="scss" scoped>
.tutorial-steps-menu {
  &__item {
    ::v-deep .dropdown-item {
      display: flex;
      padding: 8px 32px;

      &.active {
        background: #f5f5f5;

        .tutorial-steps-menu__item-title {
          font-weight: 600;
        }
      }
    }
  }

  &__item-step {
    width: 65px;
    font-size: 14px;
    color: #999;
  }

  &__item-title {
    font-size: 14px;
    color: black;
  }
}
::v-deep .btn {
  width: 32px;
  height: 32px;
  padding: 0;
  border-radius: 50% !important;
  border: 1px solid #ccc;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: black;
}
</style>
