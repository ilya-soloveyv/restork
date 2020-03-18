<template>
  <div>
    <b-row class="justify-content-center">
      <b-col cols="5">
        <div class="wrap">
          <h1>Восстановление доступа</h1>
          <b-form @submit.prevent="recovery" autocomplete="off">
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
          </b-form>
        </div>
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
      error: null,
      sUserPhone: ''
    }
  },
  methods: {
    recovery() {
      // this.$set(this, 'error', null)
      // return this.$auth
      //   .loginWith('local', {
      //     data: {
      //       sUserPhone: this.sUserPhone,
      //       sUserPassword: this.sUserPassword
      //     }
      //   })
      //   .catch((e) => {
      //     this.$set(this, 'error', e.response.data.error)
      //     this.$refs[this.error.ref].$el.focus()
      //   })
    }
  }
}
</script>

<style lang="scss" scoped>
.wrap {
  margin: 5rem 0;
  background: #fff;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 0 12.09px 0.91px rgba(0, 0, 0, 0.15);
}
</style>
