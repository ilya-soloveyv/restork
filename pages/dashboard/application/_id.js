export default {
  middleware: 'auth',
  layout: 'dashboard',
  head() {
    return {
      title: 'Application Item'
    }
  },
  data() {
    return {
      radius: 10,
      objects: []
    }
  },
  computed: {
    application({ $store }) {
      return $store.state.application.item
    }
  },
  async asyncData({ store, $axios, params }) {
    await store.dispatch('application/GET_ITEM', { iApplicationID: params.id })
  },
  methods: {
    async search() {
      const aApplicationCoordinate = this.application.application
        .aApplicationCoordinate.coordinates
      const objects = await this.$axios.$post(
        '/api/application/searchObjects',
        {
          aApplicationCoordinate,
          radius: this.radius
        }
      )
      this.$set(this, 'objects', objects)
    }
  }
}
