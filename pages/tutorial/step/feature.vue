<template>
  <TutorialPage>
    <template slot="hint">
      <TutorialHint :hints="hints" />
    </template>
    <template slot="content">
      <TutorialFormLabel
        title="Выберите какие из особенностей есть в Вашем объекте"
      />
      <b-form-checkbox-group v-model="selectedFeature">
        <b-row>
          <b-col v-for="item in feature" :key="item.iFeatureID" xl="6">
            <TutorialCheckbox
              :value="item.iFeatureID"
              :desc="item.sFeatureTitle"
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
          title: 'Можно с животными',
          desc: 'Ваши постояльцы смогут взять с собой любое животное'
        },
        {
          title: 'Есть место для курения',
          desc: 'На территории проживания есть специальное место для курения'
        },
        {
          title: 'Уборка',
          desc: 'Вы убираете место проживания ваших постояльцев'
        },
        {
          title: 'Услуги прачечной',
          desc:
            'Вы предоставляете место стирки или у Вас на территории есть прачечная'
        },
        {
          title: 'Смена постельного белья',
          desc: 'Вы предоставляете услугу смены постельного белья'
        },
        {
          title: 'Смена полотенец',
          desc: 'Вы предоставляете услугу смены полотенец'
        },
        {
          title: 'Завтраки',
          desc: 'На вашей территории есть кухня, кафе или ресторан'
        },
        {
          title: 'Трансфер',
          desc: 'Вы можете забрать постояльца из аэропорта или вокзала'
        }
      ]
    }
  },
  computed: {
    feature() {
      return this.$store.state.feature.list
    },
    selectedFeature: {
      get() {
        return this.$store.state.tutorial.object_feature
      },
      set(payload) {
        this.$store.commit('tutorial/SET_objectFeature', payload)
      }
    }
  },
  async asyncData({ store }) {
    await store.dispatch('feature/GET_LIST')
  }
}
</script>
