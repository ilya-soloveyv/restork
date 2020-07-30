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
  data() {
    return {
      readMore: false,
      yandexMapControls: ['zoomControl', 'fullscreenControl']
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
    },
    dates() {
      return (
        moment(this.applicationObject.application.dApplicationDateFrom).format(
          'DD MMM'
        ) +
        ' - ' +
        moment(this.applicationObject.application.dApplicationDateTo).format(
          'DD MMM YYYY'
        )
      )
    },
    sApplicationAdultAndChildren() {
      const arr = []
      arr.push(
        this.applicationObject.application.iApplicationAdult +
          this.declOfNum(this.applicationObject.application.iApplicationAdult, [
            ' взрослый',
            ' взрослых',
            ' взрослых'
          ])
      )
      if (this.applicationObject.application.iApplicationChild) {
        arr.push(
          this.applicationObject.application.iApplicationChild +
            this.declOfNum(
              this.applicationObject.application.iApplicationChild,
              [' ребенок', ' детей', ' детей']
            )
        )
      }
      return arr.join(', ')
    },
    dDate() {
      return moment(this.applicationObject.dDate).fromNow()
    }
  },
  async asyncData({ store, $axios, params }) {
    await store.dispatch('application_object/GET_ITEM', {
      iApplicationObjectID: params.iApplicationObjectID
    })
  },
  methods: {
    declOfNum(n, a) {
      const c = [2, 0, 1, 1, 1, 2]
      return a[n % 100 > 4 && n % 100 < 20 ? 2 : c[n % 10 < 5 ? n % 10 : 5]]
    },
    autoHeightChatModule() {
      const windowHeight = window.innerHeight
      const controlRight = this.$refs.controlRight
      const wrapChat = this.$refs.chat
      const controlRightBounding = controlRight.getBoundingClientRect()
      const controlRightTop = controlRightBounding.top
      const controlRightHeight = controlRightBounding.height
      const wrapChatHeight =
        windowHeight - controlRightTop - controlRightHeight - 50
      wrapChat.style.height = wrapChatHeight + 'px'
    },
    goReadMore() {
      this.readMore = true
    },
    carouselGoTo(i) {
      this.$refs.carousel.goTo(i)
    }
  }
}
