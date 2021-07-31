<template>
  <TutorialPage>
    <template slot="header">
      <TutorialHeader />
    </template>
    <template slot="hint">
      <TutorialHint />
    </template>
    <template slot="content">
      <TutorialTitle title="Давайте подготовим вас к приему гостей" />
      <TutorialFormLabel
        title="Выберите из предложенного списка категорию вашего объекта"
      />
      <div class="form-group-wrap">
        <b-form-group label="Категория жилья">
          <b-form-select v-model="iObjectTypeID" :state="iOblectTypeIDValid">
            <option class="placeholder" value="null">
              Выберите один из вариантов
            </option>
            <option
              v-for="(elem, index) in objectType"
              :key="index"
              :value="elem.iObjectTypeID"
            >
              {{ elem.sObjectTypeTitle }}
            </option>
          </b-form-select>
          <b-form-invalid-feedback class="error-message">
            Укажите категорию жилья
          </b-form-invalid-feedback>
        </b-form-group>
      </div>
      <TutorialFormLabel
        title="Используя подсказки, укажите категорию номера"
      />
      <div class="form-group-wrap">
        <b-form-group label="Категория номера">
          <b-form-select v-model="iRoomTypeID" :state="iRoomTypeIDValid">
            <option class="placeholder" value="null">
              Выберите один из вариантов
            </option>
            <option
              v-for="(elem, index) in roomType"
              :key="index"
              :value="elem.iRoomTypeID"
            >
              {{ elem.sRoomTypeTitle }}
            </option>
          </b-form-select>
          <b-form-invalid-feedback class="error-message">
            Укажите категорию номера
          </b-form-invalid-feedback>
        </b-form-group>
      </div>
      <!-- <pre>{{ roomType }}</pre> -->
    </template>
    <template slot="controls">
      <TutorialControls />
    </template>
  </TutorialPage>
</template>

<script>
import TutorialPage from '@/components/Tutorial/TutorialPage.vue'
import TutorialHeader from '@/components/Tutorial/TutorialHeader.vue'
import TutorialHint from '@/components/Tutorial/TutorialHint.vue'
import TutorialControls from '@/components/Tutorial/TutorialControls.vue'

import TutorialTitle from '@/components/Tutorial/TutorialTitle.vue'
import TutorialFormLabel from '@/components/Tutorial/TutorialFormLabel.vue'

export default {
  layout: 'tutorial',
  components: {
    TutorialPage,
    TutorialHeader,
    TutorialHint,
    TutorialControls,
    TutorialTitle,
    TutorialFormLabel
  },
  data() {
    return {
      iOblectTypeIDValid: null,
      iRoomTypeIDValid: null
    }
  },
  computed: {
    objectType() {
      return this.$store.state.objectType.list
    },
    iObjectTypeID: {
      get() {
        return this.$store.state.tutorial.object.iObjectTypeID
      },
      set(value) {
        this.$store.commit('tutorial/SET_iObjectTypeID', value)
      }
    },
    roomType() {
      return this.$store.state.roomType.list
    },
    iRoomTypeID: {
      get() {
        return this.$store.state.tutorial.object.iRoomTypeID
      },
      set(value) {
        this.$store.commit('tutorial/SET_iRoomTypeID', value)
      }
    }
  },
  created() {
    this.$store.dispatch('objectType/GET_LIST')
    this.$store.dispatch('roomType/GET_LIST')
  }
}
</script>
