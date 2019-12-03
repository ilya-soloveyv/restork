<template>
  <div>
    <ul>
      <li>
        <nuxt-link to="/">Index</nuxt-link>
      </li>
      <li v-if="!$auth.$state.loggedIn">
        <nuxt-link to="/login">Login</nuxt-link>
      </li>
      <li v-if="$auth.$state.loggedIn">
        <nuxt-link to="/profile">Profile</nuxt-link>
      </li>
      <li v-if="$auth.$state.user.iUserAdmin">
        <nuxt-link to="/admin">Admin</nuxt-link>
      </li>
      <li v-if="$auth.$state.loggedIn">
        {{ $auth.$state.user.sUserPhone }}
        <a @click.prevent="$auth.logout()" href="#">Logout</a>
      </li>
    </ul>
    <nuxt />
    <pre>{{ $auth.$state.user }}</pre>
  </div>
</template>
