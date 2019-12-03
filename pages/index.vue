<template>
  <div id="restork">
    Restork
    <nuxt-link to="/admin">administrator</nuxt-link>
  </div>
</template>

<style lang="scss" scoped>
#restork {
  background: #ddd;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
  text-transform: uppercase;
  a {
    font-weight: normal;
    font-size: 10px;
  }
}
</style>
