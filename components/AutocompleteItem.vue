<template>
  <div>
    <b>{{ item.formattedAddress }}</b>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      required: true
    },
    searchText: {
      required: true
    }
  }
}
</script>
