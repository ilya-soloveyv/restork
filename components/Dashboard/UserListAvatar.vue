<template>
  <div class="userlistavatar">
    <VueSlickCarousel ref="carousel" v-if="users.length" v-bind="options">
      <img
        v-for="(user, index) in users"
        :key="index"
        :src="SELECTEL_WEB + '/user/preview/' + user.sUserAvatar"
        class="image"
      />
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
  components: {
    VueSlickCarousel
  },
  props: {
    users: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      options: {
        arrows: false,
        dots: false,
        infinite: true,
        edgeFriction: 0.35,
        speed: 500,
        slidesToScroll: 1,
        swipeToSlide: true,
        centerMode: true,
        focusOnSelect: true,
        centerPadding: '20px',
        responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 10
            }
          },
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 9
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 8
            }
          },
          {
            breakpoint: 700,
            settings: {
              slidesToShow: 7
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 6
            }
          },
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 5
            }
          },
          {
            breakpoint: 400,
            settings: {
              slidesToShow: 4
            }
          }
        ]
      }
    }
  },
  computed: {
    SELECTEL_WEB() {
      return process.env.SELECTEL_WEB
    }
  }
}
</script>

<style lang="scss" scoped>
.userlistavatar {
  background-color: white;
  height: 115px;
  overflow: hidden;
  box-shadow: 0 3px 15px rgba($color: #000000, $alpha: 0.16);
  @media (max-width: 767px) {
    height: 90px;
  }
  /deep/ .slick-slider {
    height: 100%;
    .slick-list {
      height: 100%;
      .slick-track {
        height: 100%;
        .slick-slide {
          height: 100%;
          div {
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            img {
              width: 60px !important;
              height: 60px;
              border-radius: 50%;
              pointer-events: none;
              @media (max-width: 767px) {
                width: 45px !important;
                height: 45px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
