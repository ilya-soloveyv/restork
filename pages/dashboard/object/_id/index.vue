<template>
  <div>
    <h1>{{ object.sObjectTitle }}</h1>
    <pre>{{ itemStatusRedirect }}</pre>
    <pre>{{ object }}</pre>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  layout: 'dashboard',
  head() {
    return {
      title: 'Object'
    }
  },
  computed: {
    object({ $store }) {
      return $store.state.object.item
    },
    itemStatusRedirect({ $store }) {
      return $store.getters['object/itemStatusRedirect']
    }
  },
  async asyncData({ store, $axios, params }) {
    await store.dispatch('object/GET_ITEM', params)
  },
  created() {
    if (this.itemStatusRedirect) {
      this.$router.replace(this.itemStatusRedirect)
    }
  }
}
</script>
