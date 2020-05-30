<template>
  <div class="main">
    <main>
      <TopNav />
      <b-container>
        <nuxt />
      </b-container>
    </main>
    <Footer />
  </div>
</template>

<script>
import TopNav from '~/components/TopNav'
import Footer from '~/components/Footer'
export default {
  components: {
    TopNav,
    Footer
  },
  head: {
    script: [{ src: '/js/main.js' }]
  }
}
</script>
