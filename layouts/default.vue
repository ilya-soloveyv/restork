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
    <!-- <footer class="footer">
      <div class="container">
        <div class="footer-wrapp">
          <a href="/" class="logo-link">
            <img src="~assets/images/restork.png" alt="logo" />
          </a>
          <nav>
            <ul class="menu">
              <li class="menu__item">
                <a href="#" class="menu__link go_to">
                  Подобрать проживание
                </a>
              </li>
              <li class="menu__item">
                <a href="#how" class="menu__link go_to">
                  Как это работает
                </a>
              </li>
              <li class="menu__item">
                <a href="#about" class="menu__link go_to">
                  О сервисе
                </a>
              </li>
              <li class="menu__item">
                <a href="#contacts" class="menu__link go_to">
                  Контакты
                </a>
              </li>
            </ul>
          </nav>
          <a href="tel:88005556688" class="footer-phone">
            8 (800) 555-66-88
          </a>
        </div>
        <div class="footer-info">
          All rights reserve | <a href="#">Политика конфиденциальности</a>
        </div>
      </div>
    </footer> -->
    <!-- <ul>
      <li>
        <nuxt-link to="/">Index</nuxt-link>
      </li>
      <li v-if="!$auth.$state.loggedIn">
        <nuxt-link to="/login">Login</nuxt-link>
      </li>
      <li v-if="$auth.$state.loggedIn">
        <nuxt-link to="/profile">Profile</nuxt-link>
      </li>
      <li v-if="$auth.$state.loggedIn && $auth.$state.user.iUserAdmin">
        <nuxt-link to="/admin">Admin</nuxt-link>
      </li>
      <li v-if="$auth.$state.loggedIn">
        {{ $auth.$state.user.sUserPhone }}
        <a @click.prevent="$auth.logout()" href="#">Logout</a>
      </li>
    </ul> -->
    <!-- <pre>{{ $auth.$state.user }}</pre> -->
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
