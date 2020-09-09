<template>
  <div class="newObj landing-adaptive">
    <div class="wrapNewObj">
      <div class="wrapNewObjectForm">
        <div class="wrapNewObjectTitle">
          <NewObjectTitle :title="newObj.title" />
        </div>
        <DropDownList
          v-for="item in newObj.dropDownList"
          :key="item.id"
          :desc="item.desc"
          :label="item.label"
          :list="item.list"
        />
        <div class="wrapButton">
          <b-button variant="primary" size="lg">Далее</b-button>
        </div>
      </div>
      <div class="wrapHintMax">
        <Hint :title="hintObj.title" :list="hintObj.list" />
      </div>
      <div class="wrapHintMin">Подсказка</div>
    </div>
  </div>
</template>

<script>
import Hint from './Hint'
import NewObjectTitle from './Title'
import DropDownList from './DropDownList'
export default {
  components: {
    Hint,
    NewObjectTitle,
    DropDownList
  },
  props: {
    newObj: {
      type: Object,
      default: null
    },
    hintObj: {
      type: Object,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
.newObj {
  .wrapNewObj {
    display: grid;
    grid-template-columns: 1fr auto;
    grid-template-rows: 1fr;
    grid-column-gap: 25px;
    position: relative;
    @media (max-width: 767px) {
      grid-template-columns: 1fr;
    }
    .wrapNewObjectForm {
      .wrapNewObjectTitle {
        margin-top: 60px;
      }
      .wrapButton {
        margin: 50px 0 100px 0;
      }
    }
    .wrapHintMax {
      @media (max-width: 767px) {
        display: none;
      }
    }
    .wrapHintMin {
      display: none;
      @media (max-width: 767px) {
        position: absolute;
        display: block;
        top: 50px;
        right: 0px;
        height: 40px;
        width: 156px;
        border-radius: 20px;
        border-color: #dbdbdb;
      }
    }
  }
}
</style>
