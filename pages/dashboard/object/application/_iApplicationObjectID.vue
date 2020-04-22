<template>
  <div>
    <h1>ApplicationObject #{{ applicationObject.iApplicationObjectID }}</h1>
    <div>
      <b-form @submit.prevent="update">
        <b-form-group
          id="iObjectPriceLabel"
          label="iObjectPrice:"
          label-for="iObjectPrice"
        >
          <b-form-input
            id="iObjectPrice"
            v-model="iObjectPrice"
            required
          ></b-form-input>
        </b-form-group>
        <b-button type="submit" variant="primary">
          Отправить предложение
        </b-button>
      </b-form>
    </div>
    <pre>{{ applicationObject }}</pre>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  layout: 'dashboard',
  head() {
    return {
      title: 'Object Application'
    }
  },
  data() {
    return {}
  },
  computed: {
    applicationObject({ $store }) {
      return $store.state.application_object.item
    },
    iObjectPrice: {
      get() {
        return this.$store.state.application_object.item.iObjectPrice
      },
      set(iObjectPrice) {
        this.$store.commit('application_object/SET_iObjectPrice', iObjectPrice)
      }
    }
  },
  async asyncData({ store, $axios, params }) {
    await store.dispatch('application_object/GET_ITEM', {
      iApplicationObjectID: params.iApplicationObjectID
    })
  },
  methods: {
    async update() {
      await this.$store.dispatch('application_object/UPDATE')
      this.$router.push('/dashboard/object')
    }
  }
}
</script>
