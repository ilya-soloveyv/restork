<template>
  <div>
    <div class="breadcrumb-box">
      <b-container>
        <b-breadcrumb :items="breadcrumbs"></b-breadcrumb>
      </b-container>
    </div>
    <b-container>
      <h1 class="title">
        <span v-if="option.sRoomOptionTitle">
          {{ option.sRoomOptionTitle }}
        </span>
        <span v-else class="text-secondary">Название опции</span>
      </h1>
      <b-row>
        <b-col cols="12" sm="6" md="6" lg="4" xl="3">
          <b-form @submit.prevent="update">
            <b-form-group
              id="label-sRoomOptionTitle"
              label="Название"
              label-for="input-sRoomOptionTitle"
            >
              <b-form-input
                id="input-sRoomOptionTitle"
                v-model="option.sRoomOptionTitle"
                type="text"
                required
              />
            </b-form-group>
            <b-form-group
              id="label-iRoomOptionSort"
              label="Сортировка"
              label-for="input-iRoomOptionSort"
            >
              <b-form-input
                id="input-iRoomOptionSort"
                v-model.number="option.iRoomOptionSort"
                type="text"
                placeholder="9999"
              />
            </b-form-group>
            <b-form-group
              id="label-iRoomOptionActive"
              label="Публикация"
              label-for="input-iRoomOptionActive"
            >
              <b-form-checkbox
                id="input-iRoomOptionActive"
                v-model="option.iRoomOptionActive"
                switch
              >
                <template v-if="option.iRoomOptionActive">
                  Опубликовано
                </template>
                <template v-if="!option.iRoomOptionActive">
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
      option: {}
    }
  },
  async asyncData({ params, $axios }) {
    const { data } = await $axios.post('/api/room_option/get', params)
    return {
      option: data || {},
      breadcrumbs: [
        {
          text: 'Справочники'
        },
        {
          text: 'Опции номеров',
          to: '/admin/libraries/room_options'
        },
        {
          text: data ? data.sRoomOptionTitle : 'Новая опция номеров',
          active: true
        }
      ]
    }
  },
  methods: {
    async update() {
      const { data } = await this.$axios.post(
        '/api/room_option/update',
        this.option
      )
      this.$set(this, 'option', data)
      this.$router.push('/admin/libraries/room_options/' + data.iRoomOptionID)
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
