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
          <b-col v-for="item in feature" :key="item.iFeatureID" sm="6">
            <TutorialCheckbox
              :value="item.iFeatureID"
              :desc="item.sFeatureTitle"
              :icon="item.sFeatureOptionIcon"
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
    },
    hints() {
      return this.feature
        .filter((item) => item.sFeatureOptionDesc)
        .map((item) => {
          item.title = item.sFeatureTitle
          item.desc = item.sFeatureOptionDesc
          item.icon = item.sFeatureOptionIcon
          return item
        })
    }
  },
  async asyncData({ store }) {
    await store.dispatch('feature/GET_LIST')
  }
}
</script>
