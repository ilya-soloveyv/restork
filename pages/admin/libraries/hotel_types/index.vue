<template>
  <div>
    <h1>Hotel types</h1>
    <b-button @click="add" type="button" variant="primary">Добавить</b-button>
    <b-table
      id="hotel_type-list"
      :items="hotel_types.docs"
      @row-clicked="selected"
      striped
      hover
    ></b-table>
    <b-pagination
      v-model="page"
      :total-rows="hotel_types.total"
      :per-page="3"
      aria-controls="hotel_type-list"
    />
  </div>
</template>

<script>
export default {
  middleware: 'admin',
  layout: 'admin',
  data() {
    return {
      page: 1
    }
  },
  computed: {
    hotel_types() {
      return this.$store.state.hotel_types.hotelTypes
    }
  },
  watch: {
    async page() {
      await this.$store.dispatch('hotel_types/getHotelTypes', {
        page: this.page
      })
    }
  },
  async asyncData({ store }) {
    await store.dispatch('hotel_types/getHotelTypes')
  },
  methods: {
    selected(type) {
      this.$router.push('/admin/libraries/hotel_types/' + type.iHotelTypeID)
    },
    add() {
      this.$router.push('/admin/libraries/hotel_types/add')
    }
  }
}
</script>
