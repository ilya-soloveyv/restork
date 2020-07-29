<template>
  <footer>
    <div class="container">
      <div class="wrap">
        <ul class="col1">
          <li class="title">RESTORK</li>
          <li>
            <nuxt-link to="#">Пользовательское соглашение</nuxt-link>
          </li>
          <li>
            <nuxt-link to="#">Политика конфиденциальности</nuxt-link>
          </li>
          <li>
            <nuxt-link to="#">
              Согласие на обработку персональных данных
            </nuxt-link>
          </li>
        </ul>
        <ul class="col2">
          <li class="title">Гостям</li>
          <li>
            <nuxt-link to="#">Условия бронирования</nuxt-link>
          </li>
          <li>
            <nuxt-link to="#">Частые вопросы</nuxt-link>
          </li>
        </ul>
        <ul class="col3">
          <li class="title">Хозяевам</li>
          <li>
            <nuxt-link to="#">
              Оферта на заключение лицензионного соглашения
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="#">
              Правила обработки претензий и жалоб правообладателей
            </nuxt-link>
          </li>
        </ul>
        <ul class="col4">
          <li class="title">Приложение</li>
          <li>
            <nuxt-link to="#">
              <img src="/footer/apple.jpg" alt="" />
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="#">
              <img src="/footer/google.jpg" alt="" />
            </nuxt-link>
          </li>
        </ul>
        <div class="copyright">
          © 2020 RESTORK. Использование материалов RESTORK возможно только при
          наличии активной ссылки на первоисточник.
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  flex-shrink: 0;
  .wrap {
    display: grid;
    grid-template-columns: 4fr 3fr 3fr 141px;
    grid-template-rows: 2;
    grid-gap: 15px;
    border-top: 1px solid #f0f0f0;
    padding: 40px 0 25px;
    @media (max-width: 991px) {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 3;
    }
    @media (max-width: 767px) {
      grid-template-columns: 1fr;
      grid-template-rows: 5;
    }
    ul {
      margin: 0;
      padding: 0;
      list-style: none;
      font-size: 14px;
      @media (max-width: 767px) {
        font-size: 12px;
      }
      &.col1 {
        grid-row: 1/2;
        grid-column: 1/2;
        @media (max-width: 991px) {
          grid-row: 1/2;
          grid-column: 1/2;
        }
        @media (max-width: 767px) {
          grid-row: 1/2;
          grid-column: 1/2;
        }
      }
      &.col2 {
        grid-row: 1/2;
        grid-column: 2/3;
        @media (max-width: 991px) {
          grid-row: 2/3;
          grid-column: 1/2;
        }
        @media (max-width: 767px) {
          grid-row: 2/3;
          grid-column: 1/2;
        }
      }
      &.col3 {
        grid-row: 1/2;
        grid-column: 3/4;
        @media (max-width: 991px) {
          grid-row: 2/3;
          grid-column: 2/3;
        }
        @media (max-width: 767px) {
          grid-row: 3/4;
          grid-column: 1/2;
        }
      }
      &.col4 {
        grid-row: 1/2;
        grid-column: 4/5;
        @media (max-width: 991px) {
          grid-row: 1/2;
          grid-column: 2/3;
        }
        @media (max-width: 767px) {
          grid-row: 4/5;
          grid-column: 1/2;
        }
        li {
          display: inline-block;
          &.title {
            display: list-item;
          }
        }
      }
      li {
        padding: 6px 0;
        @media (max-width: 767px) {
          padding: 4px 0;
        }
        &.title {
          font-weight: bold;
        }
        a {
          color: black;
        }
      }
    }
    .copyright {
      grid-row: 2/3;
      grid-column: 1/5;
      font-size: 12px;
      color: #818181;
      @media (max-width: 991px) {
        grid-row: 3/4;
        grid-column: 1/3;
      }
      @media (max-width: 767px) {
        grid-row: 5/6;
        grid-column: 1/2;
        font-size: 11px;
      }
    }
  }
}
</style>
