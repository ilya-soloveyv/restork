<template>
  <b-form-checkbox
    :value="value"
    :class="{ 'tutorial-checkbox_without-icon': !icon }"
    class="tutorial-checkbox"
  >
    <div class="tutorial-checkbox__wrap">
      <div class="tutorial-checkbox__icon">
        <img
          v-if="icon"
          :src="`/icon/${icon}`"
          class="tutorial-checkbox__image"
        />
      </div>
      <div class="tutorial-checkbox__title">
        {{ desc }}
      </div>
    </div>
  </b-form-checkbox>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      default: undefined
    },
    desc: {
      type: String,
      default: undefined
    },
    icon: {
      type: String,
      default: undefined
    }
  }
}
</script>

<style lang="scss" scoped>
.tutorial-checkbox {
  // background: red;
  display: flex;
  margin: 0 0 32px;
  padding: 0;

  &__wrap {
    opacity: 1;
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 16px 16px 16px 50px;
  }

  &__icon {
    width: 32px;
    height: 32px;
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__title {
    // color: orange;
  }
}
.custom-control {
  // margin: 0 0 32px;
  // display: flex !important;
  // padding: 0;
  // background-color: white;
  /deep/ .custom-control-input {
    &:checked {
      & ~ .custom-control-label {
        opacity: 1;
        border: 1px solid #000000;
        &::after {
          left: 15px;
          background-image: url('/tutorial/tick.svg');
          width: 25px;
          height: 25px;
          top: 50%;
          transform: translate(0, -50%);
        }
      }
    }
  }
  /deep/ .custom-control-label {
    padding: 0;
    border: 1px solid #eaeaea;
    border-radius: 8px;
    width: 100%;
    font-size: 14px;
    line-height: 16px;
    font-weight: 500;
    opacity: 0.7;
    @media (max-width: 767px) {
      font-size: 14px;
    }
    &::before {
      left: 20px;
      border: none;
      box-shadow: none;
      background: none;
      top: 50%;
      transform: translate(0, -50%);
    }
    .wrapContent {
      display: flex;
      flex-direction: row;
      align-items: center;
      .image-checkbox {
        margin: 0 30px 0 50px;
      }
    }
  }
}
</style>
