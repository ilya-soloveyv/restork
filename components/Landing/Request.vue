<template>
  <div class="request">
    <div class="landing-adaptive">
      <div class="wrapRequest">
        <RequestTitle :title="title" />
      </div>
    </div>
    <div class="carousel">
      <VueSlickCarousel v-bind="settings">
        <RequestItem
          v-for="item in list"
          :key="item.id"
          :accomType="item.accomType"
          :where="item.where"
          :when="item.when"
          :howMuch="item.howMuch"
        />
      </VueSlickCarousel>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import RequestTitle from './Title'
import RequestItem from './RequestItem'

export default {
  components: {
    RequestTitle,
    RequestItem,
    VueSlickCarousel
  },
  props: {
    title: {
      type: String,
      default: null
    },
    list: {
      type: Array,
      default: null
    }
  },
  data() {
    return {
      settings: {
        // centerMode: true,
        centerPadding: '100px',
        focusOnSelect: true,
        arrows: true,
        dots: true,
        infinite: false,
        edgeFriction: 0.35,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1279,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.request {
  background: green;
  .carousel {
    width: 100%;
    /deep/ .slick-list {
      margin: 0 -12px;
      // padding: 100xp;
      // background: red;
      .slick-slide {
        padding: 0 12px;
      }
    }
  }
}
</style>
