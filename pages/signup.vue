<template>
  <div>
    <h1>Регистрация</h1>
    <b-row class="justify-content-center">
      <b-col cols="3">
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
          <b-button
            :disabled="loading"
            type="submit"
            variant="primary"
            class="mb-3"
          >
            Регистрация
          </b-button>
        </b-form>
      </b-col>
    </b-row>
  </div>
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
    }
  }
}
</script>
