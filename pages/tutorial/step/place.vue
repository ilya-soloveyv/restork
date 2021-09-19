<template>
  <TutorialPage>
    <template slot="hint">
      <TutorialHint :hints="hints" />
    </template>
    <template slot="content">
      <TutorialFormLabel
        title="Перечислите какие значимые места есть рядом с вашим объектом, напишите их названия и расстояния до них"
      />
      <TutorialPlaceItem
        v-for="(place, i) in selectedPlace"
        :key="i"
        :iObjectPlaceID="place.iObjectPlaceID"
        :iObjectID="place.iObjectID"
        :iPlaceID="place.iPlaceID"
        :sPlaceTitle="place.sPlaceTitle"
        :iPlaceDistance="place.iPlaceDistance"
        :index="i"
        :places="places"
        @select="change_iPlaceID($event)"
        @title="change_sPlaceTitle($event)"
        @distance="change_iPlaceDistance($event)"
        @remove="removePlace"
      />
      <b-btn @click="addPlace" variant="outline-secondary" pill size="sm">
        Добавить
      </b-btn>
    </template>
  </TutorialPage>
</template>

<script>
import TutorialPage from '@/components/Tutorial/TutorialPage.vue'
import TutorialHint from '@/components/Tutorial/TutorialHint.vue'

import TutorialFormLabel from '@/components/Tutorial/TutorialFormLabel.vue'
import TutorialPlaceItem from '@/components/Tutorial/TutorialPlaceItem.vue'

export default {
  layout: 'tutorial',
  components: {
    TutorialPage,
    TutorialHint,
    TutorialFormLabel,
    TutorialPlaceItem
  },
  data() {
    return {
      hints: [
        {
          desc: 'Море | Черное море | 350м',
          img: '/tutorial/hint/ocean.jpeg'
        },
        {
          desc: 'Озеро | Байкал | 1500м',
          img: '/tutorial/hint/late.jpeg'
        },
        {
          desc: 'Подъемник | Роза Хутор | 150м',
          img: '/tutorial/hint/snow.jpeg'
        },
        {
          desc: 'Центр города | 850м',
          img: '/tutorial/hint/city.jpeg'
        },
        {
          desc: 'Кафе | Шаурма | 50м',
          img: '/tutorial/hint/eat.jpeg'
        }
      ]
    }
  },
  computed: {
    places() {
      return this.$store.state.place.list
    },
    selectedPlace() {
      return this.$store.state.tutorial.object.object_places
    }
  },
  async asyncData({ store }) {
    await store.dispatch('place/GET_LIST')
  },
  methods: {
    change_iPlaceID(payload) {
      this.$store.dispatch('tutorial/CHANGE_iPlaceID_in_places', payload)
    },
    change_sPlaceTitle(payload) {
      this.$store.dispatch('tutorial/CHANGE_sPlaceTitle_in_places', payload)
    },
    change_iPlaceDistance(payload) {
      this.$store.dispatch('tutorial/CHANGE_iPlaceDistance_in_places', payload)
    },
    addPlace() {
      this.$store.dispatch('tutorial/ADD_iPlaceID_in_places')
    },
    removePlace(index) {
      this.$store.dispatch('tutorial/REMOVE_place_in_places', index)
    }
  }
}
</script>
