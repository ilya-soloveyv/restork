<template>
  <TutorialPage>
    <template slot="hint">
      <TutorialHint :hints="hints" />
    </template>
    <template slot="content">
      <TutorialFormLabel title="Напишите название отеля" />
      <b-row>
        <b-col xl="12">
          <div class="form-group-wrap">
            <b-form-group label="Напишите название отеля">
              <b-form-input
                v-model="sObjectTitle"
                :state="sObjectTitleValid"
                placeholder="Напишите название отеля"
              />
              <b-form-invalid-feedback class="error-message">
                Укажите Напишите название отеля
              </b-form-invalid-feedback>
            </b-form-group>
          </div>
        </b-col>
      </b-row>
      <TutorialFormLabel title="Укажите сколько всего номеров в гостинице" />
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
      <TutorialFormLabel
        title="Напишите какое общее колличество этажей строения"
      />
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
    }
  }
}
</script>
