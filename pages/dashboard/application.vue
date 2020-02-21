<template>
  <div>
    Application
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  layout: 'dashboard',
  head() {
    return {
      title: 'Application'
    }
  }
}
</script>
