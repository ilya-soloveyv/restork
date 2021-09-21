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
              :icon="option.sRoomOptionIcon"
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
    },
    hints() {
      return this.roomOptions
        .filter((item) => item.sRoomOptionDesc)
        .map((item) => {
          item.title = item.sRoomOptionTitle
          item.desc = item.sRoomOptionDesc
          item.icon = item.sRoomOptionIcon
          return item
        })
    }
  },
  async asyncData({ store }) {
    await store.dispatch('roomOption/GET_LIST')
  }
}
</script>
