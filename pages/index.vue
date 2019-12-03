<template>
  <div id="restork">
    Restork
    <nuxt-link v-if="!$auth.$state.loggedIn" to="/login">Login</nuxt-link>
    <nuxt-link v-if="$auth.$state.loggedIn" to="/admin">Admin</nuxt-link>
    <a v-if="$auth.$state.loggedIn" @click.prevent="$auth.logout()" href="#">
      {{ $auth.$state.user.sUserPhone }} Logout
    </a>
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
