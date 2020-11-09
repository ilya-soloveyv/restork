<template>
  <div>
    <div class="breadcrumb-box">
      <b-container>
        <b-breadcrumb :items="breadcrumbs"></b-breadcrumb>
      </b-container>
    </div>
    <b-container>
      <h1 class="title">
        <span>Группы объектов</span>
        <b-button-group>
          <b-button
            size="sm"
            variant="primary"
            to="/admin/libraries/object_type_group/0"
          >
            Добавить
          </b-button>
        </b-button-group>
      </h1>
      <b-table
        :items="objectTypeGroup"
        :fields="table_fields"
        @row-clicked="use"
        class="tableList"
        striped
        hover
      >
        <template v-slot:cell(iObjectTypeGroupActive)="{ item }">
          <b-badge v-if="!item.iObjectTypeGroupActive" variant="secondary">
            Выключено
          </b-badge>
          <b-badge v-if="item.iObjectTypeGroupActive" variant="success">
            Включено
          </b-badge>
        </template>
      </b-table>
      <!-- <pre>{{ objectTypeGroup }}</pre> -->
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
          text: 'Группы объектов',
          active: true
        }
      ],
      table_fields: [
        {
          key: 'iObjectTypeGroupID',
          label: 'ID',
          tdClass: 'ID'
        },
        {
          key: 'sObjectTypeGroupTitle',
          label: 'Название'
        },
        {
          key: 'iObjectTypeGroupActive',
          label: 'Статус',
          tdClass: 'iActive'
        }
      ]
    }
  },
  computed: {
    objectTypeGroup({ $store }) {
      return $store.state.objectTypeGroup.list
    }
  },
  async asyncData({ store }) {
    await store.dispatch('objectTypeGroup/GET_LIST')
  },
  methods: {
    use(objectTypeGroup) {
      this.$router.push(
        '/admin/libraries/object_type_group/' +
          objectTypeGroup.iObjectTypeGroupID
      )
    }
  }
}
</script>
