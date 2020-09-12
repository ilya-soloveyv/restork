<template>
  <div class="history landing-adaptive">
    <div class="wrapHistory">
      <HistoryTitle :title="title" />
      <HistoryItem
        v-for="item in list"
        :key="item.id"
        :desc="item.history"
        :author="item.author.name"
      />
    </div>
  </div>
</template>

<script>
import HistoryTitle from './Title'
import HistoryItem from './HistoryItem'
export default {
  components: { HistoryTitle, HistoryItem },
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
.history {
  background: #f5f5f5;
}
</style>
