<template>
  <div
    :style="{ 'background-image': 'url(/landing/' + image + ')' }"
    class="welcome landing-adaptive"
  >
    <div class="wrapWelcome">
      <h1 class="title">
        {{ title }}
      </h1>
      <div class="desc">
        {{ desc }}
      </div>
      <b-button v-if="!isClient" variant="primary" size="lg">
        Добавить объект
      </b-button>
      <SearchForm v-if="isClient" />
    </div>
  </div>
</template>

<script>
import SearchForm from '../SearchForm'
export default {
  components: {
    SearchForm
  },
  props: {
    title: {
      type: String,
      default: null
    },
    desc: {
      type: String,
      default: null
    },
    image: {
      type: String,
      default: null
    },
    isClient: {
      type: Boolean,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
.welcome {
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  min-height: 586px;
  padding-top: 140px;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    // background-color: rgba(255, 255, 255, 0.5);
    // background: linear-gradient(#80668b, #020305);
    z-index: 1;
    background: transparent;
    background-image: linear-gradient(to bottom, #66828b, #020305);
    opacity: 0.8;
  }
  @media (max-width: 767px) {
    min-height: 455px;
  }
  @media (max-width: 575px) {
    min-height: 426px;
    padding-top: 180px;
  }
  // &:before {
  //   content: '';
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  //   height: 100%;
  //   width: 100%;
  //   //background-color: rgba($color: #000000, $alpha: 0.4);
  //   opacity: 0.4;
  //   background: linear-gradient(#80668b, #020305);
  //   z-index: -1;
  // }
  .wrapWelcome {
    width: 100%;
    z-index: 2;
    @media (max-width: 575px) {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
    .title {
      font-family: Montserrat;
      font-size: 30px;
      font-weight: 500;
      line-height: 37px;
      color: #ffffff;
      @media (max-width: 575px) {
        font-size: 26px;
        line-height: 28px;
      }
    }
    .desc {
      font-family: Montserrat;
      font-size: 16px;
      font-weight: 400;
      line-height: 20px;
      color: #ffffff;
      margin-bottom: 30px;
      @media (max-width: 575px) {
        font-size: 14px;
        line-height: 18px;
      }
    }
  }
  // background: green;
}
</style>
