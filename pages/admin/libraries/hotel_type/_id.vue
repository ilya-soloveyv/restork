<template>
  <div>
    <div class="breadcrumb-box">
      <b-container>
        <b-breadcrumb :items="breadcrumbs"></b-breadcrumb>
      </b-container>
    </div>
    <b-container>
      <h1 class="title">
        <span v-if="type.sHotelTypeTitle">
          {{ type.sHotelTypeTitle }}
        </span>
        <span v-else class="text-secondary">Название вида объекта</span>
      </h1>
      <b-row>
        <b-col cols="12" sm="6" md="6" lg="4" xl="3">
          <b-form @submit.prevent="update">
            <b-form-group
              id="label-sHotelTypeTitle"
              label="Название"
              label-for="input-sHotelTypeTitle"
            >
              <b-form-input
                id="input-sHotelTypeTitle"
                v-model="type.sHotelTypeTitle"
                type="text"
                required
              />
            </b-form-group>
            <b-form-group
              id="label-iHotelTypeSort"
              label="Сортировка"
              label-for="input-iHotelTypeSort"
            >
              <b-form-input
                id="input-iHotelTypeSort"
                v-model.number="type.iHotelTypeSort"
                type="text"
                placeholder="9999"
              />
            </b-form-group>
            <b-form-group
              id="label-iHotelTypeActive"
              label="Публикация"
              label-for="input-iHotelTypeActive"
            >
              <b-form-checkbox
                id="input-iHotelTypeActive"
                v-model="type.iHotelTypeActive"
                switch
              >
                <template v-if="type.iHotelTypeActive">
                  Опубликовано
                </template>
                <template v-if="!type.iHotelTypeActive">
                  Скрыто
                </template>
              </b-form-checkbox>
            </b-form-group>
            <b-button type="submit" variant="primary">Сохранить</b-button>
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  middleware: 'admin',
  layout: 'admin',
  data() {
    return {
      type: {}
    }
  },
  async asyncData({ params, $axios }) {
    const { data } = await $axios.post('/api/hotel_type/get', params)
    return {
      type: data || {},
      breadcrumbs: [
        {
          text: 'Библиотека'
        },
        {
          text: 'Виды объекта',
          to: '/admin/libraries/hotel_type'
        },
        {
          text: data ? data.sHotelTypeTitle : 'Новый вид объекта',
          active: true
        }
      ]
    }
  },
  methods: {
    async update() {
      const { data } = await this.$axios.post(
        '/api/hotel_type/update',
        this.type
      )
      this.$set(this, 'type', data)
      this.$bvToast.toast('Успешно сохранено', {
        title: 'Статус',
        variant: 'success',
        toaster: 'b-toaster-bottom-right',
        autoHideDelay: 1500
      })
    }
  }
}
</script>
