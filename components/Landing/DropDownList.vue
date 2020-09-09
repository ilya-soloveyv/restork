<template>
  <div class="wrapDropDown">
    <div class="desc">
      {{ desc }}
    </div>
    <div>
      {{ label }}
    </div>
    <select class="dropDown">
      <option v-for="item in list" :key="item" value="item">
        {{ item }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    desc: {
      type: String,
      default: null
    },
    label: {
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
.wrapDropDown {
  .desc {
    font-family: Montserrat;
    font-size: 20px;
    line-height: 26px;
    font-weight: 400;
    color: #000000;
  }
  .dropDown {
    appearance: none;
    width: 100%;
    height: 85px;
    border-radius: 8px;
    border-color: #eaeaea;
    padding: 44px 0 0 15px;
    position: relative;
    &:before {
      content: '';
      position: absolute;
    }
  }
}
</style>
