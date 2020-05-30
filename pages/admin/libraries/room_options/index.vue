<template>
  <div>
    <div class="breadcrumb-box">
      <b-container>
        <b-breadcrumb :items="breadcrumbs"></b-breadcrumb>
      </b-container>
    </div>
    <b-container>
      <h1 class="title">
        <span>Опции номеров</span>
        <b-button-group>
          <b-button
            size="sm"
            variant="primary"
            to="/admin/libraries/room_options/0"
          >
            Добавить
          </b-button>
        </b-button-group>
      </h1>
      <b-table
        id="room-option-list"
        :items="roomOption"
        :fields="table_fields"
        @row-clicked="use"
        striped
        hover
      >
        <template v-slot:cell(iRoomOptionActive)="{ item }">
          <b-badge v-if="!item.iRoomOptionActive" variant="secondary">
            Выключено
          </b-badge>
          <b-badge v-if="item.iRoomOptionActive" variant="success">
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
          text: 'Опции номеров',
          active: true
        }
      ],
      table_fields: [
        {
          key: 'iRoomOptionID',
          label: 'ID',
          tdClass: 'iRoomOptionID'
        },
        {
          key: 'sRoomOptionTitle',
          label: 'Название'
        },
        {
          key: 'iRoomOptionActive',
          label: 'Статус',
          tdClass: 'iRoomOptionActive'
        }
      ],
      roomOption: []
    }
  },
  async asyncData({ params, $axios }) {
    const { data } = await $axios.post('/api/room_option/get')
    return { roomOption: data }
  },
  methods: {
    use(option) {
      this.$router.push('/admin/libraries/room_options/' + option.iRoomOptionID)
    }
  }
}
</script>

<style lang="scss">
table#room-option-list {
  td {
    cursor: pointer;
    &.iRoomOptionID {
      width: 55px;
    }
    &.iRoomOptionActive {
      width: 105px;
    }
  }
}
</style>
