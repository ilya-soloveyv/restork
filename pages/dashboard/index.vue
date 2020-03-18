<template>
  <div>
    <h1>Здавствуйте, {{ $auth.user.sUserFirstName }}!</h1>
    <h2>Информация по заявкам:</h2>
    <div class="statBlock statBlockApp">
      <div class="item">
        <div class="count">
          <div class="num">0</div>
        </div>
        <div class="desc">
          <span>Количество отправленных вами заявок на проживание</span>
          <div class="link">
            <nuxt-link to="/dashboard/application">Посмотреть</nuxt-link>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="count">
          <div class="num">0</div>
        </div>
        <div class="desc">
          <span>Количество новых ответов на заявки для вашего размещения</span>
          <div class="link"><nuxt-link to="#">Посмотреть</nuxt-link></div>
        </div>
      </div>
      <div class="button">
        <b-button to="/dashboard/application/add" variant="primary">
          Отправить заявку
        </b-button>
      </div>
    </div>
    <h2>Информация по объектам:</h2>
    <div class="statBlock statBlockObj">
      <div class="item">
        <div class="count">
          <div class="num">0</div>
        </div>
        <div class="desc">
          <span>
            Количество принадлежащих вам объектов размещения Количество
            принадлежащих вам объектов размещения
          </span>
          <div class="link"><nuxt-link to="#">Посмотреть</nuxt-link></div>
        </div>
      </div>
      <div class="item">
        <div class="count">
          <div class="num">0</div>
        </div>
        <div class="desc">
          <span>Количество новых заявок, подходящих для ваших объектов</span>
          <div class="link"><nuxt-link to="#">Посмотреть</nuxt-link></div>
        </div>
      </div>
      <div class="button">
        <b-button to="#" variant="primary">Отправить заявку</b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  layout: 'dashboard',
  head() {
    return {
      title: 'Dashboard'
    }
  }
}
</script>

<style lang="scss" scoped>
h2 {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 2rem;
}
.statBlockApp {
  border-bottom: 1px solid #d9d9d9;
  margin-bottom: 2rem;
  padding-bottom: 2rem;
}
.statBlockObj {
  color: firebrick;
}
.statBlock {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  .item {
    display: grid;
    grid-template-columns: 100px 1fr;
    grid-gap: 1rem;
    .count {
      .num {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background: linear-gradient(0deg, #05f 0, #00c9ff 100%);
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        font-size: 56px;
        font-weight: 700;
      }
    }
    .desc {
      display: flex;
      flex-direction: column;
      font-size: 14px;
      justify-content: center;
      span {
        padding: 0 0 0.25rem;
        color: #2e2e2e;
      }
      a {
        color: #0098da;
        border-bottom: 1px solid #0098da;
        text-decoration: none;
      }
    }
  }
  .button {
    grid-column-start: 1;
    grid-column-end: 3;
    display: flex;
    justify-content: center;
    padding-top: 1rem;
  }
}
</style>
