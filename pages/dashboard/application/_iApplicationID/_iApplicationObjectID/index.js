import moment from 'moment'
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import Message from '@/components/Message'
moment.locale('ru')

export default {
  middleware: 'auth',
  layout: 'dashboardV2Fluid',
  components: {
    VueSlickCarousel,
    Message
  },
  head() {
    return {
      title: 'Страница объекта в заявке'
    }
  },
  mounted() {
    this.autoHeightChatModule()
  },
  beforeMount() {
    window.addEventListener('scroll', this.autoHeightChatModule)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.autoHeightChatModule)
  },
  computed: {
    applicationObject({ $store }) {
      return $store.state.application_object.item
    },
    SELECTEL_WEB() {
      return process.env.SELECTEL_WEB
    }
  },
  async asyncData({ store, $axios, params }) {
    await store.dispatch('application_object/GET_ITEM', {
      iApplicationObjectID: params.iApplicationObjectID
    })
  },
  methods: {
    autoHeightChatModule() {
      // const offsetPadding = 25
      const windowHeight = window.innerHeight
      // const windowHeight = window.innerHeight
      // console.log(windowHeight)
      const controlRight = this.$refs.controlRight
      const wrapChat = this.$refs.chat

      const controlRightBounding = controlRight.getBoundingClientRect()
      const controlRightTop = controlRightBounding.top
      const controlRightHeight = controlRightBounding.height

      // const wrapChatBounding = wrapChat.getBoundingClientRect()

      // console.log('windowHeight', windowHeight)

      // console.log('offsetPadding', offsetPadding)
      // console.log('controlRightTop', controlRightTop)
      // console.log('controlRightHeight', controlRightHeight)

      // console.log('wrapChatBounding', wrapChatBounding.bottom)

      const wrapChatHeight =
        windowHeight - controlRightTop - controlRightHeight - 50
      wrapChat.style.height = wrapChatHeight + 'px'
    },
    handleScroll() {
      this.autoHeightChatModule()
    }
  }
}
