<template>
  <div>
    <h1>Step 3</h1>
    <b-button variant="primary" to="/dashboard/object/add/step4">
      Далее
    </b-button>
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
