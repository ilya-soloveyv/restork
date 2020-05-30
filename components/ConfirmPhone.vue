<template>
  <div>
    <b-alert show variant="warning">
      <p class="mb-2">
        На указанный Вами номер мобильного телефона
        <b>+7{{ $auth.user.sUserPhone }}</b> отправлено сообщение с кодом
        подтверждения.
      </p>
      <b-form-group
        id="sUserPhoneKodLabel"
        label-for="sUserPhoneKodInput"
        class="mb-2"
      >
        <the-mask
          id="sUserPhoneKodInput"
          ref="sUserPhoneKod"
          v-model="sUserPhoneKod"
          :class="{ 'is-invalid': error && error.ref === 'sUserPhoneKod' }"
          @keyup.native="confirmPhone"
          :disabled="status"
          mask="####"
          type="text"
          class="form-control"
          autocomplete="off"
          required
          placeholder="Введите код подтверждения"
        />
        <b-form-invalid-feedback v-if="error && error.message">
          {{ error.message }}
        </b-form-invalid-feedback>
      </b-form-group>
      <small>
        <span v-if="!resendStatus">
          Не получили код?
          <a @click.prevent="resendKod" class="alert-link" href="#">
            Отправить повторно
          </a>
        </span>
        <span v-else class="text-success">Вам отправлен новый код</span>
      </small>
    </b-alert>
  </div>
</template>

<script>
import { TheMask } from 'vue-the-mask'
export default {
  components: {
    TheMask
  },
  data() {
    return {
      sUserPhoneKod: '',
      error: null,
      status: false,
      resendStatus: false
    }
  },
  methods: {
    async confirmPhone() {
      this.$set(this, 'error', null)
      const length = this.sUserPhoneKod.length === 4 || false
      if (length) {
        this.$set(this, 'status', true)
        await this.$axios
          .$post('/api/auth/confirmPhone', {
            sUserPhoneKod: this.sUserPhoneKod
          })
          .catch((e) => {
            this.$set(this, 'error', e.response.data.error)
            this.$set(this, 'status', false)
            this.$nextTick(function() {
              this.$refs[this.error.ref].$el.focus()
            })
          })
        await this.$auth.fetchUser()
      }
    },
    async resendKod() {
      this.$set(this, 'resendStatus', true)
      setTimeout(this.toggleResendStatus, 10000)
      await this.$axios.$post('/api/auth/resendKod')
    },
    toggleResendStatus() {
      this.$set(this, 'resendStatus', false)
    }
  }
}
</script>

<style lang="scss" scoped>
.alert {
  text-align: center;
  margin-bottom: 2rem;
}
.form-group {
  width: 250px;
  margin: 0 auto;
  input {
    text-align: center;
    &.is-invalid {
      background-image: none;
      padding-right: 0.75rem;
    }
  }
}
</style>
