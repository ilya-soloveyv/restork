<template>
  <div :class="{ wait: !object.iObjectPrice }" class="applicationObjectItem">
    <div class="images">
      <VueSlickCarousel
        :arrows="true"
        :dots="true"
        :infinite="false"
        :edgeFriction="0.35"
        :speed="500"
        :slidesToShow="1"
        :slidesToScroll="1"
        v-if="object.object.object_images.length"
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
          v-for="(image, index) in object.object.object_images"
          :key="index"
          @click.prevent="goToApplicationObject(object)"
          class="image"
        >
          <img
            :src="
              SELECTEL_WEB +
                '/object/' +
                object.object.iObjectID +
                '/interface/' +
                image.sObjectImage
            "
          />
        </div>
      </VueSlickCarousel>
      <div class="newAlert"></div>
      <div v-if="newMessages" class="newMessage">
        <svg
          id="Speech_Bubble_48_"
          xmlns="http://www.w3.org/2000/svg"
          width="10.641"
          height="9.369"
          viewBox="0 0 10.641 9.369"
        >
          <g
            id="Сгруппировать_140"
            data-name="Сгруппировать 140"
            transform="translate(0 0)"
          >
            <path
              id="Контур_92"
              data-name="Контур 92"
              d="M1.549,39.905H.795l.533-.533A1.8,1.8,0,0,0,1.843,38.3,4.063,4.063,0,0,1,.251,36.422,3.687,3.687,0,0,1,.144,34.06a4.626,4.626,0,0,1,1.772-2.475,5.791,5.791,0,0,1,3.421-1.049,5.736,5.736,0,0,1,3.955,1.348A4.046,4.046,0,0,1,10.3,36.519,4.162,4.162,0,0,1,9.29,37.927,5.722,5.722,0,0,1,5.338,39.28a7.191,7.191,0,0,1-1.789-.228,2.794,2.794,0,0,1-2,.852Z"
              transform="translate(0 -30.536)"
              fill="#fff"
            />
          </g>
        </svg>
        {{ newMessages }}
      </div>
      <div class="favourite">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18.225"
          height="16.214"
          viewBox="0 0 18.225 16.214"
        >
          <path
            id="heart"
            d="M16.779,1.587A4.9,4.9,0,0,0,13.134,0,4.585,4.585,0,0,0,10.27.988,5.859,5.859,0,0,0,9.112,2.2,5.855,5.855,0,0,0,7.954.988,4.584,4.584,0,0,0,5.091,0,4.9,4.9,0,0,0,1.446,1.587,5.7,5.7,0,0,0,0,5.477a6.783,6.783,0,0,0,1.808,4.44,38.542,38.542,0,0,0,4.525,4.247c.627.534,1.338,1.14,2.075,1.785a1.07,1.07,0,0,0,1.409,0c.738-.645,1.449-1.251,2.076-1.786a38.524,38.524,0,0,0,4.524-4.247,6.783,6.783,0,0,0,1.807-4.44A5.7,5.7,0,0,0,16.779,1.587Zm0,0"
            fill="#fff"
          />
        </svg>
      </div>
    </div>
    <div @click.prevent="goToApplicationObject(object)" class="data">
      <div v-if="object.iObjectPrice" class="time">
        <svg
          id="clock"
          xmlns="http://www.w3.org/2000/svg"
          width="9.891"
          height="9.891"
          viewBox="0 0 9.891 9.891"
        >
          <path
            id="Контур_61"
            data-name="Контур 61"
            d="M4.945,0A4.945,4.945,0,1,0,9.891,4.945,4.951,4.951,0,0,0,4.945,0Zm0,9.272A4.327,4.327,0,1,1,9.272,4.945,4.332,4.332,0,0,1,4.945,9.272Z"
            fill="#E20000"
          />
          <path
            id="Контур_62"
            data-name="Контур 62"
            d="M208.412,83.118h-.618v3.219l1.945,1.945.437-.437-1.764-1.764Z"
            transform="translate(-203.158 -81.263)"
            fill="#E20000"
          />
        </svg>
        {{ dDate }}
      </div>
      <div class="cost">
        <template v-if="object.iObjectPrice">
          <div class="old">{{ object.iObjectPrice }} ₽</div>
          <div class="new">{{ object.iObjectPrice }} ₽</div>
        </template>
        <template v-else>
          <div class="wait">Ожидаем</div>
        </template>
      </div>
      <div class="options">
        <span>{{ object.object.object_type.sObjectTypeTitle }}</span>
        <span>{{ object.object.iObjectArea }} м<sup>2</sup></span>
        <span>{{ object.object.iObjectRoomCount }} ком.</span>
        <span>{{ object.object.iObjectBed }} кров.</span>
      </div>
      <div class="desc">
        {{ object.object.sObjectTitle }}
      </div>
      <div class="location">
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
        10 минут пешком до моря
      </div>
      <div class="rating">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="19.362"
          height="18.555"
          viewBox="0 0 19.362 18.555"
        >
          <path
            id="star"
            d="M19.311,7.5a1.027,1.027,0,0,0-.886-.708l-5.588-.507-2.21-5.172a1.029,1.029,0,0,0-1.893,0L6.525,6.289.936,6.8A1.03,1.03,0,0,0,.352,8.6l4.224,3.7L3.33,17.788A1.027,1.027,0,0,0,4.861,18.9l4.82-2.881L14.5,18.9a1.029,1.029,0,0,0,1.531-1.112L14.785,12.3l4.224-3.7A1.03,1.03,0,0,0,19.311,7.5Zm0,0"
            transform="translate(0 -0.492)"
          />
        </svg>
        4.9
      </div>
      <!-- {{ object }} -->
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
moment.locale('ru')

