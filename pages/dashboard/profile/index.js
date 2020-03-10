import { ru } from 'vuejs-datepicker/dist/locale'
import moment from 'moment'
import Dropzone from 'nuxt-dropzone'
export default {
  middleware: 'auth',
  layout: 'dashboard',
  components: {
    Dropzone
  },
  head() {
    return {
      title: 'Profile'
    }
  },
  data() {
    return {
      ru,
      updateData: false,
      userAvatarDropzoneOptions: {
        url: '/api/auth/upload',
        dictDefaultMessage: 'Изменить фотографию',
        uploadMultiple: false,
        // parallelUploads: 1,
        paramName: 'file',
        timeout: 5 * 60 * 1000,
        createImageThumbnails: false,
        addedfile: (file) => {},
        processing: () => {
          this.$set(this, 'dropzoneLoading', true)
        },
        sending: (file, xhr, formData) => {
          const iUserID = this.$auth.user.iUserID
          formData.append('iUserID', iUserID)
        },
        success: (file, data) => {
          this.$set(this.user, 'sUserAvatar', data.upload.sUserAvatar)
          this.$set(this, 'dropzoneLoading', false)
        }
      },
      dropzoneLoading: false
    }
  },
  computed: {
    SELECTEL_WEB() {
      return process.env.SELECTEL_WEB
    },
    user: ({ $store }) => Object.assign({}, $store.state.auth.user)
  },
  methods: {
    async update() {
      this.$set(this, 'updateData', true)
      if (this.user.dUserBirthday) {
        this.$set(
          this.user,
          'dUserBirthday',
          moment(this.user.dUserBirthday).format('YYYY-MM-DD')
        )
      }
      await this.$axios.$post('/api/auth/update', { user: this.user })
      await this.$auth.fetchUser()
      this.$set(this, 'updateData', false)
    }
  }
}
