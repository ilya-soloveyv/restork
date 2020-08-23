import ObjectEditStatus from '@/components/Dashboard/object/ObjectEditStatus'
export default {
  middleware: 'auth',
  layout: 'dashboardV2Fluid',
  components: {
    ObjectEditStatus
  },
  head() {
    return {
      title: 'Редактирование объекта'
    }
  },
  computed: {
    object({ $store }) {
      return $store.state.object.item
    }
  },
  async asyncData({ store, $axios, params }) {
    await store.dispatch('object/GET_ITEM', {
      iObjectID: params.iObjectID
    })
  }
}
