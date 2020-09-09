<template>
  <div class="howWork landing-adaptive">
    <div class="wrapHowWork">
      <div class="wrapTitle">
        <HowWorkTitle :title="title" />
      </div>
      <div class="wrapHowWorkList">
        <HowWorkItem
          v-for="item in list"
          :key="item.title"
          :image="item.image"
          :title="item.title"
          :desc="item.desc"
        />
      </div>
    </div>
  </div>
</template>

<script>
import HowWorkTitle from './Title'
import HowWorkItem from './HowWorkItem'
export default {
  components: { HowWorkTitle, HowWorkItem },
  props: {
    title: {
      type: String,
      default: null
    },
    list: {
      type: Array,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
.howWork {
  background: #ffffff;
  padding-bottom: 80px;
  @media (max-width: 767px) {
    padding-bottom: 30px;
  }
  .wrapTitle {
    padding: 0;
    margin: 80px 0;
    @media (max-width: 767px) {
      margin: 50px 0;
    }
    @media (max-width: 575px) {
      margin: 40px 0;
      font-size: 26px;
    }
  }
  .wrapHowWorkList {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    grid-column-gap: 120px;
    @media (max-width: 1199px) {
      grid-column-gap: 60px;
    }

    @media (max-width: 991px) {
      grid-template-columns: 1fr;
      grid-template-rows: auto;
      grid-row-gap: 40px;
    }
    @media (max-width: 575px) {
      grid-row-gap: 30px;
    }
  }
}
</style>
