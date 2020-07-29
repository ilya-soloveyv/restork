<template>
  <div ref="smartAutocomplete" class="smart-autocomplete">
    <input
      v-bind:value="value"
      @keydown="keyup"
      v-on:input="$emit('input', $event.target.value)"
      @focus="focusInput"
      @blur="blurInput"
      :class="{
        'smart-autocomplete-focus': focus,
        'smart-autocomplete-isResult': items.length
      }"
      :placeholder="placeholder"
      type="search"
    />
    <div v-if="loading" class="spin">
      <b-spinner small variant="primary"></b-spinner>
    </div>
    <ul v-if="items.length && focus">
      <!--  && focus -->
      <li
        v-for="(item, index) in items"
        :key="index"
        @mousedown="selectItem(item, index)"
        :class="{ active: activeItem === index }"
      >
        {{ item.formattedAddress }}
      </li>
    </ul>
    <!-- {{ items }} -->
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
  data() {
    return {
      focus: false,
      loading: false,
      timeoutID: null,
      activeItem: null
    }
  },
  watch: {
    items() {
      this.loading = false
    }
  },
  methods: {
    keyup(e) {
      const key = String.fromCharCode(e.keyCode)
      // console.log(key)
      if (/^[a-zA-Z0-9._\b]+$/.test(key)) {
        this.activeItem = null
        this.loading = true
        const get = this.get
        this.timeoutID = setTimeout(function() {
          // console.log(this)
          get()
          // console.log(timeoutID)
          // this.alert(timeoutID)
        }, this.timeout)
        // console.log(this.timeoutID)
        // clearTimeout(timeoutID)
      } else if (key === '(') {
        if (this.activeItem === null && this.checkNextIndexItems(0)) {
          this.activeItem = 0
        } else if (this.checkNextIndexItems(this.activeItem + 1)) {
          this.activeItem++
        } else {
          this.activeItem = null
        }
      } else if (key === '&') {
        const count = this.items.length - 1
        if (this.activeItem === null && this.checkNextIndexItems(count)) {
          this.activeItem = count
        } else if (this.checkNextIndexItems(this.activeItem - 1)) {
          this.activeItem--
        } else {
          this.activeItem = null
        }
      } else if (key === '\r') {
        if (this.activeItem !== null) {
          // console.log('enter')
          // console.log(this.activeItem)
          // console.log(this.items[this.activeItem])
          const item = this.items[this.activeItem]
          this.selectItem(item, this.activeItem)
          e.preventDefault()
        }
      }
    },
    get() {
      this.$emit('get')
      // console.log(result)
    },
    focusInput() {
      this.loading = true
      this.activeItem = null
      this.focus = true
      this.$emit('get')
      // const smartAutocomplete = this.$refs.smartAutocomplete
      // smartAutocomplete.scrollIntoView()
    },
    blurInput() {
      this.focus = false
    },
    selectItem(item, index) {
      // console.log(index)
      this.activeItem = index
      this.$emit('selectItem', item)
      this.$emit('clear')
    },
    checkNextIndexItems(i) {
      i = i || 0
      if (this.items[i] !== undefined) return true
      else return false
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
  .spin {
    position: absolute;
    top: 50%;
    right: 1rem;
    transform: translate(0, -50%);
    width: 1rem;
    height: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  ul {
    z-index: 10;
    margin: 2px 0 0;
    padding: 0;
    list-style: none;
    position: absolute;
    left: 0;
    top: 100%;
    width: 100%;
    border-radius: 0 0 0.35rem 0.35rem;
    background-color: white;
    box-shadow: 0 2px 6px 2px rgba(0, 0, 0, 0.25);
    li {
      color: #6c757d;
      padding: 0.35rem 1rem;
      border-bottom: 1px solid #eeeeee;
      cursor: pointer;
      &:last-child {
        border-bottom: none;
      }
      &:hover {
        background-color: #f5f5f5;
      }
      &.active {
        background-color: #007bff;
        color: white;
      }
    }
  }
}
</style>
