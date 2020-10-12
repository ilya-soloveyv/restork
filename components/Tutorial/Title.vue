<template>
  <div class="title">
    <div class="leftTitle">
      <div class="circle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#000000"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <line x1="8" y1="6" x2="21" y2="6"></line>
          <line x1="8" y1="12" x2="21" y2="12"></line>
          <line x1="8" y1="18" x2="21" y2="18"></line>
          <line x1="3" y1="6" x2="3.01" y2="6"></line>
          <line x1="3" y1="12" x2="3.01" y2="12"></line>
          <line x1="3" y1="18" x2="3.01" y2="18"></line>
        </svg>
      </div>
      <div class="stepNumber">Шаг {{ stepNumber }} | Категория объекта</div>
    </div>
    <div class="rightTitle">
      <div class="hint">
        <div class="hintWord"><a href="#popupSteps">Подсказка</a></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    stepNumber: {
      type: Number,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
.title {
  margin: 27px 0 45px;
  @media (max-width: 991px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  .leftTitle {
    display: flex;
    flex-direction: row;
    align-items: center;
    .circle {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      border: 1px solid #dbdbdb;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .stepNumber {
      margin-left: 12px;
      font-size: 14px;
      line-height: 21px;
      font-weight: 500;
      color: #000000;
      @media (max-width: 768px) {
        font-size: 12px;
      }
    }
  }
  .rightTitle {
    .hint {
      width: 156px;
      height: 40px;
      border-radius: 20px;
      border: 1px solid #dbdbdb;
      display: flex;
      align-items: center;
      position: relative;
      @media (max-width: 767px) {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: 1px solid black;
        position: relative;
      }
      @media (min-width: 992px) {
        display: none;
      }
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 22px;
        height: 22px;
        background-image: url('/tutorial/hint.svg');
        background-size: contain;
        background-repeat: no-repeat;
        transform: translate(40%, 40%);
      }
      .hintWord {
        margin-left: 55px;
        font-size: 12px;
        line-height: 21px;
        font-weight: 500;
        color: #000000;
        @media (max-width: 767px) {
          display: none;
        }
      }
    }
  }
}
</style>
