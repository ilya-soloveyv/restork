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
        sApplicationAddress: '',
        aApplicationCoordinate: '',
        dApplicationDateFrom: '',
        dApplicationDateTo: '',
        iApplicationAdult: 1,
        iApplicationChild: 0
      },
      suggestionsOptions: {
        inputClass: 'form-control',
        // debounce: 250,
        placeholder: 'Выберите адрес из предлагаемых'
      }
    }
  },
  methods: {
    onInputChange(query) {
      console.log(query)
      // query = query.trim() || null
      // if (query === null) return null
      // return new Promise((resolve) => {
      //   this.$axios
      //     .post('/api/object/search_address', {
      //       search: query
      //     })
      //     .then((response) => {
      //       resolve(response.data.list)
      //     })
      // })
    },
    onItemSelected(item) {
      console.log(item)
      // this.$set(this.object, 'sObjectAddress', item.formattedAddress)
      // this.$set(this.object.aObjectCoordinate.coordinates, 0, item.latitude)
      // this.$set(this.object.aObjectCoordinate.coordinates, 1, item.longitude)
    }
  }
}
