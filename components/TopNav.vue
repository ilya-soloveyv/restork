<template>
  <b-navbar toggleable="lg">
    <b-container>
      <b-navbar-brand to="/">
        <img src="~assets/images/logo.svg" alt="" />
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/">Подобрать жилье</b-nav-item>
          <b-nav-item to="/">Как это работает</b-nav-item>
          <b-nav-item to="/">О сервисе</b-nav-item>
          <b-nav-item to="/">Подобрать жилье</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <template v-if="$auth.$state.loggedIn">
            <div class="restorkUser">
              <template v-if="$auth.user.sUserAvatar">
                <img
                  :src="
                    SELECTEL_WEB + '/user/preview/' + $auth.user.sUserAvatar
                  "
                />
              </template>
              <template v-else>
                <div class="empty">
                  <img src="~/static/user.svg" />
                </div>
              </template>
            </div>
            <b-nav-item to="/dashboard">Личный кабинет</b-nav-item>
            <b-nav-item @click.prevent="$auth.logout()" to="/">
              Выйти
            </b-nav-item>
          </template>
          <template v-else>
            <b-nav-item to="/signin">Войти</b-nav-item>
            <b-nav-item to="/signup">Регистрация</b-nav-item>
          </template>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<script>
export default {
  computed: {
    SELECTEL_WEB() {
      return process.env.SELECTEL_WEB
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  box-shadow: 0 8px 14.72px 1.28px rgba(0, 0, 0, 0.3);
  padding-top: 2rem;
  padding-bottom: 2rem;
  &.navbar-expand-lg {
    #nav-collapse {
      // position: fixed;
      // left: 0;
      // top: 0;
      // width: 100vw;
      // height: 100vh;
      // background: rgba($color: #000000, $alpha: 0.75);
    }
  }
  .nav-item {
    font-size: 16px;
    // font-weight: 500;
  }
  .navbar-brand {
    img {
      width: 200px;
    }
  }
  .restorkUser {
    background: linear-gradient(0deg, #05f 0, #00c9ff 100%);
    // padding: 0.5rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
    img {
      fill: white;
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
    .empty {
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 60%;
        height: 60%;
      }
    }
  }
}
</style>
