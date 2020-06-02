<template>
  <div class="smart-autocomplete">
    <input
      v-bind:value="value"
      @keyup="keyup"
      v-on:input="$emit('input', $event.target.value)"
      type="search"
    />
    <ul v-if="items.length">
      <li v-for="(item, index) in items" :key="index">
        {{ item.formattedAddress }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    timeout: {
      type: Number,
      default: 5000
    },
    value: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: 'Введите поисковый запрос...'
    },
    items: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    keyup(e) {
      const get = this.get
      const timeoutID = setTimeout(function() {
        // console.log(this)
        get()
        // console.log(timeoutID)
        // this.alert(timeoutID)
      }, this.timeout)
      console.log(timeoutID)
      // clearTimeout(timeoutID)
    },
    get() {
      this.$emit('get')
    },
    alert() {
      alert(1)
    }
  }
}
</script>

<style lang="scss" scoped>
.smart-autocomplete {
  position: relative;
  height: 100%;
  input {
    border: none;
    outline: none;
    width: 100%;
    height: 100%;
    &::-webkit-search-decoration,
    &::-webkit-search-cancel-button,
    &::-webkit-search-results-button,
    &::-webkit-search-results-decoration {
      -webkit-appearance: none;
    }
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    position: absolute;
    left: 0;
    top: 100%;
    width: 100%;
    background-color: red;
    li {
    }
  }
}
</style>
