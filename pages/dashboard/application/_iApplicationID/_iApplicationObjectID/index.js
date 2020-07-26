import moment from 'moment'
moment.locale('ru')

export default {
  middleware: 'auth',
  layout: 'dashboardV2Fluid',
  head() {
    return {
      title: 'Страница объекта в заявке'
    }
  },
  computed: {
    applicationObject({ $store }) {
      return $store.state.application_object.item
    }
  },
  async asyncData({ store, $axios, params }) {
    await store.dispatch('application_object/GET_ITEM', {
      iApplicationObjectID: params.iApplicationObjectID
    })
  }
}
