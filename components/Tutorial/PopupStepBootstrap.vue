<template>
  <div class="popup">
    <div class="item" v-on:click="setCurrentStep(1)">
      <div class="desc">Шаг 1 | Категория объекта</div>
      <div class="circle">
        <CrossOrTickWithCircle
          :currentStepNumber="currentStep"
          :stepNumber="1"
        />
      </div>
    </div>
    <div class="item" v-on:click="setCurrentStep(2)">
      <div class="desc">Шаг 2 | Основные параметры</div>
      <div class="circle">
        <CrossOrTickWithCircle
          :currentStepNumber="currentStep"
          :stepNumber="2"
        />
      </div>
    </div>
    <div class="item" v-on:click="setCurrentStep(3)">
      <div class="desc">Шаг 3 | Удобства</div>
      <div class="circle">
        <CrossOrTickWithCircle
          :currentStepNumber="currentStep"
          :stepNumber="3"
        />
      </div>
    </div>
    <div class="item" v-on:click="setCurrentStep(4)">
      <div class="desc">Шаг 4 | Удобства</div>
      <div class="circle">
        <CrossOrTickWithCircle
          :currentStepNumber="currentStep"
          :stepNumber="4"
        />
      </div>
    </div>
    <div class="item" v-on:click="setCurrentStep(5)">
      <div class="desc">Шаг 5 | Особенности</div>
      <div class="circle">
        <CrossOrTickWithCircle
          :currentStepNumber="currentStep"
          :stepNumber="5"
        />
      </div>
    </div>
    <div class="item" v-on:click="setCurrentStep(6)">
      <div class="desc">Шаг 6 | Местоположение</div>
      <div class="circle">
        <CrossOrTickWithCircle
          :currentStepNumber="currentStep"
          :stepNumber="6"
        />
      </div>
    </div>
    <div class="item" v-on:click="setCurrentStep(7)">
      <div class="desc">Шаг 7 | Значимые места рядом</div>
      <div class="circle">
        <CrossOrTickWithCircle
          :currentStepNumber="currentStep"
          :stepNumber="7"
        />
      </div>
    </div>
    <div class="item" v-on:click="setCurrentStep(8)">
      <div class="desc">Шаг 8 | Фотографии</div>
      <div class="circle">
        <CrossOrTickWithCircle
          :currentStepNumber="currentStep"
          :stepNumber="8"
        />
      </div>
    </div>
    <div class="item" v-on:click="setCurrentStep(9)">
      <div class="desc">Шаг 9 | Название и описание</div>
      <div class="circle">
        <CrossOrTickWithCircle
          :currentStepNumber="currentStep"
          :stepNumber="9"
        />
      </div>
    </div>
    <div class="item" v-on:click="setCurrentStep(10)">
      <div class="desc">Шаг 10 | Приготовьтесь к приёму гостей</div>
      <div class="circle">
        <CrossOrTickWithCircle
          :currentStepNumber="currentStep"
          :stepNumber="10"
        />
      </div>
    </div>
  </div>
</template>
<script>
import CrossOrTickWithCircle from '~/components/Tutorial/CrossOrTickWithCircle'
export default {
  components: {
    CrossOrTickWithCircle
  },
  computed: {
    currentStep() {
      return this.$store.state.tutorial.step
    }
  },
  methods: {
    setCurrentStep(step) {
      console.log('currentStep ' + this.currentStep)
      this.$store.commit('tutorial/SET_STEP', step)
      console.log('currentStep ' + this.currentStep)
      const url = '/tutorial/step' + this.currentStep
      this.$router.push(url)
    }
  }
}
</script>
<style lang="scss" scoped>
.modal {
  margin-top: 51px;
}
</style>
