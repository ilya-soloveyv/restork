import { mapGetters } from 'vuex'
export default {
  middleware: 'auth',
  // layout: 'dashboard',
  head() {
    return {
      title: 'Application Object Item'
    }
  },
  data() {
    return {}
  },
  computed: {
    ...mapGetters('application_object', [
      'applicationObjectOptionsString',
      'applicationRoomOptionsString',
      'applicationDateRange',
      'objectOptionWithSelected',
      'roomOptionWithSelected'
    ]),
    SELECTEL_WEB() {
      return process.env.SELECTEL_WEB
    },
    applicationObject({ $store }) {
      return $store.state.application_object.item
    },
    objectOption({ $store }) {
      return $store.state.objectOption.list
    },
    roomOption({ $store }) {
      return $store.state.roomOption.list
    }
  },
  async asyncData({ store, $axios, params }) {
    await store.dispatch('application_object/GET_ITEM', {
      iApplicationObjectID: params.id
    })
    await store.dispatch('objectOption/GET_LIST')
    await store.dispatch('roomOption/GET_LIST')
  },
  methods: {
    cancelApplicationObject() {
      this.$store.dispatch('application_object/SET_CANCEL')
    },
    selectelApplicationObject() {
      alert('selectelApplicationObject')
    }
  }
}
