<template>
  <div class="main mainDashboard">
    <main>
      <div class="topNavBg">
        <b-container>
          <TopNav />
        </b-container>
      </div>
      <ConfirmPhone v-if="$auth.user.sUserPhoneKod" />
      <div id="dashboard" v-else>
        <b-container>
          <nuxt />
        </b-container>
      </div>
    </main>
  </div>
</template>

<script>
import TopNav from '~/components/TopNav'
import ConfirmPhone from '~/components/ConfirmPhone'
export default {
  components: {
    TopNav,
    ConfirmPhone
  },
  head: {
    script: [{ src: '/js/main.js' }]
  }
}
</script>

<style lang="scss" scoped>
#dashboard {
  flex-grow: 1;
  display: flex;
  .container {
    flex-grow: 1;
  }
}
</style>
