<template>
  <div class="main">
    <main>
      <TopNav />
      <b-container>
        <nuxt />
      </b-container>
    </main>
    <footer class="footer">
      <div class="container">
        <img src="~assets/images/logoWhite.svg" alt="" />
      </div>
    </footer>
  </div>
</template>

<script>
import TopNav from '~/components/TopNav'
export default {
  components: {
    TopNav
  }
}
</script>
