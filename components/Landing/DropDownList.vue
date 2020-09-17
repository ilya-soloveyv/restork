<template>
  <div class="wrapDropDown">
    <div class="desc">
      {{ desc }}
    </div>
    <div class="form-group-wrap form-group-wrap-line2">
      <b-form-group
        id="label-sObjectTypeTitle"
        :label="label"
        label-for="input-sObjectTypeTitle"
      >
        <b-form-select
          id="input-sObjectTypeTitle"
          v-model="selected"
          :options="options"
        >
          <option disabled value="">Выберите один из вариантов</option>
          <option v-for="item in list" :key="item" value="item">
            {{ item }}
          </option>
        </b-form-select>
      </b-form-group>
    </div>
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
  },
  data() {
    return {
      selected: ''
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
    margin-bottom: 20px;
  }
}
.wrapDropDown:last-child {
  margin-top: 40px;
  background: red;
}
</style>
