<template>
  <div>
    <h1>Опции объекта</h1>
    <b-form @submit.prevent="submit">
      <b-form-group id="label-objectOption">
        <b-form-checkbox-group
          id="checkbox-group-2"
          v-model="objectObjectOptionsArray"
        >
          <b-row>
            <b-col
              v-for="(option, optionIndex) in objectOption"
              :key="optionIndex"
              cols="4"
              class="mb-2"
            >
              <b-form-checkbox
                :value="option.iObjectOptionID"
                :disabled="loadingDisabledCheckbox"
              >
                {{ option.sObjectOptionTitle }}
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
    <!-- <pre>{{ objectOption }}</pre> -->
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  layout: 'dashboard',
  head() {
    return {
      title: 'Object Options'
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
    objectOption({ $store }) {
      return $store.state.objectOption.list
    },
    objectObjectOptionsArray: {
      get() {
        // this.$set(this, 'loadingDisabledCheckbox', false)
        return this.$store.state.object.item.object_object_options_array
      },
      async set(objectObjectOptionsArray) {
        // console.log(objectObjectOptionsArray)
        await this.$store.dispatch(
          'object/UPDATE_objectObjectOptionsArray',
          objectObjectOptionsArray
        )
        // this.$set(this, 'loadingDisabledCheckbox', true)
      }
    }
  },
  async asyncData({ store, $axios, params }) {
    await store.dispatch('object/GET_ITEM', params)
    await store.dispatch('objectOption/GET_LIST')
  },
  methods: {
    async submit() {
      await this.$store.dispatch('object/UPDATE')
      this.$router.push('/dashboard/object/' + this.object.iObjectID)
    }
  }
}
</script>
