<template>
  <div>
    <h1>Финансы</h1>
    <b-button variant="primary">Добавить карту</b-button>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  layout: 'dashboard',
  head() {
    return {
      title: 'Финансы'
    }
  }
}
</script>
