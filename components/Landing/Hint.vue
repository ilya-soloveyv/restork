<template>
  <div class="wrapHint">
    <div class="title">
      {{ title }}
    </div>
    <div class="list">
      <HintItem
        v-for="item in list"
        :key="item.name"
        :name="item.name"
        :desc="item.desc"
      />
    </div>
  </div>
</template>

<script>
import HintItem from './HintItem'
export default {
  components: {
    HintItem
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
  }
}
</script>

<style lang="scss" scoped>
.wrapHint {
  .title {
    margin: 100px 0 15px 0;
    font-family: Montserrat;
    font-size: 16px;
    line-height: 26px;
    color: #000000;
  }
  .list {
  }
}
</style>
