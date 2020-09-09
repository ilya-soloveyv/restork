<template>
  <div>
    <div>{{ image }}</div>
    <div>{{ photoNumber }}</div>
    <div>{{ desc }}</div>
    <div>{{ where }}</div>
    <div>{{ priceOld }}</div>
    <div>{{ priceNew }}</div>
    <div>{{ howLong }}</div>
    <div>{{ howMuch }}</div>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      default: null
    },
    photoNumber: {
      type: String,
      default: null
    },
    desc: {
      type: String,
      default: null
    },
    where: {
      type: String,
      default: null
    },
    priceOld: {
      type: String,
      default: null
    },
    priceNew: {
      type: String,
      default: null
    },
    howLong: {
      type: String,
      default: null
    },
    howMuch: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="scss"></style>
