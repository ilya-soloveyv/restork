require('dotenv').config()

module.exports = {
  mode: 'universal',
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content:
          'width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no'
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  server: {
    host: process.env.HOST,
    port: process.env.PORT
  },
  loading: { color: '#007bff' },
  css: ['~/assets/scss/main.scss', '~/assets/scss/admin/admin.scss'],
  plugins: [
    { src: '~/plugins/datepicker', ssr: false },
    { src: '~/plugins/v-autocomplete', ssr: false }
  ],
  buildModules: ['@nuxtjs/eslint-module'],
  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    '@nuxtjs/dotenv',
    '@nuxtjs/svg',
    // '~/io',
    [
      'vue-yandex-maps/nuxt',
      {
        apiKey: process.env.YANDEX_MAP_KEY,
        lang: 'ru_RU',
        coordorder: 'latlong',
        version: '2.1'
      }
    ]
  ],
  axios: {
    proxy: true
  },
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { propertyName: 'token.accessToken' }
        }
      }
    },
    redirect: {
      home: '/dashboard',
      login: '/signin'
    }
  },
  build: {
    extend(config, ctx) {}
  }
}
