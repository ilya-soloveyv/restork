<template>
  <div class="wrapTutorial">
    <div class="wrapTitle">
      <Title />
    </div>

    <div class="wrapStep3">
      <div class="itemDesc">
        Напишите общую площадь номера, с учётом прихожей и балкона
      </div>
      <div class="roomSquareInput singleInput">
        <b-form-group
          id="roomSquareLabel"
          class="form-group-restork"
          label="Площадь объекта"
          label-for="roomSquareInput"
        >
          <b-form-input
            id="roomSquareInput"
            placeholder="0"
            type="text"
          ></b-form-input>
        </b-form-group>
      </div>

      <div class="itemDesc secondDesc">
        Укажите количество комнат в номере
      </div>
      <div class="roomNumberInput singleInput">
        <b-form-group
          id="roomNumberLabel"
          class="form-group-restork"
          label="Комнат"
          label-for="roomNumberInput"
        >
          <b-form-input
            id="roomNumberInput"
            placeholder="0"
            type="text"
          ></b-form-input>
        </b-form-group>
      </div>

      <div class="itemDesc secondDesc">
        Напишите сколько в общем спальных мест в номере.
        <div class="explanation">
          Не считайте дополнительные места, детские кроватки, раскладушки или
          надувные матрасы.
        </div>
      </div>
      <div class="placeNumberInput singleInput">
        <b-form-group
          id="placeNumberLabel"
          class="form-group-restork"
          label="Спальных мест"
          label-for="placeNumberInput"
        >
          <b-form-input
            id="placeNumberInput"
            placeholder="0"
            type="text"
          ></b-form-input>
        </b-form-group>
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
  .wrapStep3 {
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
