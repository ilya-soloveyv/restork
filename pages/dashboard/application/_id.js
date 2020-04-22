export default {
  middleware: 'auth',
  layout: 'dashboard',
  head() {
    return {
      title: 'Application Object Item'
    }
  },
  data() {
    return {
      radius: 10,
      objects: []
    }
  },
  computed: {
    applicationObject({ $store }) {
      return $store.state.application_object.item
    }
  },
  async asyncData({ store, $axios, params }) {
    await store.dispatch('application_object/GET_ITEM', {
      iApplicationObjectID: params.id
    })
  },
  methods: {
    // async search() {
    //   const aApplicationCoordinate = this.application.application
    //     .aApplicationCoordinate.coordinates
    //   const objects = await this.$axios.$post(
    //     '/api/application/searchObjects',
    //     {
    //       aApplicationCoordinate,
    //       radius: this.radius
    //     }
    //   )
    //   this.$set(this, 'objects', objects)
    // }
  }
}
