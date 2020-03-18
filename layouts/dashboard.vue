<template>
  <div>
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
            <DashboardCard />
            <DashboardMenu />
          </b-col>
          <b-col xl="8" lg="8" md="6" sm="12">
            <div class="data">
              <nuxt />
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import TopNav from '~/components/TopNav'
import ConfirmPhone from '~/components/ConfirmPhone'
import DashboardCard from '~/components/Dashboard/DashboardCard'
import DashboardMenu from '~/components/Dashboard/DashboardMenu'
export default {
  components: {
    TopNav,
    ConfirmPhone,
    DashboardCard,
    DashboardMenu
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
  }
}
</style>
