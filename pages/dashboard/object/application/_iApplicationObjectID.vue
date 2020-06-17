<template>
  <div class="dashboardObjectApplication">
    <h1>Заявка от {{ dApplicationDate }}г.</h1>
    <div class="row line">
      <div class="col"><b>Имя:</b></div>
      <div class="col">
        {{ applicationObject.application.user.sUserFirstName }}
      </div>
    </div>
    <div class="row line">
      <div class="col"><b>Период размещения:</b></div>
      <div class="col">
        {{ dApplicationDateFromTo }}
      </div>
    </div>
    <div class="row line">
      <div class="col"><b>Направление:</b></div>
      <div class="col">
        {{ applicationObject.application.sApplicationState }},
        {{ applicationObject.application.sApplicationCity }}
      </div>
    </div>
    <div class="row line">
      <div class="col"><b>Кол-во взрослых:</b></div>
      <div class="col">
        {{ applicationObject.application.iApplicationAdult }}
      </div>
    </div>
    <div class="row line">
      <div class="col"><b>Кол-во детей:</b></div>
      <div class="col">
        {{ applicationObject.application.iApplicationChild }}
      </div>
    </div>
    <div class="row line">
      <div class="col"><b>Параметры по объекту:</b></div>
      <div class="col">
        {{ applicationObjectOption }}
      </div>
    </div>
    <div class="row line">
      <div class="col"><b>Параметры по номеру:</b></div>
      <div class="col">
        {{ applicationRoomOption }}
      </div>
    </div>
    <div class="row">
      <div class="col">
        <b-form id="applicationObjectForm" @submit.prevent="update">
          <b-form-group id="iObjectPriceLabel" label-for="iObjectPrice">
            <b-form-input
              id="iObjectPrice"
              v-model="iObjectPrice"
              placeholder="Введите сумму"
              required
              autocomplete="off"
            ></b-form-input>
          </b-form-group>
        </b-form>
      </div>
      <div class="col">
        <b-button type="submit" variant="primary" form="applicationObjectForm">
          Отправить предложение
        </b-button>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <Message :applicationObject="applicationObject" />
      </div>
    </div>
    <!-- <pre>{{ applicationObject }}</pre> -->
  </div>
</template>

<script>
import Message from '~/components/Message'
import moment from 'moment'
moment.locale('ru')
export default {
  middleware: 'auth',
  layout: 'dashboard',
  head() {
    return {
      title: 'Object Application'
    }
  },
  components: {
    Message
  },
  computed: {
    applicationObject({ $store }) {
      return $store.state.application_object.item
    },
    iObjectPrice: {
      get() {
        return this.$store.state.application_object.item.iObjectPrice
      },
      set(iObjectPrice) {
        this.$store.commit('application_object/SET_iObjectPrice', iObjectPrice)
      }
    },
    dApplicationDate() {
      return moment(this.applicationObject.application.dDate).format(
        'DD MMMM YYYY'
      )
    },
    applicationObjectOption() {
      const applicationObjectOption = this.applicationObject.application.applicationObjectOptions.map(
        (option) => {
          return option.object_option.sObjectOptionTitle
        }
      )
      return applicationObjectOption.join(', ')
    },
    applicationRoomOption() {
      const applicationRoomOption = this.applicationObject.application.applicationRoomOptions.map(
        (option) => {
          return option.room_option.sRoomOptionTitle
        }
      )
      return applicationRoomOption.join(', ')
    },
    dApplicationDateFromTo() {
      return (
        'c ' +
        moment(this.applicationObject.application.dApplicationDateFrom).format(
          'DD MMMM YYYY'
        ) +
        ' по ' +
        moment(this.applicationObject.application.dApplicationDateTo).format(
          'DD MMMM YYYY'
        )
      )
    }
  },
  async asyncData({ store, $axios, params }) {
    await store.dispatch('application_object/GET_ITEM', {
      iApplicationObjectID: params.iApplicationObjectID
    })
    await store.dispatch('message/GET_LIST', {
      iApplicationObjectID: params.iApplicationObjectID
    })
  },
  methods: {
    async update() {
      await this.$store.dispatch('application_object/UPDATE')
      this.$router.push('/dashboard/object')
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboardObjectApplication {
  padding: 0 3rem 1rem;
  .line {
    padding-bottom: 1rem;
    b {
      font-weight: 500;
    }
  }
  /deep/ #chat {
    margin-top: 1rem;
  }
}
</style>
