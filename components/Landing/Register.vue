<template>
  <div>
    <div>
      {{ image }}
    </div>
    <div>
      {{ title }}
    </div>
    <div>
      {{ desc }}
    </div>
    <button>Зарегестрироваться</button>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      default: null
    },
    title: {
      type: String,
      default: null
    },
    desc: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="scss"></style>
