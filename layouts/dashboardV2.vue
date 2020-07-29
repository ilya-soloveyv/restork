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
          <div class="data">
            <nuxt />
          </div>
        </b-container>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import TopNav from '~/components/TopNav'
import ConfirmPhone from '~/components/ConfirmPhone'
import Footer from '~/components/Footer'
export default {
  components: {
    TopNav,
    ConfirmPhone,
    Footer
  },
  head: {
    script: [{ src: '/js/main.js' }]
  }
}
</script>

<style lang="scss" scoped>
#dashboard {
  flex-grow: 1;
  // padding-top: 2rem;
  // padding-bottom: 2rem;
  // margin-bottom: 7rem;
  // @media (max-width: 991px) {
  //   padding-bottom: 0;
  // }
  .data {
    // padding: 2rem;
    // border-radius: 1rem;
    // box-shadow: 0 0 1rem 1px rgba(0, 0, 0, 0.15);
    // background: #fff;
    // @media (max-width: 991px) {
    //   border-radius: 0;
    //   padding: 0;
    //   box-shadow: none;
    //   background: none;
    // }
  }
}
.main {
  @media (max-width: 991px) {
    // padding-bottom: 6rem;
  }
}
</style>
