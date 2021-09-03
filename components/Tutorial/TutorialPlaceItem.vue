<template>
  <div class="tutorial-place-item">
    <div class="tutorial-place-item__place">
      <div class="tutorial-place-item__wrapper">
        <label class="tutorial-place-item__label" for="">Место</label>
        <select
          v-model="iPlaceID"
          v-on:input="change_iPlaceID"
          class="tutorial-place-item__select"
        >
          <option
            v-for="place in places"
            :key="place.iPlaceID"
            :value="place.iPlaceID"
            class="tutorial-place-item__select-option"
          >
            {{ place.sPlaceTitle }}
          </option>
        </select>
      </div>
    </div>
    <div class="tutorial-place-item__title">
      <div class="tutorial-place-item__wrapper">
        <label class="tutorial-place-item__label" for="">Название</label>
        <input
          class="tutorial-place-item__input"
          type="text"
          v-on:input="change_title"
          :value="sPlaceTitle"
        />
      </div>
    </div>
    <div class="tutorial-place-item__distance">
      <div class="tutorial-place-item__wrapper">
        <label class="tutorial-place-item__label" for="">Расстояние</label>
        <input
          class="tutorial-place-item__input"
          type="text"
          v-on:input="change_distance"
          :value="iPlaceDistance"
        />
      </div>
    </div>
    <div class="tutorial-place-item__remove">
      <a
        class="tutorial-place-item__remove-link"
        href="#"
        @click.prevent="remove"
      >
        - Удалить
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    iObjectPlaceID: {
      type: Number,
      default: undefined
    },
    iObjectID: {
      type: Number,
      default: undefined
    },
    iPlaceID: {
      type: Number,
      default: undefined
    },
    sPlaceTitle: {
      type: String,
      default: undefined
    },
    iPlaceDistance: {
      type: Number,
      default: undefined
    },
    index: {
      type: Number,
      default: undefined
    },
    places: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    change_iPlaceID($event) {
      const iPlaceID = Number($event.target.value)
      this.$emit('select', { iPlaceID, index: this.index })
    },
    change_title($event) {
      const sPlaceTitle = $event.target.value
      this.$emit('title', { sPlaceTitle, index: this.index })
    },
    change_distance($event) {
      const iPlaceDistance = Number($event.target.value)
      this.$emit('distance', { iPlaceDistance, index: this.index })
    },
    remove() {
      this.$emit('remove', { index: this.index })
    }
  }
}
</script>

<style lang="scss" scoped>
.tutorial-place-item {
  margin-bottom: 16px;
  display: flex;

  &__wrapper {
    display: flex;
    flex-direction: column;
    border-right: 1px solid #ddd;
    padding-right: 16px;
  }

  &__label {
    color: #666;
    font-size: 10px;
    text-transform: uppercase;
    margin: 0;
    padding: 0 0 6px 0;
  }

  &__place {
    border: 1px solid #ddd;
    border-right: none;
    border-radius: 6px 0 0 6px;
    flex-grow: 1;
    padding: 16px 0 16px 16px;
  }

  &__title {
    border: 1px solid #ddd;
    border-left: none;
    border-right: none;
    flex-shrink: 0;
    flex-basis: 180px;
    padding: 16px 0 16px 16px;
  }

  &__distance {
    border: 1px solid #ddd;
    border-left: none;
    border-radius: 0 6px 6px 0;
    flex-shrink: 0;
    flex-basis: 180px;
    padding: 16px 0 16px 16px;

    .tutorial-place-item__wrapper {
      border: none;
    }
  }

  &__remove {
    flex-shrink: 0;
    flex-basis: 100px;
    padding: 16px 0 16px 16px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  &__remove-link {
    color: #999;
    font-size: 12px;
    text-decoration: none;
  }

  &__select {
    border: none;
    padding: 0;
    box-shadow: none;
    outline: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    -ms-appearance: none;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    background: none;
    // background: orange;
    margin: -37px -16px -16px -16px;
    padding: 37px 16px 16px 16px;
    cursor: pointer;
  }

  &__input {
    width: 100%;
    border: none;
    padding: 0;
    box-shadow: none;
    outline: none;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    background: none;
  }
}
</style>
