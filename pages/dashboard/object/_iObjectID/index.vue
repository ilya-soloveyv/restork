<template>
  <div>
    <h1>{{ object.sObjectTitle }}</h1>
    <div class="sObjectTypeTitle">
      {{ object.object_type.sObjectTypeTitle }}
    </div>
    <div class="tObjectDesc">
      {{ object.tObjectDesc }}
    </div>
    <nuxt-link :to="'/dashboard/object/' + object.iObjectID + '/basic'">
      Редактировать базовые настройки
    </nuxt-link>
    <hr />
    <template v-if="!object.object_type.iRoomPermission">
      <h3>Характеристики объекта</h3>
      <ul>
        <li>
          Площадь: <span>{{ object.iObjectArea }}м<sup>2</sup></span>
        </li>
        <li>
          Кол-во комнат: <span>{{ object.iObjectRoomCount }} шт.</span>
        </li>
        <li>
          Кол-во кроватей: <span>{{ object.iObjectBed }} шт.</span>
        </li>
        <li>
          Кол-во спал. мест: <span>{{ object.iObjectPlace }} шт.</span>
        </li>
        <li>
          Доп. место: <span>{{ object.iObjectPlaceDop }} шт.</span>
        </li>
      </ul>
      <nuxt-link :to="'/dashboard/object/' + object.iObjectID + '/setting'">
        Редактировать характеристики
      </nuxt-link>
      <hr />
    </template>
    <h3>Опции объекта</h3>
    <ul v-if="object.object_object_options.length">
      <li v-for="(option, index) in object.object_object_options" :key="index">
        <span>{{ option.object_option.sObjectOptionTitle }}</span>
      </li>
    </ul>
    <b-alert v-else show variant="warning">
      Необходимо указать опции объекта
    </b-alert>
    <nuxt-link :to="'/dashboard/object/' + object.iObjectID + '/option'">
      Редактировать опции объекта
    </nuxt-link>
    <hr />
    <template v-if="!object.object_type.iRoomPermission">
      <h3>Опции номеров</h3>
      <ul v-if="object.object_room_options.length">
        <li v-for="(option, index) in object.object_room_options" :key="index">
          <span>{{ option.room_option.sRoomOptionTitle }}</span>
        </li>
      </ul>
      <b-alert v-else show variant="warning">
        Необходимо указать опции номеров
      </b-alert>
      <nuxt-link :to="'/dashboard/object/' + object.iObjectID + '/roomoption'">
        Редактировать опции комнат
      </nuxt-link>
      <hr />
    </template>
    <h3>Расположение объекта</h3>
    <div v-if="object.sObjectAddress.length">
      <div class="sObjectAddress">
        Адрес: <span>{{ object.sObjectAddress }}</span>
      </div>
      <div id="objectMap">
        <client-only>
          <yandex-map
            :coords="object.aObjectCoordinate.coordinates"
            :controls="[]"
            :zoom="14"
          >
            <ymap-marker
              :coords="object.aObjectCoordinate.coordinates"
              marker-id="123"
              hint-content="Расположение объекта"
            />
          </yandex-map>
        </client-only>
      </div>
    </div>
    <b-alert v-else show variant="warning">Адрес не указан</b-alert>
    <nuxt-link :to="'/dashboard/object/' + object.iObjectID + '/adress'">
      Редактировать
    </nuxt-link>
    <hr />
    <h3>Фотографии объекта</h3>
    <ul v-if="object.object_images.length" class="photo">
      <li v-for="(image, index) in object.object_images" :key="index">
        <img
          :src="
            SELECTEL_WEB +
              '/object/' +
              image.iObjectID +
              '/preview/' +
              image.sObjectImage
          "
        />
      </li>
    </ul>
    <b-alert v-else show variant="warning">Фотографии не загружены</b-alert>
    <nuxt-link :to="'/dashboard/object/' + object.iObjectID + '/photo'">
      Редактировать фотографии
    </nuxt-link>
    <!-- <pre>{{ itemStatusRedirect }}</pre> -->
    <template v-if="object.object_type.iRoomPermission">
      <hr />
      <h3>Номера</h3>
      <ul v-if="object.rooms.length">
        <li v-for="(room, index) in object.rooms" :key="index" class="roomLine">
          <div class="row">
            <div class="col-auto">
              <div class="bgRoomImage">
                <template v-if="room.room_images.length">
                  <img
                    :src="
                      SELECTEL_WEB +
                        '/room/' +
                        room.iRoomID +
                        '/preview/' +
                        room.room_images[0].sRoomImage
                    "
                  />
                </template>
              </div>
            </div>
            <div class="col">
              <div class="sRoomTypeTitle">
                Категория номера:
                <span>{{ room.room_type.sRoomTypeTitle }}</span>
              </div>
              <nuxt-link
                :to="
                  '/dashboard/object/' +
                    object.iObjectID +
                    '/room/' +
                    room.iRoomID
                "
              >
                Редактировать номер
              </nuxt-link>
            </div>
          </div>
        </li>
      </ul>
      <b-alert v-else show variant="warning">Необходимо добавить номер</b-alert>
      <nuxt-link :to="'/dashboard/object/' + object.iObjectID + '/room/0'">
        Добавить номер
      </nuxt-link>
    </template>
    <!-- <pre>{{ object }}</pre> -->
    <!-- <pre>{{ object.rooms }}</pre> -->
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  layout: 'dashboard',
  head() {
    return {
      title: 'Object'
    }
  },
  computed: {
    object({ $store }) {
      return $store.state.object.item
    },
    itemStatusRedirect({ $store }) {
      return $store.getters['object/itemStatusRedirect']
    },
    SELECTEL_WEB() {
      return process.env.SELECTEL_WEB
    }
  },
  async asyncData({ store, $axios, params }) {
    await store.dispatch('object/GET_ITEM', params)
  },
  created() {
    if (this.itemStatusRedirect) {
      // this.$router.replace(this.itemStatusRedirect)
    }
  }
}
</script>

<style lang="scss" scoped>
h1 {
  text-align: left;
  margin-bottom: 0.5rem;
}
h3 {
  color: #999999;
  font-size: 18px;
  margin-bottom: 1rem;
}
.sObjectTypeTitle {
  color: #999;
  font-weight: 500;
  margin-bottom: 0.5rem;
}
.tObjectDesc {
  margin-bottom: 1rem;
}
ul {
  margin: 0 0 1rem;
  padding: 0;
  list-style: none;
  &.photo {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1rem;
  }
  li {
    color: #999999;
    span {
      color: #333333;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 0.25rem;
    }
  }
}
.sObjectAddress {
  color: #999999;
  margin-bottom: 0.5rem;
  span {
    color: #333333;
  }
}
#objectMap {
  width: 100%;
  height: 200px;
  margin-bottom: 1rem;
  .ymap-container {
    height: 100%;
  }
}
.bgRoomImage {
  width: 90px;
  height: 90px;
  background-color: #eeeeee;
  overflow: hidden;
  border-radius: 0.25rem;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.roomLine {
  margin-bottom: 1rem;
}
</style>
