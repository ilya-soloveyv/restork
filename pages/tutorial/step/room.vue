<template>
  <TutorialPage>
    <template slot="hint">
      <TutorialHint :hints="hints" />
    </template>
    <template slot="content">
      <TutorialFormLabel :title="formLabel1" />
      <b-row>
        <b-col xl="4">
          <div class="form-group-wrap">
            <b-form-group label="Площадь номера">
              <b-form-input
                v-model="iObjectArea"
                :state="iObjectAreaValid"
                placeholder="Площадь номера"
              />
              <b-form-invalid-feedback class="error-message">
                Укажите Площадь номера
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
                v-model="iObjectRoomCount"
                :state="iObjectRoomCountValid"
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
      iObjectRoomCountValid: null,
      iObjectPlaceValid: null,
      hints: [
        {
          img: '/tutorial/hint/plan.jpeg'
        }
      ]
    }
  },
  computed: {
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
    iObjectRoomCount: {
      get() {
        return this.$store.state.tutorial.object.iObjectRoomCount
      },
      set(value) {
        this.$store.commit('tutorial/SET_iObjectRoomCount', value)
      }
    },
    iObjectPlace: {
      get() {
        return this.$store.state.tutorial.object.iObjectPlace
      },
      set(value) {
        this.$store.commit('tutorial/SET_iObjectPlace', value)
      }
    },
    formLabel1() {
      switch (this.iObjectTypeID) {
        case 6:
          return 'Напишите общую площадь номера, с учётом прихожей и балкона'
        case 7:
          return 'Напишите общую площадь номера, с учётом прихожей и балкона'
        default:
          return null
      }
    },
    formLabel2() {
      switch (this.iObjectTypeID) {
        case 6:
          return 'Укажите количество комнат в номере'
        case 7:
          return 'Укажите количество комнат в номере'
        default:
          return null
      }
    },
    formLabel3() {
      switch (this.iObjectTypeID) {
        case 6:
          return 'Напишите сколько в общем спальных мест в номере'
        case 7:
          return 'Напишите сколько в общем спальных мест в номере'
        default:
          return null
      }
    }
  }
}
</script>
