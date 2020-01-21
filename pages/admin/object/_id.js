import Dropzone from 'nuxt-dropzone'
import 'nuxt-dropzone/dropzone.css'
import Suggestions from 'v-suggestions'
import 'v-suggestions/dist/v-suggestions.css'

export default {
  middleware: 'admin',
  layout: 'admin',
  components: {
    Dropzone,
    Suggestions
  },
  data() {
    return {
      object: {},
      object_type: [],
      object_option: [],
      room_option: [],
      options: {
        url: '/api/object/upload'
      },
      suggestionsOptions: {
        inputClass: 'form-control',
        // debounce: 250,
        placeholder: 'Выберите адрес из предлагаемых'
      },
      searchUser: '',
      suggestionsUserOptions: {
        inputClass: 'form-control',
        placeholder: 'Поиск отельеров'
      },
      tabs: [
        {
          title: 'Основное',
          href: 'qqq'
        },
        {
          title: 'Фотографии',
          href: 'www'
        },
        {
          title: 'Номера',
          href: 'eee'
        }
      ]
    }
  },
  computed: {
    sUserFullName() {
      const sUserFullName = []
      if (this.object.user.sUserLastName) {
        sUserFullName.push(this.object.user.sUserLastName)
      }
      if (this.object.user.sUserFirstName) {
        sUserFullName.push(this.object.user.sUserFirstName)
      }
      if (this.object.user.sUserMiddleName) {
        sUserFullName.push(this.object.user.sUserMiddleName)
      }
      return sUserFullName.join(' ')
    },
    iRoomPermission() {
      const type = this.object_type.find(
        (x) => x.iObjectTypeID === this.object.iObjectTypeID
      )
      const iRoomPermission = type ? type.iRoomPermission : false
      return iRoomPermission
    },
    tabHash() {
      return this.$route.hash
    }
  },
  async asyncData({ params, $axios }) {
    const { data } = await $axios.post('/api/object/get_edit', params)
    data.object = data.object || {}
    data.object.object_object_options_array = []
    data.object.object_object_options.forEach((option) => {
      data.object.object_object_options_array.push(option.iObjectOptionID)
    })
    data.object.object_room_options_array = []
    data.object.object_room_options.forEach((option) => {
      data.object.object_room_options_array.push(option.iRoomOptionID)
    })
    return {
      object: data.object,
      object_type: data.object_type,
      object_option: data.object_option,
      room_option: data.room_option,
      breadcrumbs: [
        {
          text: 'Объекты',
          to: '/admin/object'
        },
        {
          text: data ? data.sObjectTitle : 'Новый объект',
          active: true
        }
      ]
    }
  },
  mounted() {
    if (this.object.object_images) {
      this.object.object_images.forEach((image) => {
        this.$refs.myVueDropzone.manuallyAddFile(
          {
            size: 123,
            type: 'image/jpg'
          },
          '/upload/object/100_100/' + image.sObjectImage
        )
      })
    }
  },
  methods: {
    async update() {
      if (!this.object.iUserID) {
        return false
      }
      const { data } = await this.$axios.post('/api/object/update', this.object)
      data.object = data.object || {}
      data.object.object_object_options_array = []
      data.object.object_object_options.forEach((option) => {
        data.object.object_object_options_array.push(option.iObjectOptionID)
      })
      data.object.object_room_options_array = []
      data.object.object_room_options.forEach((option) => {
        data.object.object_room_options_array.push(option.iRoomOptionID)
      })
      this.$set(this, 'object', data.object)
      this.$bvToast.toast('Успешно сохранено', {
        title: 'Статус',
        variant: 'success',
        toaster: 'b-toaster-bottom-right',
        autoHideDelay: 1500
      })
      this.$router.push('/admin/object/' + data.object.iObjectID)
    },
    dragMarket(event) {
      alert('dragMarker')
    },
    clickOnMap(event) {
      const coords = event.get('coords')
      this.$set(this.object.aObjectCoordinate, 'coordinates', coords)
    },
    onInputChange(query) {
      query = query.trim() || null
      if (query === null) return null
      return new Promise((resolve) => {
        this.$axios
          .post('/api/object/search_address', {
            search: query
          })
          .then((response) => {
            resolve(response.data.list)
          })
      })
    },
    onItemSelected(item) {
      this.$set(this.object, 'sObjectAddress', item.formattedAddress)
      this.$set(this.object.aObjectCoordinate.coordinates, 0, item.latitude)
      this.$set(this.object.aObjectCoordinate.coordinates, 1, item.longitude)
    },
    onInputChangeUser(query) {
      query = query.trim() || null
      if (query === null) return null
      return new Promise((resolve) => {
        this.$axios
          .post('/api/user/search', {
            search: query
          })
          .then((response) => {
            resolve(response.data.users)
          })
      })
    },
    onItemSelectedUser(user) {
      this.$set(this.object, 'iUserID', user.iUserID)
      this.$set(this.object, 'user', user)
    },
    onItemRemoveUser() {
      this.$set(this.object, 'iUserID', null)
      this.$set(this.object, 'user', {})
    }
  }
}
