<template>
  <b-container fluid>
    <div id="login">
      <h1>Авторизация</h1>
      <b-form @submit.prevent="login" autocomplete="off">
        <b-form-group
          id="sUserPhoneLabel"
          label="Мобильный телефон"
          label-for="sUserPhoneInput"
        >
          <the-mask
            id="sUserPhoneInput"
            ref="sUserPhone"
            v-model="sUserPhone"
            :class="{ 'is-invalid': error && error.ref === 'sUserPhone' }"
            mask="+7 (###) ###-##-##"
            type="text"
            class="form-control"
            autocomplete="off"
          />
          <b-form-invalid-feedback v-if="error && error.message">
            {{ error.message }}
          </b-form-invalid-feedback>
        </b-form-group>
        <b-form-group
          id="sUserPasswordLabel"
          label="Пароль"
          label-for="sUserPasswordInput"
        >
          <b-form-input
            id="sUserPasswordInput"
            ref="sUserPassword"
            v-model="sUserPassword"
            :class="{
              'is-invalid': error && error.ref === 'sUserPassword'
            }"
            type="password"
            autocomplete="off"
          />
          <b-form-invalid-feedback v-if="error && error.message">
            {{ error.message }}
          </b-form-invalid-feedback>
        </b-form-group>
        <b-row>
          <b-col>
            <b-button :disabled="$auth.busy" type="submit" variant="primary">
              Войти
            </b-button>
          </b-col>
          <b-col cols="auto" align-self="center">
            <nuxt-link :to="link">Регистрация</nuxt-link>
          </b-col>
        </b-row>
        <!-- <small class="float-right pt-2 pb-2">
          <nuxt-link to="/recovery">Восстановить пароль</nuxt-link>
        </small> -->
      </b-form>
    </div>
  </b-container>
</template>

<script>
import { TheMask } from 'vue-the-mask'
export default {
  middleware({ store, redirect }) {
    if (store.state.auth.user) {
      return redirect('/')
    }
  },
  components: {
    TheMask
  },
  data() {
    return {
      error: null,
      sUserPhone: '',
      sUserPassword: ''
    }
  },
  computed: {
    link() {
      let link = '/signup'
      const redirect = this.$route.query.redirect
      if (redirect) {
        link = link + '?redirect=' + redirect
      }
      return link
    }
  },
  methods: {
    login() {
      this.$set(this, 'error', null)
      return this.$auth
        .loginWith('local', {
          data: {
            sUserPhone: this.sUserPhone,
            sUserPassword: this.sUserPassword
          }
        })
        .catch((e) => {
          this.$set(this, 'error', e.response.data.error)
          this.$refs[this.error.ref].$el.focus()
        })
    }
  }
}
</script>

<style lang="scss" scoped>
#login {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  // align-items: center;
  width: 300px;
  margin: 0 auto;
  @media (max-width: 991px) {
    width: auto;
  }
  h1 {
  }
}
</style>
