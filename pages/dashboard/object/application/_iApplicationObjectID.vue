<template>
  <div>
    <h1>Заявка от {{ dApplicationDate }}г.</h1>
    <div class="row">
      <div class="col">Имя:</div>
      <div class="col">
        {{ applicationObject.application.user.sUserFirstName }}
      </div>
    </div>
    <div class="row">
      <div class="col">Период размещения:</div>
      <div class="col">
        {{ applicationObject.application.dApplicationDateFrom }} -
        {{ applicationObject.application.dApplicationDateTo }}
      </div>
    </div>
    <div class="row">
      <div class="col">Направление:</div>
      <div class="col">
        {{ applicationObject.application.sApplicationState }},
        {{ applicationObject.application.sApplicationCity }}
      </div>
    </div>
    <div class="row">
      <div class="col">Кол-во взрослых:</div>
      <div class="col">
        {{ applicationObject.application.iApplicationAdult }}
      </div>
    </div>
    <div class="row">
      <div class="col">Кол-во детей:</div>
      <div class="col">
        {{ applicationObject.application.iApplicationChild }}
      </div>
    </div>
    <div class="row">
      <div class="col">Требования по объекту:</div>
      <div class="col">
        {{ applicationObjectOption }}
      </div>
    </div>
    <div class="row">
      <div class="col">Требования по номеру:</div>
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
    <pre>{{ applicationObject }}</pre>
  </div>
</template>

<script>
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
  data() {
    return {}
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
    }
  },
  async asyncData({ store, $axios, params }) {
    await store.dispatch('application_object/GET_ITEM', {
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
