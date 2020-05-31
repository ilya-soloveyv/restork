<template>
  <div class="main mainDashboard">
    <main>
      <TopNav theme="white" />
      <b-container>
        <nuxt />
      </b-container>
    </main>
    <DashboardMenu class="dashboardMenu" />
  </div>
</template>

<script>
import TopNav from '~/components/TopNav'
import DashboardMenu from '~/components/Dashboard/DashboardMenu'
export default {
  components: {
    TopNav,
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
.main {
  @media (max-width: 991px) {
    padding-bottom: 6rem;
  }
}
</style>