export default {
  components: {
    VueSlickCarousel
  },
  props: {
    object: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    SELECTEL_WEB() {
      return process.env.SELECTEL_WEB
    },
    dDate() {
      return moment(this.object.dDate).fromNow(true)
    },
    newMessages() {
      return this.object.messages.length
    }
  },
  methods: {
    goToApplicationObject(object) {
      this.$router.push(
        '/dashboard/application/' +
          this.object.iApplicationID +
          '/' +
          this.object.iApplicationObjectID
      )
    }
  }
}
</script>

<style lang="scss" scoped>
.applicationObjectItem {
  border-radius: 3px;
  box-shadow: 0 0 0 rgba($color: #000000, $alpha: 0);
  transition: box-shadow 0.15s ease-in-out;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 200px 1fr;
  text-decoration: none;
  color: black;
  cursor: pointer;
  &.wait {
    .desc {
      color: #818181 !important;
    }
    .location {
      color: #818181 !important;
      svg {
        // stroke: red;
        fill: #818181;
      }
    }
    .rating {
      color: #818181 !important;
      svg {
        fill: #818181 !important;
      }
    }
  }
  &:hover {
    box-shadow: 0 3px 15px rgba($color: #000000, $alpha: 0.16);
  }
  .images {
    border-radius: 3px 3px 0 0;
    background-color: #dddddd;
    overflow: hidden;
    height: 200px;
    position: relative;
    .slick-slider {
      width: 100%;
      height: 100%;
      // background-color: red;
      /deep/ .slick-prev {
        left: 0;
        z-index: 1;
        width: 48px;
        height: 48px;
        &.slick-disabled {
          opacity: 0.5;
        }
        &::before {
          display: none;
        }
      }
      /deep/ .slick-next {
        right: 0;
        z-index: 1;
        width: 48px;
        height: 48px;
        &.slick-disabled {
          opacity: 0.5;
        }
        &::before {
          display: none;
        }
      }
      /deep/ .slick-list {
        height: 100%;
        // background-color: orange;
        .slick-track {
          height: 100%;
          .slick-slide {
            div {
              height: 100%;
            }
          }
        }
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          pointer-events: none;
        }
      }
      /deep/ .slick-dots {
        bottom: 0 !important;
        display: flex !important;
        justify-content: center;
        // background-color: red;
        padding-bottom: 10px;
        li {
          // background-color: orange;
          width: 14px;
          height: 10px;
          padding: 0;
          margin: 0;
          button {
            width: 100%;
            height: 100%;
            padding: 0;
            &::before {
              width: 10px;
              height: 10px;
              display: flex;
              justify-content: center;
              align-items: center;
              color: white;
            }
          }
        }
      }
    }
    .newAlert {
      position: absolute;
      right: 25px;
      bottom: 25px;
      width: 16px;
      height: 16px;
      background-color: #077bff;
      border-radius: 8px;
    }
    .newMessage {
      position: absolute;
      top: 25px;
      right: 25px;
      width: auto;
      height: 24px;
      background-color: #077bff;
      color: white;
      border-radius: 12px;
      display: flex;
      align-items: center;
      padding: 0 10px;
      font-size: 12px;
      svg {
        margin-right: 5px;
      }
    }
    .favourite {
      position: absolute;
      top: 25px;
      left: 25px;
      opacity: 0.5;
      &:hover {
        opacity: 0.8;
      }
    }
  }
  .data {
    border-radius: 0 0 3px 3px;
    background-color: white;
    padding: 25px;
    display: grid;
    grid-template-columns: 50% 1fr 70px;
    grid-template-rows: 1fr;
    grid-row-gap: 15px;
    .time {
      grid-row: 1/2;
      grid-column: 1/2;
      font-size: 12px;
      line-height: 20px;
      color: #818181;
      display: flex;
      align-items: center;
      svg {
        margin-right: 8px;
      }
    }
    .cost {
      grid-row: 1/2;
      grid-column: 2/4;
      font-size: 16px;
      color: black;
      font-weight: bold;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      line-height: 20px;
      .old {
        color: #818181;
        text-decoration: line-through;
        font-size: 14px;
        font-weight: normal;
        padding-right: 8px;
      }
      .wait {
        color: #818181;
      }
    }
    .options {
      grid-row: 2/3;
      grid-column: 1/4;
      font-size: 14px;
      color: #818181;
      display: flex;
      span {
        border-right: 1px solid #818181;
        padding: 0 5px;
        line-height: 14px;
        &:first-child {
          padding-left: 0;
        }
        &:last-child {
          border-right: none;
          padding-right: 0;
        }
      }
    }
    .desc {
      grid-row: 3/4;
      grid-column: 1/4;
      font-size: 16px;
      color: black;
    }
    .location {
      grid-row: 4/5;
      grid-column: 1/3;
      font-size: 14px;
      color: black;
      display: flex;
      align-items: center;
      svg {
        margin-right: 8px;
      }
    }
    .rating {
      grid-row: 4/5;
      grid-column: 3/4;
      font-weight: bold;
      font-size: 14px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      svg {
        fill: #ffc107;
        margin-right: 4px;
      }
    }
  }
}
</style>
