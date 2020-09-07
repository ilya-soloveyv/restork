<template>
  <div class="editObject" sticky-container>
    <div class="wrapTitle">
      <h1>Редактирование объекта</h1>
      <div class="titleBtn">
        <nuxt-link to="#">Удалить объект</nuxt-link>
      </div>
    </div>
    <div class="wrapBody">
      <div class="form-group-wrap form-group-wrap-line1">
        <b-form-group
          id="label-sObjectTitle"
          label="Название объекта"
          label-for="input-sObjectTitle"
        >
          <b-form-input
            id="input-sObjectTitle"
            v-model="object.sObjectTitle"
            type="text"
            required
          ></b-form-input>
        </b-form-group>
      </div>
      <div class="form-group-wrap form-group-wrap-line2">
        <b-form-group
          id="label-sObjectTypeTitle"
          label="Категорию жилья"
          label-for="input-sObjectTypeTitle"
        >
          <b-form-input
            id="input-sObjectTypeTitle"
            v-model="object.object_type.sObjectTypeTitle"
            disabled
            type="text"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="label-iObjectRoomCount"
          label="Комнат"
          label-for="input-iObjectRoomCount"
        >
          <b-form-input
            id="input-iObjectRoomCount"
            v-model="object.iObjectRoomCount"
            type="text"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="label-iObjectBed"
          label="Спальных мест"
          label-for="input-iObjectBed"
        >
          <b-form-input
            id="input-iObjectBed"
            v-model="object.iObjectBed"
            type="text"
            required
          ></b-form-input>
        </b-form-group>
      </div>
      <div class="form-group-wrap form-group-wrap-line3">
        <b-form-group
          id="label-iObjectPlace"
          label="Площадь участка"
          label-for="input-iObjectPlace"
        >
          <b-form-input
            id="input-iObjectPlace"
            v-model="object.iObjectPlace"
            type="text"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="label-iObjectPlace"
          label="Площадь дома"
          label-for="input-iObjectPlace"
        >
          <b-form-input
            id="input-iObjectPlace"
            v-model="object.iObjectPlace"
            type="text"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="label-iObjectPlaceDop"
          label="Этаж"
          label-for="input-iObjectPlaceDop"
        >
          <b-form-input
            id="input-iObjectPlaceDop"
            v-model="object.iObjectPlaceDop"
            type="text"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="label-iObjectPlaceDop"
          label="Этажность"
          label-for="input-iObjectPlaceDop"
        >
          <b-form-input
            id="input-iObjectPlaceDop"
            v-model="object.iObjectPlaceDop"
            type="text"
            required
          ></b-form-input>
        </b-form-group>
      </div>
      <div class="form-group-wrap form-group-wrap-line1">
        <b-form-group
          id="label-tObjectDesc"
          label="Описание"
          label-for="input-tObjectDesc"
        >
          <b-form-textarea
            id="input-tObjectDesc"
            v-model="object.tObjectDesc"
            rows="5"
            max-rows="10"
          ></b-form-textarea>
        </b-form-group>
      </div>
      <h2>Удобства отеля</h2>
      <b-form-checkbox-group v-model="objectObjectOptionsArray">
        <ul class="optionsCheckboxList">
          <li v-for="(option, index) in objectOptions" :key="index">
            <b-form-checkbox :value="option.iObjectOptionID">
              {{ option.sObjectOptionTitle }}
            </b-form-checkbox>
          </li>
        </ul>
      </b-form-checkbox-group>
      <h2>Удобства комнат</h2>
      <b-form-checkbox-group v-model="objectObjectOptionsArray">
        <ul class="optionsCheckboxList">
          <li v-for="(option, index) in roomOptions" :key="index">
            <b-form-checkbox :value="option.iRoomOptionID">
              {{ option.sRoomOptionTitle }}
            </b-form-checkbox>
          </li>
        </ul>
      </b-form-checkbox-group>
      <h2>Местоположение</h2>
      <div class="form-group-wrap form-group-wrap-line1">
        <b-form-group
          id="label-sObjectAddress"
          label="Адрес"
          label-for="input-sObjectAddress"
        >
          <b-form-input
            id="input-1"
            v-model="object.sObjectAddress"
            type="text"
            required
          ></b-form-input>
        </b-form-group>
      </div>
      <div id="map">
        <client-only>
          <yandex-map
            :coords="object.aObjectCoordinate.coordinates"
            :controls="[]"
            :zoom="14"
            :draggable="true"
          >
            <ymap-marker
              :coords="object.aObjectCoordinate.coordinates"
              marker-id="123"
              hint-content="Расположение объекта"
            />
          </yandex-map>
        </client-only>
      </div>
      <h2>Основные места рядом</h2>
      <div class="places">
        <div class="item">
          <div class="form">
            <div class="form-group-wrap form-group-wrap-line2">
              <b-form-group
                id="label-sObjectTypeTitle"
                label="Место"
                label-for="input-sObjectTypeTitle"
              >
                <b-form-input
                  id="input-sObjectTypeTitle"
                  type="text"
                  value="Море"
                  required
                ></b-form-input>
              </b-form-group>
              <b-form-group
                id="label-iObjectRoomCount"
                label="Название"
                label-for="input-iObjectRoomCount"
              >
                <b-form-input
                  id="input-iObjectRoomCount"
                  type="text"
                  value="Пешком"
                  required
                ></b-form-input>
              </b-form-group>
              <b-form-group
                id="label-iObjectBed"
                label="Расстояние"
                label-for="input-iObjectBed"
              >
                <b-form-input
                  id="input-iObjectBed"
                  type="text"
                  value="100 м"
                  required
                ></b-form-input>
              </b-form-group>
            </div>
          </div>
          <div class="remove">
            <a href="">- Удалить</a>
          </div>
        </div>
        <div class="item">
          <div class="form">
            <div class="form-group-wrap form-group-wrap-line2">
              <b-form-group
                id="label-sObjectTypeTitle"
                label="Место"
                label-for="input-sObjectTypeTitle"
              >
                <b-form-input
                  id="input-sObjectTypeTitle"
                  type="text"
                  value="Море"
                  required
                ></b-form-input>
              </b-form-group>
              <b-form-group
                id="label-iObjectRoomCount"
                label="Название"
                label-for="input-iObjectRoomCount"
              >
                <b-form-input
                  id="input-iObjectRoomCount"
                  type="text"
                  value="Пешком"
                  required
                ></b-form-input>
              </b-form-group>
              <b-form-group
                id="label-iObjectBed"
                label="Расстояние"
                label-for="input-iObjectBed"
              >
                <b-form-input
                  id="input-iObjectBed"
                  type="text"
                  value="100 м"
                  required
                ></b-form-input>
              </b-form-group>
            </div>
          </div>
          <div class="remove">
            <a href="">- Удалить</a>
          </div>
        </div>
        <b-button>+ Добавить</b-button>
      </div>
      <h2>Фотографии</h2>
      <grid
        :draggable="true"
        :sortable="true"
        :items="object.object_images"
        :height="150"
        :width="150"
        class="images"
      >
        <template slot="cell" scope="props">
          <div class="item">
            <!-- <div>{{ props.item }}</div> -->
            <div class="num">
              <template v-if="props.sort === 0">
                Обложка
              </template>
              <template v-else>
                {{ props.sort + 1 }}
              </template>
            </div>
            <img
              :src="
                SELECTEL_WEB +
                  '/object/' +
                  props.item.iObjectID +
                  '/preview/' +
                  props.item.sObjectImage
              "
              alt=""
            />
          </div>
        </template>
      </grid>
      <div class="uploadImage">
        <span>Выберете файл</span> или перетащите его сюда
      </div>
      <!-- <pre>{{ objectOptions }}</pre>
      <pre>{{ roomOptions }}</pre>
      <pre>{{ objectObjectOptionsArray }}</pre>
      <pre>{{ objectRoomOptionsArray }}</pre> -->
      <!-- <pre>{{ object }}</pre> -->
      <!-- <p v-for="i in 10" :key="i">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium,
        quos accusamus! Nostrum omnis autem exercitationem! Incidunt
        perspiciatis fugiat error pariatur nihil nemo adipisci consectetur eaque
        voluptate, placeat dolor possimus obcaecati.
      </p> -->
      <!-- <pre>{{ object }}</pre> -->
    </div>
    <div class="wrapStatusTop">
      <ObjectEditStatus />
    </div>
    <div class="wrapStatus">
      <div v-sticky sticky-offset="{top: 25, bottom: 25}" sticky-side="both">
        <ObjectEditStatus />
      </div>
    </div>
    <div class="wrapStatusBottom">
      <div v-sticky sticky-offset="{top: 25, bottom: 0}" sticky-side="both">
        <div class="bottomStatus">
          bottomStatus
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./_iObjectID.js"></script>
<style src="./_iObjectID.scss" scoped lang="scss"></style>
