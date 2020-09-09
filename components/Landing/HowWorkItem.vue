<template>
  <div class="wrapHowWorkItem">
    <div class="image">
      <img :src="'/landing/' + image" />
    </div>
    <div class="wrapText">
      <div class="title">
        {{ title }}
      </div>
      <div class="desc">
        {{ desc }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      default: null
    },
    title: {
      type: String,
      default: null
    },
    desc: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapHowWorkItem {
  display: flex;
  flex-direction: column;
  @media (max-width: 767px) {
    flex-direction: row;
    // margin-bottom: 35px;
  }
  @media (max-width: 575px) {
    // margin-bottom: 25px;
  }
  .image {
    height: 50px;
    width: 50px;
    margin-bottom: 20px;
    @media (max-width: 767px) {
      margin-right: 30px;
    }
  }
  .wrapText {
    .title {
      font-family: Montserrat;
      font-size: 20px;
      font-weight: 500;
      line-height: 26px;
      min-height: 52px;
      margin-bottom: 20px;
      @media (max-width: 767px) {
        margin-bottom: 25px;
      }
      @media (max-width: 575px) {
        margin-bottom: 20px;
        font-size: 16px;
        line-height: 20px;
      }
    }
    .desc {
      font-family: Montserrat;
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
      color: #818181;
      @media (max-width: 575px) {
        font-size: 12px;
        line-height: 18px;
      }
    }
  }
}
</style>
