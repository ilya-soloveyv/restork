<template>
  <div>
    <div class="breadcrumb-box">
      <b-container>
        <b-breadcrumb :items="breadcrumbs"></b-breadcrumb>
      </b-container>
    </div>
    <b-container>
      <h1 class="title">
        <span>Категории номеров</span>
        <b-button-group>
          <b-button
            size="sm"
            variant="primary"
            to="/admin/libraries/room_type/0"
          >
            Добавить
          </b-button>
        </b-button-group>
      </h1>
      <b-table
        id="room-type-list"
        :items="roomType"
        :fields="table_fields"
        @row-clicked="use"
        striped
        hover
      >
        <template v-slot:cell(iRoomTypeActive)="{ item }">
          <b-badge v-if="!item.iRoomTypeActive" variant="secondary">
            Выключено
          </b-badge>
          <b-badge v-if="item.iRoomTypeActive" variant="success">
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
          text: 'Справочники'
        },
        {
          text: 'Категории номеров',
          active: true
        }
      ],
      table_fields: [
        {
          key: 'iRoomTypeID',
          label: 'ID',
          tdClass: 'iRoomTypeID'
        },
        {
          key: 'sRoomTypeTitle',
          label: 'Название'
        },
        {
          key: 'iRoomTypeActive',
          label: 'Статус',
          tdClass: 'iRoomTypeActive'
        }
      ],
      roomType: []
    }
  },
  async asyncData({ params, $axios }) {
    const { data } = await $axios.post('/api/room_type/get')
    return { roomType: data }
  },
  methods: {
    use(type) {
      this.$router.push('/admin/libraries/room_type/' + type.iRoomTypeID)
    }
  }
}
</script>

<style lang="scss">
table#room-type-list {
  td {
    cursor: pointer;
    &.iRoomTypeID {
      width: 55px;
    }
    &.iRoomTypeActive {
      width: 105px;
    }
  }
}
</style>
