<template>
  <div>
    <div class="breadcrumb-box">
      <b-container>
        <b-breadcrumb :items="breadcrumbs"></b-breadcrumb>
      </b-container>
    </div>
    <b-container>
      <h1 class="title">
        <span>Вид объекта</span>
        <b-button-group>
          <b-button
            size="sm"
            variant="primary"
            to="/admin/libraries/hotel_type/0"
          >
            Добавить
          </b-button>
        </b-button-group>
      </h1>
      <b-table
        id="hotel-type-list"
        :items="hotelType"
        :fields="table_fields"
        @row-clicked="use"
        striped
        hover
      >
        <template v-slot:cell(iHotelTypeActive)="{ item }">
          <b-badge v-if="!item.iHotelTypeActive" variant="secondary">
            Выключено
          </b-badge>
          <b-badge v-if="item.iHotelTypeActive" variant="success">
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
      breadcrumbs: [
        {
          text: 'Библиотека'
        },
        {
          text: 'Виды объекта',
          active: true
        }
      ],
      table_fields: [
        {
          key: 'iHotelTypeID',
          label: 'ID',
          tdClass: 'iHotelTypeID'
        },
        {
          key: 'sHotelTypeTitle',
          label: 'Название'
        },
        {
          key: 'iHotelTypeActive',
          label: 'Статус',
          tdClass: 'iHotelTypeActive'
        }
      ],
      hotelType: []
    }
  },
  async asyncData({ params, $axios }) {
    const { data } = await $axios.post('/api/hotel_type/get')
    return { hotelType: data }
  },
  methods: {
    use(type) {
      this.$router.push('/admin/libraries/hotel_type/' + type.iHotelTypeID)
    }
  }
}
</script>

<style lang="scss">
table#hotel-type-list {
  td {
    cursor: pointer;
    &.iHotelTypeID {
      width: 55px;
    }
    &.iHotelTypeActive {
      width: 105px;
    }
  }
}
</style>
