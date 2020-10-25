<template>
  <div class="wrapTutorial">
    <div class="wrapTitle">
      <Title />
    </div>

    <div class="wrapStep4">
      <div class="itemDesc">
        Выберите, какие из удобств доступны вашим гостям
      </div>

      <div class="checkboxGrid">
        <Checkbox
          v-for="(opt, index) in objectOptions"
          :key="index"
          :desc="opt.sObjectOptionTitle"
        />
      </div>
      <!-- <pre>{{ objectOptions }}</pre> -->
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
      <ProgressBar />
    </div>
    <PopupStep />
  </div>
</template>

<script>
import ProgressBar from '~/components/Tutorial/ProgressBar'
import Title from '~/components/Tutorial/Title'
import PopupStep from '~/components/Tutorial/PopupStep'
import HintStep1 from '~/components/Tutorial/HintStep1'
import Checkbox from '~/components/Tutorial/Checkbox'

export default {
  data() {
    return {
      currentStepNumber: 1,
      iObjectTypeID: 0,
      iCategoryID: 0,
      roomCategory: [
        { id: 1, title: 'Single' },
        { id: 2, title: 'Double' },
        { id: 3, title: 'Triple' },
        { id: 4, title: 'Family room' }
      ]
    }
  },
  layout: 'dashboardV2Tutorial',
  components: {
    Title,
    ProgressBar,
    PopupStep,
    HintStep1,
    Checkbox
  },
  computed: {
    objectOptions() {
      return this.$store.state.objectOption.list
    }
  },
  methods: {},
  async asyncData({ store }) {
    await store.dispatch('objectOption/GET_LIST')
  }
}
</script>

<style lang="scss" scoped>
.wrapTutorial {
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: auto 1fr auto;
  height: calc(100vh - 63px);
  @media (max-width: 991px) {
    grid-template-columns: 1fr;
  }
  .wrapTitle {
    // background: blue;
    grid-column: 1/2;
    grid-row: 1/2;
  }
  .wrapStep4 {
    // background: red;
    grid-column: 1/2;
    grid-row: 2/3;
    overflow: auto;
    .itemDesc {
      margin: 0 0 15px;
      font-size: 20px;
      line-height: 26px;
      font-weight: 500;
      @media (max-width: 767px) {
        font-size: 16px;
        line-height: 20px;
      }
      &.secondDesc {
        margin-top: 45px;
        @media (max-width: 767px) {
          margin-top: 37px;
        }
      }
      .explanation {
        font-size: 14px;
        @media (max-width: 767px) {
          display: none;
        }
      }
    }
    .singleInput {
      width: 203px;
      @media (max-width: 991px) {
        width: 226px;
      }
      @media (max-width: 767px) {
        width: 250px;
      }
    }
    .doubleInput {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr;
      grid-gap: 5px;
      @media (max-width: 767px) {
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 10px;
        grid-row-gap: 20px;
      }
    }
    .tripleInput {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 1fr;
      grid-gap: 5px;
      @media (max-width: 767px) {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        grid-column-gap: 10px;
        grid-row-gap: 20px;
      }
    }

    .checkboxGrid {
      margin-top: 45px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr;
      grid-gap: 25px;
      @media (max-width: 767px) {
        grid-template-columns: 1fr;
        grid-gap: 20px;
      }
    }
    .custom-control {
      margin: 0;
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
}
</style>
