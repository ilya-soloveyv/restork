<template>
  <div v-if="$auth.$state.loggedIn" class="dashboardMenu">
    <ul>
      <li>
        <nuxt-link to="/dashboard" active-class="active" exact>
          <span>Главная</span>
          <svg
            class="arrow"
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
            <path d="M5 12h13M12 5l7 7-7 7" />
          </svg>
          <svg
            class="ico"
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
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/dashboard/profile" active-class="active" exact>
          <span>Личная информация</span>
          <svg
            class="arrow"
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
            <path d="M5 12h13M12 5l7 7-7 7" />
          </svg>
          <svg
            class="ico"
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
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/dashboard/application" active-class="active">
          <span>История поездок</span>
          <svg
            class="arrow"
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
            <path d="M5 12h13M12 5l7 7-7 7" />
          </svg>
          <svg
            class="ico"
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
            <path d="M17 2.1l4 4-4 4" />
            <path d="M3 12.2v-2a4 4 0 0 1 4-4h12.8M7 21.9l-4-4 4-4" />
            <path d="M21 11.8v2a4 4 0 0 1-4 4H4.2" />
          </svg>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/dashboard/finance" active-class="active">
          <span>Финансы</span>
          <svg
            class="arrow"
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
            <path d="M5 12h13M12 5l7 7-7 7" />
          </svg>
          <svg
            class="ico"
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
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="M7 15h0M2 9.5h20" />
          </svg>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/dashboard/object" active-class="active">
          <span>Мои объекты размещения</span>
          <svg
            class="arrow"
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
            <path d="M5 12h13M12 5l7 7-7 7" />
          </svg>
          <svg
            class="ico"
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
            <path
              d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"
            />
            <circle cx="12" cy="10" r="3" />
          </svg>
        </nuxt-link>
      </li>
    </ul>
    <!-- {{ objects }} -->
    <!-- {{ isObjectUser }} -->
  </div>
</template>

<style lang="scss" scoped>
.dashboardMenu {
  margin: 2rem 0 0;
  @media (max-width: 991px) {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    z-index: 3;
    padding: 0.5rem;
    margin: 0;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    box-shadow: 0 0 1rem 1px rgba(0, 0, 0, 0.15);
    background: white;
    border-radius: 1rem;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    @media (max-width: 991px) {
      flex-direction: row;
      border-radius: 0.5rem;
      background: rgba(255, 255, 255, 0.8);
      box-shadow: 0 0.5rem 1rem 1px rgba(0, 0, 0, 0.25);
    }
    li {
      display: flex;
      border-bottom: 1px solid #d9d9d9;
      @media (max-width: 991px) {
        flex-grow: 1;
        flex-shrink: 0;
        border-bottom: none;
      }
      &:last-child {
        border-bottom: none;
      }
      a {
        flex: 1;
        display: flex;
        padding: 1.5rem;
        color: #2e2e2e;
        text-decoration: none;
        justify-content: space-between;
        @media (max-width: 991px) {
          flex-direction: column;
          padding: 1rem 0;
          align-items: center;
          justify-content: center;
        }
        span {
          display: block;
          @media (max-width: 991px) {
            display: none;
          }
        }
        svg {
          &.arrow {
            @media (max-width: 991px) {
              display: none;
            }
          }
          &.ico {
            display: none;
            @media (max-width: 991px) {
              display: block;
            }
          }
        }
        &.active {
          background: #007bff;
          color: white;
          margin-top: -1px;
          margin-bottom: -1px;
          border-top: 1px solid #0063cc;
          border-bottom: 1px solid #0063cc;
          @media (max-width: 991px) {
            background: none;
          }
          svg {
            stroke: white;
            &.ico {
              @media (max-width: 991px) {
                stroke: #007bff;
              }
            }
          }
        }
      }
    }
  }
}
</style>
