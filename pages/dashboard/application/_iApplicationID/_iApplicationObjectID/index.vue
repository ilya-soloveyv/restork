<template>
  <div class="applicationObjectItem" sticky-container>
    <div class="wrapImages">
      <div class="wrapSlickCarousel">
        <VueSlickCarousel
          :arrows="true"
          :dots="true"
          :infinite="false"
          :edgeFriction="0.35"
          :speed="500"
          :slidesToShow="1"
          :slidesToScroll="1"
          v-if="applicationObject.object.object_images.length"
        >
          <template #prevArrow>
            <div class="custom-arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ffffff"
                stroke-width="0.5"
                stroke-linecap="round"
                stroke-linejoin="bevel"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </div>
          </template>
          <template #nextArrow>
            <div class="custom-arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ffffff"
                stroke-width="0.5"
                stroke-linecap="round"
                stroke-linejoin="bevel"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </div>
          </template>
          <div
            v-for="(image, index) in applicationObject.object.object_images"
            :key="index"
            class="image"
          >
            <img
              :src="
                SELECTEL_WEB +
                  '/object/' +
                  applicationObject.object.iObjectID +
                  '/original/' +
                  image.sObjectImage
              "
            />
          </div>
        </VueSlickCarousel>
      </div>
    </div>
    <div class="wrapInfo">
      <div class="id">Кодедж | id23423552</div>
      <div class="title">Шикарный двух этажный коттедж Париж рядом с морем</div>
      <div class="distance">
        <svg
          id="pin"
          xmlns="http://www.w3.org/2000/svg"
          width="11.792"
          height="16.771"
          viewBox="0 0 11.792 16.771"
        >
          <g
            id="Сгруппировать_2"
            data-name="Сгруппировать 2"
            transform="translate(0)"
          >
            <g id="Сгруппировать_1" data-name="Сгруппировать 1">
              <path
                id="Контур_4"
                data-name="Контур 4"
                d="M81.9,0A5.9,5.9,0,0,0,76.88,9l4.68,7.542a.491.491,0,0,0,.417.232h0a.491.491,0,0,0,.418-.239L86.96,8.917A5.9,5.9,0,0,0,81.9,0Zm4.221,8.412L81.97,15.335,77.715,8.479a4.917,4.917,0,1,1,8.4-.066Z"
                transform="translate(-76)"
              />
            </g>
          </g>
          <g
            id="Сгруппировать_4"
            data-name="Сгруппировать 4"
            transform="translate(2.948 2.948)"
          >
            <g
              id="Сгруппировать_3"
              data-name="Сгруппировать 3"
              transform="translate(0)"
            >
              <path
                id="Контур_5"
                data-name="Контур 5"
                d="M168.948,90a2.948,2.948,0,1,0,2.948,2.948A2.951,2.951,0,0,0,168.948,90Zm0,4.92a1.972,1.972,0,1,1,1.969-1.972A1.973,1.973,0,0,1,168.948,94.92Z"
                transform="translate(-166 -90)"
              />
            </g>
          </g>
        </svg>
        100 метров пешком до моря
      </div>
      <ul class="params">
        <li>
          <div>
            120
            <span>м<sup>2</sup></span>
          </div>
          Площадь участка
        </li>
        <li>
          <div>
            78
            <span>м<sup>2</sup></span>
          </div>
          Площадь дома
        </li>
        <li>
          <div>2</div>
          Комнаты
        </li>
        <li>
          <div>3</div>
          Кровати
        </li>
        <li>
          <div>3<span>/5</span></div>
          Этаж
        </li>
      </ul>
      <div class="desc">
        Сдам посуточно двухкомнатная квартира метро Сухаревская, Цветной бульвар
        5 минут пешком, улица Большой Сухаревский переулок дом 14. Изолированные
        комнаты- 19м и 8м, кухня 7м. Две двухспальные кровати, двухспальн
        комнаты- 19м и 8м, кухня 7м. Две двухспальные кровати, двухспальн
        <nuxt-link to="#">Читать дальше</nuxt-link>
      </div>
      <h2>Удобства отеля</h2>
      <ul class="optionsObject">
        <li>
          <div class="ico"></div>
          Бассейн
        </li>
        <li>
          <div class="ico"></div>
          Детская площадка
        </li>
        <li>
          <div class="ico"></div>
          Парковка
        </li>
        <li>
          <div class="ico"></div>
          Бассейн
        </li>
      </ul>
      <h2>Удобства в номере</h2>
      <ul class="optionsRoom">
        <li>
          <div class="ico"></div>
          Туалет
        </li>
        <li>
          <div class="ico"></div>
          Душевая
        </li>
        <li>
          <div class="ico"></div>
          Туалет
        </li>
        <li>
          <div class="ico"></div>
          Балкон
        </li>
        <li>
          <div class="ico"></div>
          Туалет
        </li>
        <li>
          <div class="ico"></div>
          Туалет
        </li>
        <li>
          <div class="ico"></div>
          Туалет
        </li>
        <li>
          <div class="ico"></div>
          Туалет
        </li>
      </ul>
      <h2>Особенности</h2>
      <ul class="features">
        <li>
          <div class="ico"></div>
          Можно с животными
        </li>
        <li>
          <div class="ico"></div>
          Есть место для курения
        </li>
        <li>
          <div class="ico"></div>
          Смена постельного белья
        </li>
        <li>
          <div class="ico"></div>
          Смена полотенец
        </li>
      </ul>
      <h2>Местоположение</h2>
      <div class="location">
        <span>Россия, Краснодарский край</span>
        Городской округ Анапа, село Витязево,Пионерская улица, 8
      </div>
      <div class="mapObject">map</div>
      <!-- <pre>{{ applicationObject }}</pre> -->
    </div>
    <div class="wrapControlRight">
      <div
        ref="controlRight"
        v-sticky
        sticky-side="both"
        sticky-offset="{ top: 25, bottom: 0 }"
        class="controlRight"
      >
        <div class="rating">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19.362"
            height="18.555"
            viewBox="0 0 19.362 18.555"
            data-v-de33f406=""
          >
            <path
              id="star"
              d="M19.311,7.5a1.027,1.027,0,0,0-.886-.708l-5.588-.507-2.21-5.172a1.029,1.029,0,0,0-1.893,0L6.525,6.289.936,6.8A1.03,1.03,0,0,0,.352,8.6l4.224,3.7L3.33,17.788A1.027,1.027,0,0,0,4.861,18.9l4.82-2.881L14.5,18.9a1.029,1.029,0,0,0,1.531-1.112L14.785,12.3l4.224-3.7A1.03,1.03,0,0,0,19.311,7.5Zm0,0"
              transform="translate(0 -0.492)"
            />
          </svg>
          <div><span>4.9</span> (25)</div>
        </div>
        <div class="addFavourit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15.925"
            height="14.278"
            viewBox="0 0 15.925 14.278"
          >
            <path
              id="heart"
              d="M13.741,1.3A4.013,4.013,0,0,0,10.756,0,3.755,3.755,0,0,0,8.41.809a4.8,4.8,0,0,0-.948.99,4.8,4.8,0,0,0-.948-.99A3.754,3.754,0,0,0,4.169,0,4.014,4.014,0,0,0,1.184,1.3,4.665,4.665,0,0,0,0,4.485,5.555,5.555,0,0,0,1.48,8.122,31.563,31.563,0,0,0,5.186,11.6c.513.438,1.1.934,1.7,1.462a.876.876,0,0,0,1.154,0c.6-.528,1.187-1.025,1.7-1.463a31.549,31.549,0,0,0,3.705-3.478,5.555,5.555,0,0,0,1.48-3.636A4.665,4.665,0,0,0,13.741,1.3Zm0,0"
              transform="translate(0.5 0.5)"
              fill="none"
              stroke-width="1"
            />
          </svg>
          <nuxt-link to="#">В избранное</nuxt-link>
        </div>
        <div class="cost">
          <label>Предложение отеля:</label>
          <div class="value">
            <span>27000 ₽</span>
            22500 ₽
          </div>
          <div class="desc">За весь период проживания</div>
        </div>
        <div class="dates">
          <label>Проживание:</label>
          <span>21 - 25 сентября 2020 года</span>
        </div>
        <div class="guest">
          <label>Гостей:</label>
          <span>4 взрослых, 2 детей</span>
        </div>
        <div class="time">
          <label>Предложение сделано:</label>
          <svg
            id="clock"
            xmlns="http://www.w3.org/2000/svg"
            width="14.5"
            height="14.5"
            viewBox="0 0 14.5 14.5"
          >
            <path
              id="Контур_61"
              data-name="Контур 61"
              d="M7.25,0A7.25,7.25,0,1,0,14.5,7.25,7.258,7.258,0,0,0,7.25,0Zm0,13.594A6.344,6.344,0,1,1,13.594,7.25,6.351,6.351,0,0,1,7.25,13.594Z"
              fill="#00e234"
            />
            <path
              id="Контур_62"
              data-name="Контур 62"
              d="M208.7,83.118h-.906v4.719l2.851,2.851.641-.641L208.7,87.462Z"
              transform="translate(-200.997 -80.399)"
              fill="#00e234"
            />
          </svg>
          <span>20 минут назад</span>
        </div>
        <b-button class="noInterest" variant="light" size="lg" block>
          Не интересно
        </b-button>
        <b-button class="toBook" variant="primary" size="lg" block>
          Забронировать
        </b-button>
      </div>
    </div>
    <div class="wrapControlBottom">
      <div
        v-sticky
        sticky-side="bottom"
        sticky-offset="{ top: 0, bottom: 0 }"
        class="controlBottom"
      >
        controlBottom
      </div>
    </div>
    <div class="wrapChat">
      <div
        ref="chat"
        v-sticky
        sticky-side="bottom"
        sticky-offset="{ top: 0, bottom: 25 }"
        class="chat"
      >
        <Message :applicationObject="applicationObject" />
      </div>
    </div>
  </div>
</template>

<script src="./index.js"></script>
<style src="./index.scss" scoped lang="scss"></style>
