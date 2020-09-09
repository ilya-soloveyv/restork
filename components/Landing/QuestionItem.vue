<template>
  <div class="wrapItem">
    <div class="req">
      {{ req }}
    </div>
    <div class="res">
      {{ res }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    req: {
      type: String,
      default: null
    },
    res: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapItem {
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  @media (max-width: 767px) {
    margin-bottom: 25px;
  }
  @media (max-width: 575px) {
    margin-bottom: 35px;
  }
  .req {
    font-family: Montserrat;
    font-size: 20px;
    font-weight: 500;
    line-height: 26px;
    margin-bottom: 25px;
    @media (max-width: 767px) {
      margin-bottom: 18px;
    }
    @media (max-width: 575px) {
      font-size: 16px;
      line-height: 20px;
      margin-bottom: 15px;
    }
  }
  .res {
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    @media (max-width: 575px) {
      font-size: 12px;
      line-height: 18px;
    }
  }
}
</style>
