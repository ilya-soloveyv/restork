<template>
  <div class="item">
    <div class="left">
      <div class="accomType">
        {{ accomType }}
      </div>
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
      <div class="circle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffffff"
          stroke-width="1"
          stroke-linecap="round"
          stroke-linejoin="bevel"
        >
          <path d="M9 18l6-6-6-6" />
        </svg>
      </div>
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
  position: relative;
  background: #077bff;
  border-radius: 5px;
  padding: 20px 40px;
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
  line-height: 20px;
  color: #ffffff;
  cursor: pointer;
  outline: none;
  // display: flex;
  // flex-direction: row;
  .left {
    display: flex;
    flex-direction: column;
    .accomType {
      font-size: 14px;
      padding-bottom: 15px;
      border-bottom: 1px solid rgba($color: white, $alpha: 0.3);
    }
    .where {
      position: relative;
      font-size: 20px;
      line-height: 30px;
      padding: 15px 0;
      &::before {
        content: '';
        position: absolute;
        top: 21px;
        left: -20px;
        width: 12px;
        height: 17px;
        // background: #077bff;
        background-image: url('/landing/geo-locator.svg');
        background-size: contain;
        background-repeat: no-repeat;
        // background-position: center;
      }
    }
    .when {
      padding-bottom: 5px;
      padding-right: 50px;
    }
    .howMush {
      padding-right: 50px;
    }
  }
  .right {
    display: flex;
    align-items: flex-end;
    position: absolute;
    right: 40px;
    bottom: 20px;
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
    }
  }
}
</style>
