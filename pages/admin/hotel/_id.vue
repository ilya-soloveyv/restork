<template>
  <div>
    <div class="breadcrumb-box">
      <b-container>
        <b-breadcrumb>
          <b-breadcrumb-item to="/admin/hotel">Объекты</b-breadcrumb-item>
          <b-breadcrumb-item active>
            <template v-if="hotel.sHotelTitle">
              {{ hotel.sHotelTitle }}
            </template>
            <template v-else>Название объекта</template>
          </b-breadcrumb-item>
        </b-breadcrumb>
      </b-container>
    </div>
    <b-container>
      <h1 class="title">
        <span v-if="hotel.sHotelTitle">
          {{ hotel.sHotelTitle }}
        </span>
        <span v-else class="text-secondary">Название объекта</span>
      </h1>
      <b-form @submit.prevent="update">
        <b-row>
          <b-col cols="12" sm="6">
            <b-row>
              <b-col cols="6">
                <b-form-group
                  id="label-sHotelTitle"
                  label="Название"
                  label-for="input-sHotelTitle"
                >
                  <b-form-input
                    id="input-sHotelTitle"
                    v-model="hotel.sHotelTitle"
                    type="text"
                    required
                  />
                </b-form-group>
              </b-col>
              <b-col cols="6">
                <b-form-group
                  id="label-iHotelTypeID"
                  label="Вид объекта"
                  label-for="input-iHotelTypeID"
                >
                  <b-form-select
                    id="input-iHotelTypeID"
                    :options="hotel_type"
                    v-model="hotel.iHotelTypeID"
                    value-field="iHotelTypeID"
                    text-field="sHotelTypeTitle"
                    required
                  ></b-form-select>
                </b-form-group>
              </b-col>
              <b-col cols="12">
                <b-form-group
                  id="label-searchAddress"
                  label="Поиск адреса"
                  label-for="input-searchAddress"
                >
                  <b-form-input
                    id="input-searchAddress"
                    v-on:keyup="searchAddress"
                    v-model="search"
                    type="text"
                  ></b-form-input>
                </b-form-group>
                <b-list-group>
                  <b-list-group-item
                    v-for="(item, index) in searchResult"
                    :key="index"
                    @click.prevent="useAdress(item)"
                    href="#"
                  >
                    {{ item }}
                  </b-list-group-item>
                </b-list-group>
              </b-col>
              <b-col cols="12">
                <b-form-group
                  id="label-sHotelAddress"
                  label="Адрес"
                  label-for="input-sHotelAddress"
                >
                  <b-form-input
                    id="input-sHotelAddress"
                    v-model="hotel.sHotelAddress"
                    type="text"
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col cols="6">
                <b-form-group
                  id="label-iHotelFloor"
                  label="Кол-во этажей"
                  label-for="input-iHotelFloor"
                >
                  <b-form-input
                    id="input-iHotelFloor"
                    v-model.number="hotel.iHotelFloor"
                    type="text"
                  />
                </b-form-group>
              </b-col>
              <b-col cols="6">
                <b-form-group
                  id="label-iHotelGuestID"
                  label="Только для гостей"
                  label-for="input-iHotelGuestID"
                >
                  <b-form-select
                    id="input-iHotelGuestID"
                    :options="hotel_guest"
                    v-model="hotel.iHotelGuestID"
                    value-field="iHotelGuestID"
                    text-field="sHotelGuestTitle"
                  ></b-form-select>
                </b-form-group>
              </b-col>
              <b-col cols="6">
                <b-form-group
                  id="label-iHotelBedroom"
                  label="Кол-во спален"
                  label-for="input-iHotelBedroom"
                >
                  <b-form-input
                    id="input-iHotelBedroom"
                    v-model.number="hotel.iHotelBedroom"
                    type="text"
                  />
                </b-form-group>
              </b-col>
              <b-col cols="6">
                <b-form-group
                  id="label-iHotelBed"
                  label="Кол-во кроватей"
                  label-for="input-iHotelBed"
                >
                  <b-form-input
                    id="input-iHotelBed"
                    v-model.number="hotel.iHotelBed"
                    type="text"
                  />
                </b-form-group>
              </b-col>
              <b-col cols="6">
                <b-form-group
                  id="label-iHotelPlace"
                  label="Кол-во спальных мест"
                  label-for="input-iHotelPlace"
                >
                  <b-form-input
                    id="input-iHotelPlace"
                    v-model.number="hotel.iHotelPlace"
                    type="text"
                  />
                </b-form-group>
              </b-col>
              <b-col cols="6">
                <b-form-group
                  id="label-iHotelPlaceDop"
                  label="Дополнительное место"
                  label-for="input-iHotelPlaceDop"
                >
                  <b-form-input
                    id="input-iHotelPlaceDop"
                    v-model.number="hotel.iHotelPlaceDop"
                    type="text"
                  />
                </b-form-group>
              </b-col>
              <b-col cols="6">
                <b-form-group
                  id="label-iHotelActive"
                  label="Публикация"
                  label-for="input-iHotelActive"
                >
                  <b-form-checkbox
                    id="input-iHotelActive"
                    v-model="hotel.iHotelActive"
                    switch
                  >
                    <template v-if="hotel.iHotelActive">
                      Опубликовано
                    </template>
                    <template v-if="!hotel.iHotelActive">
                      Скрыто
                    </template>
                  </b-form-checkbox>
                </b-form-group>
              </b-col>
              <b-col cols="6">
                <b-form-group
                  id="label-iHotelVerification"
                  label="Верификация"
                  label-for="input-iHotelVerification"
                >
                  <b-form-checkbox
                    id="input-iHotelVerification"
                    v-model="hotel.iHotelVerification"
                    switch
                  >
                    <template v-if="hotel.iHotelVerification">
                      Одобрено
                    </template>
                    <template v-if="!hotel.iHotelVerification">
                      На верификация
                    </template>
                  </b-form-checkbox>
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <b-form-group id="label-hotelOption" label="Опции объекта">
                  <b-form-checkbox
                    v-for="option in hotel_option"
                    :key="option.iHotelOptionID"
                    v-model="hotel.hotel_hotel_options_array"
                    :value="option.iHotelOptionID"
                  >
                    {{ option.sHotelOptionTitle }}
                  </b-form-checkbox>
                </b-form-group>
              </b-col>
              <b-col>
                <b-form-group id="label-roomOption" label="Опции комнаты">
                  <b-form-checkbox
                    v-for="option in room_option"
                    :key="option.iRoomOptionID"
                    v-model="hotel.hotel_room_options_array"
                    :value="option.iRoomOptionID"
                  >
                    {{ option.sRoomOptionTitle }}
                  </b-form-checkbox>
                </b-form-group>
              </b-col>
            </b-row>
            <b-button type="submit" variant="primary">Сохранить</b-button>
          </b-col>
          <b-col cols="12" sm="6">
            <b-row>
              <b-col>
                <b-form-group
                  id="label-aHotelCoordinateLat"
                  label="lat"
                  label-for="input-aHotelCoordinateLat"
                >
                  <b-form-input
                    id="input-aHotelCoordinateLat"
                    v-model.number="hotel.aHotelCoordinate.coordinates[0]"
                    type="text"
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col>
                <b-form-group
                  id="label-aHotelCoordinateLong"
                  label="long"
                  label-for="input-aHotelCoordinateLong"
                >
                  <b-form-input
                    id="input-aHotelCoordinateLong"
                    v-model="hotel.aHotelCoordinate.coordinates[1]"
                    type="text"
                  ></b-form-input>
                </b-form-group>
              </b-col>
            </b-row>
            <b-form-group
              id="label-aHotelCoordinate"
              v-if="hotel"
              label="Карта"
            >
              <div id="map">
                <client-only>
                  <yandex-map
                    :coords="hotel.aHotelCoordinate.coordinates"
                    :zoom="15"
                    :scroll-zoom="false"
                    :init-without-markers="false"
                    @click="clickOnMap"
                    ymap-class="map"
                  >
                    <ymap-marker
                      :marker-id="1"
                      :coords="hotel.aHotelCoordinate.coordinates"
                      drag="dragMarket"
                      marker-type="placemark"
                    ></ymap-marker>
                  </yandex-map>
                </client-only>
              </div>
            </b-form-group>
            <b-form-group id="label-aHotelImages" label="Фотографии">
              <dropzone
                id="foo"
                ref="el"
                :options="options"
                :destroyDropzone="true"
              ></dropzone>
            </b-form-group>
          </b-col>
        </b-row>
      </b-form>
      <!-- <pre>{{ hotel }}</pre> -->
      <!-- <pre>{{ hotel_type }}</pre> -->
      <!-- <pre>{{ hotel_guest }}</pre> -->
      <!-- <pre>{{ hotel_option }}</pre> -->
      <!-- <pre>{{ room_option }}</pre> -->
    </b-container>
  </div>
