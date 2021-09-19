<template>
  <TutorialPage>
    <template slot="hint">
      <TutorialHint :hints="hints" />
    </template>
    <template slot="content">
      <TutorialFormLabel
        title="В строке напиши адрес расположения строения, где находится Ваше жилье. Номер квартиры указывать не нужно"
      />
      <b-form-group
        id="label-sObjectAddress"
        label="Адрес"
        label-for="input-sObjectAddress"
      >
        <suggestions
          id="input-sObjectAddress"
          v-model="sObjectAddress"
          :options="suggestionsOptions"
          :onInputChange="onInputChange"
          :onItemSelected="onItemSelected"
        >
          <div slot="item" slot-scope="props">
            {{ props.item.formattedAddress }}
          </div>
        </suggestions>
      </b-form-group>
      <div id="map" v-if="aObjectCoordinate">
        <client-only>
          <yandex-map
            :coords="aObjectCoordinate"
            :zoom="15"
            :scroll-zoom="true"
            :init-without-markers="false"
            @click="clickOnMap"
            ymap-class="map"
          >
            <ymap-marker
              :marker-id="1"
              :coords="aObjectCoordinate"
              drag="dragMarket"
              marker-type="placemark"
            ></ymap-marker>
          </yandex-map>
        </client-only>
      </div>
    </template>
  </TutorialPage>
</template>

<script>
import TutorialPage from '@/components/Tutorial/TutorialPage.vue'
import TutorialHint from '@/components/Tutorial/TutorialHint.vue'

import TutorialFormLabel from '@/components/Tutorial/TutorialFormLabel.vue'

import Suggestions from 'v-suggestions'
import 'v-suggestions/dist/v-suggestions.css'

export default {
  layout: 'tutorial',
  components: {
    TutorialPage,
    TutorialHint,
    TutorialFormLabel,
    Suggestions
  },
  data() {
    return {
      suggestionsOptions: {
        inputClass: 'form-control',
        placeholder: 'Выберите адрес из предлагаемых'
      },
      hints: [
        {
          img: '/tutorial/hint/location.jpeg',
          desc:
            'В строке напиши адрес расположения строения, где находится Ваше жилье. Номер квартиры указывать не нужно'
        }
      ]
    }
  },
  computed: {
    sObjectAddress: {
      get() {
        return this.$store.state.tutorial.object.sObjectAddress || ''
      },
      set(payload) {
        this.$store.commit('tutorial/SET_sObjectAddress', payload)
      }
    },
    aObjectCoordinate: {
      get() {
        if (
          this.$store.state.tutorial.object.aObjectCoordinate &&
          this.$store.state.tutorial.object.aObjectCoordinate.coordinates
        ) {
          return this.$store.state.tutorial.object.aObjectCoordinate.coordinates
        } else {
          return [0, 0]
        }
      }
    }
  },
  methods: {
    onInputChange(query) {
      query = query.trim() || null
      if (query === null) return null
      return new Promise((resolve) => {
        this.$axios
          .post('/api/object/search_address', {
            search: query
          })
          .then((response) => {
            resolve(response.data.list)
          })
      })
    },
    onItemSelected(item) {
      this.$store.commit('tutorial/SET_sObjectAddress', {
        sObjectAddress: item.formattedAddress,
        coordinates: [item.latitude, item.longitude]
      })
    },
    clickOnMap(event) {
      const coords = event.get('coords')
      this.$emit('clickOnMap', coords)
    }
  }
}
</script>

<style lang="scss" scoped>
#map {
  margin: 0;
  box-shadow: none;
  border-radius: 6px;
  overflow: hidden;
}
</style>
