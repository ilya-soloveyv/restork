<template>
  <div>
    <div class="breadcrumb-box">
      <b-container>
        <b-breadcrumb>
          <b-breadcrumb-item active>Объекты</b-breadcrumb-item>
        </b-breadcrumb>
      </b-container>
    </div>
    <b-container>
      <h1 class="title">
        <span>Объекты</span>
        <b-button-group>
          <b-button size="sm" variant="primary" to="/admin/hotel/0">
            Добавить
          </b-button>
        </b-button-group>
      </h1>
      <b-table
        id="hotel-list"
        v-if="hotels"
        :items="hotels.docs"
        :fields="table_fields"
        @row-clicked="use"
        striped
        hover
      >
        <template v-slot:cell(iHotelActive)="{ item }">
          <b-badge v-if="!item.iHotelActive" variant="secondary">
            Выключено
          </b-badge>
          <b-badge v-if="item.iHotelActive" variant="success">
            Включено
          </b-badge>
        </template>
        <template v-slot:cell(iHotelVerification)="{ item }">
          <b-badge v-if="!item.iHotelVerification" variant="warning">
            Верификация
          </b-badge>
          <b-badge v-if="item.iHotelVerification" variant="success">
            Одобрено
          </b-badge>
        </template>
      </b-table>
      {{ hotels }}
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
          key: 'iHotelID',
          label: 'ID',
          tdClass: 'iHotelID'
        },
        {
          key: 'sHotelTitle',
          label: 'Название'
        },
        {
          key: 'iHotelActive',
          label: 'Статус',
          tdClass: 'iHotelActive'
        },
        {
          key: 'iHotelVerification',
          label: 'Верификация',
          tdClass: 'iHotelVerification'
        }
      ],
      hotels: []
    }
  },
  async asyncData({ params, $axios }) {
    const { data } = await $axios.post('/api/hotel/get')
    return { hotels: data }
  },
  methods: {
    use(hotel) {
      this.$router.push('/admin/hotel/' + hotel.iHotelID)
    }
  }
}
</script>

<style lang="scss">
table#hotel-list {
  td {
    cursor: pointer;
    &.iHotelID {
      width: 55px;
    }
    &.iHotelActive {
      width: 105px;
    }
    &.iHotelVerification {
      width: 135px;
    }
  }
}
</style>
