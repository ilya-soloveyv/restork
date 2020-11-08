<template>
  <div class="history landing-adaptive">
    <div class="wrapHistory">
      <HistoryTitle :title="title" />
      <div
        v-bind:class="{ hideAll: isHideAll, closeBefore: !isHideAll }"
        class="wrapToggle"
      >
        <div class="flexContainer">
          <HistoryItem
            v-for="item in list"
            :key="item.id"
            :desc="item.history"
            :author="item.author.name"
            :image="item.author.image"
            class="item"
          />
        </div>
      </div>
      <div class="wrapShowMore">
        <button v-on:click="showMore" class="showMore">
          Показать еще
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import HistoryTitle from './Title'
import HistoryItem from './HistoryItem'
export default {
  components: { HistoryTitle, HistoryItem },
  props: {
    title: {
      type: String,
      default: null
    },
    list: {
      type: Array,
      default: null
    }
  },
  data() {
    return {
      height: 500,
      isHideAll: true
    }
  },
  methods: {
    showMore() {
      this.isHideAll = !this.isHideAll
    }
  }
}
</script>

<style lang="scss" scoped>
.history {
  background: #f5f5f5;
  .wrapToggle {
    &.hideAll {
      height: 500px;
    }
    overflow: hidden;
    position: relative;
    &.closeBefore {
      &:before {
        display: none;
      }
    }
    .flexContainer {
      display: flex;
      flex-flow: column wrap;
      align-content: space-between;
      height: 1200px;
      @media (max-width: 991px) {
        height: 1800px;
      }
      item: {
        // width: 32%;
        // margin-bottom: 2%;
      }
      .item:nth-child(2n + 1) {
        order: 2;
        margin-bottom: 80px;
        @media (max-width: 991px) {
          order: 1;
          margin: 0 0 42px 40px;
        }
        @media (max-width: 767px) {
          order: 1;
          margin: 0 0 42px 0;
        }
      }
      .item:nth-child(2n) {
        order: 1;
        margin-top: 80px;
        @media (max-width: 991px) {
          order: 1;
          margin: 0 0 70px 40px;
        }
        @media (max-width: 767px) {
          order: 1;
          margin: 0 0 70px 0;
        }
      }
      &:before {
        content: '';
        flex-basis: 100%;
        width: 0;
        order: 2;
      }
      &:after {
        content: '';
        flex-basis: 100%;
        width: 0;
        order: 2;
      }
      @media (max-width: 991px) {
        flex-direction: column;
        // align-content: space-between;
        // height: 1200px;
      }
    }
    &:before {
      content: '';
      position: absolute;
      z-index: 100;
      bottom: 0;
      right: 0;
      width: 100%;
      height: 100px;
      background: linear-gradient(
        0deg,
        rgba(250, 250, 250, 1) 0%,
        rgba(250, 250, 250, 0) 100%
      );
    }
  }
  .wrapShowMore {
    display: flex;
    justify-content: center;
    .showMore {
      height: 40px;
      width: 165px;
      margin: 20px 0 45px 0;
      border-radius: 24px;
      border: 1px solid #dbdbdb;
      font-family: Montserrat;
      font-size: 12px;
      font-weight: 400;
      line-height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
