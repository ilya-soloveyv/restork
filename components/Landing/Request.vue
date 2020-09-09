<template>
  <div class="request landing-adaptive">
    <div class="wrapRequest">
      <RequestTitle :title="title" />
      <div class="wrapCarousel">
        <RequestItem
          v-for="item in list"
          :key="item.id"
          :accomType="item.accomType"
          :where="item.where"
          :when="item.when"
          :howMuch="item.howMuch"
        />
      </div>
    </div>
  </div>
</template>

<script>
import RequestTitle from './Title'
import RequestItem from './RequestItem'
export default {
  components: {
    RequestTitle,
    RequestItem
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
.request {
  background: green;
  .wrapCarousel {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    grid-column-gap: 25px;
  }
}
</style>
