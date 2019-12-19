<template>
  <div>
    <div class="breadcrumb-box">
      <b-container>
        <b-breadcrumb :items="breadcrumbs"></b-breadcrumb>
      </b-container>
    </div>
    <b-container>
      <h1>Hotel</h1>
      <b-table id="hotel-list" :items="hotels.docs" striped hover></b-table>
      <b-pagination
        v-model="page"
        :total-rows="hotels.total"
        :per-page="4"
        aria-controls="hotel-list"
      />
    </b-container>
  </div>
</template>

<script>
export default {
  middleware: 'admin',
  layout: 'admin',
  data() {
    return {
      page: 1,
      breadcrumbs: [
        {
          text: 'Отели',
          active: true
        }
      ]
    }
  },
  computed: {
    hotels({ $store }) {
      return $store.state.hotels.hotels
    }
  },
  watch: {
    async page() {
      await this.$store.dispatch('hotels/getHotels', {
        page: this.page
      })
    }
  },
  async asyncData({ store, params }) {
    await store.dispatch('hotels/getHotels')
  }
}
</script>
