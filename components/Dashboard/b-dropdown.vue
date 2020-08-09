<template>
  <b-dropdown
    :class="{ darkBg: activeIndex === 3, buttonLg: buttonLg }"
    variant="light"
    no-caret
    block
  >
    <template v-slot:button-content>
      {{ activeStatusDesc }}
    </template>
    <b-dropdown-item
      v-for="(item, index) in items"
      :key="index"
      :active="index === activeIndex"
      @click.prevent="useStatus(index, item.id)"
      class="stopClickGoTo"
    >
      {{ item.title }}
    </b-dropdown-item>
  </b-dropdown>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => []
    },
    buttonLg: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      activeIndex: this.items.length - 1
    }
  },
  computed: {
    activeStatusDesc() {
      return this.items[this.activeIndex].desc
    }
  },
  methods: {
    useStatus(index, id) {
      this.activeIndex = index
    }
  }
}
</script>

<style lang="scss" scoped>
.dropdown {
  &.show {
    /deep/ button.dropdown-toggle {
      background-color: white;
      border: 1px solid black !important;
    }
  }
  &.darkBg {
    /deep/ button.dropdown-toggle {
      background-color: #f4f4f4;
      border: 1px solid #dbdbdb;
    }
  }
  &.buttonLg {
    /deep/ button.dropdown-toggle {
      font-size: 16px;
      line-height: 58px;
      @media (max-width: 767px) {
        font-size: 14px;
        line-height: 38px;
      }
    }
  }
  /deep/ button.dropdown-toggle {
    font-size: 12px;
    font-weight: 500;
    padding: 0;
    line-height: 38px;
    color: black;
    border: 1px solid #dbdbdb;
    border-radius: 5px;
    &:active {
      background-color: white !important;
      border: 1px solid black !important;
    }
  }
  /deep/ .dropdown-menu {
    width: 100% !important;
    box-shadow: 0 3px 15px rgba($color: #000000, $alpha: 0.16);
    border: none;
    margin-top: 5px;
    background-color: white;
    li {
      a {
        font-size: 12px;
        font-weight: 500;
        padding: 0 25px;
        line-height: 30px;
        &.active {
          color: #818181;
          background: none;
          &:hover {
            text-decoration: none;
          }
        }
        &:hover {
          background: none;
          text-decoration: underline;
        }
      }
    }
  }
}
</style>
