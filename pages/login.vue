<template>
  <div id="login">
    <b-form @submit.prevent="login" autocomplete="off">
      <b-form-group
        id="label-phone"
        label="Мобильный телефон"
        label-for="input-phone"
      >
        <b-input
          id="input-phone"
          v-model.number.trim="phone"
          class="form-control"
          required
        ></b-input>
      </b-form-group>
      <b-form-group
        id="label-password"
        label="Пароль"
        label-for="input-password"
      >
        <b-input
          id="input-password"
          v-model="password"
          type="password"
          required
        ></b-input>
      </b-form-group>
      <b-alert v-if="error" variant="warning" class="mb-3" show>
        {{ error }}
      </b-alert>
      <b-button :disabled="$auth.busy" type="submit" variant="primary">
        Войти
      </b-button>
    </b-form>
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
      phone: '79037876601',
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
