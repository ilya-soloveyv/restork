<template>
  <div>
    <h1>Ошибка</h1>
    <p>При добавлении карты возникла ошибка</p>
    <pre></pre>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  layout: 'dashboard',
  head() {
    return {
      title: 'Ошибка добавления карты'
    }
  }
}
</script>
