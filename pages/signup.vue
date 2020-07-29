<template>
  <b-container fluid>
    <div id="signup">
      <h1>Регистрация</h1>
      <b-form @submit.prevent="send" autocomplete="off">
        <b-form-group
          id="sUserFirstNameLabel"
          label="Как Вас зовут"
          label-for="sUserFirstNameInput"
        >
          <b-form-input
            id="sUserFirstNameInput"
            ref="sUserFirstName"
            v-model="sUserFirstName"
            :class="{ 'is-invalid': error && error.ref === 'sUserFirstName' }"
            required
            autocomplete="off"
          />
          <b-form-invalid-feedback v-if="error && error.message">
            {{ error.message }}
          </b-form-invalid-feedback>
        </b-form-group>
        <b-form-group
          id="sUserPhoneLabel"
          label="Мобильный телефон"
          label-for="sUserPhoneInput"
        >
          <the-mask
            id="sUserPhoneInput"
            ref="sUserPhone"
            v-model="sUserPhone"
            @keyup.native="validatePhone"
            :class="{ 'is-invalid': error && error.ref === 'sUserPhone' }"
            mask="+7 (###) ###-##-##"
            type="text"
            class="form-control"
            required
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
            :class="{ 'is-invalid': error && error.ref === 'sUserPassword' }"
            type="password"
            required
            autocomplete="off"
          />
          <b-form-invalid-feedback v-if="error && error.message">
            {{ error.message }}
          </b-form-invalid-feedback>
        </b-form-group>
        <b-row>
          <b-col>
            <b-button :disabled="loading" type="submit" variant="primary">
              Регистрация
            </b-button>
          </b-col>
          <b-col cols="auto" align-self="center">
            <nuxt-link :to="link">Войти</nuxt-link>
          </b-col>
        </b-row>
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
      loading: false,
      error: null,
      sUserFirstName: '',
      sUserPhone: '',
      sUserPassword: ''
    }
  },
  computed: {
    link() {
      let link = '/signin'
      const redirect = this.$route.query.redirect
      if (redirect) {
        link = link + '?redirect=' + redirect
      }
      return link
    }
  },
  methods: {
    async send() {
      this.$set(this, 'loading', true)
      this.$set(this, 'error', null)
      const response = await this.$axios
        .$post('/api/auth/singup', {
          sUserFirstName: this.sUserFirstName,
          sUserPhone: this.sUserPhone,
          sUserPassword: this.sUserPassword
        })
        .catch((e) => {
          this.$set(this, 'error', e.response.data.error)
          this.$refs[this.error.ref].$el.focus()
        })
      if (response !== undefined) {
        return this.$auth.loginWith('local', {
          data: {
            sUserPhone: this.sUserPhone,
            sUserPassword: this.sUserPassword
          }
        })
      }
      this.$set(this, 'loading', false)
    },
    validatePhone(e) {
      if (
        this.sUserPhone[0] &&
        (this.sUserPhone[0] === '8' || this.sUserPhone[0] === '7')
      ) {
        this.sUserPhone = ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#signup {
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
