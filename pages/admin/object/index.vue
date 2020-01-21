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
          <b-button size="sm" variant="primary" to="/admin/object/0">
            Добавить
          </b-button>
        </b-button-group>
      </h1>
      <b-table
        id="object-list"
        v-if="objects"
        :items="objects.docs"
        :fields="table_fields"
        @row-clicked="use"
        striped
        hover
      >
        <template v-slot:cell(iObjectActive)="{ item }">
          <b-badge v-if="!item.iObjectActive" variant="secondary">
            Выключено
          </b-badge>
          <b-badge v-if="item.iObjectActive" variant="success">
            Включено
          </b-badge>
        </template>
        <template v-slot:cell(iObjectVerification)="{ item }">
          <b-badge v-if="!item.iObjectVerification" variant="warning">
            Верификация
          </b-badge>
          <b-badge v-if="item.iObjectVerification" variant="success">
            Одобрено
          </b-badge>
        </template>
      </b-table>
      <!-- {{ objects }} -->
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
          key: 'iObjectID',
          label: 'ID',
          tdClass: 'iObjectID'
        },
        {
          key: 'sObjectTitle',
          label: 'Название'
        },
        {
          key: 'iObjectActive',
          label: 'Статус',
          tdClass: 'iObjectActive'
        },
        {
          key: 'iObjectVerification',
          label: 'Верификация',
          tdClass: 'iObjectVerification'
        }
      ],
      objects: []
    }
  },
  async asyncData({ params, $axios }) {
    const { data } = await $axios.post('/api/object/get')
    return { objects: data }
  },
  methods: {
    use(object) {
      this.$router.push('/admin/object/' + object.iObjectID)
    }
  }
}
</script>

<style lang="scss">
table#object-list {
  td {
    cursor: pointer;
    &.iObjectID {
      width: 55px;
    }
    &.iObjectActive {
      width: 105px;
    }
    &.iObjectVerification {
      width: 135px;
    }
  }
}
</style>
