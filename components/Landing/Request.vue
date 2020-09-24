<template>
  <div class="request">
    <div class="landing-adaptive">
      <div class="wrapRequest">
        <RequestTitle :title="title" />
      </div>
    </div>
    <div class="wrapCarouser">
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
        focusOnSelect: true,
        arrows: false,
        dots: false,
        infinite: false,
        edgeFriction: 0.35,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              centerMode: true,
              centerPadding: '100px',
              infinite: true
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode: true,
              centerPadding: '50px',
              infinite: true
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
  background: #f5f5f5;
  padding-bottom: 50px;
  @media (max-width: 991px) {
    padding-bottom: 40px;
  }
  .landing-adaptive {
    grid-column: 2/3;
    grid-row: 1/2;
  }
  .wrapCarouser {
    display: grid;
    grid-template-columns: auto 1110px auto;
    grid-template-rows: auto;
    @media (max-width: 1199px) {
      grid-template-columns: auto 930px auto;
    }
    @media (max-width: 991px) {
      grid-template-columns: 1fr;
    }
    .carousel {
      grid-column: 2/3;
      grid-row: 2/3;
      @media (max-width: 991px) {
        grid-column: 1/4;
        overflow: hidden;
      }
      /deep/ .slick-list {
        margin: 0 -12px;
        .slick-slide {
          padding: 0 12px;
        }
      }
    }
  }
}
</style>
