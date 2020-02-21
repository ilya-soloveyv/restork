<template>
  <div>
    Profile
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  layout: 'dashboard',
  head() {
    return {
      title: 'Profile'
    }
  }
}
</script>
