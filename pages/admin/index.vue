<template>
  <div>
    <h1>Admin</h1>
  </div>
</template>

<script>
export default {
  middleware({ store, redirect }) {
    return redirect('/admin/application')
  },
  layout: 'admin'
}
</script>
