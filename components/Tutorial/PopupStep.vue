<template>
  <div id="popupSteps" class="popupSteps">
    <div class="popup__body">
      <div class="popup__content landing-adaptive">
        <div class="popup__title"><a href="#" class="popup_close">X</a></div>
        <div class="popup__text">
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
.popupSteps {
  position: fixed;
  height: 100%;
  width: 100%;
  top: 63px;
  left: 0;
  opacity: 0;
  visibility: hidden;
  overflow-x: hidden;
  overflow-y: auto;
  transition: all 0.8s ease 0s;
  &:target {
    opacity: 1;
    visibility: visible;
  }
  .popup__body {
    height: 100%;
    width: 100%;
    .popup__content {
      height: 100%;
      width: 100%;
      background-color: #fff;
      color: #000;
      //padding: 30px;
      position: relative;
      opacity: 0;
      transform: translate(0px, -100%);
      transition: all 0.8s ease 0s;
      .popup__close {
        position: absolute;
        right: 10px;
        top: 10px;
        color: #000;
        text-decoration: none;
      }
      .popup__title {
        width: 100%;
        font-size: 20px;
      }
      .popup__text {
        height: 100%;
        width: 100%;
        .item {
          display: flex;
          justify-content: space-between;
          margin-bottom: 25px;
          .desc {
            font-family: Montserrat;
            font-size: 14px;
            line-height: 20px;
            font-weight: 500;
            color: #000000;
          }
          .circle {
            border-radius: 50%;
            height: 20px;
            width: 20px;
            border: 1px solid #000;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
      }
    }
  }
}
.popupSteps:target .popup__content {
  transform: translate(0px, 0px);
  opacity: 1;
}
</style>
