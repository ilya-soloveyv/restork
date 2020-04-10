export default {
  middleware: 'auth',
  layout: 'dashboard',
  head() {
    return {
      title: 'Application'
    }
  },
  computed: {
    applications({ $store }) {
      return $store.state.application.list
    }
  },
  async asyncData({ store, $axios, params }) {
    await store.dispatch('application/GET_LIST')
  }
}
