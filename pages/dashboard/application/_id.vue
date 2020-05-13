<template>
  <div>
    <h1>Здравствуйте, {{ $auth.user.sUserFirstName }}!</h1>
    <div class="row">
      <div class="col">
        <div id="objectCarousel">
          <b-carousel :interval="0" controls indicators>
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
        </div>
        <div class="row">
          <div class="col">
            Удобства отеля
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
                {{ option.sObjectOptionTitle }}
              </li>
            </ul>
            <!-- <pre>{{ objectOption }}</pre> -->
          </div>
          <div class="col">
            Удобства в номере
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
                {{ option.sRoomOptionTitle }}
              </li>
            </ul>
            <!-- <pre>{{ roomOptionWithSelected }}</pre> -->
          </div>
        </div>
      </div>
      <div class="col">
        <div>Заявка на проживание от 01.08.2019</div>
        <div>{{ applicationObject.object.sObjectTitle }}</div>
        <div>Параметры Вашей заявки</div>
        <div class="row">
          <div class="col">Промежуток проживания:</div>
          <div class="col">{{ applicationDateRange }}</div>
        </div>
        <div class="row">
          <div class="col">Количество взрослых:</div>
          <div class="col">
            {{ applicationObject.application.iApplicationAdult }}
          </div>
        </div>
        <div class="row">
          <div class="col">Количество детей:</div>
          <div class="col">
            {{ applicationObject.application.iApplicationChild }}
          </div>
        </div>
        <div class="row">
          <div class="col">Доп. параметры:</div>
          <div class="col">{{ applicationObjectOptionsString }}</div>
        </div>
        <div class="row">
          <div class="col">Доп. параметры:</div>
          <div class="col">{{ applicationRoomOptionsString }}</div>
        </div>
        <div v-if="applicationObject.iObjectPrice" class="row">
          <div class="col">
            <div>
              Предложение отеля: {{ applicationObject.iObjectPrice }} рублей
            </div>
            <div>(Стоимость указана за весь период проживания)</div>
          </div>
        </div>
        <div v-else class="row">
          <div class="col">
            По данному предложению пока нет цены. Мы уведомим Вас, когда отельер
            предложит свою стоимость
          </div>
        </div>
        <div v-if="!applicationObject.iUserCancel" class="row">
          <div class="col">
            Мне не подходит это предложение
            <b-button
              @click="cancelApplicationObject"
              variant="outline-danger"
              size="sm"
            >
              Отказать
            </b-button>
          </div>
          <div v-if="applicationObject.iObjectPrice" class="col">
            Я готов выбрать это предложение
            <b-button
              @click="selectelApplicationObject"
              variant="success"
              size="sm"
            >
              Оплатить
            </b-button>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div id="chat">
              <ul ref="messages" class="messages">
                <li v-for="(message, index) in messages" :key="index">
                  <i :title="message.date">
                    {{ message.date.split('T')[1].slice(0, -2) }}
                  </i>
                  <span>: {{ message.text }}</span>
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
      </div>
    </div>
    <pre>{{ applicationObject }}</pre>
  </div>
</template>

<script src="./_id.js"></script>
<style src="./_id.scss" scoped lang="scss"></style>
