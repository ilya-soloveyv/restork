export default {
  middleware: 'admin',
  layout: 'admin',
  data() {
    return {}
  },
  computed: {
    user() {
      return this.$store.state.user.item
    },
    sUserName() {
      const sUserName = []
      if (this.user.sUserLastName) sUserName.push(this.user.sUserLastName)
      if (this.user.sUserFirstName) sUserName.push(this.user.sUserFirstName)
      if (this.user.sUserMiddleName) sUserName.push(this.user.sUserMiddleName)
      return sUserName.join(' ')
    },
    breadcrumbs() {
      return [
        {
          text: 'Пользователи',
          to: '/admin/users'
        },
        {
          text: this.sUserName,
          active: true
        }
      ]
    }
  },
  async asyncData({ store, $axios, params, query }) {
    await store.dispatch('user/GET_ITEM', { iUserID: params.iUserID })
  },
  methods: {}
}
