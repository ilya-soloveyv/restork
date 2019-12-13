<template>
  <div>
    <h1>TypeID: {{ $route.params.id }}</h1>
    <pre>{{ type }}</pre>
    <b-form @click.prevent="update">
      <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="type.sHotelTypeName"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Сохранить</b-button>
      <b-button @click="remove" type="button" variant="danger">
        Удалить
      </b-button>
    </b-form>
  </div>
</template>
<script>
export default {
  middleware: 'admin',
  layout: 'admin',
  computed: {
    type() {
      return Object.assign({}, this.$store.state.hotel_types.type)
    }
  },
  async fetch({ store, params }) {
    await store.dispatch('hotel_types/getType', params)
  },
  methods: {
    async update() {
      await this.$store.dispatch('hotel_types/updateType', this.type)
    },
    async remove() {
      await this.$store.dispatch('hotel_types/removeType', this.type)
      this.$router.push('/admin/libraries/hotel_types')
    }
  }
}
</script>
