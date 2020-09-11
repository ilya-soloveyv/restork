export default {
  middleware: 'auth',
  layout: 'dashboardV2',
  head() {
    return {
      title: 'Бронирования'
    }
  },
  computed: {
    SELECTEL_WEB() {
      return process.env.SELECTEL_WEB
    }
  },
  async asyncData({ store, $axios, params }) {
    // await store.dispatch('roomOption/GET_LIST')
  }
}
