<template>
  <div>
    <div class="breadcrumb-box">
      <b-container>
        <b-breadcrumb>
          <b-breadcrumb-item>Библиотека</b-breadcrumb-item>
          <b-breadcrumb-item active>Только для гостей</b-breadcrumb-item>
        </b-breadcrumb>
      </b-container>
    </div>
    <b-container>
      <h1 class="title">
        <span>Только для гостей</span>
        <b-button-group>
          <b-button
            size="sm"
            variant="primary"
            to="/admin/libraries/hotel_guest/0"
          >
            Добавить
          </b-button>
        </b-button-group>
      </h1>
      <b-table
        id="hotel-guest-list"
        :items="hotelGuest"
        :fields="table_fields"
        @row-clicked="use"
        striped
        hover
      >
        <template v-slot:cell(iHotelGuestActive)="{ item }">
          <b-badge v-if="!item.iHotelGuestActive" variant="secondary">
            Выключено
          </b-badge>
          <b-badge v-if="item.iHotelGuestActive" variant="success">
            Включено
          </b-badge>
        </template>
      </b-table>
    </b-container>
  </div>
</template>

<script>
export default {
  middleware: 'admin',
  layout: 'admin',
  data() {
    return {
      table_fields: [
        {
          key: 'iHotelGuestID',
          label: 'ID',
          tdClass: 'iHotelGuestID'
        },
        {
          key: 'sHotelGuestTitle',
          label: 'Название'
        },
        {
          key: 'iHotelGuestActive',
          label: 'Статус',
          tdClass: 'iHotelGuestActive'
        }
      ],
      hotelGuest: []
    }
  },
  async asyncData({ params, $axios }) {
    const { data } = await $axios.post('/api/hotel_guest/get')
    return { hotelGuest: data }
  },
  methods: {
    use(guest) {
      this.$router.push('/admin/libraries/hotel_guest/' + guest.iHotelGuestID)
    }
  }
}
</script>

<style lang="scss">
table#hotel-guest-list {
  td {
    cursor: pointer;
    &.iHotelGuestID {
      width: 55px;
    }
    &.iHotelGuestActive {
      width: 105px;
    }
  }
}
</style>
