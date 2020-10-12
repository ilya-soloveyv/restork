<template>
  <div class="hint">
    <div class="title">Подсказка</div>
    <div class="item" v-for="item in list" :key="item.name">
      <span class="name">{{ item.name }}</span> -
      <span class="desc">{{ item.desc }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
.hint {
  .title {
    font-family: Montserrat;
    font-size: 16px;
    line-height: 26px;
    color: #000000;
    margin-bottom: 15px;
  }
  .item {
    width: 300px;
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
}
</style>
