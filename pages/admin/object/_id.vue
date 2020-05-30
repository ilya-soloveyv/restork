<template>
  <div>
    <div class="breadcrumb-box">
      <b-container>
        <b-breadcrumb>
          <b-breadcrumb-item to="/admin/object">Объекты</b-breadcrumb-item>
          <b-breadcrumb-item active>
            <template v-if="object.sObjectTitle">
              {{ object.sObjectTitle }}
            </template>
            <template v-else>Название объекта</template>
          </b-breadcrumb-item>
        </b-breadcrumb>
      </b-container>
    </div>
    <b-container id="admin_object_id">
      <h1 class="title">
        <span v-if="object.sObjectTitle">
          {{ object.sObjectTitle }}
        </span>
        <span v-else class="text-secondary">Название объекта</span>
      </h1>
      <b-form @submit.prevent="update" autocomplete="off">
        <b-tabs>
          <b-tab title="Основное" active>
            <b-row>
              <b-col cols="12" sm="6">
                <b-row>
                  <b-col cols="6">
                    <b-form-group
                      id="label-sObjectTitle"
                      label="Название"
                      label-for="input-sObjectTitle"
                    >
                      <b-form-input
                        id="input-sObjectTitle"
                        v-model="object.sObjectTitle"
                        type="text"
                        required
                      />
                    </b-form-group>
                  </b-col>
                  <b-col cols="6">
                    <b-form-group
                      id="label-iObjectTypeID"
                      label="Вид объекта"
                      label-for="input-iObjectTypeID"
                    >
                      <b-form-select
                        id="input-iObjectTypeID"
                        :options="object_type"
                        v-model="object.iObjectTypeID"
                        value-field="iObjectTypeID"
                        text-field="sObjectTypeTitle"
                        required
                      ></b-form-select>
                    </b-form-group>
                  </b-col>
                  <b-col cols="12">
                    <b-form-group
                      id="label-searchUser"
                      label="Пользователь"
                      label-for="inputSearchUser"
                    >
                      <template v-if="!object.iUserID">
                        <suggestions
                          id="inputSearchUser"
                          v-model="searchUser"
                          :options="suggestionsUserOptions"
                          :onInputChange="onInputChangeUser"
                          :onItemSelected="onItemSelectedUser"
                          required
                        >
                          <div slot="item" slot-scope="props">
                            {{ props.item.sUserLastName }}
                            {{ props.item.sUserFirstName }}
                            {{ props.item.sUserMiddleName }}
                          </div>
                        </suggestions>
                      </template>
                      <template v-else>
                        <b-input-group>
                          <b-form-input :value="sUserFullName" disabled />
                          <b-input-group-append>
                            <b-button
                              @click="onItemRemoveUser"
                              variant="primary"
                              class="removeUser"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#ffffff"
                                stroke-width="2"
                                stroke-linecap="square"
                                stroke-linejoin="arcs"
                              >
                                <path
                                  d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
                                ></path>
                                <circle cx="8.5" cy="7" r="4"></circle>
                                <line x1="18" y1="8" x2="23" y2="13"></line>
                                <line x1="23" y1="8" x2="18" y2="13"></line>
                              </svg>
                            </b-button>
                          </b-input-group-append>
                        </b-input-group>
                        <!-- <pre>{{ object.iUserID }}</pre> -->
                        <!-- <pre>{{ object.user }}</pre> -->
                      </template>
                    </b-form-group>
                  </b-col>
                  <b-col v-if="!iRoomPermission" cols="4">
                    <b-form-group
                      id="label-iObjectArea"
                      label="Площадь"
                      label-for="input-iObjectArea"
                    >
                      <b-form-input
                        id="input-iObjectArea"
                        v-model.number="object.iObjectArea"
                        type="text"
                      />
                    </b-form-group>
                  </b-col>
                  <b-col v-if="!iRoomPermission" cols="4">
                    <b-form-group
                      id="label-iObjectRoomCount"
                      label="Кол-во комнат"
                      label-for="input-iObjectRoomCount"
                    >
                      <b-form-input
                        id="input-iObjectRoomCount"
                        v-model.number="object.iObjectRoomCount"
                        type="text"
                      />
                    </b-form-group>
                  </b-col>
                  <b-col v-if="!iRoomPermission" cols="4">
                    <b-form-group
                      id="label-iObjectBed"
                      label="Кол-во кроватей"
                      label-for="input-iObjectBed"
                    >
                      <b-form-input
                        id="input-iObjectBed"
                        v-model.number="object.iObjectBed"
                        type="text"
                      />
                    </b-form-group>
                  </b-col>
                  <b-col v-if="!iRoomPermission" cols="4">
                    <b-form-group
                      id="label-iObjectPlace"
                      label="Кол-во спал. мест"
                      label-for="input-iObjectPlace"
                    >
                      <b-form-input
                        id="input-iObjectPlace"
                        v-model.number="object.iObjectPlace"
                        type="text"
                      />
                    </b-form-group>
                  </b-col>
                  <b-col v-if="!iRoomPermission" cols="4">
                    <b-form-group
                      id="label-iObjectPlaceDop"
                      label="Доп. место"
                      label-for="input-iObjectPlaceDop"
                    >
                      <b-form-input
                        id="input-iObjectPlaceDop"
                        v-model.number="object.iObjectPlaceDop"
                        type="text"
                      />
                    </b-form-group>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col cols="4">
                    <b-form-group
                      id="label-iObjectActive"
                      label="Публикация"
                      label-for="input-iObjectActive"
                    >
                      <b-form-checkbox
                        id="input-iObjectActive"
                        v-model="object.iObjectActive"
                        switch
                      >
                        <template v-if="object.iObjectActive">
                          Опубликовано
                        </template>
                        <template v-if="!object.iObjectActive">
                          Скрыто
                        </template>
                      </b-form-checkbox>
                    </b-form-group>
                  </b-col>
                  <b-col cols="4">
                    <b-form-group
                      id="label-iObjectVerification"
                      label="Верификация"
                      label-for="input-iObjectVerification"
                    >
                      <b-form-checkbox
                        id="input-iObjectVerification"
                        v-model="object.iObjectVerification"
                        switch
                      >
                        <template v-if="object.iObjectVerification">
                          Одобрено
                        </template>
                        <template v-if="!object.iObjectVerification">
                          На верификация
                        </template>
                      </b-form-checkbox>
                    </b-form-group>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col cols="4">
                    <b-form-group id="label-objectOption" label="Опции объекта">
                      <b-form-checkbox
                        v-for="option in object_option"
                        :key="option.iObjectOptionID"
                        v-model="object.object_object_options_array"
                        :value="option.iObjectOptionID"
                      >
                        {{ option.sObjectOptionTitle }}
                      </b-form-checkbox>
                    </b-form-group>
                  </b-col>
                  <b-col cols="4">
                    <b-form-group
                      id="label-roomOption"
                      v-if="!iRoomPermission"
                      label="Опции комнаты"
                    >
                      <b-form-checkbox
                        v-for="option in room_option"
                        :key="option.iRoomOptionID"
                        v-model="object.object_room_options_array"
                        :value="option.iRoomOptionID"
                      >
                        {{ option.sRoomOptionTitle }}
                      </b-form-checkbox>
                    </b-form-group>
                  </b-col>
                </b-row>
                <b-form-group
                  id="label-tObjectDesc"
                  label="Описание объекта"
                  label-for="input-tObjectDesc"
                >
                  <b-form-textarea
                    id="input-tObjectDesc"
                    v-model="object.tObjectDesc"
                    placeholder="Комментарий отельера"
                    rows="3"
                    max-rows="6"
                  />
                </b-form-group>
              </b-col>
              <b-col cols="12" sm="6">
                <b-form-group
                  id="label-sObjectAddress"
                  label="Адрес"
                  label-for="input-sObjectAddress"
                >
                  <suggestions
                    id="input-sObjectAddress"
                    v-model="object.sObjectAddress"
                    :options="suggestionsOptions"
                    :onInputChange="onInputChange"
                    :onItemSelected="onItemSelected"
                  >
                    <div slot="item" slot-scope="props">
                      {{ props.item.formattedAddress }}
                    </div>
                  </suggestions>
                </b-form-group>
                <b-form-group
                  id="label-aObjectCoordinate"
                  v-if="object"
                  label="Карта"
                >
                  <div id="map">
                    <client-only>
                      <yandex-map
                        :coords="object.aObjectCoordinate.coordinates"
                        :zoom="15"
                        :scroll-zoom="true"
                        :init-without-markers="false"
                        @click="clickOnMap"
                        ymap-class="map"
                      >
                        <ymap-marker
                          :marker-id="1"
                          :coords="object.aObjectCoordinate.coordinates"
                          drag="dragMarket"
                          marker-type="placemark"
                        ></ymap-marker>
                      </yandex-map>
                    </client-only>
                  </div>
                </b-form-group>
                <b-row>
                  <b-col>
                    <b-form-group
                      id="label-aObjectCoordinateLat"
                      label="lat"
                      label-for="input-aObjectCoordinateLat"
                    >
                      <b-form-input
                        id="input-aObjectCoordinateLat"
                        v-model.number="object.aObjectCoordinate.coordinates[0]"
                        type="text"
                      ></b-form-input>
                    </b-form-group>
                  </b-col>
                  <b-col>
                    <b-form-group
                      id="label-aObjectCoordinateLong"
                      label="long"
                      label-for="input-aObjectCoordinateLong"
                    >
                      <b-form-input
                        id="input-aObjectCoordinateLong"
                        v-model="object.aObjectCoordinate.coordinates[1]"
                        type="text"
                      ></b-form-input>
                    </b-form-group>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
          </b-tab>
          <b-tab title="Фотографии">
            <ul class="objectPhoto">
              <li
                v-for="(image, imageIndex) in object.object_images"
                :key="imageIndex"
              >
                <div @click="removeObjectImage(image)" class="remove">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#fff"
                    stroke-width="2"
                    stroke-linecap="square"
                    stroke-linejoin="arcs"
                  >
                    <polyline points="3 6 5 6 21 6"></polyline>
                    <path
                      d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
                    />
                    <line x1="10" y1="11" x2="10" y2="17"></line>
                    <line x1="14" y1="11" x2="14" y2="17"></line>
                  </svg>
                </div>
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
              <li v-show="!dropzoneLoading">
                <dropzone
                  id="objectDropzone"
                  ref="objectDropzone"
                  :options="objectDropzoneOptions"
                />
              </li>
              <li v-show="dropzoneLoading">
                <div class="dropzoneLoading">
                  <img src="/dropzoneLoading.svg" />
                </div>
              </li>
            </ul>
          </b-tab>
          <b-tab v-if="iRoomPermission" title="Номера">
            <div class="row">
              <div class="col-3">
                <b-nav v-if="object.rooms.length" vertical pills class="mb-3">
                  <b-nav-item
                    v-for="(room, roomIndex) in object.rooms"
                    :key="roomIndex"
                    @click="useRoom(roomIndex)"
                    :active="roomIndexActive === roomIndex"
                  >
                    <template v-if="room.iRoomID">
                      Номер #{{ room.iRoomID }}
                    </template>
                    <template v-else>
                      Новый номер
                    </template>
                  </b-nav-item>
                </b-nav>
                <b-button @click="addRoom" variant="secondary" class="mb-3">
                  Добавить номер
                </b-button>
              </div>
              <div v-if="room" class="col">
                <div class="row">
                  <div class="col">
                    <div class="row">
                      <div class="col">
                        <b-form-group
                          id="label-iRoomTypeID"
                          v-if="room_type"
                          label-for="input-iRoomTypeID"
                          label="Категория"
                        >
                          <b-select
                            id="input-iRoomTypeID'"
                            v-model="room.iRoomTypeID"
                            required
                          >
                            <option
                              v-for="(type, typeIndex) in room_type"
                              :key="typeIndex"
                              :value="type.iRoomTypeID"
                            >
                              {{ type.sRoomTypeTitle }}
                            </option>
                          </b-select>
                        </b-form-group>
                      </div>
                      <div class="col">
                        <b-form-group
                          id="label-iRoomArea"
                          label-for="input-iRoomArea"
                          label="Площадь"
                        >
                          <b-form-input
                            id="input-iRoomArea"
                            v-model.number="room.iRoomArea"
                            type="text"
                          />
                        </b-form-group>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col">
                        <b-form-group
                          id="label-iRoomCount"
                          label-for="input-iRoomCount"
                          label="Кол-во комнат"
                        >
                          <b-form-input
                            id="input-iRoomCount"
                            v-model.number="room.iRoomCount"
                            type="text"
                          />
                        </b-form-group>
                      </div>
                      <div class="col">
                        <b-form-group
                          id="label-iRoomBed"
                          label-for="input-iRoomBed"
                          label="Кол-во кров."
                        >
                          <b-form-input
                            id="'input-iRoomBed"
                            v-model.number="room.iRoomBed"
                            type="text"
                          />
                        </b-form-group>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col">
                        <b-form-group
                          id="label-iRoomPlace"
                          label-for="input-iRoomPlace"
                          label="Кол-во спал. м"
                        >
                          <b-form-input
                            id="input-iRoomPlace"
                            v-model.number="room.iRoomPlace"
                            type="text"
                          />
                        </b-form-group>
                      </div>
                      <div class="col">
                        <b-form-group
                          id="label-iRoomPlaceDop"
                          label-for="input-iRoomPlaceDop"
                          label="Кол-во доп. м"
                        >
                          <b-form-input
                            id="input-iRoomPlaceDop"
                            v-model.number="room.iRoomPlaceDop"
                            type="text"
                          />
                        </b-form-group>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col">
                        <b-form-group
                          id="label-tRoomDesc"
                          label-for="input-tRoomDesc"
                          label="Комментарий к номеру"
                        >
                          <b-form-textarea
                            id="input-tRoomDesc"
                            v-model="room.tRoomDesc"
                            placeholder="Комментарий к номеру"
                            rows="3"
                            max-rows="5"
                          />
                        </b-form-group>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col">
                        <b-form-group
                          id="label-iRoomOptionID"
                          label="Опции номера"
                        >
                          <b-form-checkbox
                            v-for="option in room_option"
                            :key="option.iRoomOptionID"
                            v-model="room.room_room_options_array"
                            :value="option.iRoomOptionID"
                          >
                            {{ option.sRoomOptionTitle }}
                          </b-form-checkbox>
                        </b-form-group>
                      </div>
                    </div>
                  </div>
                  <div class="col dropzone-room">
                    <b-form-group
                      id="label-imageIndex"
                      label-for="input-imageIndex"
                      label="Фотографии"
                      class="mb-0"
                    >
                      <ul class="objectPhoto roomPhoto">
                        <li
                          v-for="(image, imageIndex) in room.room_images"
                          :key="imageIndex"
                        >
                          <div @click="removeRoomImage(image)" class="remove">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#fff"
                              stroke-width="2"
                              stroke-linecap="square"
                              stroke-linejoin="arcs"
                            >
                              <polyline points="3 6 5 6 21 6"></polyline>
                              <path
                                d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
                              />
                              <line x1="10" y1="11" x2="10" y2="17"></line>
                              <line x1="14" y1="11" x2="14" y2="17"></line>
                            </svg>
                          </div>
                          <img
                            :src="
                              SELECTEL_HOST +
                                '/' +
                                SELECTEL_CONTAINER +
                                '/room/' +
                                image.iRoomID +
                                '/preview/' +
                                image.sRoomImage
                            "
                          />
                        </li>
                        <li v-show="!dropzoneLoading">
                          <dropzone
                            id="objectDropzone"
                            ref="objectDropzone"
                            :options="roomDropzoneOptions"
                          />
                        </li>
                        <li v-show="dropzoneLoading">
                          <div class="dropzoneLoading">
                            <img src="/dropzoneLoading.svg" />
                          </div>
                        </li>
                      </ul>
                    </b-form-group>
                  </div>
                </div>
              </div>
            </div>
          </b-tab>
        </b-tabs>
        <b-form-group>
          <b-button type="submit" variant="success">Сохранить</b-button>
        </b-form-group>
      </b-form>
      <!-- <pre>{{ iRoomID }}</pre> -->
      <!-- <pre>{{ object }}</pre> -->
      <!-- <pre>{{ object_type }}</pre> -->
      <!-- <pre>{{ object_option }}</pre> -->
      <!-- <pre>{{ room_option }}</pre> -->
      <!-- <pre>{{ room_type }}</pre> -->
    </b-container>
  </div>
</template>

<script src="./_id.js"></script>
<style src="./_id.scss" lang="scss"></style>
