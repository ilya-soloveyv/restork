<template>
  <div class="progressBar">
    <div class="progressB">
      <div
        v-for="(step, index) in maxStep"
        :key="index"
        v-bind:class="{ current: currentStep >= step }"
        class="step"
      ></div>
    </div>
    <div class="wrapBtn">
      <button class="prevBtn" v-on:click="prevStep"><span>Назад</span></button>
      <span class="steps">{{ currentStep }}/{{ maxStep }}</span>
      <button class="nextBtn" v-on:click="nextStep">Далеe</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      minStep: 1,
      maxStep: 10
    }
  },
  computed: {
    currentStep() {
      return this.$store.state.tutorial.step
    }
  },
  methods: {
    prevStep() {
      if (this.currentStep > this.minStep) {
        this.$store.commit('tutorial/DECREMENT')
        const url = '/tutorial/step' + this.currentStep
        this.$router.push(url)
      }
    },
    nextStep() {
      if (this.currentStep < this.maxStep) {
        this.$store.commit('tutorial/INCREMENT')
        const url = '/tutorial/step' + this.currentStep
        this.$router.push(url)
      }
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
      @media (max-width: 991px) {
        width: 240px;
      }
      @media (max-width: 767px) {
        width: 156px;
        height: 40px;
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
      @media (max-width: 991px) {
        width: 240px;
      }
      @media (max-width: 767px) {
        width: 156px;
        height: 40px;
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
