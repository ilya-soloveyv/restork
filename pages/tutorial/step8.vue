<template>
  <div class="wrapTutorial">
    <div class="wrapTitle">
      <Title />
    </div>

    <div class="wrapStep8">
      <div class="itemDesc">
        Загрузите как можно больше ярких и красивых фотографий. Гости большое
        внимание уделяют качеству изображений и при выборе жилья это может стать
        решающим фактором.
      </div>
      <div class="imageGrid">
        <div v-for="(item, index) in 10" :key="index" class="itemImage">
          <img src="/tutorial/step8-example.jpg" alt="" />
          <div class="circle-left">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </div>
          <div class="circle-right">
            <span>{{ item }}</span>
          </div>
        </div>
      </div>
      <div class="selectFileBtn">
        <span class="change">Выберете файл</span>
        <span class="dragg">&nbsp;или перетащите его сюда</span>
      </div>
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
  </div>
</template>

<script>
import ProgressBar from '~/components/Tutorial/ProgressBar'
import Title from '~/components/Tutorial/Title'
import HintStep1 from '~/components/Tutorial/HintStep1'

export default {
  components: {
    Title,
    ProgressBar,
    HintStep1
  },
  data() {
    return {
      places: [],
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
  computed: {
    objectType() {
      return this.$store.state.objectType.list
    },
    object() {
      return this.$store.state.tutorial.object
    }
  },
  async asyncData({ store, params }) {
    await store.dispatch('objectType/GET_LIST')
  },
  methods: {}
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
  .wrapStep8 {
    // background: red;
    grid-column: 1/2;
    grid-row: 2/3;
    overflow: auto;
    margin: -15px;
    padding: 15px;
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
    }

    .imageGrid {
      margin: 30px 0 20px;
      // overflow: hidden;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-template-rows: 1fr;
      grid-column-gap: 25px;
      grid-row-gap: 20px;
      position: relative;
      @media (max-width: 767px) {
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;
      }
      .itemImage {
        // width: 100%;
        // height: 100%;
        position: relative;
        img {
          width: 100%;
          height: 100%;
        }
        .circle-left {
          position: absolute;
          top: 20px;
          left: 15px;
          border: 1px solid #ffffff;
          border-radius: 50%;
          width: 25px;
          height: 25px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .circle-right {
          position: absolute;
          top: 20px;
          right: 15px;
          border: 1px solid #ffffff;
          border-radius: 50%;
          background: #ffffff;
          width: 25px;
          height: 25px;
          display: flex;
          justify-content: center;
          align-items: center;
          span {
            front-size: 14px;
          }
        }
      }
    }
    .selectFileBtn {
      border: 1px solid #077bff;
      border-radius: 5px;
      width: 100%;
      height: 63px;
      display: flex;
      justify-content: center;
      align-items: center;
      span {
        font-size: 14px;
        line-height: 16px;
        font-weight: 700;
        color: #077bff;
        @media (max-width: 767px) {
          font-size: 14px;
        }
      }
      .dragg {
        font-weight: 500;
        @media (max-width: 767px) {
          display: none;
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
