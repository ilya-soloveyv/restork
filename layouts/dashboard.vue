<template>
  <div class="main">
    <TopNav />
    <div id="dashboard">
      <b-container>
        <b-row>
          <b-col cols="12">
            <ConfirmPhone v-if="$auth.user.sUserPhoneKod" />
          </b-col>
        </b-row>
        <b-row>
          <b-col xl="4" lg="4" md="6" sm="12">
            <!-- <b-col class="d-none d-lg-block"> -->
            <DashboardCard />
            <DashboardMenu />
          </b-col>
          <b-col xl="8" lg="8" md="12">
            <div class="data">
              <nuxt />
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <Footer />
  </div>
</template>

<script>
import TopNav from '~/components/TopNav'
import Footer from '~/components/Footer'
import ConfirmPhone from '~/components/ConfirmPhone'
import DashboardCard from '~/components/Dashboard/DashboardCard'
import DashboardMenu from '~/components/Dashboard/DashboardMenu'
export default {
  components: {
    TopNav,
    Footer,
    ConfirmPhone,
    DashboardCard,
    DashboardMenu
  },
  head: {
    script: [{ src: '/js/main.js' }]
  }
}
</script>

<style lang="scss" scoped>
#dashboard {
  padding: 2rem 0;
  .data {
    padding: 2rem;
    border-radius: 1rem;
    box-shadow: 0 0 1rem 1px rgba(0, 0, 0, 0.15);
    background: #fff;
    @media (max-width: 991px) {
      border-radius: 0;
      padding: 0;
      box-shadow: none;
      background: none;
      margin-bottom: 5rem;
    }
  }
}
</style>
