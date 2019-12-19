<template>
  <div>
    <div class="breadcrumb-box">
      <b-container>
        <b-breadcrumb :items="breadcrumbs"></b-breadcrumb>
      </b-container>
    </div>
    <b-container>
      <h1 class="title">
        <span>Опции отеля</span>
        <b-button-group>
          <b-button
            size="sm"
            variant="primary"
            to="/admin/libraries/hotel_options/0"
          >
            Добавить
          </b-button>
        </b-button-group>
      </h1>
      <b-table
        id="hotel-option-list"
        :items="hotelOption"
        :fields="table_fields"
        @row-clicked="use"
        striped
        hover
      >
        <template v-slot:cell(iHotelOptionActive)="{ item }">
          <b-badge v-if="!item.iHotelOptionActive" variant="secondary">
            Выключено
          </b-badge>
          <b-badge v-if="item.iHotelOptionActive" variant="success">
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
          text: 'Опции отеля',
          active: true
        }
      ],
      table_fields: [
        {
          key: 'iHotelOptionID',
          label: 'ID',
          tdClass: 'iHotelOptionID'
        },
        {
          key: 'sHotelOptionTitle',
          label: 'Название'
        },
        {
          key: 'iHotelOptionActive',
          label: 'Статус',
          tdClass: 'iHotelOptionActive'
        }
      ],
      hotelOption: []
    }
  },
  async asyncData({ params, $axios }) {
    const { data } = await $axios.post('/api/hotel_option/get')
    return { hotelOption: data }
  },
  methods: {
    use(option) {
      this.$router.push(
        '/admin/libraries/hotel_options/' + option.iHotelOptionID
      )
    }
  }
}
</script>

<style lang="scss">
table#hotel-option-list {
  td {
    cursor: pointer;
    &.iHotelOptionID {
      width: 55px;
    }
    &.iHotelOptionActive {
      width: 105px;
    }
  }
}
</style>
