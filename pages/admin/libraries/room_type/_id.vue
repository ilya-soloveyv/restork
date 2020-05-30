<template>
  <div>
    <div class="breadcrumb-box">
      <b-container>
        <b-breadcrumb :items="breadcrumbs"></b-breadcrumb>
      </b-container>
    </div>
    <b-container>
      <h1 class="title">
        <span v-if="type.sRoomTypeTitle">
          {{ type.sRoomTypeTitle }}
        </span>
        <span v-else class="text-secondary">Название опции</span>
      </h1>
      <b-row>
        <b-col cols="12" sm="6" md="6" lg="4" xl="3">
          <b-form @submit.prevent="update">
            <b-form-group
              id="label-sRoomTypeTitle"
              label="Название"
              label-for="input-sRoomTypeTitle"
            >
              <b-form-input
                id="input-sRoomTypeTitle"
                v-model="type.sRoomTypeTitle"
                type="text"
                required
              />
            </b-form-group>
            <b-form-group
              id="label-iRoomTypeSort"
              label="Сортировка"
              label-for="input-iRoomTypeSort"
            >
              <b-form-input
                id="input-iRoomTypeSort"
                v-model.number="type.iRoomTypeSort"
                type="text"
                placeholder="9999"
              />
            </b-form-group>
            <b-form-group
              id="label-iRoomTypeActive"
              label="Публикация"
              label-for="input-iRoomTypeActive"
            >
              <b-form-checkbox
                id="input-iRoomTypeActive"
                v-model="type.iRoomTypeActive"
                switch
              >
                <template v-if="type.iRoomTypeActive">
                  Опубликовано
                </template>
                <template v-if="!type.iRoomTypeActive">
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
    const { data } = await $axios.post('/api/room_type/get', params)
    return {
      type: data || {},
      breadcrumbs: [
        {
          text: 'Справочники'
        },
        {
          text: 'Категории номеров',
          to: '/admin/libraries/room_type'
        },
        {
          text: data ? data.sRoomTypeTitle : 'Новая опция номеров',
          active: true
        }
      ]
    }
  },
  methods: {
    async update() {
      const { data } = await this.$axios.post(
        '/api/room_type/update',
        this.type
      )
      this.$set(this, 'type', data)
      this.$router.push('/admin/libraries/room_type/' + data.iRoomTypeID)
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
