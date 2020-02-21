<template>
  <div class="objectAdress">
    <h1>Адрес объекта размещения</h1>
    <b-form @submit.prevent="submit">
      <b-form-group id="label-tObjectDesc" label-for="input-sObjectAddress">
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
      <div id="map">
        <client-only>
          <yandex-map
            :coords="coordinates"
            :controls="[]"
            :zoom="14"
            :draggable="true"
            @click="clickOnMap"
          >
            <ymap-marker
              :coords="coordinates"
              :drag="dragMarker"
              marker-id="123"
              hint-content="Расположение объекта"
            />
          </yandex-map>
        </client-only>
      </div>
      <b-button type="submit" variant="primary">
        Далее
      </b-button>
    </b-form>
    <!-- <pre>{{ object }}</pre> -->
  </div>
</template>

<script>
import Suggestions from 'v-suggestions'
import 'v-suggestions/dist/v-suggestions.css'
export default {
  middleware: 'auth',
  layout: 'dashboard',
  head() {
    return {
      title: 'Object Adress'
    }
  },
  components: {
    Suggestions
  },
  data: () => ({
    search: '',
    suggestionsOptions: {
      inputClass: 'form-control',
      placeholder: 'Введите адрес располжения объекта',
      autocomplete: 'off'
    }
  }),
  computed: {
    object({ $store }) {
      return $store.state.object.item
    },
    coordinates: {
      get() {
        return this.$store.state.object.item.aObjectCoordinate.coordinates
      },
      set(coordinates) {
        console.log(coordinates)
      }
    },
    sObjectAddress: {
      get() {
        return this.$store.state.object.item.sObjectAddress
      },
      set(sObjectAddress) {
        this.$store.dispatch('object/UPDATE_sObjectAddress', sObjectAddress)
      }
    }
  },
  async asyncData({ store, $axios, params }) {
    await store.dispatch('object/GET_ITEM', params)
  },
  methods: {
    clickOnMap(event) {
      // console.log('clickOnMap')
      // console.log(event)
      const coords = event.get('coords')
      this.$store.dispatch('object/UPDATE_MARKER_COORDINATES', coords)
      // console.log(coords)
      // this.$set(this.coordinates, 'coordinates', coords)
    },
    dragMarker(event) {
      console.log('dragMarker')
      console.log(event)
    },
    onInputChange(query) {
      // console.log(query)
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
      this.$store.dispatch(
        'object/UPDATE_sObjectAddress',
        item.formattedAddress
      )
      const coords = []
      coords.push(item.latitude)
      coords.push(item.longitude)
      this.$store.dispatch('object/UPDATE_MARKER_COORDINATES', coords)
    },
    async submit() {
      await this.$store.dispatch('object/UPDATE')
      this.$router.push('/dashboard/object/' + this.object.iObjectID)
    }
  }
}
</script>

<style lang="scss" scoped>
#map {
  width: 100%;
  height: 400px;
  .ymap-container {
    height: 100%;
  }
}
</style>
