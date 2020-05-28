<template>
  <b-row align-h="center">
    <b-col cols="8">
      <div id="objectCardStep1">
        <h1>Общая информация о жилье</h1>
        <b-form @submit.prevent="submit">
          <b-form-group
            id="label_sObjectTitle"
            label="Название объекта"
            label-for="input_sObjectTitle"
          >
            <b-form-input
              id="input_sObjectTitle"
              v-model="sObjectTitle"
              type="text"
              required
              autocomplete="off"
            ></b-form-input>
          </b-form-group>
          <b-form-group
            id="label_iObjectTypeID"
            label="Вид объекта"
            label-for="input_iObjectTypeID"
          >
            <b-form-select
              id="input_iObjectTypeID"
              v-model="iObjectTypeID"
              :options="objectType"
              value-field="iObjectTypeID"
              text-field="sObjectTypeTitle"
              required
            />
          </b-form-group>
          <div class="mx-auto">
            <b-button
              :disabled="loadingButtonAdd"
              type="submit"
              variant="primary"
            >
              Далее
            </b-button>
          </div>
        </b-form>
        <!-- {{ objectType }} -->
        <!-- {{ object }} -->
      </div>
    </b-col>
  </b-row>
</template>

<script>
export default {
  middleware: 'auth',
  layout: 'dashboardFull',
  head() {
    return {
      title: 'Добавление объекта'
    }
  },
  data() {
    return {
      loadingButtonAdd: false
    }
  },
  computed: {
    sObjectTitle: {
      get() {
        return this.$store.state.object.item.sObjectTitle
      },
      set(sObjectTitle) {
        this.$store.dispatch('object/UPDATE_sObjectTitle', { sObjectTitle })
      }
    },
    iObjectTypeID: {
      get() {
        return this.$store.state.object.item.iObjectTypeID
      },
      set(iObjectTypeID) {
        this.$store.dispatch('object/UPDATE_iObjectTypeID', { iObjectTypeID })
      }
    },
    objectType() {
      return this.$store.state.objectType.list
    },
    object() {
      return this.$store.state.object.item
    }
  },
  async asyncData({ store, params }) {
    await store.dispatch('objectType/GET_LIST', params)
    await store.dispatch('object/SET_ITEM', {})
  },
  methods: {
    async submit() {
      this.$set(this, 'loadingButtonAdd', true)
      await this.$store.dispatch('object/OBJECT_ADD')
      this.$router.push('/dashboard/object/' + this.object.iObjectID)
      this.$set(this, 'loadingButtonAdd', false)
    }
  }
}
</script>

<style lang="scss" scoped>
#objectCardStep1 {
  margin: 5rem 0;
  background: #fff;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 0 12.09px 0.91px rgba(0, 0, 0, 0.15);
}
</style>
