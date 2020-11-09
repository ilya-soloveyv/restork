<template>
  <div class="wrapItem">
    <DescImage :desc="desc" />
    <div class="author">
      <img :src="'/landing/' + image" class="avatar" />
      <div class="authorName">{{ author }}</div>
    </div>
  </div>
</template>

<script>
import DescImage from './HistoryItemDescImage'
// import Author from './HistoryItemAuthor'
export default {
  components: {
    DescImage
    // Author
  },
  props: {
    desc: {
      type: String,
      default: null
    },
    author: {
      type: String,
      default: null
    },
    image: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapItem {
  // height: 100%;
  .author {
    display: flex;
    margin-top: 50px;
    @media (max-width: 767px) {
      margin-top: 35px;
    }
    .avatar {
      display: block;
      width: 70px;
      height: 70px;
      border-radius: 50%;
    }
    .authorName {
      width: 166px;
      margin-left: 25px;
      font-family: Montserrat;
      font-size: 20px;
      font-weight: 400;
      line-height: 24px;
      display: flex;
      align-items: center;
      @media (max-width: 767px) {
        font-size: 16px;
        font-weight: 400;
        line-height: 22px;
      }
    }
  }
}
</style>
