<template>
  <div class="wrapTutorial">
    <div class="wrapTitle">
      <Title />
    </div>

    <div class="wrapStep2">
      <!-- Коттедж -->
      <div class="cottage">
        <h2>Коттедж</h2>
        <div class="itemDesc">
          Укажите общую площадь участка и коттеджа, сколько в нём жилых комнат и
          спальных мест
        </div>
        <div class="cottageInfoInput tripleInput">
          <div class="wrapSiteSquare">
            <b-form-group
              id="siteSquareLabel"
              class="form-group-restork"
              label="Площадь участка"
              label-for="siteSquareInput"
            >
              <b-form-input
                id="siteSquareInput"
                placeholder="0"
                type="text"
              ></b-form-input>
            </b-form-group>
          </div>
          <div class="wrapCottageSquare">
            <b-form-group
              id="cottageSquareLabel"
              class="form-group-restork"
              label="Площадь коттеджа"
              label-for="cottageSquareInput"
            >
              <b-form-input
                id="cottageSquareInput"
                placeholder="0"
                type="text"
              ></b-form-input>
            </b-form-group>
          </div>

          <div class="wrapRoomNumber">
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

          <div class="wrapCouchetteNumber">
            <b-form-group
              id="couchetteNumberLabel"
              class="form-group-restork"
              label="Спальных мест"
              label-for="couchetteNumberInput"
            >
              <b-form-input
                id="couchetteNumberInput"
                placeholder="0"
                type="text"
              ></b-form-input>
            </b-form-group>
          </div>
        </div>

        <div class="itemDesc secondDesc">
          Укажите на каком этаже располагается квартира и какое общее количество
          этажей у здания
        </div>

        <div class="wrapFloorNumber singleInput">
          <b-form-group
            id="floorNumberLabel"
            class="form-group-restork"
            label="Этажность"
            label-for="floorNumberInput"
          >
            <b-form-input
              id="floorNumberInput"
              placeholder="0"
              type="text"
            ></b-form-input>
          </b-form-group>
        </div>
      </div>

      <!-- Хостел -->
      <div class="hostel">
        <h2>Хостел</h2>
        <div class="itemDesc">
          Напишите название хостела
        </div>
        <div class="hostelInfoInput">
          <b-form-group
            id="hostelNameLabel"
            class="form-group-restork"
            label="Название"
            label-for="hostelNameInput"
          >
            <b-form-input
              id="hostelNameInput"
              placeholder="Название"
              type="text"
            ></b-form-input>
          </b-form-group>
        </div>

        <div class="itemDesc secondDesc">
          Напишите, какое общее количество этажей у строения
        </div>
        <div class="hostelFloorInput doubleInput">
          <div class="wrapHostelFloor">
            <b-form-group
              id="hostelFloorLabel"
              class="form-group-restork"
              label="Этаж"
              label-for="hostelFloorInput"
            >
              <b-form-input
                id="hostelFloorInput"
                placeholder="0"
                type="text"
              ></b-form-input>
            </b-form-group>
          </div>
          <div class="wrapHostelTotalFloor">
            <b-form-group
              id="hostelTotalFloorLabel"
              class="form-group-restork"
              label="Этажность"
              label-for="hostelTotalFloorInput"
            >
              <b-form-input
                id="hostelTotalFloorInput"
                placeholder="0"
                type="text"
              ></b-form-input>
            </b-form-group>
          </div>
        </div>
      </div>

      <!-- Аппартаменты -->
      <div class="appart">
        <h2>Аппартаменты</h2>
        <div class="itemDesc">
          Укажите общую площадь апартаментов, сколько там жилых комнат и
          спальных мест
        </div>
        <div class="appartInfoInput tripleInput">
          <div class="appartSquareInput">
            <b-form-group
              id="appartSquareLabel"
              class="form-group-restork"
              label="Площадь объекта"
              label-for="appartSquareInput"
            >
              <b-form-input
                id="appartSquareInput"
                placeholder="0"
                type="text"
              ></b-form-input>
            </b-form-group>
          </div>

          <div class="appartRoomNumberInput">
            <b-form-group
              id="appartRoomNumberLabel"
              class="form-group-restork"
              label="Комнат"
              label-for="appartRoomNumberInput"
            >
              <b-form-input
                id="appartRoomNumberInput"
                placeholder="0"
                type="text"
              ></b-form-input>
            </b-form-group>
          </div>

          <div class="appartPlaceNumberInput">
            <b-form-group
              id="appartPlaceNumberLabel"
              class="form-group-restork"
              label="Спальных мест"
              label-for="appartPlaceNumberInput"
            >
              <b-form-input
                id="appartPlaceNumberInput"
                placeholder="0"
                type="text"
              ></b-form-input>
            </b-form-group>
          </div>
        </div>

        <div class="itemDesc secondDesc">
          Укажите на каком этаже располагаются апартаменты и какое общее
          количество этажей у здания
        </div>
        <div class="appartFloorInput doubleInput">
          <div class="appartFloor">
            <b-form-group
              id="appartFloorLabel"
              class="form-group-restork"
              label="Этаж"
              label-for="appartFloorInput"
            >
              <b-form-input
                id="appartFloorInput"
                placeholder="0"
                type="text"
              ></b-form-input>
            </b-form-group>
          </div>
          <div class="appartTotalFloor">
            <b-form-group
              id="appartTotalFloorLabel"
              class="form-group-restork"
              label="Этажность"
              label-for="appartTotalFloorInput"
            >
              <b-form-input
                id="appartTotalFloorInput"
                placeholder="0"
                type="text"
              ></b-form-input>
            </b-form-group>
          </div>
        </div>
      </div>

      <!-- Отель -->
      <div class="hotel">
        <h2>Отель</h2>
        <div class="itemDesc">
          Напишите название отеля
        </div>
        <div class="hotelInfoInput">
          <div class="hotelTitleInput">
            <b-form-group
              id="hotelTitleLabel"
              class="form-group-restork"
              label="Название"
              label-for="hotelTitleInput"
            >
              <b-form-input
                id="hotelTitleInput"
                placeholder="0"
                type="text"
              ></b-form-input>
            </b-form-group>
          </div>
        </div>

        <div class="itemDesc secondDesc">
          Укажите, сколько всего номеров в гостинице
        </div>
        <div class="hotelRoomNumberInput singleInput">
          <b-form-group
            id="hotelRoomNumberLabel"
            class="form-group-restork"
            label="Номеров"
            label-for="hotelRoomNumberInput"
          >
            <b-form-input
              id="hotelRoomNumberInput"
              placeholder="0"
              type="text"
            ></b-form-input>
          </b-form-group>
        </div>

        <div class="itemDesc secondDesc">
          Напишите, какое общее количество этажей строения
        </div>
        <div class="hoteltTotalFloorInput singleInput">
          <b-form-group
            id="hoteltTotalFloorLabel"
            class="form-group-restork"
            label="Этажность"
            label-for="hoteltTotalFloorInput"
          >
            <b-form-input
              id="hoteltTotalFloorInput"
              placeholder="0"
              type="text"
            ></b-form-input>
          </b-form-group>
        </div>
      </div>

      <!-- <pre>{{ object }}</pre>
      <pre>{{ objectType }}</pre> -->
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
    HintStep1
  },
  computed: {
    objectType() {
      return this.$store.state.objectType.list
    },
    object() {
      return this.$store.state.tutorial.object
    }
  },
  methods: {},
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
  .wrapStep2 {
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
    .cottage {
    }
    .hostel {
      h2 {
        margin-top: 50px;
      }
    }
    .appart {
      h2 {
        margin-top: 50px;
      }
    }
    .hotel {
      h2 {
        margin-top: 50px;
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
