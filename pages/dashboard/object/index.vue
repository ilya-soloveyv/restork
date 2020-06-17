<template>
  <div class="dashboardObjectIndex">
    <h1>Мои объекты размещения</h1>
    <ListItem
      v-for="(object, objectIndex) in objects"
      :key="objectIndex"
      :object="object"
    />
    <b-button variant="primary" to="/dashboard/object/add" class="mt-3">
      Добавить новый объект
    </b-button>
  </div>
</template>

<script>
import ListItem from '~/components/Dashboard/object/ListItem'
export default {
  middleware: 'auth',
  layout: 'dashboard',
  components: {
    ListItem
  },
  head() {
    return {
      title: 'Object'
    }
  },
  computed: {
    objects({ $store }) {
      return $store.state.object.list
    }
  },
  async asyncData({ store, $axios, params }) {
    await store.dispatch('object/GET_LIST', params)
  }
}
</script>

<style lang="scss" scoped>
.dashboardObjectIndex {
  h1 {
    font-size: 24px;
    margin-bottom: 1.5rem;
  }
}
</style>
