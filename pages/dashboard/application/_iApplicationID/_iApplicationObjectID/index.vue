<template>
  <div class="applicationObjectItem" sticky-container>
    <div class="wrapImages">
      <div class="wrapSlickCarousel">
        <VueSlickCarousel
          ref="carousel"
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
      <div class="wrapImagesPreview">
        <ul>
          <li
            v-for="(image, index) in applicationObject.object.object_images"
            :key="index"
            :class="{ more: index === 3 }"
          >
            <img
              :src="
                SELECTEL_WEB +
                  '/object/' +
                  applicationObject.object.iObjectID +
                  '/original/' +
                  image.sObjectImage
              "
              @click="carouselGoTo(index)"
            />
            <div v-if="index === 3" class="showMore">
              <span>+16</span>
              фото
            </div>
          </li>
        </ul>
        <div class="info">
          <div class="line1">
            <div class="id">
              id {{ applicationObject.iApplicationObjectID }}
            </div>
            <div class="stars">
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
          </div>
          <div class="line2">
            <nuxt-link to="#">
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
              В избранное
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <div class="wrapInfo">
      <div class="id">
        {{ applicationObject.object.object_type.sObjectTypeTitle }} | №
        {{ applicationObject.iApplicationObjectID }}
      </div>
      <div class="title">{{ applicationObject.object.sObjectTitle }}</div>
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
            {{ applicationObject.object.iObjectArea }}
            <span>м<sup>2</sup></span>
          </div>
          Площадь участка
        </li>
        <li>
          <div>
            {{ applicationObject.object.iObjectArea }}
            <span>м<sup>2</sup></span>
          </div>
          Площадь дома
        </li>
        <li>
          <div>{{ applicationObject.object.iObjectRoomCount }}</div>
          Комнаты
        </li>
        <li>
          <div>{{ applicationObject.object.iObjectBed }}</div>
          Кровати
        </li>
        <li>
          <div>
            {{ applicationObject.object.iObjectPlaceDop }}
            <span>/ {{ applicationObject.object.iObjectPlaceDop }}</span>
          </div>
          Этаж
        </li>
      </ul>
      <div class="desc">
        <p :class="{ readMore: readMore }">
          {{ applicationObject.object.tObjectDesc }}
        </p>
        <div v-if="!readMore" class="wrapReadMore">
          <a @click.prevent="goReadMore" href="#">
            Читать дальше
          </a>
        </div>
      </div>
      <h2>Удобства отеля</h2>
      <ul class="optionsObject">
        <li
          v-for="(option, index) in applicationObject.object
            .object_object_options"
          :key="index"
        >
          <div class="ico">
            <svg
              id="swimming-pool"
              xmlns="http://www.w3.org/2000/svg"
              width="34.396"
              height="34.396"
              viewBox="0 0 34.396 34.396"
            >
              <path
                id="Контур_1"
                data-name="Контур 1"
                d="M32.515,5.194V3.023a3.023,3.023,0,1,0-6.046,0V4.97H23.244V3.023a3.023,3.023,0,1,0-6.046,0V4.97H3.023A3.027,3.027,0,0,0,0,7.993v23.38A3.027,3.027,0,0,0,3.023,34.4h28.35A3.027,3.027,0,0,0,34.4,31.373V7.993a3.027,3.027,0,0,0-1.881-2.8ZM28.484,3.023a1.008,1.008,0,1,1,2.015,0V4.97H28.484ZM19.214,13.57V11.353h7.255v1.88a3.749,3.749,0,0,0-1.176-.2,5.44,5.44,0,0,0-2.483.782,3.869,3.869,0,0,1-1.565.561,3.869,3.869,0,0,1-1.565-.561c-.151-.078-.308-.157-.468-.235C19.213,13.577,19.214,13.574,19.214,13.57Zm7.255-4.232H19.214V6.985h7.255ZM19.214,3.023a1.008,1.008,0,1,1,2.015,0V4.97H19.214Zm13.167,28.35a1.009,1.009,0,0,1-1.008,1.008H3.023a1.009,1.009,0,0,1-1.008-1.008V7.993A1.009,1.009,0,0,1,3.023,6.985H17.2v6.048a5.44,5.44,0,0,0-2.483.782,3.868,3.868,0,0,1-1.565.561,3.869,3.869,0,0,1-1.565-.561A5.44,5.44,0,0,0,9.1,13.033a10.827,10.827,0,0,0-4.27,1.338l-.216.105a1.008,1.008,0,1,0,.876,1.815l.227-.111A9.507,9.507,0,0,1,9.1,15.048a3.869,3.869,0,0,1,1.565.561,5.439,5.439,0,0,0,2.483.782,5.44,5.44,0,0,0,2.483-.782,3.869,3.869,0,0,1,1.565-.561,3.869,3.869,0,0,1,1.565.561,5.439,5.439,0,0,0,2.483.782,5.44,5.44,0,0,0,2.483-.782,3.869,3.869,0,0,1,1.565-.561,3.869,3.869,0,0,1,1.565.561,5.439,5.439,0,0,0,2.483.782,1.008,1.008,0,1,0,0-2.015,2.249,2.249,0,0,1-.857-.218V6.985h2.889a1.009,1.009,0,0,1,1.008,1.008Z"
              />
              <path
                id="Контур_2"
                data-name="Контур 2"
                d="M268.647,294a5.408,5.408,0,0,0-2.432.75,4.07,4.07,0,0,1-1.489.539,3.342,3.342,0,0,1-1.927-.553,4.617,4.617,0,0,0-2.412-.71,8.2,8.2,0,0,0-3.895,1.4,1.008,1.008,0,1,0,1.028,1.733,6.543,6.543,0,0,1,2.9-1.121,2.76,2.76,0,0,1,1.424.47,5.351,5.351,0,0,0,2.74.8q.109,0,.222,0a5.66,5.66,0,0,0,2.311-.751,3.831,3.831,0,0,1,1.529-.537,1.008,1.008,0,0,0,0-2.016Z"
                transform="translate(-238.8 -274.249)"
              />
              <path
                id="Контур_3"
                data-name="Контур 3"
                d="M81.836,391.123l-.312.158a3.868,3.868,0,0,1-1.565.561,3.868,3.868,0,0,1-1.565-.561,5.44,5.44,0,0,0-2.483-.782,10.23,10.23,0,0,0-4.514,1.458,1.008,1.008,0,1,0,.932,1.787,8.84,8.84,0,0,1,3.582-1.229,3.869,3.869,0,0,1,1.565.561,4.331,4.331,0,0,0,4.966,0l.294-.149a1.008,1.008,0,1,0-.9-1.8Z"
                transform="translate(-66.096 -364.265)"
              />
            </svg>
          </div>
          {{ option.object_option.sObjectOptionTitle }}
        </li>
      </ul>
      <h2>Удобства в номере</h2>
      <ul class="optionsRoom">
        <li
          v-for="(option, index) in applicationObject.object
            .object_room_options"
          :key="index"
        >
          <div class="ico">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23.982"
              height="24.715"
              viewBox="0 0 23.982 24.715"
            >
              <g id="balcony" transform="translate(-3.796)">
                <g
                  id="Сгруппировать_44"
                  data-name="Сгруппировать 44"
                  transform="translate(3.796)"
                >
                  <path
                    id="Контур_22"
                    data-name="Контур 22"
                    d="M25.7,11.8a2.078,2.078,0,0,0-2.075,2.075,2.055,2.055,0,0,0,.127.692H22.128V5.3A5.288,5.288,0,0,0,20.3,1.311c-.015-.02-.021-.045-.038-.064a.674.674,0,0,0-.249-.168A5.27,5.27,0,0,0,16.824,0H14.672a5.31,5.31,0,0,0-5.3,5.3v9.265H7.82a2.053,2.053,0,0,0,.127-.692A2.075,2.075,0,1,0,5.18,15.825v8.2a.692.692,0,0,0,.692.692H25.7a.692.692,0,0,0,.692-.692v-8.2A2.07,2.07,0,0,0,25.7,11.8ZM5.871,13.185a.692.692,0,1,1-.692.692A.693.693,0,0,1,5.871,13.185Zm.692,10.146V15.952h4.064v7.379Zm5.447-.186V15.952h3.046v7.379H12.01v-.186Zm7.127.186h-2.7V15.952h3.228v7.379h-.531Zm5.874,0H21.052V15.952h3.959Zm.692-8.763a.692.692,0,1,1,.692-.692A.693.693,0,0,1,25.7,14.569ZM19.727,2.678a3.905,3.905,0,0,1,.959,1.975H17.568ZM18.615,1.82,16.44,3.81V1.384h.384A3.887,3.887,0,0,1,18.615,1.82Zm-3.942-.437h.384V3.774L12.907,1.808A3.893,3.893,0,0,1,14.672,1.384ZM11.788,2.659l2.18,1.994H10.811A3.9,3.9,0,0,1,11.788,2.659ZM10.752,6.037h9.992v8.532H10.752Z"
                    transform="translate(-3.796 0)"
                  />
                </g>
              </g>
            </svg>
          </div>
          {{ option.room_option.sRoomOptionTitle }}
        </li>
      </ul>
      <h2>Особенности</h2>
      <ul class="features">
        <li>
          <div class="ico">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25.542"
              height="19.256"
              viewBox="0 0 25.542 19.256"
            >
              <g id="Page-1" transform="translate(0.264 0.25)">
                <g
                  id="_037---Sheet"
                  data-name="037---Sheet"
                  transform="translate(0.003)"
                >
                  <path
                    id="Shape"
                    d="M24.927,10.028,23.688,3.956A5.021,5.021,0,0,0,18.8,0H6.623A5.02,5.02,0,0,0,1.736,3.955L.127,11.485a.241.241,0,0,0,0,.03,6.025,6.025,0,0,0,6.081,7.237H22.713a2.292,2.292,0,0,0,2.281-2.516,2.327,2.327,0,0,0-1.762-1.993,4.151,4.151,0,0,0,1.695-4.205s0-.007,0-.011ZM2.551,4.129A4.183,4.183,0,0,1,6.623.833H18.8a4.182,4.182,0,0,1,4.072,3.292l.736,3.605a4.145,4.145,0,0,0-2.77-1.063H6.044A5.99,5.99,0,0,0,1.669,8.547c-.029.03-.053.064-.083.095Zm18.287,10.04H6.044a1.461,1.461,0,0,1-1.451-1.605,1.517,1.517,0,0,1,1.535-1.312h14.71a.417.417,0,0,0,0-.833H6.128a2.358,2.358,0,0,0-2.364,2.064A2.294,2.294,0,0,0,6.044,15H22.633a1.514,1.514,0,0,1,1.532,1.314,1.448,1.448,0,0,1-.372,1.125,1.463,1.463,0,0,1-1.079.478H6.208A5.289,5.289,0,0,1,.842,12.973,5.214,5.214,0,0,1,6.044,7.5H20.838a3.334,3.334,0,0,1,0,6.668Z"
                    transform="translate(-0.003)"
                    stroke="#000"
                    stroke-width="0.5"
                  />
                  <path
                    id="Shape-2"
                    data-name="Shape"
                    d="M8.382,7.13a.413.413,0,0,0,.087.009.417.417,0,0,0,.407-.33,2.508,2.508,0,0,1,2.442-1.975H14.7A.417.417,0,0,0,14.7,4h-3.38A3.346,3.346,0,0,0,8.06,6.635a.417.417,0,0,0,.321.494Z"
                    transform="translate(-4.697 -2.333)"
                    stroke="#000"
                    stroke-width="0.5"
                  />
                  <circle
                    id="Oval"
                    cx="0.776"
                    cy="0.776"
                    r="0.776"
                    transform="translate(10.864 1.552)"
                    stroke="#000"
                    stroke-width="0.5"
                  />
                </g>
              </g>
            </svg>
          </div>
          Можно с животными
        </li>
        <li>
          <div class="ico">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25.542"
              height="19.256"
              viewBox="0 0 25.542 19.256"
            >
              <g id="Page-1" transform="translate(0.264 0.25)">
                <g
                  id="_037---Sheet"
                  data-name="037---Sheet"
                  transform="translate(0.003)"
                >
                  <path
                    id="Shape"
                    d="M24.927,10.028,23.688,3.956A5.021,5.021,0,0,0,18.8,0H6.623A5.02,5.02,0,0,0,1.736,3.955L.127,11.485a.241.241,0,0,0,0,.03,6.025,6.025,0,0,0,6.081,7.237H22.713a2.292,2.292,0,0,0,2.281-2.516,2.327,2.327,0,0,0-1.762-1.993,4.151,4.151,0,0,0,1.695-4.205s0-.007,0-.011ZM2.551,4.129A4.183,4.183,0,0,1,6.623.833H18.8a4.182,4.182,0,0,1,4.072,3.292l.736,3.605a4.145,4.145,0,0,0-2.77-1.063H6.044A5.99,5.99,0,0,0,1.669,8.547c-.029.03-.053.064-.083.095Zm18.287,10.04H6.044a1.461,1.461,0,0,1-1.451-1.605,1.517,1.517,0,0,1,1.535-1.312h14.71a.417.417,0,0,0,0-.833H6.128a2.358,2.358,0,0,0-2.364,2.064A2.294,2.294,0,0,0,6.044,15H22.633a1.514,1.514,0,0,1,1.532,1.314,1.448,1.448,0,0,1-.372,1.125,1.463,1.463,0,0,1-1.079.478H6.208A5.289,5.289,0,0,1,.842,12.973,5.214,5.214,0,0,1,6.044,7.5H20.838a3.334,3.334,0,0,1,0,6.668Z"
                    transform="translate(-0.003)"
                    stroke="#000"
                    stroke-width="0.5"
                  />
                  <path
                    id="Shape-2"
                    data-name="Shape"
                    d="M8.382,7.13a.413.413,0,0,0,.087.009.417.417,0,0,0,.407-.33,2.508,2.508,0,0,1,2.442-1.975H14.7A.417.417,0,0,0,14.7,4h-3.38A3.346,3.346,0,0,0,8.06,6.635a.417.417,0,0,0,.321.494Z"
                    transform="translate(-4.697 -2.333)"
                    stroke="#000"
                    stroke-width="0.5"
                  />
                  <circle
                    id="Oval"
                    cx="0.776"
                    cy="0.776"
                    r="0.776"
                    transform="translate(10.864 1.552)"
                    stroke="#000"
                    stroke-width="0.5"
                  />
                </g>
              </g>
            </svg>
          </div>
          Есть место для курения
        </li>
        <li>
          <div class="ico">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25.542"
              height="19.256"
              viewBox="0 0 25.542 19.256"
            >
              <g id="Page-1" transform="translate(0.264 0.25)">
                <g
                  id="_037---Sheet"
                  data-name="037---Sheet"
                  transform="translate(0.003)"
                >
                  <path
                    id="Shape"
                    d="M24.927,10.028,23.688,3.956A5.021,5.021,0,0,0,18.8,0H6.623A5.02,5.02,0,0,0,1.736,3.955L.127,11.485a.241.241,0,0,0,0,.03,6.025,6.025,0,0,0,6.081,7.237H22.713a2.292,2.292,0,0,0,2.281-2.516,2.327,2.327,0,0,0-1.762-1.993,4.151,4.151,0,0,0,1.695-4.205s0-.007,0-.011ZM2.551,4.129A4.183,4.183,0,0,1,6.623.833H18.8a4.182,4.182,0,0,1,4.072,3.292l.736,3.605a4.145,4.145,0,0,0-2.77-1.063H6.044A5.99,5.99,0,0,0,1.669,8.547c-.029.03-.053.064-.083.095Zm18.287,10.04H6.044a1.461,1.461,0,0,1-1.451-1.605,1.517,1.517,0,0,1,1.535-1.312h14.71a.417.417,0,0,0,0-.833H6.128a2.358,2.358,0,0,0-2.364,2.064A2.294,2.294,0,0,0,6.044,15H22.633a1.514,1.514,0,0,1,1.532,1.314,1.448,1.448,0,0,1-.372,1.125,1.463,1.463,0,0,1-1.079.478H6.208A5.289,5.289,0,0,1,.842,12.973,5.214,5.214,0,0,1,6.044,7.5H20.838a3.334,3.334,0,0,1,0,6.668Z"
                    transform="translate(-0.003)"
                    stroke="#000"
                    stroke-width="0.5"
                  />
                  <path
                    id="Shape-2"
                    data-name="Shape"
                    d="M8.382,7.13a.413.413,0,0,0,.087.009.417.417,0,0,0,.407-.33,2.508,2.508,0,0,1,2.442-1.975H14.7A.417.417,0,0,0,14.7,4h-3.38A3.346,3.346,0,0,0,8.06,6.635a.417.417,0,0,0,.321.494Z"
                    transform="translate(-4.697 -2.333)"
                    stroke="#000"
                    stroke-width="0.5"
                  />
                  <circle
                    id="Oval"
                    cx="0.776"
                    cy="0.776"
                    r="0.776"
                    transform="translate(10.864 1.552)"
                    stroke="#000"
                    stroke-width="0.5"
                  />
                </g>
              </g>
            </svg>
          </div>
          Смена постельного белья
        </li>
        <li>
          <div class="ico">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25.542"
              height="19.256"
              viewBox="0 0 25.542 19.256"
            >
              <g id="Page-1" transform="translate(0.264 0.25)">
                <g
                  id="_037---Sheet"
                  data-name="037---Sheet"
                  transform="translate(0.003)"
                >
                  <path
                    id="Shape"
                    d="M24.927,10.028,23.688,3.956A5.021,5.021,0,0,0,18.8,0H6.623A5.02,5.02,0,0,0,1.736,3.955L.127,11.485a.241.241,0,0,0,0,.03,6.025,6.025,0,0,0,6.081,7.237H22.713a2.292,2.292,0,0,0,2.281-2.516,2.327,2.327,0,0,0-1.762-1.993,4.151,4.151,0,0,0,1.695-4.205s0-.007,0-.011ZM2.551,4.129A4.183,4.183,0,0,1,6.623.833H18.8a4.182,4.182,0,0,1,4.072,3.292l.736,3.605a4.145,4.145,0,0,0-2.77-1.063H6.044A5.99,5.99,0,0,0,1.669,8.547c-.029.03-.053.064-.083.095Zm18.287,10.04H6.044a1.461,1.461,0,0,1-1.451-1.605,1.517,1.517,0,0,1,1.535-1.312h14.71a.417.417,0,0,0,0-.833H6.128a2.358,2.358,0,0,0-2.364,2.064A2.294,2.294,0,0,0,6.044,15H22.633a1.514,1.514,0,0,1,1.532,1.314,1.448,1.448,0,0,1-.372,1.125,1.463,1.463,0,0,1-1.079.478H6.208A5.289,5.289,0,0,1,.842,12.973,5.214,5.214,0,0,1,6.044,7.5H20.838a3.334,3.334,0,0,1,0,6.668Z"
                    transform="translate(-0.003)"
                    stroke="#000"
                    stroke-width="0.5"
                  />
                  <path
                    id="Shape-2"
                    data-name="Shape"
                    d="M8.382,7.13a.413.413,0,0,0,.087.009.417.417,0,0,0,.407-.33,2.508,2.508,0,0,1,2.442-1.975H14.7A.417.417,0,0,0,14.7,4h-3.38A3.346,3.346,0,0,0,8.06,6.635a.417.417,0,0,0,.321.494Z"
                    transform="translate(-4.697 -2.333)"
                    stroke="#000"
                    stroke-width="0.5"
                  />
                  <circle
                    id="Oval"
                    cx="0.776"
                    cy="0.776"
                    r="0.776"
                    transform="translate(10.864 1.552)"
                    stroke="#000"
                    stroke-width="0.5"
                  />
                </g>
              </g>
            </svg>
          </div>
          Смена полотенец
        </li>
        <li>
          <div class="ico">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25.542"
              height="19.256"
              viewBox="0 0 25.542 19.256"
            >
              <g id="Page-1" transform="translate(0.264 0.25)">
                <g
                  id="_037---Sheet"
                  data-name="037---Sheet"
                  transform="translate(0.003)"
                >
                  <path
                    id="Shape"
                    d="M24.927,10.028,23.688,3.956A5.021,5.021,0,0,0,18.8,0H6.623A5.02,5.02,0,0,0,1.736,3.955L.127,11.485a.241.241,0,0,0,0,.03,6.025,6.025,0,0,0,6.081,7.237H22.713a2.292,2.292,0,0,0,2.281-2.516,2.327,2.327,0,0,0-1.762-1.993,4.151,4.151,0,0,0,1.695-4.205s0-.007,0-.011ZM2.551,4.129A4.183,4.183,0,0,1,6.623.833H18.8a4.182,4.182,0,0,1,4.072,3.292l.736,3.605a4.145,4.145,0,0,0-2.77-1.063H6.044A5.99,5.99,0,0,0,1.669,8.547c-.029.03-.053.064-.083.095Zm18.287,10.04H6.044a1.461,1.461,0,0,1-1.451-1.605,1.517,1.517,0,0,1,1.535-1.312h14.71a.417.417,0,0,0,0-.833H6.128a2.358,2.358,0,0,0-2.364,2.064A2.294,2.294,0,0,0,6.044,15H22.633a1.514,1.514,0,0,1,1.532,1.314,1.448,1.448,0,0,1-.372,1.125,1.463,1.463,0,0,1-1.079.478H6.208A5.289,5.289,0,0,1,.842,12.973,5.214,5.214,0,0,1,6.044,7.5H20.838a3.334,3.334,0,0,1,0,6.668Z"
                    transform="translate(-0.003)"
                    stroke="#000"
                    stroke-width="0.5"
                  />
                  <path
                    id="Shape-2"
                    data-name="Shape"
                    d="M8.382,7.13a.413.413,0,0,0,.087.009.417.417,0,0,0,.407-.33,2.508,2.508,0,0,1,2.442-1.975H14.7A.417.417,0,0,0,14.7,4h-3.38A3.346,3.346,0,0,0,8.06,6.635a.417.417,0,0,0,.321.494Z"
                    transform="translate(-4.697 -2.333)"
                    stroke="#000"
                    stroke-width="0.5"
                  />
                  <circle
                    id="Oval"
                    cx="0.776"
                    cy="0.776"
                    r="0.776"
                    transform="translate(10.864 1.552)"
                    stroke="#000"
                    stroke-width="0.5"
                  />
                </g>
              </g>
            </svg>
          </div>
          Есть место для курения
        </li>
        <li>
          <div class="ico">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25.542"
              height="19.256"
              viewBox="0 0 25.542 19.256"
            >
              <g id="Page-1" transform="translate(0.264 0.25)">
                <g
                  id="_037---Sheet"
                  data-name="037---Sheet"
                  transform="translate(0.003)"
                >
                  <path
                    id="Shape"
                    d="M24.927,10.028,23.688,3.956A5.021,5.021,0,0,0,18.8,0H6.623A5.02,5.02,0,0,0,1.736,3.955L.127,11.485a.241.241,0,0,0,0,.03,6.025,6.025,0,0,0,6.081,7.237H22.713a2.292,2.292,0,0,0,2.281-2.516,2.327,2.327,0,0,0-1.762-1.993,4.151,4.151,0,0,0,1.695-4.205s0-.007,0-.011ZM2.551,4.129A4.183,4.183,0,0,1,6.623.833H18.8a4.182,4.182,0,0,1,4.072,3.292l.736,3.605a4.145,4.145,0,0,0-2.77-1.063H6.044A5.99,5.99,0,0,0,1.669,8.547c-.029.03-.053.064-.083.095Zm18.287,10.04H6.044a1.461,1.461,0,0,1-1.451-1.605,1.517,1.517,0,0,1,1.535-1.312h14.71a.417.417,0,0,0,0-.833H6.128a2.358,2.358,0,0,0-2.364,2.064A2.294,2.294,0,0,0,6.044,15H22.633a1.514,1.514,0,0,1,1.532,1.314,1.448,1.448,0,0,1-.372,1.125,1.463,1.463,0,0,1-1.079.478H6.208A5.289,5.289,0,0,1,.842,12.973,5.214,5.214,0,0,1,6.044,7.5H20.838a3.334,3.334,0,0,1,0,6.668Z"
                    transform="translate(-0.003)"
                    stroke="#000"
                    stroke-width="0.5"
                  />
                  <path
                    id="Shape-2"
                    data-name="Shape"
                    d="M8.382,7.13a.413.413,0,0,0,.087.009.417.417,0,0,0,.407-.33,2.508,2.508,0,0,1,2.442-1.975H14.7A.417.417,0,0,0,14.7,4h-3.38A3.346,3.346,0,0,0,8.06,6.635a.417.417,0,0,0,.321.494Z"
                    transform="translate(-4.697 -2.333)"
                    stroke="#000"
                    stroke-width="0.5"
                  />
                  <circle
                    id="Oval"
                    cx="0.776"
                    cy="0.776"
                    r="0.776"
                    transform="translate(10.864 1.552)"
                    stroke="#000"
                    stroke-width="0.5"
                  />
                </g>
              </g>
            </svg>
          </div>
          Смена постельного белья
        </li>
        <li>
          <div class="ico">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25.542"
              height="19.256"
              viewBox="0 0 25.542 19.256"
            >
              <g id="Page-1" transform="translate(0.264 0.25)">
                <g
                  id="_037---Sheet"
                  data-name="037---Sheet"
                  transform="translate(0.003)"
                >
                  <path
                    id="Shape"
                    d="M24.927,10.028,23.688,3.956A5.021,5.021,0,0,0,18.8,0H6.623A5.02,5.02,0,0,0,1.736,3.955L.127,11.485a.241.241,0,0,0,0,.03,6.025,6.025,0,0,0,6.081,7.237H22.713a2.292,2.292,0,0,0,2.281-2.516,2.327,2.327,0,0,0-1.762-1.993,4.151,4.151,0,0,0,1.695-4.205s0-.007,0-.011ZM2.551,4.129A4.183,4.183,0,0,1,6.623.833H18.8a4.182,4.182,0,0,1,4.072,3.292l.736,3.605a4.145,4.145,0,0,0-2.77-1.063H6.044A5.99,5.99,0,0,0,1.669,8.547c-.029.03-.053.064-.083.095Zm18.287,10.04H6.044a1.461,1.461,0,0,1-1.451-1.605,1.517,1.517,0,0,1,1.535-1.312h14.71a.417.417,0,0,0,0-.833H6.128a2.358,2.358,0,0,0-2.364,2.064A2.294,2.294,0,0,0,6.044,15H22.633a1.514,1.514,0,0,1,1.532,1.314,1.448,1.448,0,0,1-.372,1.125,1.463,1.463,0,0,1-1.079.478H6.208A5.289,5.289,0,0,1,.842,12.973,5.214,5.214,0,0,1,6.044,7.5H20.838a3.334,3.334,0,0,1,0,6.668Z"
                    transform="translate(-0.003)"
                    stroke="#000"
                    stroke-width="0.5"
                  />
                  <path
                    id="Shape-2"
                    data-name="Shape"
                    d="M8.382,7.13a.413.413,0,0,0,.087.009.417.417,0,0,0,.407-.33,2.508,2.508,0,0,1,2.442-1.975H14.7A.417.417,0,0,0,14.7,4h-3.38A3.346,3.346,0,0,0,8.06,6.635a.417.417,0,0,0,.321.494Z"
                    transform="translate(-4.697 -2.333)"
                    stroke="#000"
                    stroke-width="0.5"
                  />
                  <circle
                    id="Oval"
                    cx="0.776"
                    cy="0.776"
                    r="0.776"
                    transform="translate(10.864 1.552)"
                    stroke="#000"
                    stroke-width="0.5"
                  />
                </g>
              </g>
            </svg>
          </div>
          Смена полотенец
        </li>
      </ul>
      <h2>Местоположение</h2>
      <div class="location">
        {{ applicationObject.object.sObjectAddress }}
      </div>
      <div class="mapObject">
        <client-only>
          <yandex-map
            :coords="applicationObject.object.aObjectCoordinate.coordinates"
            :zoom="15"
            :scroll-zoom="true"
            :init-without-markers="false"
            :controls="yandexMapControls"
            ymap-class="map"
          >
            <ymap-marker
              :marker-id="1"
              :coords="applicationObject.object.aObjectCoordinate.coordinates"
              marker-type="placemark"
            ></ymap-marker>
          </yandex-map>
        </client-only>
      </div>
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
            <span>{{ applicationObject.iObjectPrice }} ₽</span>
            {{ applicationObject.iObjectPrice }} ₽
          </div>
          <div class="desc">За весь период проживания</div>
        </div>
        <div class="dates">
          <label>Проживание:</label>
          <span>{{ dates }}</span>
        </div>
        <div class="guest">
          <label>Гостей:</label>
          <span>{{ sApplicationAdultAndChildren }}</span>
        </div>
        <div class="time">
          <label>Предложение сделано:</label>
          <div class="v">
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
            <span>{{ dDate }}</span>
          </div>
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
