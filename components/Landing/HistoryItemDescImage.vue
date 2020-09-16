<template>
  <div class="descImage">
    <span>{{ desc }}</span>
  </div>
</template>

<script>
export default {
  props: {
    desc: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
.descImage {
  border: none solid #ffffff;
  border-radius: 8px;
  background: #ffffff;
  width: 450px;
  padding: 20px;
  position: relative;
  box-shadow: 0px 20px 15px rgba($color: #000000, $alpha: 0.1);
  @media (max-width: 991px) {
    width: 650px;
  }
  @media (max-width: 767px) {
    width: 100%;
    padding: 16px 23px;
  }
  span {
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
  }
  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 60px;
    transform: translate(0, 100%);
    border: 10px solid transparent;
    border-left: 10px solid #ffffff;
    border-top: 10px solid #ffffff;
  }
}
</style>
