import Message from '~/components/Message'
import { mapGetters } from 'vuex'
// import socket from '~/plugins/socket.io.js'
import moment from 'moment'
moment.locale('ru')

export default {
  middleware: 'auth',
  layout: 'dashboardFull',
  head() {
    return {
      title: 'Application Object Item'
    }
  },
  components: {
    Message
  },
  data() {
    return {
      yandexMapControls: ['zoomControl', 'fullscreenControl']
    }
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
    },
    dApplicationDate() {
      return moment(this.applicationObject.application.dDate).format(
        'D MMMM YYYY'
      )
    }
  },
  async asyncData({ store, $axios, params }) {
    await store.dispatch('application_object/GET_ITEM', {
      iApplicationObjectID: params.id
    })
    await store.dispatch('objectOption/GET_LIST')
    await store.dispatch('roomOption/GET_LIST')
    await store.dispatch('message/GET_LIST', {
      iApplicationObjectID: params.id
    })
  },
  methods: {
    cancelApplicationObject() {
      this.$store.dispatch('application_object/SET_CANCEL')
    },
    selectelApplicationObject() {
      this.$store.dispatch('application_object/SET_SELECTED')
    }
  }
}
