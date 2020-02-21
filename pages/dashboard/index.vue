<template>
  <div>
    Dashboard
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  layout: 'dashboard',
  head() {
    return {
      title: 'Dashboard'
    }
  }
}
</script>
