<template>
  <div class="wrapAuthor">
    <div class="name">
      name
    </div>
    <!-- <img class="avatar" :src="'/landing/' + image" /> -->
    <!-- <div class="authorName">{{ name }}</div> -->
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      default: null
    },
    name: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
.name {
  // padding-top: 50px;
  margin-top: 50px;
}
.wrapAuthor {
  //   margin-top: 50px;
  // display: flex;
  .avatar {
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
  }
}
</style>
