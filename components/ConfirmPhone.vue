<template>
  <div id="confirmPhone">
    <div class="wrap">
      <div class="title">Код подтверждения</div>
      <div class="desc">
        На указанный Вами номер мобильного телефона
        <b>{{ sUserPhone }}</b> отправлено сообщение с кодом подтверждения
      </div>
      <div class="kod">
        <the-mask
          id="sUserPhoneKodInput"
          ref="sUserPhoneKod"
          v-model="sUserPhoneKod"
          @keyup.native="confirmPhone"
          :disabled="status"
          mask="####"
          type="number"
          class="form-control"
          autocomplete="off"
          required
        />
        <span>
          <div v-if="error && error.message" class="error">
            {{ error.message }}
          </div>
          <template v-else>
            Код подтверждения
          </template>
        </span>
      </div>
      <div class="resend">
        <div>Не получили код?</div>
        <template v-if="!resendStatus">
          <a @click.prevent="resendKod" class="alert-link" href="#">
            Отправить повторно
          </a>
        </template>
        <template v-else>
          <span class="text-success">Вам отправлен новый код</span>
        </template>
      </div>
    </div>
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
  computed: {
    sUserPhone() {
      const phone = this.$auth.user.sUserPhone
      return (
        '+7 (' +
        phone[0] +
        phone[1] +
        phone[2] +
        ') ' +
        phone[3] +
        phone[4] +
        phone[5] +
        '-' +
        phone[6] +
        phone[7] +
        '-' +
        phone[8] +
        phone[9]
      )
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
#confirmPhone {
  flex-grow: 1;
  background-color: #f6f6f6;
  display: flex;
  justify-content: center;
  align-items: center;
  .wrap {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    .title {
      font-size: 20px;
      font-weight: 500;
      text-align: center;
      padding-bottom: 2rem;
    }
    .desc {
      text-align: center;
      padding-bottom: 2rem;
      b {
        display: block;
      }
    }
    .kod {
      width: 200px;
      position: relative;
      padding-bottom: 1rem;
      span {
        position: absolute;
        left: 0;
        top: 0.25rem;
        // background-color: red;
        color: #999999;
        width: 100%;
        font-size: 12px;
        text-align: center;
        height: 1rem;
        line-height: 1rem;
      }
      input {
        text-align: center;
        padding: 1.5rem 1rem 1rem;
        height: 4rem;
      }
      .error {
        color: red;
        font-size: 12px;
        text-align: center;
      }
    }
    .resend {
      text-align: center;
      a {
      }
    }
  }
  // .alert {
  //   text-align: center;
  //   margin-bottom: 2rem;
  // }
  // .form-group {
  //   width: 250px;
  //   margin: 0 auto;
  //   input {
  //     text-align: center;
  //     &.is-invalid {
  //       background-image: none;
  //       padding-right: 0.75rem;
  //     }
  //   }
  // }
}
</style>
