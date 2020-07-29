export default {
  middleware: 'admin',
  layout: 'admin',
  computed: {
    application() {
      return this.$store.state.application.item
    },
    breadcrumb() {
      return [
        {
          text: 'Заявки',
          to: '/admin/application'
        },
        {
          text: '#' + this.application.iApplicationID,
          active: true
        }
      ]
    }
  },
  async asyncData({ store, $axios, params }) {
    await store.dispatch('application/GET_ITEM', {
      iApplicationID: params.iApplicationID
    })
  }
}