</template>

<script>
import Dropzone from 'nuxt-dropzone'
import 'nuxt-dropzone/dropzone.css'

export default {
  middleware: 'admin',
  layout: 'admin',
  components: {
    Dropzone
  },
  data() {
    return {
      search: '',
      searchResult: [],
      hotel: {},
      hotel_type: [],
      hotel_guest: [],
      hotel_option: [],
      room_option: [],
      options: {
        url: '/api/hotel/upload'
      }
    }
  },
  async asyncData({ params, $axios }) {
    const { data } = await $axios.post('/api/hotel/get_edit', params)
    data.hotel = data.hotel || {}
    data.hotel.hotel_hotel_options_array = []
    data.hotel.hotel_hotel_options.forEach((option) => {
      data.hotel.hotel_hotel_options_array.push(option.iHotelOptionID)
    })
    data.hotel.hotel_room_options_array = []
    data.hotel.hotel_room_options.forEach((option) => {
      data.hotel.hotel_room_options_array.push(option.iRoomOptionID)
    })
    return {
      hotel: data.hotel,
      hotel_type: data.hotel_type,
      hotel_guest: data.hotel_guest,
      hotel_option: data.hotel_option,
      room_option: data.room_option,
      breadcrumbs: [
        {
          text: 'Объекты',
          to: '/admin/hotel'
        },
        {
          text: data ? data.sHotelTitle : 'Новый объект',
          active: true
        }
      ]
    }
  },
  mounted() {
    // const instance = this.$refs.el.dropzone
  },
  methods: {
    async update() {
      const { data } = await this.$axios.post('/api/hotel/update', this.hotel)
      data.hotel = data.hotel || {}
      data.hotel.hotel_hotel_options_array = []
      data.hotel.hotel_hotel_options.forEach((option) => {
        data.hotel.hotel_hotel_options_array.push(option.iHotelOptionID)
      })
      data.hotel.hotel_room_options_array = []
      data.hotel.hotel_room_options.forEach((option) => {
        data.hotel.hotel_room_options_array.push(option.iRoomOptionID)
      })
      this.$set(this, 'hotel', data.hotel)
      this.$bvToast.toast('Успешно сохранено', {
        title: 'Статус',
        variant: 'success',
        toaster: 'b-toaster-bottom-right',
        autoHideDelay: 1500
      })
      this.$router.push('/admin/hotel/' + data.hotel.iHotelID)
    },
    dragMarket(event) {
      alert('dragMarker')
    },
    clickOnMap(event) {
      alert('clickOnMap')
    },
    async searchAddress() {
      const { data } = await this.$axios.post('/api/hotel/search_address', {
        search: this.search
      })
      this.$set(this, 'searchResult', data.list)
      // console.log(data)
    },
    useAdress(item) {
      const arrayAddress = []
      if (item.country) {
        arrayAddress.push(item.country)
      }
      if (item.state) {
        arrayAddress.push(item.state)
      }
      if (item.city) {
        arrayAddress.push(item.city)
      }
      if (item.streetName) {
        arrayAddress.push(item.streetName)
      }
      if (item.streetNumber) {
        arrayAddress.push(item.streetNumber)
      }
      const sHotelAddress = arrayAddress.join(', ')
      this.$set(this.hotel, 'sHotelAddress', sHotelAddress)
      this.$set(this.hotel.aHotelCoordinate.coordinates, 0, item.latitude)
      this.$set(this.hotel.aHotelCoordinate.coordinates, 1, item.longitude)
      this.cleanSearchResult()
    },
    cleanSearchResult() {
      this.$set(this, 'searchResult', [])
    }
  }
}
</script>

<style lang="scss">
#map {
  height: 300px;
  border-radius: 0.25rem;
  border: 1px solid #ced4da;
  overflow: hidden;
  .map {
    width: 100%;
    height: 298px;
  }
}
.dropzone {
  border-radius: 0.25rem;
  border: 1px solid #ced4da;
  padding: 0.5rem;
  display: grid;
  grid-template: repeat(1, 1fr) / repeat(1, 1fr);
  grid-gap: 0.5rem;
  &.dz-started {
    grid-template: repeat(1, 1fr) / repeat(4, 1fr);
  }
  .dz-message {
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    span {
      display: block;
      text-transform: uppercase;
      font-size: 12px;
    }
  }
  .dz-preview {
    margin: 0;
    .dz-image {
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
