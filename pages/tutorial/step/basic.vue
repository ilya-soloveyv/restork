<template>
  <TutorialPage>
    <template slot="hint">
      <TutorialHint :hints="hints" />
    </template>
    <template slot="content">
      <TutorialFormLabel :title="formLabel1" />
      <b-row>
        <b-col v-if="is_iObjectArea" sm="4">
          <div class="form-group-wrap">
            <b-form-group label="Площадь объекта">
              <b-form-input
                v-model="iObjectArea"
                :state="iObjectAreaValid"
                placeholder="Площадь объекта"
              />
              <b-form-invalid-feedback class="error-message">
                Укажите Площадь объекта
              </b-form-invalid-feedback>
            </b-form-group>
          </div>
        </b-col>
        <b-col v-if="is_iObjectAreaLocation" sm="4">
          <div class="form-group-wrap">
            <b-form-group label="Площадь участка">
              <b-form-input
                v-model="iObjectAreaLocation"
                :state="iObjectAreaLocationValid"
                placeholder="Площадь участка"
              />
              <b-form-invalid-feedback class="error-message">
                Укажите Площадь участка
              </b-form-invalid-feedback>
            </b-form-group>
          </div>
        </b-col>
        <b-col v-if="is_iObjectRoomCount" sm="4">
          <div class="form-group-wrap">
            <b-form-group label="Колличество комнат">
              <b-form-input
                v-model="iObjectRoomCount"
                :state="iObjectRoomCountValid"
                placeholder="Колличество комнат"
              />
              <b-form-invalid-feedback class="error-message">
                Укажите Колличество комнат
              </b-form-invalid-feedback>
            </b-form-group>
          </div>
        </b-col>
        <b-col v-if="is_iObjectRoomHotelCount" sm="4">
          <div class="form-group-wrap">
            <b-form-group label="Количество номеров">
              <b-form-input
                v-model="iObjectRoomHotelCount"
                :state="iObjectRoomHotelCountValid"
                placeholder="Количество номеров"
              />
              <b-form-invalid-feedback class="error-message">
                Укажите Количество номеров
              </b-form-invalid-feedback>
            </b-form-group>
          </div>
        </b-col>
        <b-col v-if="is_iObjectPlace" sm="4">
          <div class="form-group-wrap">
            <b-form-group label="Кол-во спальных мест">
              <b-form-input
                v-model="iObjectPlace"
                :state="iObjectPlaceValid"
                placeholder="Кол-во спальных мест"
              />
              <b-form-invalid-feedback class="error-message">
                Укажите Кол-во спальных мест
              </b-form-invalid-feedback>
            </b-form-group>
          </div>
        </b-col>
      </b-row>
      <TutorialFormLabel :title="formLabel2" />
      <b-row>
        <b-col v-if="is_iObjectFloorAll" sm="4">
          <div class="form-group-wrap">
            <b-form-group label="Этажность строения">
              <b-form-input
                v-model="iObjectFloorAll"
                :state="iObjectFloorAllValid"
                placeholder="Этажность строения"
              />
              <b-form-invalid-feedback class="error-message">
                Укажите Этажность строения
              </b-form-invalid-feedback>
            </b-form-group>
          </div>
        </b-col>
        <b-col v-if="is_iObjectFloor" sm="4">
          <div class="form-group-wrap">
            <b-form-group label="Этаж">
              <b-form-input
                v-model="iObjectFloor"
                :state="iObjectFloorValid"
                placeholder="Этаж"
              />
              <b-form-invalid-feedback class="error-message">
                Укажите Этаж
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
      iObjectAreaValid: null,
      iObjectAreaLocationValid: null,
      iObjectFloorAllValid: null,
      iObjectFloorValid: null,
      iObjectRoomCountValid: null,
      iObjectRoomHotelCountValid: null,
      iObjectPlaceValid: null,
      hints: [
        {
          img: '/tutorial/hint/plan.jpeg'
        }
      ]
    }
  },
  computed: {
    formLabel1() {
      switch (this.iObjectTypeID) {
        case 1:
          return 'Укажите какова площадь участка и коттеджа, сколько в нем жилых комнат и спальных мест'
        case 2:
          return 'Укажите какова площадь участка и дома, сколько в нем жилых комнат и спальных мест'
        case 3:
          return 'Укажите какова площадь участка и виллы, сколько в ней жилых комнат и спальных мест'
        case 4:
          return 'Укажите какова площадь апартаментов, сколько в ней жилых комнат и спальных мест'
        case 5:
          return 'Укажите какова площадь квартиры, сколько в ней жилых комнат и спальных мест'
        case 8:
          return 'Укажите количество спальных мест в Вашем хостеле'
        default:
          return null
      }
    },
    formLabel2() {
      switch (this.iObjectTypeID) {
        case 1:
          return 'Укажите какова этажность Вашего коттеджа'
        case 2:
          return 'Укажите какова этажность Вашего дома'
        case 3:
          return 'Укажите какова этажность Вашей виллы'
        case 4:
          return 'Укажите на каком этаже распологаются апартаменты и какое общее количество этажей у здания'
        case 5:
          return 'Укажите на каком этаже распологается квартира и какое общее количество этажей у здания'
        case 8:
          return 'Укажите на каком этаже располагается Ваш хостел'
        default:
          return null
      }
    },
    iObjectTypeID() {
      return this.$store.state.tutorial.object.iObjectTypeID
    },
    iObjectArea: {
      get() {
        return this.$store.state.tutorial.object.iObjectArea
      },
      set(value) {
        this.$store.commit('tutorial/SET_iObjectArea', value)
      }
    },
    is_iObjectArea() {
      const is = [1, 2, 3, 4, 5]
      return is.includes(this.iObjectTypeID)
    },
    iObjectAreaLocation: {
      get() {
        return this.$store.state.tutorial.object.iObjectAreaLocation
      },
      set(value) {
        this.$store.commit('tutorial/SET_iObjectAreaLocation', value)
      }
    },
    is_iObjectAreaLocation() {
      const is = [1, 2, 3]
      return is.includes(this.iObjectTypeID)
    },
    iObjectFloorAll: {
      get() {
        return this.$store.state.tutorial.object.iObjectFloorAll
      },
      set(value) {
        this.$store.commit('tutorial/SET_iObjectFloorAll', value)
      }
    },
    is_iObjectFloorAll() {
      const is = [1, 2, 3, 4, 5, 6, 7]
      return is.includes(this.iObjectTypeID)
    },
    iObjectFloor: {
      get() {
        return this.$store.state.tutorial.object.iObjectFloor
      },
      set(value) {
        this.$store.commit('tutorial/SET_iObjectFloor', value)
      }
    },
    is_iObjectFloor() {
      const is = [4, 5, 8]
      return is.includes(this.iObjectTypeID)
    },
    iObjectRoomCount: {
      get() {
        return this.$store.state.tutorial.object.iObjectRoomCount
      },
      set(value) {
        this.$store.commit('tutorial/SET_iObjectRoomCount', value)
      }
    },
    is_iObjectRoomCount() {
      const is = [1, 2, 3, 4, 5]
      return is.includes(this.iObjectTypeID)
    },
    iObjectRoomHotelCount: {
      get() {
        return this.$store.state.tutorial.object.iObjectRoomHotelCount
      },
      set(value) {
        this.$store.commit('tutorial/SET_iObjectRoomHotelCount', value)
      }
    },
    is_iObjectRoomHotelCount() {
      const is = [6, 7]
      return is.includes(this.iObjectTypeID)
    },
    iObjectPlace: {
      get() {
        return this.$store.state.tutorial.object.iObjectPlace
      },
      set(value) {
        this.$store.commit('tutorial/SET_iObjectPlace', value)
      }
    },
    is_iObjectPlace() {
      const is = [1, 2, 3, 4, 5, 8]
      return is.includes(this.iObjectTypeID)
    }
  }
}
</script>
