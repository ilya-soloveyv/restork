<template>
  <div>
    <b-form @submit.prevent="submit" inline>
      <!-- <div class="form-group row">
        <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
        <div class="col-sm-10">
          <b-input
            id="staticEmail"
            type="text"
            class="form-control-plaintext"
            value="email@example.com"
          />
        </div>
      </div> -->
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
      title: 'Object Setting'
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
    }
  },
  async asyncData({ store, $axios, params }) {
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
