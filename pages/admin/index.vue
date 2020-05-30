<template>
  <h1>Admin</h1>
</template>

<script>
export default {
  middleware({ store, redirect }) {
    return redirect('/admin/application')
  },
  layout: 'admin'
}
</script>
