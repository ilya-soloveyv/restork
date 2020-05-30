<template>
  <div>
    <div class="breadcrumb-box">
      <b-container>
        <b-breadcrumb :items="breadcrumbs"></b-breadcrumb>
      </b-container>
    </div>
    <b-container>
      <h1 class="title">
        <span v-if="type.sObjectTypeTitle">
          {{ type.sObjectTypeTitle }}
        </span>
        <span v-else class="text-secondary">Название вида объекта</span>
      </h1>
      <b-row>
        <b-col cols="12" sm="6" md="6" lg="4" xl="3">
          <b-form @submit.prevent="update">
            <b-form-group
              id="label-sObjectTypeTitle"
              label="Название"
              label-for="input-sObjectTypeTitle"
            >
              <b-form-input
                id="input-sObjectTypeTitle"
                v-model="type.sObjectTypeTitle"
                type="text"
                required
              />
            </b-form-group>
            <b-form-group
              id="label-iObjectTypeSort"
              label="Сортировка"
              label-for="input-iObjectTypeSort"
            >
              <b-form-input
                id="input-iObjectTypeSort"
                v-model.number="type.iObjectTypeSort"
                type="text"
                placeholder="9999"
              />
            </b-form-group>
            <b-form-group
              id="label-iObjectTypeActive"
              label="Публикация"
              label-for="input-iObjectTypeActive"
            >
              <b-form-checkbox
                id="input-iObjectTypeActive"
                v-model="type.iObjectTypeActive"
                switch
              >
                <template v-if="type.iObjectTypeActive">
                  Опубликовано
                </template>
                <template v-if="!type.iObjectTypeActive">
                  Скрыто
                </template>
              </b-form-checkbox>
            </b-form-group>
            <b-form-group
              id="label-iRoomPermission"
              label="Возможность добавлять номера"
              label-for="input-iRoomPermission"
            >
              <b-form-checkbox
                id="input-iRoomPermission"
                v-model="type.iRoomPermission"
                switch
              >
                <template v-if="type.iRoomPermission">
                  Одобрено
                </template>
                <template v-if="!type.iRoomPermission">
                  Заблокировано
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
    const { data } = await $axios.post('/api/object_type/get', params)
    return {
      type: data || {},
      breadcrumbs: [
        {
          text: 'Справочники'
        },
        {
          text: 'Виды объекта',
          to: '/admin/libraries/object_type'
        },
        {
          text: data ? data.sObjectTypeTitle : 'Новый вид объекта',
          active: true
        }
      ]
    }
  },
  methods: {
    async update() {
      const { data } = await this.$axios.post(
        '/api/object_type/update',
        this.type
      )
      this.$set(this, 'type', data)
      this.$router.push('/admin/libraries/object_type/' + data.iObjectTypeID)
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
