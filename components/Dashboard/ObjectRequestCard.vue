<template>
  <div class="objectData">
    <div class="params">{{ params }}</div>
    <div class="title">{{ object.sObjectTitle }}</div>
    <div class="location">
      <svg
        id="pin"
        xmlns="http://www.w3.org/2000/svg"
        width="11.792"
        height="16.771"
        viewBox="0 0 11.792 16.771"
      >
        <g
          id="Сгруппировать_2"
          data-name="Сгруппировать 2"
          transform="translate(0)"
        >
          <g id="Сгруппировать_1" data-name="Сгруппировать 1">
            <path
              id="Контур_4"
              data-name="Контур 4"
              d="M81.9,0A5.9,5.9,0,0,0,76.88,9l4.68,7.542a.491.491,0,0,0,.417.232h0a.491.491,0,0,0,.418-.239L86.96,8.917A5.9,5.9,0,0,0,81.9,0Zm4.221,8.412L81.97,15.335,77.715,8.479a4.917,4.917,0,1,1,8.4-.066Z"
              transform="translate(-76)"
            />
          </g>
        </g>
        <g
          id="Сгруппировать_4"
          data-name="Сгруппировать 4"
          transform="translate(2.948 2.948)"
        >
          <g
            id="Сгруппировать_3"
            data-name="Сгруппировать 3"
            transform="translate(0)"
          >
            <path
              id="Контур_5"
              data-name="Контур 5"
              d="M168.948,90a2.948,2.948,0,1,0,2.948,2.948A2.951,2.951,0,0,0,168.948,90Zm0,4.92a1.972,1.972,0,1,1,1.969-1.972A1.973,1.973,0,0,1,168.948,94.92Z"
              transform="translate(-166 -90)"
            />
          </g>
        </g>
      </svg>
      10 минут пешком до моря
    </div>
    <div class="rating">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="19.362"
        height="18.555"
        viewBox="0 0 19.362 18.555"
        data-v-de33f406=""
      >
        <path
          id="star"
          d="M19.311,7.5a1.027,1.027,0,0,0-.886-.708l-5.588-.507-2.21-5.172a1.029,1.029,0,0,0-1.893,0L6.525,6.289.936,6.8A1.03,1.03,0,0,0,.352,8.6l4.224,3.7L3.33,17.788A1.027,1.027,0,0,0,4.861,18.9l4.82-2.881L14.5,18.9a1.029,1.029,0,0,0,1.531-1.112L14.785,12.3l4.224-3.7A1.03,1.03,0,0,0,19.311,7.5Zm0,0"
          transform="translate(0 -0.492)"
        />
      </svg>
      4.9
    </div>
    <div class="application">
      <span class="label">Заявок:</span>
      23/24
    </div>
    <div class="new">
      <span class="label">Новых:</span>
      <span class="new">14</span>
    </div>
    <div class="button">
      <dropdown :items="status" />
    </div>
    <div :class="{ toggleMore: more }" class="wrapMore">
      <div @click="toggleMore" class="more">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffffff"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="bevel"
        >
          <circle cx="12" cy="12" r="1" />
          <circle cx="19" cy="12" r="1" />
          <circle cx="5" cy="12" r="1" />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import dropdown from '@/components/Dashboard/b-dropdown'
export default {
  components: {
    dropdown
  },
  props: {
    object: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      status: [
        {
          id: 1,
          title: 'Освобождается сегодня',
          desc: 'Свободен'
        },
        {
          id: 2,
          title: 'Освобождается завтра',
          desc: 'Освобождается завтра'
        },
        {
          id: 3,
          title: 'Освобождается послезавтра',
          desc: 'Освобождается послезавтра'
        },
        {
          id: 4,
          title: 'Занят',
          desc: 'Занят'
        }
      ],
      more: false
    }
  },
  computed: {
    params() {
      const params = []
      params.push(this.object.object_type.sObjectTypeTitle)
      params.push(this.object.iObjectArea)
      params.push(this.object.iObjectRoomCount + ' комн.')
      params.push(this.object.iObjectBed + ' кров.')
      return params.join(' | ')
    }
  },
  methods: {
    toggleMore() {
      this.more = !this.more
      this.$emit('showMore', this.more)
    }
  }
}
</script>

<style lang="scss" scoped>
.objectData {
  border-radius: 0 0 3px 3px;
  border: 1px solid #eaeaea;
  border-top: none;
  padding: 25px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, auto);
  grid-row-gap: 15px;
  .params {
    grid-column: 1/5;
    grid-row: 1/2;
    // background-color: red;
    font-size: 14px;
    color: #818181;
  }
  .title {
    grid-column: 1/5;
    grid-row: 2/3;
    // background-color: green;
    font-size: 16px;
    line-height: 24px;
    @media (max-width: 767px) {
      font-size: 14px;
      line-height: 20px;
    }
  }
  .location {
    grid-column: 1/4;
    grid-row: 3/4;
    // background-color: blue;
    font-size: 14px;
    line-height: 20px;
    display: flex;
    align-items: center;
    svg {
      margin-right: 10px;
    }
  }
  .rating {
    grid-column: 4/5;
    grid-row: 3/4;
    // background-color: orange;
    font-size: 14px;
    line-height: 20px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-weight: bold;
    svg {
      margin-right: 5px;
      fill: #ffc107;
    }
  }
  .application {
    grid-column: 1/3;
    grid-row: 4/5;
    // background-color: orangered;
  }
  .new {
    grid-column: 3/5;
    grid-row: 4/5;
    // background-color: purple;
  }
  .application,
  .new {
    line-height: 25px;
    font-weight: 500;
    font-size: 16px;
    span.label {
      display: block;
      font-size: 14px;
      line-height: 18px;
      color: #818181;
      font-weight: normal;
      padding-bottom: 5px;
    }
    span.new {
      background-color: #077bff;
      border-radius: 15px;
      padding: 0 15px;
      color: white;
      display: inline-block;
    }
  }
  .button {
    grid-column: 1/5;
    grid-row: 5/6;
    border-top: 1px solid #f0f0f0;
    padding-top: 25px;
    margin-top: 5px;
    @media (max-width: 767px) {
      font-size: 14px;
    }
    // background-color: rosybrown;
  }
  .wrapMore {
    display: none;
    &.toggleMore {
      .more {
        background-color: white;
        border: 1px solid #077bff;
        svg {
          stroke: #077bff;
        }
      }
    }
    .more {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background-color: rgba($color: #077bff, $alpha: 1);
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
  }
}
</style>
