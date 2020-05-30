import ListItem from '../../../components/Dashboard/application/ListItem'

export default {
  middleware: 'auth',
  layout: 'dashboard',
  components: {
    ListItem
  },
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
