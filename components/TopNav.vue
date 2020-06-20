<template>
  <b-navbar :class="'nav-theme-' + theme" toggleable="sm">
    <b-navbar-brand to="/">
      <template v-if="theme === 'transparent'">
        <img src="/logo-theme-transparent.png" alt="" />
      </template>
      <template v-else-if="theme === 'white'">
        <img src="/logo-theme-white.png" alt="" />
      </template>
    </b-navbar-brand>
    <b-navbar-toggle target="nav-collapse">
      <div class="hamburger hamburger--squeeze">
        <!-- is-active -->
        <span class="hamburger-box">
          <span class="hamburger-inner"></span>
        </span>
      </div>
    </b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <template v-if="$auth.$state.loggedIn">
          <b-nav-item to="/dashboard">
            <div v-if="$auth.user.sUserAvatar" class="restorkUser">
              <img
                :src="SELECTEL_WEB + '/user/preview/' + $auth.user.sUserAvatar"
              />
            </div>
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="square"
              stroke-linejoin="arcs"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            Личный кабинет
          </b-nav-item>
          <b-nav-item @click.prevent="$auth.logout()" to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="square"
              stroke-linejoin="arcs"
            >
              <path d="M16 17l5-5-5-5M19.8 12H9M13 22a10 10 0 1 1 0-20" />
            </svg>
            Выйти
          </b-nav-item>
        </template>
        <template v-else>
          <b-nav-item to="/signin">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="square"
              stroke-linejoin="arcs"
            >
              <path d="M10 17l5-5-5-5" />
              <path d="M13.8 12H3m9 10a10 10 0 1 0 0-20" />
            </svg>
            Войти
          </b-nav-item>
          <b-nav-item to="/signup" class="signup">
            Регистрация
          </b-nav-item>
        </template>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import 'hamburgers/dist/hamburgers.min.css'
export default {
  props: {
    theme: {
      type: String,
      default: 'white'
    }
  },
  computed: {
    SELECTEL_WEB() {
      return process.env.SELECTEL_WEB
    }
  }
}
</script>

<style lang="scss" scoped>
nav.navbar {
  padding: 0;
  @media (max-width: 991px) {
    padding: 0;
  }
  &.nav-theme-transparent {
    button.navbar-toggler {
      // background-color: rgba(0, 0, 0, 0.5);
      &.not-collapsed {
        // background-color: white;
      }
      svg {
        stroke: rgba(255, 255, 255, 0.5);
      }
    }
    .navbar-collapse {
      ul.navbar-nav {
        @media (max-width: 575px) {
          background-color: rgba(0, 0, 0, 0.5);
        }
        li.nav-item {
          a.nav-link {
            color: rgba(255, 255, 255, 0.75);
          }
        }
      }
    }
  }
  &.nav-theme-white {
    .navbar-collapse {
      ul.navbar-nav {
        li.nav-item {
          a.nav-link {
            color: rgba(0, 0, 0, 0.5);
          }
        }
      }
    }
  }
  a.navbar-brand {
    padding: 1.5rem 0;
    margin: 0;
    @media (max-width: 991px) {
      padding: 1rem 0;
    }
    img,
    svg {
      display: block;
      height: 30px;
    }
  }
  button.navbar-toggler {
    padding: 0;
    border: none;
    outline: none;
    font-size: 1rem;
    // background-color: rgba(255, 255, 255, 0.15);
    width: 30px;
    height: 30px;
    &.not-collapsed {
    }
    .hamburger {
      width: 100%;
      height: 100%;
      padding: 0;
      .hamburger-box {
        width: 100%;
        height: 100%;
        .hamburger-inner {
          width: 100%;
          height: 2px;
          margin-top: -1px;
          border-radius: 0;
          background-color: white;
          &::before {
            // top: -7px;
            width: 100%;
            height: 2px;
            border-radius: 0;
            background-color: white;
          }
          &::after {
            width: 100%;
            height: 2px;
            border-radius: 0;
            background-color: white;
            // bottom: -7px;
          }
        }
      }
    }
  }
  .navbar-collapse {
    @media (max-width: 575px) {
      margin: 0 -15px;
    }
    ul.navbar-nav {
      // align-items: center;
      @media (max-width: 575px) {
        padding: 1rem;
      }
      li.nav-item {
        font-size: 16px;
        // background-color: coral;
        // height: 30px;
        display: flex;
        padding: 0;
        margin: 0 0 0 1rem;
        align-items: center;
        @media (max-width: 575px) {
          margin: 0 0 1rem;
          &:last-child {
            margin: 0;
          }
        }
        &.signup {
          a.nav-link {
            background-color: #007bff;
            padding: 3px 1rem;
            border-radius: 15px;
          }
        }
        a.nav-link {
          padding: 0;
          display: flex;
          align-items: center;
          svg {
            margin-right: 0.5rem;
            stroke: #cccccc;
          }
          .restorkUser {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            width: 32px;
            height: 32px;
            border-radius: 50%;
            overflow: hidden;
            margin-right: 0.5rem;
            border: 2px solid white;
            @media (max-width: 575px) {
              width: 24px;
              height: 24px;
              border: 1px solid white;
            }
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
      }
    }
  }
}
</style>
