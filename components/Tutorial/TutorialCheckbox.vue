<template>
  <b-form-checkbox :value="value">
    <div class="wrapContent">
      <div class="image-checkbox">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#000000"
          stroke-width="1"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <circle cx="10" cy="20.5" r="1" />
          <circle cx="18" cy="20.5" r="1" />
          <path
            d="M2.5 2.5h3l2.7 12.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6l1.6-8.4H7.1"
          />
        </svg>
      </div>
      <div class="desc">
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
      default: null
    },
    desc: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
.custom-control {
  margin: 0 0 32px;
  display: flex !important;
  padding: 0;
  background-color: white;
  /deep/ .custom-control-input {
    &:checked {
      & ~ .custom-control-label {
        opacity: 1;
        border: 1px solid #000000;
        &::after {
          left: 20px;
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
    padding: 29px 0;
    border: 1px solid #eaeaea;
    border-radius: 8px;
    width: 100%;
    font-size: 16px;
    line-height: 18px;
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
