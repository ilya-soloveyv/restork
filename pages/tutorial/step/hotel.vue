<template>
  <TutorialPage>
    <template slot="hint">
      <TutorialHint :hints="hints" />
    </template>
    <template slot="content">
      <TutorialFormLabel :title="formLabel1" />
      <b-row>
        <b-col xl="12">
          <div class="form-group-wrap">
            <b-form-group label="Название">
              <b-form-input
                v-model="sObjectTitle"
                :state="sObjectTitleValid"
                placeholder="Название"
              />
              <b-form-invalid-feedback class="error-message">
                Укажите Название
              </b-form-invalid-feedback>
            </b-form-group>
          </div>
        </b-col>
      </b-row>
      <TutorialFormLabel :title="formLabel2" />
      <b-row>
        <b-col xl="4">
          <div class="form-group-wrap">
            <b-form-group label="Кол-во номеров">
              <b-form-input
                v-model="iObjectRoomHotelCount"
                :state="iObjectRoomHotelCountValid"
                placeholder="Кол-во номеров"
              />
              <b-form-invalid-feedback class="error-message">
                Укажите Кол-во номеров
              </b-form-invalid-feedback>
            </b-form-group>
          </div>
        </b-col>
      </b-row>
      <TutorialFormLabel :title="formLabel3" />
      <b-row>
        <b-col xl="4">
          <div class="form-group-wrap">
            <b-form-group label="Кол-во этажей">
              <b-form-input
                v-model="iObjectFloorAll"
                :state="iObjectFloorAllValid"
                placeholder="Кол-во этажей"
              />
              <b-form-invalid-feedback class="error-message">
                Укажите Кол-во этажей
              </b-form-invalid-feedback>
            </b-form-group>
          </div>
        </b-col>
      </b-row>
    </template>
  </TutorialPage>
</template>

<script>
import TutorialPage from '@/components/Tutorial/TutorialPage.vue'
import TutorialHint from '@/components/Tutorial/TutorialHint.vue'

import TutorialFormLabel from '@/components/Tutorial/TutorialFormLabel.vue'

export default {
  layout: 'tutorial',
  components: {
    TutorialPage,
    TutorialHint,
    TutorialFormLabel
  },
  data() {
    return {
      sObjectTitleValid: null,
      iObjectRoomHotelCountValid: null,
      iObjectFloorAllValid: null,
      hints: [
        {
          img: '/tutorial/hint/hotel.jpeg'
        }
      ]
    }
  },
  computed: {
    iObjectTypeID() {
      return this.$store.state.tutorial.object.iObjectTypeID
    },
    sObjectTitle: {
      get() {
        return this.$store.state.tutorial.object.sObjectTitle
      },
      set(value) {
        this.$store.commit('tutorial/SET_sObjectTitle', value)
      }
    },
    iObjectRoomHotelCount: {
      get() {
        return this.$store.state.tutorial.object.iObjectRoomHotelCount
      },
      set(value) {
        this.$store.commit('tutorial/SET_iObjectRoomHotelCount', value)
      }
    },
    iObjectFloorAll: {
      get() {
        return this.$store.state.tutorial.object.iObjectFloorAll
      },
      set(value) {
        this.$store.commit('tutorial/SET_iObjectFloorAll', value)
      }
    },
    formLabel1() {
      switch (this.iObjectTypeID) {
        case 6:
          return 'Укажите название Вашего отеля'
        case 7:
          return 'Укажите название Вашей гостиницы'
        default:
          return null
      }
    },
    formLabel2() {
      switch (this.iObjectTypeID) {
        case 6:
          return 'Укажите сколько всего номеров в отеле'
        case 7:
          return 'Укажите сколько всего номеров в гостинице'
        default:
          return null
      }
    },
    formLabel3() {
      switch (this.iObjectTypeID) {
        case 6:
          return 'Напишите какое общее колличество этажей здания'
        case 7:
          return 'Напишите какое общее колличество этажей здания'
        default:
          return null
      }
    }
  }
}
</script>
