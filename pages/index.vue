<template>
  <main>
    <div class="first">
      <b-container>
        <div class="wrap">
          <div class="wrapTopNav">
            <TopNav theme="transparent" />
          </div>
          <div class="wrapSearchForm">
            <h1>
              Поиск отелей, квартир и коттеджей <span>по низким ценам</span>
            </h1>
            <SearchForm />
          </div>
        </div>
      </b-container>
    </div>
    <div class="second">
      second
    </div>
  </main>
</template>

<script>
import TopNav from '~/components/TopNav'
import SearchForm from '~/components/SearchForm'
export default {
  layout: 'welcome',
  components: {
    TopNav,
    SearchForm
  }
}
</script>

<style lang="scss" scoped>
.first {
  height: 100vh;
  background-color: white;
  background-image: url('~assets/images/welcome/bg.jpg');
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  &::before {
    content: '';
    z-index: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba($color: #000000, $alpha: 0.75);
    // background-color: rgba($color: #2196f3, $alpha: 1);
  }
  .container {
    height: 100%;
    .wrap {
      height: 100%;
      display: flex;
      flex-direction: column;
      .wrapTopNav {
        flex-shrink: 0;
      }
      h1 {
        color: white;
        font-size: 2rem;
        font-weight: 500;
        margin-bottom: 4rem;
        @media (max-width: 991px) {
          font-size: 1.75rem;
        }
        @media (max-width: 767px) {
          font-size: 1.5rem;
          margin-bottom: 3rem;
        }
        @media (max-width: 575px) {
          margin-bottom: 2rem;
        }
        span {
          display: block;
        }
      }
      .wrapSearchForm {
        flex-grow: 1;
        position: relative;
        z-index: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
        // background-color: red;
      }
    }
  }
}
.second {
  height: 100vh;
  background-color: #ffffff;
}
</style>
