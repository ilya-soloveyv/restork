export default {
  middleware: 'admin',
  layout: 'admin',
  data() {
    return {
      breadcrumbs: [
        {
          text: 'Заявки',
          active: true
        }
      ],
      page: this.$route.query.page || 1
    }
  },
  computed: {
    applications() {
      return this.$store.state.application.list
    }
  },
  watch: {
    page() {
      this.$store.dispatch('application/GET_LIST', { page: this.page })
    }
  },
  async asyncData({ store, $axios, params, query }) {
    await store.dispatch('application/GET_LIST', { page: query.page })
  },
  methods: {
    linkGen(pageNum) {
      return pageNum === 1 ? '?' : `?page=${pageNum}`
    }
  }
}
