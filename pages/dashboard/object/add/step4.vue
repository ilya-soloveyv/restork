<template>
  <div>
    <h1>Step 4</h1>
    <b-button variant="primary" to="#">
      Разместить объект
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
