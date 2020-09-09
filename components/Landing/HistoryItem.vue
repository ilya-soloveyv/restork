<template>
  <div>
    <div>
      {{ desc }}
    </div>
    <div>
      {{ author }}
    </div>
  </div>
</template>

<script>
export default {
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
