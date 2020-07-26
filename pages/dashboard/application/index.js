import ApplicationListItem from '@/components/Dashboard/application/ApplicationListItem'

export default {
  middleware: 'auth',
  layout: 'dashboardV2',
  components: {
    ApplicationListItem
  },
  head() {
    return {
      title: 'История поездок'
    }
  },
  computed: {
    applications({ $store }) {
      return $store.state.application.list
    }
  },
  async asyncData({ store, $axios, params }) {
    await store.dispatch('application/GET_LIST', {
      iUserID: store.state.auth.user.iUserID
    })
  }
}
