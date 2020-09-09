<template>
  <div class="desc landing-adaptive">
    <div class="wrapDesc">
      <Register
        :image="registerObj.image"
        :title="registerObj.title"
        :desc="registerObj.desc"
      />
      <Advert
        :image="advertObj.image"
        :photoNumber="advertObj.photoNumber"
        :desc="advertObj.desc"
        :where="advertObj.where"
        :priceOld="advertObj.priceOld"
        :priceNew="advertObj.priceNew"
        :howLong="advertObj.howLong"
        :howMuch="advertObj.howMuch"
      />
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
  background: yellow;
}
</style>
