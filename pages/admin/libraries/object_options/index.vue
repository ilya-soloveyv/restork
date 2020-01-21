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
            to="/admin/libraries/object_options/0"
          >
            Добавить
          </b-button>
        </b-button-group>
      </h1>
      <b-table
        id="object-option-list"
        :items="objectOption"
        :fields="table_fields"
        @row-clicked="use"
        striped
        hover
      >
        <template v-slot:cell(iObjectOptionActive)="{ item }">
          <b-badge v-if="!item.iObjectOptionActive" variant="secondary">
            Выключено
          </b-badge>
          <b-badge v-if="item.iObjectOptionActive" variant="success">
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
          text: 'Опции отеля',
          active: true
        }
      ],
      table_fields: [
        {
          key: 'iObjectOptionID',
          label: 'ID',
          tdClass: 'iObjectOptionID'
        },
        {
          key: 'sObjectOptionTitle',
          label: 'Название'
        },
        {
          key: 'iObjectOptionActive',
          label: 'Статус',
          tdClass: 'iObjectOptionActive'
        }
      ],
      objectOption: []
    }
  },
  async asyncData({ params, $axios }) {
    const { data } = await $axios.post('/api/object_option/get')
    return { objectOption: data }
  },
  methods: {
    use(option) {
      this.$router.push(
        '/admin/libraries/object_options/' + option.iObjectOptionID
      )
    }
  }
}
</script>

<style lang="scss">
table#object-option-list {
  td {
    cursor: pointer;
    &.iObjectOptionID {
      width: 55px;
    }
    &.iObjectOptionActive {
      width: 105px;
    }
  }
}
</style>
