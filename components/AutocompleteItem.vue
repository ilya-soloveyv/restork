<template>
  <div>
    <b>{{ item.formattedAddress }}</b>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    },
    searchText: {
      type: String,
      required: true
    }
  }
}
</script>
