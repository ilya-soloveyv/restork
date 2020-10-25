<template>
  <div class="wrapTutorial">
    <div class="wrapTitle">
      <Title />
    </div>

    <div class="wrapStep10">
      <div class="hostel">
        <div class="itemDesc">
          Напишите название вашего объекта
        </div>
        <div class="hostelInfoInput">
          <b-form-group
            id="objectNameLabel"
            class="form-group-restork"
            label="Название объекта"
            label-for="objectNameInput"
          >
            <b-form-input
              id="objectNameInput"
              placeholder="Название"
              type="text"
            ></b-form-input>
          </b-form-group>
        </div>

        <div class="itemDesc secondDesc">
          Расскажите, чем интересен ваш район, и укажите особенности жилья,
          например быстрый Wi-Fi или парковку
        </div>

        <b-form-group
          id="objectNameLabel"
          class="form-group-restork"
          label="Название объекта"
          label-for="objectNameInput"
        >
          <b-form-textarea
            id="featuresTextarea"
            placeholder="Описание"
            rows="3"
            max-rows="10"
          ></b-form-textarea>
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
    <PopupStep />
  </div>
</template>

<script>
import ProgressBar from '~/components/Tutorial/ProgressBar'
import Title from '~/components/Tutorial/Title'
import PopupStep from '~/components/Tutorial/PopupStep'
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
    PopupStep,
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
  .wrapStep10 {
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
