<template>
  <div class="placeInfo quadrupleInput">
    <div class="wrapPlace">
      <b-form-group
        id="placeLabel"
        class="form-group-restork"
        label="Место"
        label-for="placeInput"
      >
        <b-form-input
          v-model="place.place"
          id="placeInput"
          placeholder="Место"
          type="text"
        ></b-form-input>
      </b-form-group>
    </div>
    <div class="wrapName">
      <b-form-group
        id="nameLabel"
        class="form-group-restork"
        label="Название"
        label-for="nameInput"
      >
        <b-form-input
          v-model="place.name"
          id="nameInput"
          placeholder="Название"
          type="text"
        ></b-form-input>
      </b-form-group>
    </div>

    <div class="wrapDistance">
      <b-form-group
        id="distanceLabel"
        class="form-group-restork"
        label="Расстояние"
        label-for="distanceInput"
      >
        <b-form-input
          v-model="place.distance"
          id="distanceInput"
          placeholder="0"
          type="text"
        ></b-form-input>
      </b-form-group>
    </div>

    <div class="deleteBtn" @click="deletePlace()">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="10"
        height="10"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#dbdbdb"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <line x1="5" y1="12" x2="19" y2="12"></line>
      </svg>
      <span>&nbsp;&nbsp;Удалить</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    place: {
      type: Object,
      default: () => ({})
    },
    deletePlace: Function
  },
  methods: {
    // deletePlace() {
    //   console.log('deleteItem')
    //   // this.$store.dispatch('tutorial/DELETE_PLACE', this.places[index])
    // }
  }
}
</script>

<style lang="scss" scoped>
.quadrupleInput {
  margin-bottom: 20px;
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 0.51fr;
  grid-template-rows: 1fr;
  grid-gap: 5px;
  @media (max-width: 767px) {
    grid-template-columns: 1.5fr 1fr 1fr;
    grid-template-rows: auto;
    grid-column-gap: 10px;
    grid-row-gap: 10px;
  }
  .deleteBtn {
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    color: #dbdbdb;
    cursor: pointer;
    @media (max-width: 767px) {
      height: 40px;
      grid-column: 3/4;
      align-items: flex-start;
    }
    span {
      font-size: 12px;
      line-height: 14px;
      font-weight: 500;
      @media (max-width: 767px) {
        font-size: 11px;
      }
    }
  }
}
</style>
