<template>
  <div>
    <h1>Финансы</h1>
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
