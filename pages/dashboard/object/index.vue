<template>
  <div class="dashboardObjectIndex">
    <b-row>
      <b-col>
        <h1>Мои объекты</h1>
      </b-col>
      <b-col md="5" lg="4" xl="3" align-self="center" class="wrapButtonAdd">
        <b-button to="/dashboard/object/add" variant="primary" size="lg" block>
          Добавить объект
        </b-button>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <div class="wrapObjectList">
          <ObjectListItem
            v-for="(object, index) in objects"
            :key="index"
            :object="object"
          />
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import ObjectListItem from '~/components/Dashboard/object/ObjectListItem'
export default {
  middleware: 'auth',
  layout: 'dashboardV2Dark',
  components: {
    ObjectListItem
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
  margin-bottom: 150px;
  .wrapButtonAdd {
    @media (max-width: 767px) {
      display: none;
    }
  }
  .wrapObjectList {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    grid-gap: 20px;
    @media (max-width: 991px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 767px) {
      grid-template-columns: 1fr;
      grid-gap: 25px;
    }
  }
}
</style>
