<template>
  <TutorialPage>
    <template slot="hint">
      <TutorialHint :hints="hints" />
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
    </template>
  </TutorialPage>
</template>

<script>
import TutorialPage from '@/components/Tutorial/TutorialPage.vue'
import TutorialHint from '@/components/Tutorial/TutorialHint.vue'

import TutorialTitle from '@/components/Tutorial/TutorialTitle.vue'
import TutorialFormLabel from '@/components/Tutorial/TutorialFormLabel.vue'

export default {
  layout: 'tutorial',
  components: {
    TutorialPage,
    TutorialHint,
    TutorialTitle,
    TutorialFormLabel
  },
  data() {
    return {
      iOblectTypeIDValid: null,
      iRoomTypeIDValid: null,
      basicHints: [
        {
          title: 'Коттедж / Дом',
          desc:
            'небольшое жильё, как правило в 1-2 этажа с участком прилегающей земли'
        },
        {
          title: 'Вилла',
          desc:
            'роскошный жилой дом, как правило, с отличными видовыми характеристиками'
        },
        {
          title: 'Апартаменты / Квартира',
          desc:
            'отдельное жилое помещение, состоящее из одной или нескольких смежных комнат'
        },
        {
          title: 'Номер в отеле / Номер в гостинице',
          desc: 'отдельный номер в отеле или гостинице'
        },
        {
          title: 'Хостел',
          desc:
            'система размещения, предоставляющая своим постояльцам спальное место без дополнительных удобств'
        }
      ],
      hotelHints: [
        {
          title: 'Single',
          desc:
            'Однокомнатный, для размещения одного отдыхающего. Спальное место одно'
        },
        {
          title: 'Double',
          desc:
            'Однокомнатный номер для двоих. Может быть с одной большой кроватью или с двумя раздельными кроватями.'
        },
        {
          title: 'Triple',
          desc: 'Номер для троих отдыхающих'
        },
        {
          title: 'Family Room',
          desc: 'Семейный двух- или трехкомнатный номер.'
        }
      ]
    }
  },
  computed: {
    object() {
      return this.$store.state.tutorial.object
    },
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
    },
    hints() {
      return this.isRoom ? this.hotelHints : this.basicHints
    }
  }
}
</script>
