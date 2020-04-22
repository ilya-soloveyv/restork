<template>
  <div>
    <h1>Мои объекты размещения</h1>
    <ul>
      <li v-for="(object, objectIndex) in objects" :key="objectIndex">
        <nuxt-link :to="'/dashboard/object/' + object.iObjectID">
          {{ object.sObjectTitle }}
        </nuxt-link>
        <ul>
          <li
            v-for="(app, appIndex) in object.application_objects"
            :key="appIndex"
          >
            <nuxt-link
              :to="'/dashboard/object/application/' + app.iApplicationObjectID"
            >
              {{ app.iApplicationObjectID }}
            </nuxt-link>
          </li>
        </ul>
        <!-- <pre>{{ object }}</pre> -->
      </li>
    </ul>
    <b-button variant="primary" to="/dashboard/object/add">
      Добавить новый объект
    </b-button>
    <!-- {{ objects }} -->
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
    objects({ $store }) {
      return $store.state.object.list
    }
  },
  async asyncData({ store, $axios, params }) {
    await store.dispatch('object/GET_LIST', params)
  }
}
</script>
