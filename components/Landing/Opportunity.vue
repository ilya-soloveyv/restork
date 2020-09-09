<template>
  <div class="opport landing-adaptive">
    <div class="wrapOpport">
      <OpportunityTitle :title="title" />
      <div class="wrapOpportList">
        <OpportunityItem
          v-for="item in list"
          :key="item.id"
          :id="item.id"
          :desc="item.desc"
        />
      </div>
    </div>
  </div>
</template>

<script>
import OpportunityItem from './OpportunityItem'
import OpportunityTitle from './Title'
export default {
  components: {
    OpportunityItem,
    OpportunityTitle
  },
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
.opport {
  background: #f5f5f5;
  padding-bottom: 50px;
  @media (max-width: 767px) {
    padding-bottom: 40px;
  }
  .wrapOpportList {
    // background: red;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: -12px;
    // grid-template-columns: 1fr 1fr 1fr;
    // grid-template-rows: 1fr;
    // grid-gap: 25px;
    // @media (max-width: 991px) {
    //   grid-template-columns: 1fr 1fr;
    // }
    @media (max-width: 767px) {
      margin: 0;
    }
  }
}
</style>
