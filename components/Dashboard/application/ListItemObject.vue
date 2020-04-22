<template>
  <div>
    Предложение от {{ app.object.sObjectTitle }}
    <nuxt-link :to="'/dashboard/application/' + app.iApplicationObjectID">
      Посмотреть предложение
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    app: {
      type: Object,
      required: true
    }
  }
}
</script>
