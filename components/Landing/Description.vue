<template>
  <div class="desc landing-adaptive">
    <div class="wrapDesc">
      <div class="wrapRegister">
        <Register
          :image="registerObj.image"
          :title="registerObj.title"
          :desc="registerObj.desc"
        />
      </div>
      <div class="wrapAdvert">
        <Advert
          :imagePhone="advertObj.imagePhone"
          :imageFoto="advertObj.imageFoto"
          :fotoNumber="advertObj.fotoNumber"
          :desc="advertObj.desc"
          :where="advertObj.where"
          :priceOld="advertObj.priceOld"
          :priceNew="advertObj.priceNew"
          :howLong="advertObj.howLong"
          :howMuch="advertObj.howMuch"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Register from './Register'
import Advert from './Advert'
export default {
  components: {
    Register,
    Advert
  },
  props: {
    registerObj: {
      type: Object,
      default: null
    },
    advertObj: {
      type: Object,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
.desc {
  background: #ffffff;
  margin: 50px 0;
  @media (max-width: 1279px) {
    margin: 50px 0 100px 0;
  }
  @media (max-width: 767px) {
    margin: 80px 0;
  }
  .wrapDesc {
    // display: grid;
    // grid-template-columns: auto 1fr 1fr auto;
    // grid-template-rows: 1fr;
    // grid-column-gap: 85px;
    margin: 0 auto;
    display: flex;
    width: 690px;
    @media (max-width: 991px) {
      margin: 0;
      width: 100%;
    }
    @media (max-width: 767px) {
      grid-column-gap: 35px;
    }
    @media (max-width: 767px) {
      display: block;
    }
    .wrapRegister {
      // grid-column: 2/3;
      padding-right: 85px;
      @media (max-width: 1279px) {
        padding-right: 35px;
      }
      @media (max-width: 767px) {
        padding-right: 0px;
      }
    }
    .wrapAdvert {
      // grid-column: 3/4;
      @media (max-width: 767px) {
        display: none;
      }
    }
  }
}
</style>
