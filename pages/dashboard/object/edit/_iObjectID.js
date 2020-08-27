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
    },
    objectOptions({ $store }) {
      return $store.state.objectOption.list
    },
    objectObjectOptionsArray: {
      get() {
        // this.$set(this, 'loadingDisabledCheckbox', false)
        return this.$store.state.object.item.object_object_options_array
      },
      set(objectObjectOptionsArray) {
        console.log(objectObjectOptionsArray)
      }
    },
    roomOptions({ $store }) {
      return $store.state.roomOption.list
    },
    objectRoomOptionsArray: {
      get() {
        return this.$store.state.object.item.object_room_options_array
      },
      set(objectRoomOptionsArray) {
        console.log(objectRoomOptionsArray)
      }
    }
  },
  async asyncData({ store, $axios, params }) {
    await store.dispatch('object/GET_ITEM', {
      iObjectID: params.iObjectID
    })
    await store.dispatch('objectOption/GET_LIST')
    await store.dispatch('roomOption/GET_LIST')
  }
}
