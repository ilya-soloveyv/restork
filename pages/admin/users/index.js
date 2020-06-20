export default {
  middleware: 'admin',
  layout: 'admin',
  data() {
    return {
      breadcrumbs: [
        {
          text: 'Пользователи',
          active: true
        }
      ],
      page: this.$route.query.page || 1,
      fields: [
        { key: 'iUserID', label: 'ID' },
        { key: 'sUserName', label: 'Имя пользователя' },
        { key: 'button', label: '' }
      ]
    }
  },
  computed: {
    users() {
      return this.$store.state.user.list
    },
    usersTable() {
      const usersTable = []
      this.users.docs.forEach((user) => {
        usersTable.push({
          iUserID: user.iUserID,
          sUserName: this.sUserName(user),
          button: user.iUserID
        })
      })
      return usersTable
    }
  },
  watch: {
    page() {
      this.$store.dispatch('user/GET_LIST', { page: this.page })
    }
  },
  async asyncData({ store, $axios, params, query }) {
    await store.dispatch('user/GET_LIST', { page: query.page })
  },
  methods: {
    linkGen(pageNum) {
      return pageNum === 1 ? '?' : `?page=${pageNum}`
    },
    sUserName(user) {
      const sUserName = []
      if (user.sUserLastName) sUserName.push(user.sUserLastName)
      if (user.sUserFirstName) sUserName.push(user.sUserFirstName)
      if (user.sUserMiddleName) sUserName.push(user.sUserMiddleName)
      return sUserName.join(' ')
    },
    getButton(user) {
      return '<button>Редактировать</button>'
    }
  }
}
