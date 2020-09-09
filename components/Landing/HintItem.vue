<template>
  <div class="item">
    <span class="name">{{ name }}</span> - <span class="desc">{{ desc }}</span>
  </div>
</template>

<script>
export default {
  props: {
    name: {
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
.item {
  width: 355px;
  border-radius: 10px;
  background: #fafafa;
  font-family: Montserrat;
  font-size: 14px;
  line-height: 18px;
  color: #000000;
  padding: 20px 16px;
  margin-bottom: 25px;
  .name {
    font-weight: 600;
  }
  .desc {
    font-weight: 400;
  }
}
</style>
