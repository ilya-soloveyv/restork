<template>
  <div>
    <h1>Финансы</h1>
    <!-- <pre>{{ $auth.state.user }}</pre> -->
    <template v-if="$auth.loggedIn && $auth.state.user.B2PPan">
      Номер карты: {{ $auth.state.user.B2PPan }}
      <b-button @click="remove" to="#">Удалить</b-button>
    </template>
    <template v-else>
      <b-button @click="add" variant="primary">Добавить карту</b-button>
    </template>
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
  async created() {
    await this.$auth.fetchUser()
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
    },
    async remove() {
      await this.$axios.$post('/api/user/clearB2PPan', {
        iUserID: this.$auth.state.user.iUserID
      })
      await this.$auth.fetchUser()
    }
  }
}
</script>
