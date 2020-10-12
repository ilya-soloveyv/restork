<template>
  <div class="wrapTutorial">
    <div class="wrapTitle">
      <Title :stepNumber="stepNumber" />
    </div>
    <div class="wrapStep">
      <Step1
        v-if="stepNumber == 1"
        :list="[
          {
            id: 1,
            desc: 'Выберите из предложенного списка категорию вашего объекта.',
            label: 'Категория жилья',
            list: ['Номер в гостинице', 'квартира', 'дом']
          },
          {
            id: 2,
            desc: 'Используя подсказки, укажите категорию номера.',
            label: 'Категория номера',
            list: ['Single', 'Double', 'Triple', 'Family Room']
          }
        ]"
      />
      <Step2 v-if="stepNumber == 2" />
      <Step3 v-if="stepNumber == 3" />
      <Step4 v-if="stepNumber == 4" />
      <Step5 v-if="stepNumber == 5" />
      <Step6 v-if="stepNumber == 6" />
      <Step7 v-if="stepNumber == 7" />
      <Step8 v-if="stepNumber == 8" />
      <Step9 v-if="stepNumber == 9" />
      <Step10 v-if="stepNumber == 10" />
    </div>
    <div class="wrapHint">
      <HintStep1
        :list="[
          {
            name: 'Single',
            desc:
              'Однокомнатный, для размещения одного отдыхающего. Спальное место одно.'
          },
          {
            name: 'Double',
            desc:
              'Однокомнатный номер для двоих. Может быть с одной большой кроватью или с двумя раздельными кроватями.'
          },
          {
            name: 'Triple',
            desc: 'Номер для троих отдыхающих.'
          },
          {
            name: 'Family Room',
            desc: 'Семейный двух- или трехкомнатный номер.'
          }
        ]"
      />
    </div>
    <div class="wrapProgress">
      <ProgressBar v-on:changeStep="showStep" :currentStep="stepNumber" />
    </div>
    <div id="popupSteps" class="popupSteps">
      <div class="popup__body">
        <div class="popup__content landing-adaptive">
          <div class="popup__title"><a href="#" class="popup_close">X</a></div>
          <div class="popup__text">
            <div class="item" v-on:click="changeStepNumber(1)">
              <div class="desc">Шаг 1 | Категория объекта</div>
              <div class="circle">
                <CrossOrTickWithCircle
                  :currentStepNumber="stepNumber"
                  :stepNumber="1"
                />
              </div>
            </div>
            <div class="item" v-on:click="changeStepNumber(2)">
              <div class="desc">Шаг 2 | Основные параметры</div>
              <div class="circle">
                <CrossOrTickWithCircle
                  :currentStepNumber="stepNumber"
                  :stepNumber="2"
                />
              </div>
            </div>
            <div class="item" v-on:click="changeStepNumber(3)">
              <div class="desc">Шаг 3 | Удобства</div>
              <div class="circle">
                <CrossOrTickWithCircle
                  :currentStepNumber="stepNumber"
                  :stepNumber="3"
                />
              </div>
            </div>
            <div class="item">
              <div class="desc">Шаг 4 | Удобства</div>
              <div class="circle">
                <CrossOrTickWithCircle
                  :currentStepNumber="stepNumber"
                  :stepNumber="4"
                />
              </div>
            </div>
            <div class="item">
              <div class="desc">Шаг 5 | Особенности</div>
              <div class="circle">
                <CrossOrTickWithCircle
                  :currentStepNumber="stepNumber"
                  :stepNumber="5"
                />
              </div>
            </div>
            <div class="item">
              <div class="desc">Шаг 6 | Местоположение</div>
              <div class="circle">
                <CrossOrTickWithCircle
                  :currentStepNumber="stepNumber"
                  :stepNumber="6"
                />
              </div>
            </div>
            <div class="item">
              <div class="desc">Шаг 7 | Значимые места рядом</div>
              <div class="circle">
                <CrossOrTickWithCircle
                  :currentStepNumber="stepNumber"
                  :stepNumber="7"
                />
              </div>
            </div>
            <div class="item">
              <div class="desc">Шаг 8 | Фотографии</div>
              <div class="circle">
                <CrossOrTickWithCircle
                  :currentStepNumber="stepNumber"
                  :stepNumber="8"
                />
              </div>
            </div>
            <div class="item">
              <div class="desc">Шаг 9 | Название и описание</div>
              <div class="circle">
                <CrossOrTickWithCircle
                  :currentStepNumber="stepNumber"
                  :stepNumber="9"
                />
              </div>
            </div>
            <div class="item">
              <div class="desc">Шаг 10 | Приготовьтесь к приёму гостей</div>
              <div class="circle">
                <CrossOrTickWithCircle
                  :currentStepNumber="stepNumber"
                  :stepNumber="10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Step1 from '~/components/Tutorial/Step1'
import Step2 from '~/components/Tutorial/Step2'
import Step3 from '~/components/Tutorial/Step3'
import Step4 from '~/components/Tutorial/Step4'
import Step5 from '~/components/Tutorial/Step5'
import Step6 from '~/components/Tutorial/Step6'
import Step7 from '~/components/Tutorial/Step7'
import Step8 from '~/components/Tutorial/Step8'
import Step9 from '~/components/Tutorial/Step9'
import Step10 from '~/components/Tutorial/Step10'
import ProgressBar from '~/components/Tutorial/ProgressBar'
import Title from '~/components/Tutorial/Title'
import HintStep1 from '~/components/Tutorial/HintStep1'
import CrossOrTickWithCircle from '~/components/Tutorial/CrossOrTickWithCircle'

export default {
  data() {
    return {
      stepNumber: 1
    }
  },
  layout: 'dashboardV2Tutorial',
  components: {
    Step1,
    Step2,
    Step3,
    Step4,
    Step5,
    Step6,
    Step7,
    Step8,
    Step9,
    Step10,
    Title,
    HintStep1,
    ProgressBar,
    CrossOrTickWithCircle
  },
  methods: {
    showStep(step) {
      console.log('!!! showStep')
      this.stepNumber = step
    },
    changeStepNumber(stepNumber) {
      this.stepNumber = stepNumber
      console.log('!!! changeStepNumber to: ', this.stepNumber)
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapTutorial {
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: auto 1fr auto;
  height: 100%;
  @media (max-width: 991px) {
    grid-template-columns: 1fr;
  }
  .wrapTitle {
    // background: blue;
    grid-column: 1/2;
    grid-row: 1/2;
  }
  .wrapStep {
    // background: red;
    grid-column: 1/2;
    grid-row: 2/3;
    overflow: auto;
  }
  .wrapHint {
    // background: green;
    grid-column: 2/3;
    grid-row: 2/4;
    overflow: auto;
    display: flex;
    justify-content: flex-end;
    @media (max-width: 991px) {
      display: none;
    }
  }
  .wrapProgress {
    // background: yellow;
    grid-column: 1/2;
    grid-row: 3/4;
  }
  .popupSteps {
    position: fixed;
    height: 100%;
    width: 100%;
    top: 63px;
    left: 0;
    opacity: 0;
    visibility: hidden;
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
        // display: flex;
        // flex-direction: column;
        // align-items: center;
        //justify-content: center;
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
}
</style>
