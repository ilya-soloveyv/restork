<template>
  <div class="wrapTutorial">
    <div class="wrapTitle">
      <Title />
    </div>

    <div class="greeting">
      <div class="title">
        Поздравляем, ваш объект уcпешно добавлен и отправлен на модерацию.
      </div>
      <div class="desc">
        Отвечайте на запросы гостей, указав общую стоимость их проживания. Гости
        внесут оплату и на следующий день после их заезда, мы отправим вам
        деньги.
      </div>
      <div class="objectBtn">
        <span>Мои объекты</span>
      </div>
    </div>
    <div class="wrapHint">
      <img src="/tutorial/greeting-image.jpg" alt="" />
    </div>
  </div>
</template>

<script>
import Title from '~/components/Tutorial/Title'

export default {
  data() {
    return {
      currentStepNumber: 1
    }
  },
  layout: 'dashboardV2Tutorial',
  components: {
    Title
  }
}
</script>

<style lang="scss" scoped>
.wrapTutorial {
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: auto 1fr auto;
  height: calc(100vh - 63px);
  @media (max-width: 991px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
  .wrapTitle {
    // background: blue;
    grid-column: 1/2;
    grid-row: 1/2;
  }
  .greeting {
    // background: red;
    grid-column: 1/2;
    grid-row: 2/3;
    overflow: auto;
    @media (max-width: 991px) {
      grid-column: 1/2;
      grid-row: 3/4;
    }
    .title {
      margin: 0 0 25px;
      font-size: 30px;
      line-height: 36px;
      font-weight: 500;
      @media (max-width: 991px) {
        margin: 0 0 15px;
      }
      @media (max-width: 767px) {
        font-size: 26px;
        line-height: 28px;
        margin: 0 0 20px;
      }
    }
    .desc {
      margin: 0 0 25px;
      font-size: 16px;
      line-height: 26px;
      font-weight: 400;
      @media (max-width: 991px) {
        margin: 0 0 20px;
      }
      @media (max-width: 767px) {
        font-size: 14px;
        line-height: 20px;
        margin: 0 0 30px;
      }
    }
    .objectBtn {
      border: 1px solid #077bff;
      border-radius: 5px;
      background: #077bff;
      width: 260px;
      height: 63px;
      display: flex;
      justify-content: center;
      align-items: center;
      @media (max-width: 991px) {
        width: 244px;
      }
      @media (max-width: 767px) {
        height: 60px;
        width: 100%;
      }
      span {
        font-size: 16px;
        line-height: 19px;
        font-weight: 600;
        color: #ffffff;
        @media (max-width: 767px) {
          font-size: 14px;
        }
      }
    }
  }
  .wrapHint {
    // background: green;
    grid-column: 2/3;
    grid-row: 2/4;
    overflow: auto;
    padding-left: 20px;
    @media (max-width: 991px) {
      grid-column: 1/2;
      grid-row: 2/3;
      padding: 0px;
    }
    img {
      max-width: 100%;
      max-height: 100%;
      //   object-fit: content;
      @media (max-width: 991px) {
        width: 245px;
        height: 245px;
        object-fit: content;
      }
    }
  }
}
</style>
