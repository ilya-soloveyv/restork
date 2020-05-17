import { mapGetters } from 'vuex'
import socket from '~/plugins/socket.io.js'
import moment from 'moment'
moment.locale('ru')

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
    },
    dApplicationDate() {
      return moment(this.applicationObject.application.dDate).format(
        'D MMMM YYYY'
      )
    }
  },
  async asyncData({ store, $axios, params }, callback) {
    await store.dispatch('application_object/GET_ITEM', {
      iApplicationObjectID: params.id
    })
    await store.dispatch('objectOption/GET_LIST')
    await store.dispatch('roomOption/GET_LIST')
    await socket.emit('last-messages', function(messages) {
      callback(null, {
        messages,
        message: ''
      })
    })
  },
  watch: {
    messages: 'scrollToBottom'
  },
  beforeMount() {
    socket.on('new-message', (message) => {
      this.messages.push(message)
    })
  },
  mounted() {
    this.scrollToBottom()
  },
  methods: {
    cancelApplicationObject() {
      this.$store.dispatch('application_object/SET_CANCEL')
    },
    selectelApplicationObject() {
      this.$store.dispatch('application_object/SET_SELECTED')
    },
    sendMessage() {
      if (!this.message.trim()) {
        return
      }
      const message = {
        date: new Date().toJSON(),
        text: this.message.trim()
      }
      this.messages.push(message)
      this.message = ''
      socket.emit('send-message', message)
    },
    scrollToBottom() {
      this.$nextTick(() => {
        this.$refs.messages.scrollTop = this.$refs.messages.scrollHeight
      })
    }
  }
}
