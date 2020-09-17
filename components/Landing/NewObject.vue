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
      <button class="wrapHintMin" :click="showHints">
        <img :src="'/landing/hint-image.svg'" />
        <span>
          Подсказка
        </span>
      </button>
      <div class="wrapHintMax">
        <Hint :title="hintObj.title" :list="hintObj.list" />
      </div>
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
  },
  methods: {
    showHints() {
      console.log('showHints')
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
    @media (max-width: 991px) {
      grid-template-columns: 1fr 25%;
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
      @media (max-width: 991px) {
        display: none;
      }
    }
    .wrapHintMin {
      display: none;
      @media (max-width: 991px) {
        position: absolute;
        display: block;
        top: 50px;
        right: 0px;
        height: 40px;
        width: 156px;
        border-radius: 20px;
        border: 1px solid #dbdbdb;
        border-color: #dbdbdb;
        font-family: Montserrat;
        font-size: 12px;
        line-height: 15px;
        font-weight: 400;
        display: flex;
        justify-content: center;
      }
    }
  }
}
</style>
