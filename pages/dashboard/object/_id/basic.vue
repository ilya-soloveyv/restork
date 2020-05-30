<template>
  <div>
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
      <b-form-group
        id="label_tObjectDesc"
        label="Вид объекта"
        label-for="input_tObjectDesc"
      >
        <b-form-textarea
          id="input_tObjectDesc"
          v-model="tObjectDesc"
          placeholder="Краткое описание объекта"
          rows="3"
          max-rows="6"
        ></b-form-textarea>
      </b-form-group>
      <b-button type="submit" variant="primary">
        Сохранить
      </b-button>
    </b-form>
    <pre>{{ object }}</pre>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  layout: 'dashboard',
  head() {
    return {
      title: 'Object Basic'
    }
  },
  data() {
    return {
      loadingDisabledCheckbox: false
    }
  },
  computed: {
    object({ $store }) {
      return $store.state.object.item
    },
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
    tObjectDesc: {
      get() {
        return this.$store.state.object.item.tObjectDesc
      },
      set(tObjectDesc) {
        this.$store.dispatch('object/UPDATE_tObjectDesc', { tObjectDesc })
      }
    },
    objectType() {
      return this.$store.state.objectType.list
    }
  },
  async asyncData({ store, $axios, params }) {
    await store.dispatch('objectType/GET_LIST')
    await store.dispatch('object/GET_ITEM', params)
  },
  methods: {
    async submit() {
      await this.$store.dispatch('object/UPDATE')
      this.$router.push('/dashboard/object/' + this.object.iObjectID)
    }
  }
}
</script>
