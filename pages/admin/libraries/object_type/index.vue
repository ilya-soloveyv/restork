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
            to="/admin/libraries/object_type/0"
          >
            Добавить
          </b-button>
        </b-button-group>
      </h1>
      <b-table
        id="object-type-list"
        :items="objectType"
        :fields="table_fields"
        @row-clicked="use"
        striped
        hover
      >
        <template v-slot:cell(iObjectTypeActive)="{ item }">
          <b-badge v-if="!item.iObjectTypeActive" variant="secondary">
            Выключено
          </b-badge>
          <b-badge v-if="item.iObjectTypeActive" variant="success">
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
          text: 'Виды объекта',
          active: true
        }
      ],
      table_fields: [
        {
          key: 'iObjectTypeID',
          label: 'ID',
          tdClass: 'iObjectTypeID'
        },
        {
          key: 'sObjectTypeTitle',
          label: 'Название'
        },
        {
          key: 'iObjectTypeActive',
          label: 'Статус',
          tdClass: 'iObjectTypeActive'
        }
      ],
      objectType: []
    }
  },
  async asyncData({ params, $axios }) {
    const { data } = await $axios.post('/api/object_type/get')
    return { objectType: data }
  },
  methods: {
    use(type) {
      this.$router.push('/admin/libraries/object_type/' + type.iObjectTypeID)
    }
  }
}
</script>

<style lang="scss">
table#object-type-list {
  td {
    cursor: pointer;
    &.iObjectTypeID {
      width: 55px;
    }
    &.iObjectTypeActive {
      width: 105px;
    }
  }
}
</style>
