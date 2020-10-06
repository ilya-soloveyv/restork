import { ru } from 'vuejs-datepicker/dist/locale'
import moment from 'moment'
import Dropzone from 'nuxt-dropzone'

export default {
  middleware: 'auth',
  layout: 'dashboardV2',
  components: {
    Dropzone
  },
  head() {
    return {
      title: 'Редактирование пользователя'
    }
  },
  data() {
    return {
      error: null,
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
      dropzoneLoading: false,
      oldPassword: '',
      newPassword: '',
      repeatPassword: '',
      oldPasswordView: false,
      newPasswordView: false,
      updatePasswordSuccess: false
    }
  },
  computed: {
    SELECTEL_WEB() {
      return process.env.SELECTEL_WEB
    },
    user: ({ $store }) => Object.assign({}, $store.state.auth.user),
    updateDataPassword() {
      if (
        this.newPasswordView &&
        this.oldPassword.length &&
        this.newPassword.length
      ) {
        return true
      } else if (
        this.oldPassword.length &&
        this.newPassword.length &&
        this.repeatPassword.length &&
        this.newPassword === this.repeatPassword
      ) {
        return true
      } else {
        return false
      }
    },
    numberCard() {
      if (this.$auth.loggedIn && this.$auth.state.user.B2PPan) {
        return this.$auth.state.user.B2PPan.match(/.{1,4}/g).join(' ')
      }
    }
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
    },
    async updatePassword() {
      this.$set(this, 'updatePasswordSuccess', false)
      this.$set(this, 'error', null)
      this.$set(this, 'updateData', true)
      const response = await this.$axios
        .$post('/api/auth/updatePassword', {
          oldPassword: this.oldPassword,
          newPassword: this.newPassword
        })
        .catch((e) => {
          this.$set(this, 'error', e.response.data.error)
          this.$refs[this.error.ref].$el.focus()
        })
      this.$set(this, 'updateData', false)
      if (response) {
        await this.$auth.fetchUser()
        this.$set(this, 'oldPassword', '')
        this.$set(this, 'newPassword', '')
        this.$set(this, 'repeatPassword', '')
        this.$set(this, 'updatePasswordSuccess', true)
      }
    },
    oldPasswordToggle() {
      this.$set(this, 'oldPasswordView', !this.oldPasswordView || false)
    },
    newPasswordToggle() {
      this.$set(this, 'newPasswordView', !this.newPasswordView || false)
    },
    async addCard() {
      const { url } = await this.$axios.$post('/api/b2p/addOrder', {
        iUserID: this.$auth.state.user.iUserID
      })
      // console.log(url)
      window.location.href = url
      // this.$router.replace({ path: url })
      // console.log(response)
      // return redirect(url)
    },
    async removeCard() {
      await this.$axios.$post('/api/user/clearB2PPan', {
        iUserID: this.$auth.state.user.iUserID
      })
      await this.$auth.fetchUser()
    }
  }
}
