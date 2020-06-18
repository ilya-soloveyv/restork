<template>
  <div>
    <h1>Опции номеров</h1>
    <b-form @submit.prevent="submit">
      <b-form-group id="label-roomOption">
        <b-form-checkbox-group
          id="checkbox-group-2"
          v-model="objectRoomOptionsArray"
        >
          <b-row>
            <b-col
              v-for="(option, optionIndex) in roomOption"
              :key="optionIndex"
              cols="12"
              class="mb-2"
            >
              <b-form-checkbox
                :value="option.iRoomOptionID"
                :disabled="loadingDisabledCheckbox"
              >
                {{ option.sRoomOptionTitle }}
              </b-form-checkbox>
            </b-col>
          </b-row>
        </b-form-checkbox-group>
      </b-form-group>
      <b-button type="submit" variant="primary">
        Сохранить
      </b-button>
    </b-form>
    <!-- {{ options }} -->
    <!-- <pre>{{ object }}</pre> -->
    <!-- <pre>{{ roomOption }}</pre> -->
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  layout: 'dashboard',
  head() {
    return {
      title: 'Object Room Options'
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
    roomOption({ $store }) {
      return $store.state.roomOption.list
    },
    objectRoomOptionsArray: {
      get() {
        // this.$set(this, 'loadingDisabledCheckbox', false)
        return this.$store.state.object.item.object_room_options_array
      },
      async set(objectRoomOptionsArray) {
        // console.log(objectRoomOptionsArray)
        await this.$store.dispatch(
          'object/UPDATE_objectRoomOptionsArray',
          objectRoomOptionsArray
        )
        // this.$set(this, 'loadingDisabledCheckbox', true)
      }
    }
  },
  async asyncData({ store, $axios, params }) {
    await store.dispatch('object/GET_ITEM', params)
    await store.dispatch('roomOption/GET_LIST')
  },
  methods: {
    async submit() {
      await this.$store.dispatch('object/UPDATE')
      this.$router.push('/dashboard/object/' + this.object.iObjectID)
    }
  }
}
</script>
