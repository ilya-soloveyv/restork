<template>
  <div class="wrapStep1">
    <div class="itemDesc">
      Укажите общую площадь участка и коттеджа, сколько в нём жилых комнат и
      спальных мест
    </div>
    <div class="cottageInfoInput">
      <div class="wrapSiteSquare">
        <b-form-group
          id="siteSquareLabel"
          class="form-group-restork"
          label="Площадь участка"
          label-for="siteSquareInput"
        >
          <b-form-input
            id="siteSquareInput"
            placeholder="0"
            type="text"
          ></b-form-input>
        </b-form-group>
      </div>
      <div class="wrapCottageSquare">
        <b-form-group
          id="cottageSquareLabel"
          class="form-group-restork"
          label="Площадь коттеджа"
          label-for="cottageSquareInput"
        >
          <b-form-input
            id="cottageSquareInput"
            placeholder="0"
            type="text"
          ></b-form-input>
        </b-form-group>
      </div>

      <div class="wrapRoomNumber">
        <b-form-group
          id="roomNumberLabel"
          class="form-group-restork"
          label="Комнат"
          label-for="roomNumberInput"
        >
          <b-form-input
            id="roomNumberInput"
            placeholder="0"
            type="text"
          ></b-form-input>
        </b-form-group>
      </div>

      <div class="wrapCouchetteNumber">
        <b-form-group
          id="couchetteNumberLabel"
          class="form-group-restork"
          label="Спальных мест"
          label-for="couchetteNumberInput"
        >
          <b-form-input
            id="couchetteNumberInput"
            placeholder="0"
            type="text"
          ></b-form-input>
        </b-form-group>
      </div>
    </div>

    <div class="itemDesc">
      Укажите на каком этаже располагается квартира и какое общее количество
      этажей у здания
    </div>

    <div class="wrapFloorNumber">
      <b-form-group
        id="floorNumberLabel"
        class="form-group-restork"
        label="Этажность"
        label-for="floorNumberInput"
      >
        <b-form-input
          id="floorNumberInput"
          placeholder="0"
          type="text"
        ></b-form-input>
      </b-form-group>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.cottageInfoInput {
  // display: flex;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  grid-gap: 25px;
  .wrapSiteSquare {
  }
  .wrapCottageSquare {
  }
  .wrapRoomNumber {
  }
  .wrapCouchetteNumber {
  }
}
.wrapFloorNumber {
  width: 165px;
}
// .form-input-left {
//   border: 1px solid #eaeaea;
//   border-right: 0;
//   border-top-left-radius: 8px;
//   border-top-right-radius: 0;
//   border-bottom-left-radius: 8px;
//   border-bottom-right-radius: 0;
// }
// .form-input-right {
//   border: 1px solid #eaeaea;
//   border-left: 0;
//   border-top-right-radius: 8px;
//   border-top-left-radius: 0;
//   border-bottom-right-radius: 8px;
//   border-bottom-left-radius: 0;
// }
// .form-input-middle {
//   border: 1px solid #eaeaea;
//   border-left: 0;
//   border-right: 0;
//   border-radius: 0;
// }
</style>
