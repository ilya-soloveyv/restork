<template>
  <div class="question landing-adaptive">
    <div class="wrapQuestion">
      <div class="wrapQuestionTitle">
        <QuestionTitle :title="title" />
      </div>
      <div class="wrapQuestionGrid">
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
      </div>
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
      dafault: null
    }
  }
}
</script>

<style lang="scss" scoped>
.question {
  .wrapQuestion {
    .wrapQuestionTitle {
      padding: 90px 0 40px 0;
      margin: 0;
      @media (max-width: 767px) {
        padding: 55px 0 40px 0;
      }
      @media (max-width: 575px) {
        padding: 80px 0 30px 0;
        font-size: 26px;
      }
      .wrapTitle {
        margin: 0;
        padding: 0;
      }
    }
    .wrapQuestionGrid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr;
      grid-column-gap: 55px;
      @media (max-width: 767px) {
        grid-column-gap: 45px;
      }
      @media (max-width: 575px) {
        grid-template-columns: 1fr;
      }
      .wrapQuestionImage {
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: flex-end;
        @media (max-width: 575px) {
          display: none;
        }
        img {
          height: 200px;
          width: 200px;
        }
      }
      .wrapQuestionList {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: auto;
      }
    }
  }
}
</style>
