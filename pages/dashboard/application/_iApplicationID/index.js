import ApplicationObjectItem from '@/components/Dashboard/application/ApplicationObjectItem'
import moment from 'moment'
moment.locale('ru')

export default {
  middleware: 'auth',
  layout: 'dashboardV2Dark',
  components: {
    ApplicationObjectItem
  },
  head() {
    return {
      title: 'Страница заявки'
    }
  },
  data() {
    return {
      toggleShowAllOptions: false,
      hideOptionsCount: 0,
      toggleShowAllData: false
    }
  },
  computed: {
    application({ $store }) {
      return $store.state.application.item
    },
    dDate({ $store }) {
      return moment(this.application.dDate).format('DD MMMM YYYY')
    },
    dates() {
      return (
        moment(this.application.dApplicationDateFrom).format('DD MMM') +
        ' - ' +
        moment(this.application.dApplicationDateTo).format('DD MMM YYYY')
      )
    },
    sApplicationAdult() {
      return (
        this.application.iApplicationAdult +
        this.declOfNum(this.application.iApplicationAdult, [
          ' взрослый',
          ' взрослых',
          ' взрослых'
        ])
      )
    },
    sApplicationChild() {
      if (this.application.iApplicationChild) {
        return (
          this.application.iApplicationChild +
          this.declOfNum(this.application.iApplicationChild, [
            ' ребенок',
            ' детей',
            ' детей'
          ])
        )
      } else {
        return false
      }
    },
    options() {
      const options = this.getOptions()
      let optionsSlice = options
      if (!this.toggleShowAllOptions) {
        optionsSlice = options.slice(0, 4)
      }
      this.hideOptionsCount = options.length - optionsSlice.length
      return optionsSlice.join(', ')
    },
    applicationObjectNoWaitCount() {
      return this.application.application_objects.filter((object) => {
        return object.iObjectPrice !== null
      }).length
    },
    applicationObjectNew() {
      return this.application.application_objects.filter((object) => {
        return object.iUserView === false
      }).length
    },
    applicationObjectNewAllMessage() {
      const count = this.application.application_objects.reduce(
        (sum, object) => {
          return sum + object.messages.length
        },
        0
      )
      return count
    }
  },
  async asyncData({ store, $axios, params }) {
    await store.dispatch('application/GET_ITEM', {
      iApplicationID: params.iApplicationID
    })
  },
  methods: {
    declOfNum(n, a) {
      const c = [2, 0, 1, 1, 1, 2]
      return a[n % 100 > 4 && n % 100 < 20 ? 2 : c[n % 10 < 5 ? n % 10 : 5]]
    },
    getOptions() {
      const objectOptions = this.application.applicationObjectOptions.map(
        function(option) {
          return option.object_option.sObjectOptionTitle
        }
      )
      const roomOptions = this.application.applicationRoomOptions.map(function(
        option
      ) {
        return option.room_option.sRoomOptionTitle
      })
      const options = objectOptions.concat(roomOptions)
      return options
    },
    showAllOptions() {
      this.toggleShowAllOptions = true
    },
    showAllData() {
      this.toggleShowAllData = true
    }
  }
}
