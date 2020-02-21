<template>
  <div>
    <h1>Step 2</h1>
    <b-button variant="primary" to="/dashboard/object/add/step3">
      Далее
    </b-button>
    <pre>{{ $store.state.object.item }}</pre>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  head() {
    return {
      title: 'Добавление объекта'
    }
  }
}
</script>
