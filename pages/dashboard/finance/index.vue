<template>
  <div>
    <h1>Финансы</h1>
    <b-button @click="add" variant="primary">Добавить карту</b-button>
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
  },
  methods: {
    async add() {
      const { url } = await this.$axios.$post('/api/b2p/addOrder', {
        iUserID: this.$auth.state.user.iUserID
      })
      // console.log(url)
      window.location.href = url
      // this.$router.replace({ path: url })
      // console.log(response)
      // return redirect(url)
    }
  }
}
</script>
