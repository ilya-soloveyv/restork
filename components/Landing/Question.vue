<template>
  <div class="question landing-adaptive">
    <div class="wrapQuestion">
      <div class="wrapQuestionTitle">
        <QuestionTitle :title="title" />
      </div>
      <div class="wrapQuestionImage">
        <img :src="'/landing/' + image" />
      </div>
      <div class="wrapQuestionList">
        <QuestionItem
          v-for="item in list"
          :key="item.id"
          :req="item.req"
          :res="item.res"
        />
      </div>
      <!-- <div class="wrapQuestionGrid">
      </div> -->
    </div>
  </div>
</template>

<script>
import QuestionTitle from './Title'
import QuestionItem from './QuestionItem'
export default {
  components: { QuestionTitle, QuestionItem },
  props: {
    title: {
      type: String,
      default: null
    },
    image: {
      type: String,
      default: null
    },
    list: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
.question {
  .wrapQuestion {
    // background-color: red;
    display: grid;
    grid-template-columns: 200px 450px;
    grid-template-rows: auto 1fr;
    grid-gap: 50px;
    margin: 0 auto;
    @media (max-width: 767px) {
      grid-template-columns: 1fr;
      grid-template-rows: auto auto;
      grid-gap: 0;
    }
    .wrapQuestionTitle {
      padding: 50px 0 0 0;
      margin: 0;
      grid-column: 2/3;
      grid-row: 1/2;
      @media (max-width: 767px) {
        padding: 30px 0;
        grid-column: 1/2;
        grid-row: 1/2;
      }
      .wrapTitle {
        margin: 0;
        padding: 0;
      }
    }
    .wrapQuestionImage {
      grid-column: 1/2;
      grid-row: 2/3;
      // height: 100%;
      // width: 100%;
      // display: flex;
      // justify-content: flex-end;
      @media (max-width: 767px) {
        display: none;
      }
      img {
        height: 200px;
        width: 200px;
      }
    }
    .wrapQuestionList {
      grid-column: 2/3;
      grid-row: 2/3;
      @media (max-width: 767px) {
        grid-column: 1/2;
        grid-row: 2/3;
      }
      // display: grid;
      // grid-template-columns: 1fr;
      // grid-template-rows: auto;
    }
  }
}
</style>
