<template>
  <div>
    <div class="breadcrumb-box">
      <b-container>
        <b-breadcrumb :items="breadcrumbs"></b-breadcrumb>
      </b-container>
    </div>
    <b-container>
      <b-row>
        <b-col>
          <h1 class="title">
            <span v-if="sObjectTypeGroupTitle">
              {{ sObjectTypeGroupTitle }}
            </span>
            <span v-else class="text-secondary">Название группы объекта</span>
          </h1>
        </b-col>
        <b-col v-if="iObjectTypeGroupID" cols="auto">
          <b-button @click="destroy" type="button" size="sm" variant="danger">
            Удалить
          </b-button>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12" sm="6" md="6" lg="4" xl="3">
          <b-form @submit.prevent="update">
            <b-form-group
              id="label-sObjectTypeGroupTitle"
              label="Название"
              label-for="input-sObjectTypeGroupTitle"
            >
              <b-form-input
                id="input-sObjectTypeGroupTitle"
                v-model="sObjectTypeGroupTitle"
                type="text"
                required
              />
            </b-form-group>
            <b-form-group
              id="label-iObjectTypeGroupSort"
              label="Сортировка"
              label-for="input-iObjectTypeGroupSort"
            >
              <b-form-input
                id="input-iObjectTypeGroupSort"
                v-model.number="iObjectTypeGroupSort"
                type="text"
                placeholder="9999"
              />
            </b-form-group>
            <b-form-group
              id="label-iObjectTypeGroupActive"
              label="Публикация"
              label-for="input-iObjectTypeGroupActive"
            >
              <b-form-checkbox
                id="input-iObjectTypeGroupActive"
                v-model="iObjectTypeGroupActive"
                switch
              >
                <template v-if="iObjectTypeGroupActive">
                  Опубликовано
                </template>
                <template v-if="!iObjectTypeGroupActive">
                  Скрыто
                </template>
              </b-form-checkbox>
            </b-form-group>
            <b-button type="submit" variant="primary">Сохранить</b-button>
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  middleware: 'admin',
  layout: 'admin',
  data() {
    return {
      type: {}
    }
  },
  computed: {
    iObjectTypeGroupID() {
      return this.$store.state.objectTypeGroup.item.iObjectTypeGroupID
    },
    sObjectTypeGroupTitle: {
      get() {
        return this.$store.state.objectTypeGroup.item.sObjectTypeGroupTitle
      },
      set(sObjectTypeGroupTitle) {
        this.$store.dispatch(
          'objectTypeGroup/SET_sObjectTypeGroupTitle',
          sObjectTypeGroupTitle
        )
      }
    },
    iObjectTypeGroupSort: {
      get() {
        return this.$store.state.objectTypeGroup.item.iObjectTypeGroupSort
      },
      set(iObjectTypeGroupSort) {
        this.$store.dispatch(
          'objectTypeGroup/SET_iObjectTypeGroupSort',
          iObjectTypeGroupSort
        )
      }
    },
    iObjectTypeGroupActive: {
      get() {
        return this.$store.state.objectTypeGroup.item.iObjectTypeGroupActive
      },
      set(iObjectTypeGroupActive) {
        this.$store.dispatch(
          'objectTypeGroup/SET_iObjectTypeGroupActive',
          iObjectTypeGroupActive
        )
      }
    },
    breadcrumbs() {
      return [
        {
          text: 'Справочники'
        },
        {
          text: 'Группы объектов',
          to: '/admin/libraries/object_type_group'
        },
        {
          text: this.sObjectTypeGroupTitle
            ? this.sObjectTypeGroupTitle
            : 'Название группы объекта',
          active: true
        }
      ]
    }
  },
  async asyncData({ store, params }) {
    await store.dispatch('objectTypeGroup/GET_ITEM', params)
  },
  methods: {
    async update() {
      await this.$store.dispatch('objectTypeGroup/UPDATE')
      this.$router.push(
        `/admin/libraries/object_type_group/${this.iObjectTypeGroupID}`
      )
    },
    async destroy() {
      await this.$store.dispatch('objectTypeGroup/DELETE')
      this.$router.push(`/admin/libraries/object_type_group`)
    }
  }
}
</script>
