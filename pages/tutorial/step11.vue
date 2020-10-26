<template>
  <div class="wrapTutorial">
    <div class="wrapTitle">
      <Title />
    </div>

    <div class="wrapStep11">
      <div class="hostel">
        <div class="title">
          Итак, нам осталось только открыть ваш объект для бронирования
        </div>
        <div class="desc">
          Для этого установите статус вашего жилья с помощью переключателя ниже.
          Если ваш объект уже свободен и готов принимать гостей, установите
          статус «Свободен», если освобождается завтра или послезавтра, то
          «Освобождается завтра» или «Освобождается послезавтра». Если ваше
          жильё не освобождается в ближайшие два дня или вы передумали его
          сдавать, установите статус «Занят».
        </div>
        <div class="statusInput">
          <b-form-group
            id="objectStatusLabel"
            class="form-group-restork"
            label="Статус объекта"
            label-for="objectNameInput"
          >
            <b-form-input
              id="objectStatusInput"
              placeholder="Статус объекта"
              type="text"
            ></b-form-input>
          </b-form-group>
        </div>
        <div class="hintInsideMain">
          <HintStep11 />
        </div>
      </div>
    </div>
    <div class="wrapHint">
      <HintStep11 />
    </div>
    <div class="wrapProgress">
      <ProgressBar />
    </div>
    <PopupStep />
  </div>
</template>

<script>
import ProgressBar from '~/components/Tutorial/ProgressBar'
import Title from '~/components/Tutorial/Title'
import PopupStep from '~/components/Tutorial/PopupStep'
import HintStep11 from '~/components/Tutorial/HintStep11'

export default {
  layout: 'dashboardV2Tutorial',
  components: {
    Title,
    ProgressBar,
    PopupStep,
    HintStep11
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
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
  .wrapTitle {
    // background: blue;
    grid-column: 1/2;
    grid-row: 1/2;
    @media (max-width: 991px) {
      grid-column: 1/3;
    }
    @media (max-width: 767px) {
      grid-column: 1/2;
    }
  }
  .wrapStep11 {
    // background: red;
    grid-column: 1/2;
    grid-row: 2/3;
    overflow: auto;
    margin: 0 -20px;
    padding: 0 20px;
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
    .hintInsideMain {
      @media (min-width: 768px) {
        display: none;
      }
    }
  }
  .wrapHint {
    // background: green;
    grid-column: 2/3;
    grid-row: 2/4;
    overflow: auto;
    display: flex;
    justify-content: center;
    @media (max-width: 991px) {
      //   display: none;
      grid-column: 2/3;
      grid-row: 2/3;
    }
    @media (max-width: 767px) {
      display: none;
    }
  }
  .wrapProgress {
    // background: yellow;
    grid-column: 1/2;
    grid-row: 3/4;
    @media (max-width: 991px) {
      grid-column: 1/3;
    }
    @media (max-width: 767px) {
      grid-column: 1/2;
    }
  }
}
</style>
