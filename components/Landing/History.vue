<template>
  <div class="history landing-adaptive">
    <div class="wrapHistory">
      <HistoryTitle :title="title" />
      <ul>
        <li v-for="item in list" :key="item.id">
          <HistoryItem :desc="item.history" :author="item.author.name" />
        </li>
      </ul>
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
  background: green;
}
</style>
