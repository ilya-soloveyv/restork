<template>
  <div>
    <DescImage :desc="desc" />
    <div>
      {{ author }}
    </div>
  </div>
</template>

<script>
import DescImage from './HistoryItemDescImage'
export default {
  components: {
    DescImage
  },
  props: {
    desc: {
      type: String,
      default: null
    },
    author: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="scss"></style>
