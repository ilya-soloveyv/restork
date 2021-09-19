<template>
  <TutorialPage>
    <template slot="hint">
      <TutorialHint :hints="hints" />
    </template>
    <template slot="content">
      <TutorialFormLabel
        title="Выберите какие из удобств есть внутри Вашего объекта"
      />
      <b-form-checkbox-group v-model="selectedRoomOptions">
        <b-row>
          <b-col
            v-for="option in roomOptions"
            :key="option.iRoomOptionID"
            xl="6"
          >
            <TutorialCheckbox
              :value="option.iRoomOptionID"
              :desc="option.sRoomOptionTitle"
            />
          </b-col>
        </b-row>
      </b-form-checkbox-group>
    </template>
  </TutorialPage>
</template>

<script>
import TutorialPage from '@/components/Tutorial/TutorialPage.vue'
import TutorialHint from '@/components/Tutorial/TutorialHint.vue'

import TutorialFormLabel from '@/components/Tutorial/TutorialFormLabel.vue'
import TutorialCheckbox from '@/components/Tutorial/TutorialCheckbox.vue'

export default {
  layout: 'tutorial',
  components: {
    TutorialPage,
    TutorialHint,
    TutorialFormLabel,
    TutorialCheckbox
  },
  data() {
    return {
      hints: [
        {
          title: 'Холодильник',
          desc: 'Двухкамерный холодильник с отделом под бутылки вина'
        },
        {
          title: 'Кондиционер',
          desc: 'Без него невозможно прожить в жаркую погоду'
        },
        {
          title: 'Телевизор',
          desc: 'Где же узнать о последних новостях или посмотреть фильм'
        },
        {
          title: 'Собственная кухня',
          desc: 'Вы сами сможете приготовить вкусное паэлью'
        }
      ]
    }
  },
  computed: {
    roomOptions() {
      return this.$store.state.roomOption.list
    },
    selectedRoomOptions: {
      get() {
        return this.$store.state.tutorial.object_room_options
      },
      set(payload) {
        this.$store.commit('tutorial/SET_roomOptions', payload)
      }
    }
  },
  async asyncData({ store }) {
    await store.dispatch('roomOption/GET_LIST')
  }
}
</script>
