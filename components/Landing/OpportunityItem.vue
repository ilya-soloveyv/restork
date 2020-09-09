<template>
  <div class="wrapOpportItem">
    <div class="wrapCircle">
      <div class="circle">
        {{ id }}
      </div>
    </div>
    <div class="desc">
      {{ desc }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      default: null
    },
    desc: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapOpportItem {
  flex-basis: calc(33.33% - 24px);
  margin: 12px;
  background: #ffffff;
  box-shadow: 0px 20px 15px rgba($color: #000000, $alpha: 0.1);
  border-radius: 8px;
  padding: 25px;
  display: flex;
  flex-direction: column;
  @media (max-width: 991px) {
    flex-basis: calc(50% - 24px);
  }
  @media (max-width: 767px) {
    margin: 12px 0;
    flex-basis: 100%;
    flex-direction: row;
    align-items: center;
  }
  .wrapCircle {
    .circle {
      background: #f0f0f0;
      border-radius: 50%;
      width: 56px;
      height: 56px;
      font-family: Montserrat;
      font-size: 20px;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      &::before {
        content: '';
        position: absolute;
        top: 0px;
        right: 0px;
        transform: translate(50%, 0);
        width: 26px;
        height: 26px;
        border-radius: 50%;
        background: #077bff;
        background-image: url('/landing/check-white.svg');
        background-repeat: no-repeat;
        background-position: center;
      }
    }
  }
  .desc {
    padding-top: 20px;
    flex-grow: 1;
    @media (max-width: 767px) {
      padding: 0px;
      padding-left: 30px;
    }
  }
}
</style>
