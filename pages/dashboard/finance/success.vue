<template>
  <div>
    <h1>Спасибо</h1>
    <p>Ваша карта успешно добавлена.</p>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  layout: 'dashboard',
  head() {
    return {
      title: 'Успешное добавление карты'
    }
  }
}
</script>
