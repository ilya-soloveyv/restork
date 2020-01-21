<template>
  <div>
    <div class="breadcrumb-box">
      <b-container>
        <b-breadcrumb :items="breadcrumbs"></b-breadcrumb>
      </b-container>
    </div>
    <b-container>
      <h1 class="title">
        <span v-if="option.sObjectOptionTitle">
          {{ option.sObjectOptionTitle }}
        </span>
        <span v-else class="text-secondary">Название опции</span>
      </h1>
      <b-row>
        <b-col cols="12" sm="6" md="6" lg="4" xl="3">
          <b-form @submit.prevent="update">
            <b-form-group
              id="label-sObjectOptionTitle"
              label="Название"
              label-for="input-sObjectOptionTitle"
            >
              <b-form-input
                id="input-sObjectOptionTitle"
                v-model="option.sObjectOptionTitle"
                type="text"
                required
              />
            </b-form-group>
            <b-form-group
              id="label-iObjectOptionSort"
              label="Сортировка"
              label-for="input-iObjectOptionSort"
            >
              <b-form-input
                id="input-iObjectOptionSort"
                v-model.number="option.iObjectOptionSort"
                type="text"
                placeholder="9999"
              />
            </b-form-group>
            <b-form-group
              id="label-iObjectOptionActive"
              label="Публикация"
              label-for="input-iObjectOptionActive"
            >
              <b-form-checkbox
                id="input-iObjectOptionActive"
                v-model="option.iObjectOptionActive"
                switch
              >
                <template v-if="option.iObjectOptionActive">
                  Опубликовано
                </template>
                <template v-if="!option.iObjectOptionActive">
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
    const { data } = await $axios.post('/api/object_option/get', params)
    return {
      option: data || {},
      breadcrumbs: [
        {
          text: 'Справочники'
        },
        {
          text: 'Опции отеля',
          to: '/admin/libraries/object_options'
        },
        {
          text: data ? data.sObjectOptionTitle : 'Новая опция отеля',
          active: true
        }
      ]
    }
  },
  methods: {
    async update() {
      const { data } = await this.$axios.post(
        '/api/object_option/update',
        this.option
      )
      this.$set(this, 'option', data)
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
