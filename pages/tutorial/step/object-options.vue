<template>
  <TutorialPage>
    <template slot="hint">
      <TutorialHint :hints="hints" />
    </template>
    <template slot="content">
      <TutorialFormLabel
        title="Выберите какие из удобств доступны Вашим гостям"
      />
      <b-form-checkbox-group v-model="selectedObjectOptions">
        <b-row>
          <b-col
            v-for="option in objectOptions"
            :key="option.iObjectOptionID"
            xl="6"
          >
            <TutorialCheckbox
              :value="option.iObjectOptionID"
              :desc="option.sObjectOptionTitle"
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
          title: 'Бассейн',
          desc: 'Там где плавают Там где плавают Там где плавают'
        },
        {
          title: 'Зона мангала',
          desc: 'Там где жарят Там где жарят Там где жарят'
        },
        {
          title: 'Детская площадка',
          desc: 'Там где играют Там где играют Там где играют'
        },
        {
          title: 'Парковка',
          desc: 'Там где паркуют Там где паркуют Там где паркуют'
        }
      ]
    }
  },
  computed: {
    objectOptions() {
      return this.$store.state.objectOption.list
    },
    selectedObjectOptions: {
      get() {
        return this.$store.state.tutorial.object_object_options
      },
      set(payload) {
        this.$store.commit('tutorial/SET_objectOptions', payload)
      }
    }
  },
  async asyncData({ store }) {
    await store.dispatch('objectOption/GET_LIST')
  }
}
</script>
