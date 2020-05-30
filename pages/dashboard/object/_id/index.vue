<template>
  <div>
    <h1>{{ object.sObjectTitle }}</h1>
    <ul>
      <li>
        <nuxt-link :to="'/dashboard/object/' + object.iObjectID + '/basic'">
          Базовые настройка
        </nuxt-link>
      </li>
      <li v-if="!object.object_type.iRoomPermission">
        <nuxt-link :to="'/dashboard/object/' + object.iObjectID + '/setting'">
          Характеристики объекта
        </nuxt-link>
      </li>
      <li>
        <nuxt-link :to="'/dashboard/object/' + object.iObjectID + '/option'">
          Опции отеля
        </nuxt-link>
      </li>
      <li v-if="!object.object_type.iRoomPermission">
        <nuxt-link
          :to="'/dashboard/object/' + object.iObjectID + '/roomoption'"
        >
          Опции комнат
        </nuxt-link>
      </li>
      <li>
        <nuxt-link :to="'/dashboard/object/' + object.iObjectID + '/adress'">
          Расположение объекта
        </nuxt-link>
      </li>
      <li>
        <nuxt-link :to="'/dashboard/object/' + object.iObjectID + '/photo'">
          Фотографии объекта
        </nuxt-link>
      </li>
    </ul>
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
