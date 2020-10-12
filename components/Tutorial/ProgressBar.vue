<template>
  <div class="progressBar">
    <div class="progressB">
      <div
        v-for="(stepActive, index) in isStepActive"
        :key="index"
        v-bind:class="{ current: stepActive }"
        class="step"
      ></div>
    </div>
    <div class="wrapBtn">
      <button class="prevBtn" v-on:click="prevStep"><span>Назад</span></button>
      <span class="steps">{{ stepNumber }}/{{ maxStep }}</span>
      <span class="steps">{{ currentStep }}</span>
      <button class="nextBtn" v-on:click="nextStep">Далеe</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      stepNumber: 1,
      minStep: 1,
      maxStep: 10,
      isStepActive: [
        true,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false
      ]
    }
  },
  props: {
    currentStep: {
      type: Number,
      default: 1
    }
  },
  // computed: {
  //   stepNumber: {
  //     get() {
  //       return this.stepNumberProp
  //     },
  //     set(value) {
  //       this.stepNumber = value
  //     }
  //   }
  // },
  methods: {
    prevStep() {
      if (this.stepNumber > this.minStep) {
        this.stepNumber -= 1
        this.isStepActive[this.stepNumber] = false
        this.$emit('changeStep', this.stepNumber)
      }
      console.log('prevStep ', this.stepNumber)
      console.log(
        'prevStep this.isStepActive[this.stepNumber - 1]',
        this.isStepActive
      )
    },
    nextStep() {
      if (this.stepNumber < this.maxStep) {
        this.stepNumber += 1
        this.isStepActive[this.stepNumber - 1] = true
        this.$emit('changeStep', this.stepNumber)
      }
      console.log('nextStep ', this.stepNumber)
      console.log(
        'nextStep this.isStepActive[this.stepNumber - 1]',
        this.isStepActive
      )
    }
  }
}
</script>

<style lang="scss" scoped>
.progressBar {
  margin: 15px 0 25px;
  .progressB {
    width: 100%;
    margin-bottom: 20px;
    display: flex;
    .step {
      height: 0px;
      width: 100%;
      margin-right: 1px;
    }

    .current {
      background-color: #077bff;
      border: 1px solid #077bff;
    }
  }
  .wrapBtn {
    display: flex;
    justify-content: space-between;
    align-items: center;
    span.steps {
      font-size: 14px;
      line-height: 21px;
      font-weight: 400;
      color: #818181;
      @media (max-width: 768px) {
        display: none;
      }
    }
    .prevBtn {
      height: 50px;
      width: 165px;
      border-radius: 5px;
      border: 1px solid #077bff;
      background: #ffffff;
      @media (max-width: 767px) {
        width: 156px;
      }
      @media (max-width: 991px) {
        width: 240px;
      }
      span {
        font-size: 16px;
        line-height: 40px;
        font-weight: 600;
        color: #077bff;
      }
    }
    .nextBtn {
      height: 50px;
      width: 165px;
      border-radius: 5px;
      border: 1px solid #077bff;
      background: #077bff;
      @media (max-width: 767px) {
        width: 156px;
      }
      @media (max-width: 991px) {
        width: 240px;
      }
      span {
        font-size: 16px;
        line-height: 40px;
        font-weight: 600;
        color: #ffffff;
      }
    }
  }
}
</style>
