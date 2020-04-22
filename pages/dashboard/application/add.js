import Suggestions from 'v-suggestions'
import 'v-suggestions/dist/v-suggestions.css'
export default {
  middleware: 'auth',
  layout: 'dashboard',
  components: {
    Suggestions
  },
  head() {
    return {
      title: 'Application ADD'
    }
  },
  data() {
    return {
      application: {
        sApplicationAddress: 'Россия, Краснодарский край, Сочи',
        aApplicationCoordinate: {
          coordinates: [43.585525, 39.723062]
        },
        sApplicationCountry: null,
        sApplicationState: null,
        sApplicationCity: null,
        dApplicationDateFrom: '2020-04-20',
        dApplicationDateTo: '2020-04-23',
        iApplicationAdult: 2,
        iApplicationChild: 0,
        objectOption: [2, 1],
        roomOption: [1, 5]
      },
      suggestionsOptions: {
        inputClass: 'form-control',
        // debounce: 250,
        placeholder: 'Куда Вы направляетесь?'
      }
    }
  },
  computed: {
    objectOption({ $store }) {
      return $store.state.objectOption.list
    },
    roomOption({ $store }) {
      return $store.state.roomOption.list
    }
  },
  async asyncData({ store, $axios, params }) {
    await store.dispatch('objectOption/GET_LIST')
    await store.dispatch('roomOption/GET_LIST')
  },
  methods: {
    checkApplicationAddress() {
      if (!this.application.aApplicationCoordinate.coordinates.length) {
        this.$set(this.application, 'sApplicationAddress', '')
      }
    },
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
      this.$set(this.application, 'sApplicationAddress', item.formattedAddress)
      this.$set(
        this.application.aApplicationCoordinate.coordinates,
        0,
        item.latitude
      )
      this.$set(
        this.application.aApplicationCoordinate.coordinates,
        1,
        item.longitude
      )
      this.$set(this.application, 'sApplicationCountry', item.country)
      this.$set(this.application, 'sApplicationState', item.state)
      this.$set(this.application, 'sApplicationCity', item.city)
    },
    async add() {
      const { application } = await this.$store.dispatch(
        'application/ADD',
        this.application
      )
      this.$router.push(
        '/dashboard/application/' + application.application.iApplicationID
      )
    }
  }
}
