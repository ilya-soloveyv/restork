<template>
  <div>
    <h1>Здравствуйте, {{ $auth.user.sUserFirstName }}!</h1>
    <b-row>
      <b-col md="12" lg="6">
        <div id="objectCarousel">
          <b-carousel
            v-if="applicationObject.object.object_images.length"
            :interval="0"
            controls
            indicators
          >
            <b-carousel-slide
              v-for="(image, index) in applicationObject.object.object_images"
              :key="index"
              :img-src="
                SELECTEL_WEB +
                  '/object/' +
                  applicationObject.object.iObjectID +
                  '/interface/' +
                  image.sObjectImage
              "
            />
          </b-carousel>
          <span v-else class="noPhoto">
            К сожалению, объект еще не разместил свои фотографии
          </span>
        </div>
        <b-row class="objectParams">
          <b-col cols="12" sm="6">
            <span class="title">Удобства отеля</span>
            <ul>
              <li
                v-for="(option, optionIndex) in objectOptionWithSelected"
                :key="optionIndex"
              >
                <svg
                  v-if="option.selected"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#28A745"
                  stroke-width="2"
                  stroke-linecap="square"
                  stroke-linejoin="arcs"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <svg
                  v-else
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#DC3545"
                  stroke-width="2"
                  stroke-linecap="square"
                  stroke-linejoin="arcs"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
                <span>{{ option.sObjectOptionTitle }}</span>
              </li>
            </ul>
            <!-- <pre>{{ objectOption }}</pre> -->
          </b-col>
          <b-col cols="12" sm="6">
            <span class="title titleRoom">Удобства в номере</span>
            <ul>
              <li
                v-for="(option, optionIndex) in roomOptionWithSelected"
                :key="optionIndex"
              >
                <svg
                  v-if="option.selected"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#28A745"
                  stroke-width="2"
                  stroke-linecap="square"
                  stroke-linejoin="arcs"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <svg
                  v-else
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#DC3545"
                  stroke-width="2"
                  stroke-linecap="square"
                  stroke-linejoin="arcs"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
                <span>{{ option.sRoomOptionTitle }}</span>
              </li>
            </ul>
            <!-- <pre>{{ roomOptionWithSelected }}</pre> -->
          </b-col>
        </b-row>
      </b-col>
      <b-col md="12" lg="6">
        <div class="dApplicationDate">
          Заявка на проживание от {{ dApplicationDate }}
        </div>
        <div class="sObjectTitle">
          {{ applicationObject.object.sObjectTitle }}
          <span>
            {{ applicationObject.object.object_type.sObjectTypeTitle }}
          </span>
        </div>
        <div class="paramsTitle">Параметры вашей заявки</div>
        <b-row class="paramsRow">
          <b-col cols="5" sm="6" class="paramLabel">
            Промежуток проживания:
          </b-col>
          <b-col cols="7" sm="6" class="paramData">
            {{ applicationDateRange }}
          </b-col>
        </b-row>
        <b-row class="paramsRow">
          <b-col cols="5" sm="6" class="paramLabel">
            Количество взрослых:
          </b-col>
          <b-col cols="7" sm="6" class="paramData">
            {{ applicationObject.application.iApplicationAdult }}
          </b-col>
        </b-row>
        <b-row class="paramsRow">
          <b-col cols="5" sm="6" class="paramLabel">
            Количество детей:
          </b-col>
          <b-col cols="7" sm="6" class="paramData">
            {{ applicationObject.application.iApplicationChild }}
          </b-col>
        </b-row>
        <b-row class="paramsRow">
          <b-col cols="5" sm="6" class="paramLabel">
            Удобства отеля:
          </b-col>
          <b-col cols="7" sm="6" class="paramData">
            {{ applicationObjectOptionsString }}
          </b-col>
        </b-row>
        <b-row class="paramsRow">
          <b-col cols="5" sm="6" class="paramLabel">
            Удобства номера:
          </b-col>
          <b-col cols="7" sm="6" class="paramData">
            {{ applicationRoomOptionsString }}
          </b-col>
        </b-row>
        <template v-if="applicationObject.iUserCancel">
          <div class="alertUserCancel">
            Вы откзались от этого предложения
          </div>
        </template>
        <template v-else-if="applicationObject.iUserSelected">
          <div class="alertUserSelected">
            Вы выбрали это предложение<br />
            Стоимость проживания: {{ applicationObject.iObjectPrice }}₽
          </div>
        </template>
        <template v-else-if="!applicationObject.iObjectPrice">
          <div class="alertNoPrice">
            По данному предложению пока нет цены. Мы уведомим Вас, когда отельер
            предложит свою стоимость
          </div>
        </template>
        <template v-else>
          <div class="iObjectPrice">
            Предложение отеля:
            <span>{{ applicationObject.iObjectPrice }}₽</span>
            <div>Стоимость указана за весь период проживания</div>
          </div>
        </template>
        <div
          v-if="
            !applicationObject.iUserCancel && !applicationObject.iUserSelected
          "
          class="row"
        >
          <div class="col">
            <div class="buttonCancel">
              <span>Мне не подходит это предложение</span>
              <b-button
                @click="cancelApplicationObject"
                variant="outline-danger"
                size="sm"
              >
                Отказать
              </b-button>
            </div>
          </div>
          <div v-if="applicationObject.iObjectPrice" class="col">
            <div class="buttonCancel">
              <span>Я готов выбрать это предложение</span>
              <b-button
                @click="selectelApplicationObject"
                variant="success"
                size="sm"
              >
                Выбрать
              </b-button>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div id="chat">
              <ul ref="messages" class="messages">
                <li v-for="(message, index) in messages" :key="index">
                  <!-- <i :title="message.date">
                    {{ message.date.split('T')[1].slice(0, -2) }}
                  </i> -->
                  <span>{{ message.text }}</span>
                </li>
              </ul>
              <input
                v-model="message"
                @keyup.enter="sendMessage"
                type="text"
                placeholder="Введите сообщение..."
              />
            </div>
          </div>
        </div>
      </b-col>
    </b-row>
    <!-- <pre>{{ applicationObject }}</pre> -->
  </div>
</template>

<script src="./_id.js"></script>
<style src="./_id.scss" scoped lang="scss"></style>
