<template>
  <div class="main">
    <main>
      <TopNav />
      <b-container>
        <nuxt />
      </b-container>
    </main>
    <Footer />
    <template class="dashboardMenu">
      <DashboardMenu />
    </template>
  </div>
</template>

<script>
import TopNav from '~/components/TopNav'
import Footer from '~/components/Footer'
import DashboardMenu from '~/components/Dashboard/DashboardMenu'
export default {
  components: {
    TopNav,
    Footer,
    DashboardMenu
  },
  head: {
    script: [{ src: '/js/main.js' }]
  }
}
</script>

<style lang="scss" scoped>
.dashboardMenu {
  display: none;
  @media (max-width: 991px) {
    display: block;
  }
}
</style>
