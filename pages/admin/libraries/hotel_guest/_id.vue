<template>
  <div>
    <div class="breadcrumb-box">
      <b-container>
        <b-breadcrumb>
          <b-breadcrumb-item>Библиотека</b-breadcrumb-item>
          <b-breadcrumb-item to="/admin/libraries/hotel_guest">
            Только для гостей
          </b-breadcrumb-item>
          <b-breadcrumb-item active>
            <template v-if="guest.sHotelGuestTitle">
              {{ guest.sHotelGuestTitle }}
            </template>
            <template v-else>Название элемента</template>
          </b-breadcrumb-item>
        </b-breadcrumb>
      </b-container>
    </div>
    <b-container>
      <h1 class="title">
        <span v-if="guest.sHotelGuestTitle">
          {{ guest.sHotelGuestTitle }}
        </span>
        <span v-else class="text-secondary">Название элемента</span>
      </h1>
      <b-row>
        <b-col cols="12" sm="6" md="6" lg="4" xl="3">
          <b-form @submit.prevent="update">
            <b-form-group
              id="label-sHotelGuestTitle"
              label="Название"
              label-for="input-sHotelGuestTitle"
            >
              <b-form-input
                id="input-sHotelGuestTitle"
                v-model="guest.sHotelGuestTitle"
                type="text"
                required
              />
            </b-form-group>
            <b-form-group
              id="label-iHotelGuestSort"
              label="Сортировка"
              label-for="input-iHotelGuestSort"
            >
              <b-form-input
                id="input-iHotelGuestSort"
                v-model.number="guest.iHotelGuestSort"
                type="text"
                placeholder="9999"
              />
            </b-form-group>
            <b-form-group
              id="label-iHotelGuestActive"
              label="Публикация"
              label-for="input-iHotelGuestActive"
            >
              <b-form-checkbox
                id="input-iHotelGuestActive"
                v-model="guest.iHotelGuestActive"
                switch
              >
                <template v-if="guest.iHotelGuestActive">
                  Опубликовано
                </template>
                <template v-if="!guest.iHotelGuestActive">
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
      guest: {}
    }
  },
  async asyncData({ params, $axios }) {
    const { data } = await $axios.post('/api/hotel_guest/get', params)
    return {
      guest: data || {}
    }
  },
  methods: {
    async update() {
      const { data } = await this.$axios.post(
        '/api/hotel_guest/update',
        this.guest
      )
      this.$set(this, 'guest', data)
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
