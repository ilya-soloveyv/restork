import Dropzone from 'nuxt-dropzone'
// import 'nuxt-dropzone/dropzone.css'
import Suggestions from 'v-suggestions'
import 'v-suggestions/dist/v-suggestions.css'
import '~/assets/scss/dropzone.scss'

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
      room_type: [],
      objectDropzoneOptions: {
        url: '/api/object/uploadObjectImages',
        dictDefaultMessage: 'Выберите файл или перетащите его сюда',
        uploadMultiple: true,
        parallelUploads: 64,
        paramName: 'files',
        createImageThumbnails: false,
        addedfile: (file) => {},
        processingmultiple: () => {
          this.$set(this, 'dropzoneLoading', true)
        },
        sendingmultiple: (file, xhr, formData) => {
          formData.append('iObjectID', this.object.iObjectID)
        },
        successmultiple: (file, data) => {
          this.$set(this.object, 'object_images', data.objectImages)
          this.$set(this, 'dropzoneLoading', false)
        }
      },
      dropzoneLoading: false,
      roomDropzoneOptions: {
        url: '/api/object/uploadRoomImages',
        dictDefaultMessage: 'Выберите файл или перетащите его сюда',
        uploadMultiple: true,
        parallelUploads: 64,
        paramName: 'files',
        createImageThumbnails: false,
        addedfile: (file) => {},
        processingmultiple: () => {
          this.$set(this, 'dropzoneLoading', true)
        },
        sendingmultiple: (file, xhr, formData) => {
          formData.append('iRoomID', this.iRoomID)
        },
        successmultiple: (file, data) => {
          this.$set(this.room, 'room_images', data.roomImages)
          this.$set(this, 'dropzoneLoading', false)
        }
      },
      roomIndexActive: false,
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
    dropzoneRoomID() {
      return this.dropzoneRoomIndex
        ? this.object.rooms[this.dropzoneRoomIndex].iRoomID
        : false
    },
    SELECTEL_HOST() {
      return process.env.SELECTEL_HOST
    },
    SELECTEL_CONTAINER() {
      return process.env.SELECTEL_CONTAINER
    },
    SELECTEL_WEB() {
      return process.env.SELECTEL_WEB
    },
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
    },
    room() {
      return this.roomIndexActive !== false && this.object.rooms
        ? this.object.rooms[this.roomIndexActive]
        : false
    },
    iRoomID() {
      return this.room.iRoomID
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
    data.object.rooms.forEach((room) => {
      room.room_room_options_array = []
      room.room_room_options.forEach((option) => {
        room.room_room_options_array.push(option.iRoomOptionID)
      })
    })
    return {
      object: data.object,
      object_type: data.object_type,
      object_option: data.object_option,
      room_option: data.room_option,
      room_type: data.room_type,
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
      data.object.rooms.forEach((room) => {
        room.room_room_options_array = []
        room.room_room_options.forEach((option) => {
          room.room_room_options_array.push(option.iRoomOptionID)
        })
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
    },
    addRoom() {
      this.object.rooms.push({
        room_room_options_array: []
      })
      const roomIndexActive = this.object.rooms.length - 1
      this.$set(this, 'roomIndexActive', roomIndexActive)
    },
    async removeObjectImage(image) {
      const { data } = await this.$axios.post('/api/object/removeObjectImage', {
        image
      })
      this.$set(this.object, 'object_images', data.objectImages)
    },
    async removeRoomImage(image) {
      const { data } = await this.$axios.post('/api/object/removeRoomImage', {
        image
      })
      this.$set(this.room, 'room_images', data.roomImages)
    },
    useRoom(roomIndex) {
      this.$set(this, 'roomIndexActive', roomIndex)
    }
  }
}
