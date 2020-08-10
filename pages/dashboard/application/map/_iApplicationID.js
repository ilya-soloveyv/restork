import YMMarker from '@/components/Dashboard/YMMarker'
export default {
  middleware: 'auth',
  layout: 'dashboardV2FluidNoFooter',
  components: {
    YMMarker
  },
  head() {
    return {
      title: 'Карта'
    }
  },
  data() {
    return {}
  },
  computed: {
    application({ $store }) {
      return $store.state.application.item
    },
    settings({ $store }) {
      return {
        coords: $store.state.application.item.aApplicationCoordinate.coordinates
      }
    },
    SELECTEL_WEB() {
      return process.env.SELECTEL_WEB
    }
  },
  async asyncData({ store, $axios, params }) {
    await store.dispatch('application/GET_ITEM', {
      iApplicationID: params.iApplicationID
    })
  }
}
