<template>
  <div>
    <div class="pb-3">
      <nuxt-link :to="'/dashboard/object/' + object.iObjectID">
        Вернуться к объекту
      </nuxt-link>
    </div>
    <b-row>
      <b-col>
        <b-form-group
          id="label-iRoomTypeID"
          label="Категория"
          label-for="iRoomTypeID"
        >
          <b-form-select id="iRoomTypeID" v-model="iRoomTypeID">
            <b-form-select-option
              v-for="(type, index) in roomTypes"
              :key="index"
              :value="type.iRoomTypeID"
            >
              {{ type.sRoomTypeTitle }}
            </b-form-select-option>
          </b-form-select>
        </b-form-group>
      </b-col>
      <b-col>
        <b-form-group
          id="label-iRoomArea"
          label="Площадь"
          label-for="iRoomArea"
        >
          <b-form-input id="iRoomArea" v-model="iRoomArea" />
        </b-form-group>
      </b-col>
      <b-col>
        <b-form-group
          id="label-iRoomCount"
          label="Кол-во комнат"
          label-for="iRoomCount"
        >
          <b-form-input id="iRoomCount" v-model="iRoomCount" />
        </b-form-group>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-form-group
          id="label-iRoomBed"
          label="Кол-во кроватей"
          label-for="iRoomBed"
        >
          <b-form-input id="iRoomBed" v-model="iRoomBed" />
        </b-form-group>
      </b-col>
      <b-col>
        <b-form-group
          id="label-iRoomPlace"
          label="Кол-во спальных мест"
          label-for="iRoomPlace"
        >
          <b-form-input id="iRoomPlace" v-model="iRoomPlace" />
        </b-form-group>
      </b-col>
      <b-col>
        <b-form-group
          id="label-iRoomPlaceDop"
          label="Кол-во доп. мест"
          label-for="iRoomPlaceDop"
        >
          <b-form-input id="iRoomPlaceDop" v-model="iRoomPlaceDop" />
        </b-form-group>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-form-group
          id="label-tRoomDesc"
          label="Комментарий к номеру"
          label-for="tRoomDesc"
        >
          <b-form-textarea
            id="tRoomDesc"
            v-model="tRoomDesc"
            rows="3"
            max-rows="6"
          />
        </b-form-group>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-form-group label="Опции номера">
          <b-form-checkbox
            v-for="(option, index) in roomOptions"
            :key="index"
            :id="'roomOption' + index"
            :value="option.iRoomOptionID"
            v-model="room_room_options"
            name="roomOption"
          >
            {{ option.sRoomOptionTitle }}
          </b-form-checkbox>
        </b-form-group>
      </b-col>
      <b-col>
        <b-form-group
          id="label-iRoomActive"
          label="Статус"
          label-for="iRoomActive"
        >
          <b-form-checkbox id="iRoomActive" v-model="iRoomActive" switch>
            <template v-if="iRoomActive">Включено</template>
            <template v-else>Выключено</template>
          </b-form-checkbox>
        </b-form-group>
      </b-col>
      <b-col></b-col>
    </b-row>
    <b-button @click="update" type="button" variant="primary">
      Сохранить
    </b-button>
    <!-- <pre>{{ roomTypes }}</pre> -->
    <pre>{{ roomOptions }}</pre>
    <pre>{{ room }}</pre>
    <!-- <pre>{{ object }}</pre> -->
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  layout: 'dashboard',
  head() {
    return {
      title: 'Room page'
    }
  },
  computed: {
    SELECTEL_WEB() {
      return process.env.SELECTEL_WEB
    },
    roomTypes({ $store }) {
      return $store.state.roomType.list
    },
    roomOptions({ $store }) {
      return $store.state.roomOption.list
    },
    object({ $store }) {
      return $store.state.object.item
    },
    room({ $store }) {
      return $store.state.room.item
    },
    iRoomTypeID: {
      get() {
        return this.$store.state.room.item.iRoomTypeID
      },
      set(iRoomTypeID) {
        this.$store.dispatch('room/SET_ITEM_iRoomTypeID', { iRoomTypeID })
      }
    },
    iRoomArea: {
      get() {
        return this.$store.state.room.item.iRoomArea
      },
      set(iRoomArea) {
        this.$store.dispatch('room/SET_ITEM_iRoomArea', { iRoomArea })
      }
    },
    iRoomCount: {
      get() {
        return this.$store.state.room.item.iRoomCount
      },
      set(iRoomCount) {
        this.$store.dispatch('room/SET_ITEM_iRoomCount', { iRoomCount })
      }
    },
    iRoomBed: {
      get() {
        return this.$store.state.room.item.iRoomBed
      },
      set(iRoomBed) {
        this.$store.dispatch('room/SET_ITEM_iRoomBed', { iRoomBed })
      }
    },
    iRoomPlace: {
      get() {
        return this.$store.state.room.item.iRoomPlace
      },
      set(iRoomPlace) {
        this.$store.dispatch('room/SET_ITEM_iRoomPlace', { iRoomPlace })
      }
    },
    iRoomPlaceDop: {
      get() {
        return this.$store.state.room.item.iRoomPlaceDop
      },
      set(iRoomPlaceDop) {
        this.$store.dispatch('room/SET_ITEM_iRoomPlaceDop', { iRoomPlaceDop })
      }
    },
    tRoomDesc: {
      get() {
        return this.$store.state.room.item.tRoomDesc
      },
      set(tRoomDesc) {
        this.$store.dispatch('room/SET_ITEM_tRoomDesc', { tRoomDesc })
      }
    },
    iRoomActive: {
      get() {
        return this.$store.state.room.item.iRoomActive
      },
      set(iRoomActive) {
        this.$store.dispatch('room/SET_ITEM_iRoomActive', { iRoomActive })
      }
    },
    room_room_options: {
      get() {
        return this.$store.state.room.item.room_room_options_array_id
      },
      set(options) {
        // const roomRoomOptions = this.roomOptions.filter((option) => {
        // })
        // console.log(options)
        // this.$store.dispatch('room/SET_ITEM_room_room_options', { options })
      }
    }
  },
  async asyncData({ store, $axios, params }) {
    await store.dispatch('roomType/GET_LIST')
    await store.dispatch('roomOption/GET_LIST')
    await store.dispatch('object/GET_ITEM', { iObjectID: params.iObjectID })
    await store.dispatch('room/GET_ITEM', { iRoomID: params.iRoomID })
  },
  methods: {
    async update() {
      await this.$store.dispatch('room/UPDATE')
    }
  }
}
</script>
