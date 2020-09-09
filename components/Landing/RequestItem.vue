<template>
  <div class="item">
    <div class="left">
      <div class="accomType">
        {{ accomType }}
      </div>
      <hr class="line" />
      <div class="where">
        {{ where }}
      </div>
      <div class="when">
        {{ when }}
      </div>
      <div class="howMush">
        {{ howMuch }}
      </div>
    </div>
    <div class="right">
      <div class="circle"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    accomType: {
      type: String,
      default: null
    },
    where: {
      type: String,
      default: null
    },
    when: {
      type: String,
      default: null
    },
    howMuch: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
.item {
  background: #077bff;
  border-radius: 5px;
  padding: 22px 39px;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: #ffffff;
  display: flex;
  flex-direction: row;
  .left {
    display: flex;
    flex-direction: column;
    .line {
      background: #ffffff;
      width: 100%;
      height: 1px;
      opacity: 0.3;
    }
    .where {
      position: relative;
      &::before {
        content: '';
        position: absolute;
        left: -15px;
        width: 12px;
        height: 17px;
        background: #077bff;
        background-image: url('/landing/geo-locator.svg');
        background-repeat: no-repeat;
        background-position: center;
      }
    }
  }
  .right {
    display: flex;
    align-items: flex-end;
    .circle {
      border-radius: 50%;
      border: 1px solid #ffffff;
      width: 40px;
      height: 40px;
      font-family: Montserrat;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      &::before {
        content: '';
        position: absolute;
        width: 9px;
        height: 9px;
        background-image: url('/landing/check-white-hor.svg');
        background-repeat: no-repeat;
        background-position: center;
      }
    }
  }
}
</style>
