<template>
  <div class="wrapTutorial">
    <div class="wrapTitle">
      <Title />
    </div>

    <div class="wrapStep8">
      <div class="itemDesc">
        Перечислите какие значимые места есть рядом с вашим объектом, напишите
        их названия и расстояния до них.
      </div>
      <!-- <div
        class="placeInfo quadrupleInput"
        v-for="(place, index) in places"
        :key="index"
      >
        <div class="wrapPlace">
          <b-form-group
            id="placeLabel"
            class="form-group-restork"
            label="Место"
            label-for="placeInput"
          >
            <b-form-input
              id="placeInput"
              placeholder="Место"
              type="text"
            ></b-form-input>
          </b-form-group>
        </div>
        <div class="wrapName">
          <b-form-group
            id="nameLabel"
            class="form-group-restork"
            label="Название"
            label-for="nameInput"
          >
            <b-form-input
              id="nameInput"
              placeholder="Название"
              type="text"
            ></b-form-input>
          </b-form-group>
        </div>

        <div class="wrapDistance">
          <b-form-group
            id="distanceLabel"
            class="form-group-restork"
            label="Расстояние"
            label-for="distanceInput"
          >
            <b-form-input
              id="distanceInput"
              placeholder="0"
              type="text"
            ></b-form-input>
          </b-form-group>
        </div>

        <div class="deleteBtn" @click="deletePlace(index)">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#dbdbdb"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
          <span>&nbsp;&nbsp;Удалить</span>
        </div>
      </div> -->

      <PlaceInput
        v-for="(place, index) in places"
        :key="index"
        :place="place"
      />

      <div class="addBtn" @click="addPlace">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#000000"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
        <span>&nbsp;&nbsp;Добавить</span>
      </div>

      <pre>{{ places }}</pre>
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
import PlaceInput from '~/components/Tutorial/PlaceInput'

export default {
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
  components: {
    Title,
    ProgressBar,
    PopupStep,
    HintStep1,
    PlaceInput
  },
  computed: {
    objectType() {
      return this.$store.state.objectType.list
    },
    object() {
      return this.$store.state.tutorial.object
    }
  },
  methods: {
    addPlace() {
      console.log('addPlace')
      this.places.push({})
      // if (this.places.length) {
      //   this.$store.dispatch(
      //     'tutorial/ADD_PLACE',
      //     this.places[this.places.length - 1]
      //   )
      // }
    },
    deletePlace(index) {
      console.log('index ', index)
      this.places.splice(index, 1)
    }
  },
  async asyncData({ store, params }) {
    await store.dispatch('objectType/GET_LIST')
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
  .wrapStep8 {
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
    }

    // .quadrupleInput {
    //   margin-bottom: 20px;
    //   display: grid;
    //   grid-template-columns: 1.5fr 1fr 1fr 0.51fr;
    //   grid-template-rows: 1fr;
    //   grid-gap: 5px;
    //   @media (max-width: 767px) {
    //     grid-template-columns: 1.5fr 1fr 1fr;
    //     grid-template-rows: auto;
    //     grid-column-gap: 10px;
    //     grid-row-gap: 10px;
    //   }
    //   .deleteBtn {
    //     height: 100%;
    //     display: flex;
    //     justify-content: flex-end;
    //     align-items: center;
    //     color: #dbdbdb;
    //     @media (max-width: 767px) {
    //       height: 40px;
    //       grid-column: 3/4;
    //       align-items: flex-start;
    //     }
    //     span {
    //       font-size: 12px;
    //       line-height: 14px;
    //       font-weight: 500;
    //       @media (max-width: 767px) {
    //         font-size: 11px;
    //       }
    //     }
    //   }
    // }
    .addBtn {
      border: 1px solid #dbdbdb;
      border-radius: 24px;
      width: 118px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      span {
        font-size: 12px;
        line-height: 14px;
        font-weight: 500;
        @media (max-width: 767px) {
          font-size: 11px;
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
