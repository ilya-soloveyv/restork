<template>
  <div>
    <h1>Характеристики объекта</h1>
    <b-form @submit.prevent="submit">
      <b-row>
        <b-col>
          <b-form-group
            id="label-iObjectArea"
            label="Площадь объекта"
            label-for="iObjectArea"
          >
            <b-form-input
              id="iObjectArea"
              v-model="iObjectArea"
              type="text"
              required
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group
            id="label-iObjectRoomCount"
            label="Количество комнат"
            label-for="iObjectRoomCount"
          >
            <b-form-input
              id="iObjectRoomCount"
              v-model="iObjectRoomCount"
              type="text"
              required
            ></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-form-group
            id="label-iObjectBed"
            label="Количество кроватей"
            label-for="iObjectBed"
          >
            <b-form-input
              id="iObjectBed"
              v-model="iObjectBed"
              type="text"
              required
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group
            id="label-iObjectPlace"
            label="Количество спальных мест"
            label-for="iObjectPlace"
          >
            <b-form-input
              id="iObjectPlace"
              v-model="iObjectPlace"
              type="text"
              required
            ></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-form-group
            id="label-iObjectPlaceDop"
            label="Дополнительные места"
            label-for="iObjectPlaceDop"
          >
            <b-form-input
              id="iObjectPlaceDop"
              v-model="iObjectPlaceDop"
              type="text"
              required
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col></b-col>
      </b-row>
      <b-button type="submit" variant="primary">
        Сохранить
      </b-button>
    </b-form>
    <!-- <pre>{{ object }}</pre> -->
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  layout: 'dashboard',
  head() {
    return {
      title: 'Object Setting'
    }
  },
  data() {
    return {
      loadingDisabledCheckbox: false
    }
  },
  computed: {
    object({ $store }) {
      return $store.state.object.item
    },
    iObjectArea: {
      get() {
        return this.$store.state.object.item.iObjectArea
      },
      set(iObjectArea) {
        this.$store.dispatch('object/SET_OBJECT_iObjectArea', iObjectArea)
      }
    },
    iObjectRoomCount: {
      get() {
        return this.$store.state.object.item.iObjectRoomCount
      },
      set(iObjectRoomCount) {
        this.$store.dispatch(
          'object/SET_OBJECT_iObjectRoomCount',
          iObjectRoomCount
        )
      }
    },
    iObjectBed: {
      get() {
        return this.$store.state.object.item.iObjectBed
      },
      set(iObjectBed) {
        this.$store.dispatch('object/SET_OBJECT_iObjectBed', iObjectBed)
      }
    },
    iObjectPlace: {
      get() {
        return this.$store.state.object.item.iObjectPlace
      },
      set(iObjectPlace) {
        this.$store.dispatch('object/SET_OBJECT_iObjectPlace', iObjectPlace)
      }
    },
    iObjectPlaceDop: {
      get() {
        return this.$store.state.object.item.iObjectPlaceDop
      },
      set(iObjectPlaceDop) {
        this.$store.dispatch(
          'object/SET_OBJECT_iObjectPlaceDop',
          iObjectPlaceDop
        )
      }
    }
  },
  async asyncData({ store, $axios, params }) {
    await store.dispatch('object/GET_ITEM', params)
  },
  methods: {
    async submit() {
      await this.$store.dispatch('object/UPDATE')
      this.$router.push('/dashboard/object/' + this.object.iObjectID)
    }
  }
}
</script>
