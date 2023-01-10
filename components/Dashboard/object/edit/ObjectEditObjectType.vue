<template>
  <div>
    <TutorialTitle title="Давайте подготовим вас к приему гостей" />
    <TutorialFormLabel
      title="Выберите из предложенного списка категорию вашего объекта"
    />
    {{ object }}
    {{ objectType }}
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
    <template v-if="isRoom">
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
    </template>
  </div>
</template>

<script>
import TutorialTitle from '@/components/Tutorial/TutorialTitle.vue'
import TutorialFormLabel from '@/components/Tutorial/TutorialFormLabel.vue'

export default {
  components: {
    TutorialTitle,
    TutorialFormLabel
  },
  props: {
    object: {
      type: Object,
      default: () => {}
    },
    objectType: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      iOblectTypeIDValid: null,
      iRoomTypeIDValid: null
    }
  },
  computed: {
    iObjectTypeID: {
      get() {
        return this.$store.state.tutorial.object.iObjectTypeID
      },
      set(value) {
        this.$store.commit('tutorial/SET_iObjectTypeID', value)
      }
    },
    isRoom() {
      const type = this.objectType.find(
        (type) => type.iObjectTypeID === this.iObjectTypeID
      )
      return typeof type === 'object' && 'iRoomPermission' in type
        ? type.iRoomPermission
        : false
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
  }
}
</script>
