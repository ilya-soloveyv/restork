<template>
  <div class="wrapTutorial">
    <div class="wrapTitle">
      <Title />
    </div>
    <div class="wrapStep1">
      <h1 class="step1Title">Давайте подготовим вас к приему гостей</h1>

      <div class="itemDesc">
        Выберите из предложенного списка категорию вашего объекта.
      </div>
      <div class="form-group-wrap form-group-wrap-line2">
        <b-form-group
          id="label-sObjectTypeTitle"
          label="Категория жилья"
          label-for="input-sObjectTypeTitle"
        >
          <b-form-select
            id="input-sObjectTypeTitle"
            v-model="iObjectTypeID"
            @change="SET_iObjectTypeID"
          >
            <option class="placeholder" disabled value="0"
              >Выберите один из вариантов</option
            >
            <option
              v-for="(elem, index) in objectType"
              :key="index"
              :value="elem.iObjectTypeID"
            >
              {{ elem.sObjectTypeTitle }}
            </option>
          </b-form-select>
        </b-form-group>
      </div>
      <div class="itemDesc">
        Используя подсказки, укажите категорию номера.
      </div>
      <div class="form-group-wrap form-group-wrap-line2">
        <b-form-group
          id="label-sRoomCategoryTitle"
          label="Категория номера"
          label-for="input-sRoomCategoryTitle"
        >
          <b-form-select
            id="input-sRoomCategoryTitle"
            v-model="iCategoryID"
            @change="SET_iCategoryID"
          >
            <option class="placeholder" disabled value="0"
              >Выберите один из вариантов</option
            >
            <option
              v-for="(elem, index) in roomCategory"
              :key="index"
              :value="elem.id"
            >
              {{ elem.title }}
            </option>
          </b-form-select>
        </b-form-group>
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
  methods: {
    SET_iObjectTypeID() {
      console.log(this.iObjectTypeID)
      this.$store.dispatch('tutorial/SET_iObjectTypeID', this.iObjectTypeID)
    },
    SET_iCategoryID() {
      console.log(this.iCategoryID)
    }
  },
  async asyncData({ store, params }) {
    await store.dispatch('objectType/GET_LIST')
  }
}
</script>

<style lang="scss" scoped>
.modal-open {
  margin-top: 51px;
}
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
  .wrapStep1 {
    // background: red;
    grid-column: 1/2;
    grid-row: 2/3;
    overflow: auto;
    .step1Title {
      margin: 0 0 45px;
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
