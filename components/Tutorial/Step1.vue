<template>
  <div>
    <h1 class="step1Title">Давайте подготовим вас к приему гостей</h1>
    <div class="item" v-for="item in list" :key="item.id">
      <div class="itemDesc">
        {{ item.desc }}
      </div>
      <div class="form-group-wrap form-group-wrap-line2">
        <b-form-group
          id="label-sObjectTypeTitle"
          :label="item.label"
          label-for="input-sObjectTypeTitle"
        >
          <b-form-select id="input-sObjectTypeTitle" v-model="selected">
            <option disabled value="">Выберите один из вариантов</option>
            <option
              v-for="(elem, index) in item.list"
              :key="index"
              value="elem"
            >
              {{ elem }}
            </option>
          </b-form-select>
        </b-form-group>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
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
.step1Title {
  margin: 0 0 35px;
  line-height: 36px;
  @media (max-width: 767px) {
    margin-bottom: 30px;
  }
}
.item {
  .itemDesc {
    font-family: Montserrat;
    font-size: 20px;
    line-height: 26px;
    font-weight: 400;
    color: #000000;
    margin-bottom: 21px;
  }
  .form-group-wrap {
    margin-bottom: 45px;
  }
}
</style>
