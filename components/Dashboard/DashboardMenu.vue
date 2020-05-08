<template>
  <div class="dashboardMenu">
    <ul>
      <li>
        <nuxt-link to="/dashboard" active-class="active" exact>
          Главная
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
            <path d="M5 12h13M12 5l7 7-7 7" />
          </svg>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/dashboard/profile" active-class="active" exact>
          Личная информация
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
            <path d="M5 12h13M12 5l7 7-7 7" />
          </svg>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/dashboard/application" active-class="active">
          История поездок
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
            <path d="M5 12h13M12 5l7 7-7 7" />
          </svg>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/dashboard/finance" active-class="active">
          <span>Финансы</span>
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
            <path d="M5 12h13M12 5l7 7-7 7" />
          </svg>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/dashboard/object" active-class="active">
          <span>Мои объекты размещения</span>
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
            <path d="M5 12h13M12 5l7 7-7 7" />
          </svg>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.dashboardMenu {
  margin: 2rem 0 0;
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
    li {
      display: flex;
      border-bottom: 1px solid #d9d9d9;
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
        span {
          display: block;
        }
        &.active {
          background: #007bff;
          color: white;
          margin-top: -1px;
          margin-bottom: -1px;
          border-top: 1px solid #0063cc;
          border-bottom: 1px solid #0063cc;
          svg {
            stroke: white;
          }
        }
      }
    }
  }
}
</style>
