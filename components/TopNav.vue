<template>
  <b-navbar toggleable="md">
    <!-- :class="'nav-theme-' + theme" -->
    <b-navbar-brand to="/">
      <img src="/logo-theme-white.png" alt="" />
    </b-navbar-brand>
    <b-navbar-toggle target="nav-collapse">
      <div class="hamburger hamburger--squeeze">
        <span class="hamburger-box">
          <span class="hamburger-inner"></span>
        </span>
      </div>
    </b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <template v-if="$auth.$state.loggedIn">
          <!-- <b-nav-item to="/dashboard">
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
          </b-nav-item> -->
          <b-nav-item to="/dashboard/object/add">Добавить объект</b-nav-item>
          <b-nav-item to="/dashboard/application">Мои поездки</b-nav-item>
          <b-nav-item-dropdown right class="userDropdown">
            <template v-slot:button-content>
              {{ $auth.user.sUserFirstName }}
              <svg
                id="sUser"
                xmlns="http://www.w3.org/2000/svg"
                width="25.086"
                height="25.086"
                viewBox="0 0 25.086 25.086"
              >
                <path
                  id="Контур_36"
                  data-name="Контур 36"
                  d="M12.543,0A12.543,12.543,0,1,0,25.086,12.543,12.557,12.557,0,0,0,12.543,0Zm0,23.616A11.073,11.073,0,1,1,23.616,12.543,11.086,11.086,0,0,1,12.543,23.616Z"
                  fill="#077bff"
                />
                <path
                  id="Контур_37"
                  data-name="Контур 37"
                  d="M156.145,70.289A5.145,5.145,0,1,0,151,65.145,5.15,5.15,0,0,0,156.145,70.289Zm0-8.819a3.675,3.675,0,1,1-3.675,3.675A3.679,3.679,0,0,1,156.145,61.47Z"
                  transform="translate(-143.602 -57.06)"
                  fill="#077bff"
                />
                <path
                  id="Контур_38"
                  data-name="Контур 38"
                  d="M97.116,301.737A5.149,5.149,0,0,0,93.262,300H84.443a5.149,5.149,0,0,0-3.853,1.737l-.348.394.26.457a9.605,9.605,0,0,0,16.7,0l.26-.457Zm-8.263,4.241a8.157,8.157,0,0,1-6.78-3.64,3.678,3.678,0,0,1,2.371-.867h8.819a3.678,3.678,0,0,1,2.371.867A8.157,8.157,0,0,1,88.852,305.978Z"
                  transform="translate(-76.31 -285.301)"
                  fill="#077bff"
                />
              </svg>
            </template>
            <b-dropdown-item to="/dashboard">
              Dashboard
            </b-dropdown-item>
            <b-dropdown-item to="/dashboard/application">
              Мои поездки
            </b-dropdown-item>
            <b-dropdown-item to="/">
              Подобрать жилье
            </b-dropdown-item>
            <b-dropdown-item to="/dashboard/object">
              Мои объекты
            </b-dropdown-item>
            <b-dropdown-item to="/dashboard/object/add">
              Добавить объект
            </b-dropdown-item>
            <b-dropdown-item to="/dashboard/booking">
              Бронирования
            </b-dropdown-item>
            <b-dropdown-item to="/dashboard/profile">
              Редактировать профиль
            </b-dropdown-item>
            <b-dropdown-item to="/dashboard/finance">
              Финансы
            </b-dropdown-item>
            <b-dropdown-item @click.prevent="$auth.logout()" href="#">
              Выйти
            </b-dropdown-item>
          </b-nav-item-dropdown>
        </template>
        <template v-else>
          <b-nav-item to="/signin" class="signin">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#007bff"
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
  border-bottom: 1px solid #f0f0f0;
  // @media (max-width: 991px) {
  //   padding: 0;
  // }
  // &.nav-theme-transparent {
  //   button.navbar-toggler {
  //     // background-color: rgba(0, 0, 0, 0.5);
  //     &.not-collapsed {
  //       // background-color: white;
  //     }
  //     svg {
  //       stroke: rgba(255, 255, 255, 0.5);
  //     }
  //     .hamburger-inner {
  //       background: white;
  //       &::before {
  //         background-color: white;
  //       }
  //       &::after {
  //         background-color: white;
  //       }
  //     }
  //   }
  //   .navbar-collapse {
  //     ul.navbar-nav {
  //       @media (max-width: 575px) {
  //         background-color: rgba(0, 0, 0, 0.5);
  //       }
  //       li.nav-item {
  //         a.nav-link {
  //           // color: rgba(255, 255, 255, 0.75);
  //         }
  //       }
  //     }
  //   }
  // }
  // &.nav-theme-white {
  //   .navbar-collapse {
  //     ul.navbar-nav {
  //       li.nav-item {
  //         a.nav-link {
  //           // color: rgba(0, 0, 0, 0.5);
  //         }
  //       }
  //     }
  //   }
  //   button.navbar-toggler {
  //     .hamburger-inner {
  //       background: black;
  //       &::before {
  //         background-color: black;
  //       }
  //       &::after {
  //         background-color: black;
  //       }
  //     }
  //   }
  // }
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
    width: 25px;
    height: 19px;
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
          width: 25px;
          height: 3px;
          margin-top: -1px;
          border-radius: 3px !important;
          background-color: #007bff;
          &::before {
            width: 100%;
            height: 3px;
            border-radius: 3px !important;
            background-color: inherit;
          }
          &::after {
            width: 100%;
            height: 3px;
            border-radius: 3px;
            background-color: inherit;
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
        font-size: 14px;
        line-height: 30px;
        height: 30px;
        padding: 0;
        // background-color: coral;
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
        &.signin {
          svg {
            margin-right: 0.5rem;
            stroke: #007bff;
          }
        }
        &.signup {
          a.nav-link {
            background-color: #007bff;
            padding: 0 1rem;
            border-radius: 15px;
            color: white;
          }
        }
        &.userDropdown {
          padding-left: 4rem;
          /deep/ a.nav-link {
            svg {
              margin-left: 0.5rem;
            }
            &::after {
              display: none !important;
            }
          }
        }
        /deep/ a.nav-link {
          // background-color: red;
          padding: 0;
          display: flex;
          align-items: center;
          color: #077bff;
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
