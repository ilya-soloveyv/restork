<template>
  <div id="login">
    <form @submit.prevent="login" autocomplete="off">
      <input id="input-phone" v-model.number.trim="phone" required />
      <input id="input-password" v-model="password" type="password" required />
      <div v-if="error">{{ error }}</div>
      <button :disabled="$auth.busy" type="submit">
        Войти
      </button>
    </form>
  </div>
</template>

<script>
export default {
  middleware({ store, redirect }) {
    if (store.state.auth.user) {
      return redirect('/')
    }
  },
  data() {
    return {
      error: null,
      phone: '79031111111',
      password: 'qwerty'
    }
  },
  methods: {
    login() {
      this.$set(this, 'error', null)
      return this.$auth
        .loginWith('local', {
          data: {
            phone: this.phone,
            password: this.password
          }
        })
        .catch((e) => {
          this.$set(this, 'error', e)
        })
    }
  }
}
</script>
