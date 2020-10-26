<template>
  <div class="wrapTutorial">
    <div class="wrapTitle">
      <Title />
    </div>

    <div class="wrapStep7">
      <div class="itemDesc">
        В строке напишите адрес расположения строения, где находится ваше жильё.
        Номер квартиры указывать не нужно.
      </div>
      <div class="wrapLocation">
        <b-form-group
          id="locationLabel"
          class="form-group-restork"
          label="Местоположение"
          label-for="locationInput"
        >
          <b-form-input
            id="locationInput"
            placeholder=""
            type="text"
          ></b-form-input>
        </b-form-group>
      </div>
      <div id="map">
        <client-only>
          <yandex-map
            :coords="object.aObjectCoordinate.coordinates"
            :controls="[]"
            :zoom="14"
            :draggable="true"
          >
            <ymap-marker
              :coords="object.aObjectCoordinate.coordinates"
              marker-id="123"
              hint-content="Расположение объекта"
            />
          </yandex-map>
        </client-only>
      </div>
    </div>
    <div class="wrapHint">
      <HintStep1
        :list="[
          {
            name: 'Single',
            desc:
              'Однокомнатный, для размещения одного отдыхающего. Спальное место одно.'
          },
          {
            name: 'Double',
            desc:
              'Однокомнатный номер для двоих. Может быть с одной большой кроватью или с двумя раздельными кроватями.'
          },
          {
            name: 'Triple',
            desc: 'Номер для троих отдыхающих.'
          },
          {
            name: 'Family Room',
            desc: 'Семейный двух- или трехкомнатный номер.'
          }
        ]"
      />
    </div>
    <div class="wrapProgress">
      <ProgressBar />
    </div>
    <PopupStep />
  </div>
</template>

<script>
import ProgressBar from '~/components/Tutorial/ProgressBar'
import Title from '~/components/Tutorial/Title'
import PopupStep from '~/components/Tutorial/PopupStep'
import HintStep1 from '~/components/Tutorial/HintStep1'

export default {
  data() {
    return {
      object: {
        aObjectCoordinate: {
          type: 'Point',
          coordinates: [43.6617826, 40.315748]
        }
      },
      roomCategory: [
        { id: 1, title: 'Single' },
        { id: 2, title: 'Double' },
        { id: 3, title: 'Triple' },
        { id: 4, title: 'Family room' }
      ]
    }
  },
  layout: 'dashboardV2Tutorial',
  components: {
    Title,
    ProgressBar,
    PopupStep,
    HintStep1
  }
}
</script>

<style lang="scss" scoped>
.wrapTutorial {
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: auto 1fr auto;
  height: calc(100vh - 63px);
  @media (max-width: 991px) {
    grid-template-columns: 1fr;
  }
  .wrapTitle {
    // background: blue;
    grid-column: 1/2;
    grid-row: 1/2;
  }
  .wrapStep7 {
    // background: red;
    grid-column: 1/2;
    grid-row: 2/3;
    overflow: auto;
    .itemDesc {
      margin: 0 0 15px;
      font-size: 20px;
      line-height: 26px;
      font-weight: 500;
      @media (max-width: 767px) {
        font-size: 16px;
        line-height: 20px;
      }
      &.secondDesc {
        margin-top: 45px;
        @media (max-width: 767px) {
          margin-top: 37px;
        }
      }
    }
  }
  .wrapHint {
    // background: green;
    grid-column: 2/3;
    grid-row: 2/4;
    overflow: auto;
    display: flex;
    justify-content: flex-end;
    @media (max-width: 991px) {
      display: none;
    }
  }
  .wrapProgress {
    // background: yellow;
    grid-column: 1/2;
    grid-row: 3/4;
  }
}
</style>
