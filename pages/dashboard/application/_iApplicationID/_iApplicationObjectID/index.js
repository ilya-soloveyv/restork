import moment from 'moment'
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
moment.locale('ru')

export default {
  middleware: 'auth',
  layout: 'dashboardV2Fluid',
  components: {
    VueSlickCarousel
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
      // const windowHeight = window.innerHeight
      // console.log(windowHeight)
      const controlRight = this.$refs.controlRight
      console.log(controlRight.pageYOffset)
    },
    handleScroll() {
      this.autoHeightChatModule()
    }
  }
}
