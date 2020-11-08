<template>
  <div class="title">
    <div class="leftTitle">
      <div v-b-modal.modalHintStep class="circle">
        <div class="picture">
          <img src="~/static/tutorial/title-left-icon.svg" />
        </div>
        <PopupStep />
      </div>
      <div class="stepNumber">
        Шаг {{ currentStep }} | {{ currentStepDesc }}
      </div>
    </div>

    <div class="rightTitle">
      <div v-b-modal.modalHint class="hint">
        <div class="hintWord">Подсказка</div>
        <PopupHint />
      </div>
    </div>
  </div>
</template>

<script>
import PopupStep from '~/components/Tutorial/PopupStep'
import PopupHint from '~/components/Tutorial/PopupHint'
export default {
  components: {
    PopupStep,
    PopupHint
  },
  computed: {
    currentStep() {
      return this.$store.state.tutorial.step
    },
    currentStepDesc() {
      return this.$store.getters['tutorial/currentStepDesc']
      // return this.$store.getters.tutorial.currentStepDesc
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
    cursor: pointer;
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
        a {
          text-decoration: none;
        }
      }
    }
  }
}
</style>
