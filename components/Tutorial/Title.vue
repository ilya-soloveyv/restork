<template>
  <div class="title">
    <div class="leftTitle">
      <div class="circle" v-b-modal.modalHint>
        <div class="picture">
          <img src="~/static/tutorial/title-left-icon.svg" />
        </div>
        <PopupStepBootstrap />
      </div>
      <div class="stepNumber">
        Шаг {{ currentStep }} | {{ currentStepDesc }}
      </div>
    </div>

    <!-- <div>
      <div v-b-modal.modalHint>Launch demo modal</div>

      <b-modal id="modalHint" title="BootstrapVue">
        <p class="my-4">Hello from modal!</p>
      </b-modal>
    </div> -->

    <div class="rightTitle">
      <div class="hint">
        <div class="hintWord"><a href="#popupSteps">Подсказка</a></div>
      </div>
    </div>
  </div>
</template>

<script>
import PopupStepBootstrap from '~/components/Tutorial/PopupStepBootstrap'
export default {
  components: {
    PopupStepBootstrap
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
/deep/ #modalHint {
  .modal-dialog {
    height: 100%;
    max-width: 100%;
    margin: 63px 0 0;
    .modal-content {
      border-radius: 0;
      border: 0;
      .modal-header {
        display: none;
      }
      .modal-body {
        padding: 0;
      }
      .modal-footer {
        display: none;
      }
    }
  }
}
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
