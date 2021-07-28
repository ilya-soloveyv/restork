<template>
  <div class="wrapTutorial">
    <div class="wrapTitle">
      <Title />
    </div>
    <div class="wrapStep1">
      <h1 class="step1Title">Давайте подготовим вас к приему гостей</h1>

      <b-form id="mainForm" @submit.prevent="nextStep">
        <div class="itemDesc">
          Выберите из предложенного списка категорию вашего объекта.
        </div>
        <pre>{{ valid_iOblectTypeID }}</pre>
        <div class="form-group-wrap form-group-wrap-line2">
          <b-form-group
            id="label-sObjectTypeTitle"
            label="Категория жилья"
            label-for="input-sObjectTypeTitle"
          >
            <b-form-select
              id="input-sObjectTypeTitle"
              v-model="iObjectTypeID"
              :state="valid_iOblectTypeID"
              aria-describedby="input-live-help input-live-feedback"
            >
              <option class="placeholder" value="null"
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
            <b-form-invalid-feedback
              id="input-live-feedback"
              class="error-message"
            >
              Укажите категорию жилья
            </b-form-invalid-feedback>
          </b-form-group>
        </div>
        <div v-if="valid_iOblectTypeID == false" class="error-message-my">
          Укажите категорию жилья
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
      </b-form>
      <pre>{{ object }}</pre>
      <pre>{{ objectType }}</pre>
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
      iCategoryID: 0,
      roomCategory: [
        { id: 1, title: 'Single' },
        { id: 2, title: 'Double' },
        { id: 3, title: 'Triple' },
        { id: 4, title: 'Family room' }
      ],
      valid_iOblectTypeID: null
    }
  },
  layout: 'tutorial',
  computed: {
    objectType() {
      return this.$store.state.objectType.list
    },
    object() {
      return this.$store.state.tutorial.object
    },
    iObjectTypeID: {
      get() {
        return this.$store.state.tutorial.object.iObjectTypeID
      },
      set(iObjectTypeID) {
        this.$store.dispatch('tutorial/SET_iObjectTypeID', iObjectTypeID)
      }
    }
  },
  async asyncData({ store, params, route }) {
    await store.dispatch('objectType/GET_LIST')
    await store.dispatch('tutorial/GET_OBJECT', {
      iObjectID: route.query.iObjectID
    })
  },
  methods: {
    SET_iCategoryID() {
      // console.log(this.iCategoryID)
    },
    async nextStep() {
      const { error, object } = await this.$store.dispatch('tutorial/NEXT_STEP')
      if (error && error.includes('iObjectTypeID')) {
        this.valid_iOblectTypeID = false
      } else {
        this.valid_iOblectTypeID = true
        let currentStep = this.$store.state.tutorial.step
        const maxStep = this.$store.state.tutorial.maxStep
        if (currentStep <= maxStep) {
          this.$store.commit('tutorial/INCREMENT')
          currentStep = this.$store.state.tutorial.step
          const url =
            '/tutorial/step' + currentStep + '?iObjectID=' + object.iObjectID
          this.$router.push(url)
        }
      }

      // const currentStep = this.$store.state.tutorial.step
      // const maxStep = this.$store.state.tutorial.maxStep
      // if (currentStep <= maxStep) {
      //   this.$store.commit('tutorial/INCREMENT')
      //   const url = '/tutorial/step' + currentStep + '?iObjectID=' + iObjectID
      //   this.$router.push(url)
      // }
      // if (currentStep === maxStep + 1) {
      //   // this.$store.commit('tutorial/INCREMENT')
      //   const url = '/tutorial/greeting'
      //   this.$router.push(url)
      // }
    }
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
    margin: -15px;
    padding: 15px;
    .step1Title {
      margin: 0 0 45px;
    }
    #mainForm {
      .form-group-wrap {
        position: relative;
        .error-message1 {
          background-color: yellow;
          position: absolute;
          bottom: 0;
          left: 0;
        }
      }
      .error-message-my {
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
