<template>
  <div @click="goTo" class="objectListItem">
    <ObjectCarouselImage
      :iObjectID="object.iObjectID"
      :images="object.object_images"
    />
    <div class="data">
      <div class="id">№ {{ object.iObjectID }}</div>
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
        <span>4.9</span>
        (25)
      </div>
      <div class="title">
        {{ object.sObjectTitle }}
      </div>
      <div class="notifications">
        <template v-if="activeStatusID === 1">
          <div class="message">
            Сообщения
            <span>24</span>
          </div>
          <div class="application">
            Заявки
            <span>18</span>
          </div>
        </template>
        <template v-else-if="activeStatusID === 2">
          <div class="error">
            Объект не был забронирован
          </div>
        </template>
        <template v-else-if="activeStatusID === 3">
          <div class="message">
            Сообщения
            <span>24</span>
          </div>
        </template>
        <template v-else>
          <div class="success">
            <svg
              id="correct"
              xmlns="http://www.w3.org/2000/svg"
              width="13.174"
              height="13.174"
              viewBox="0 0 13.174 13.174"
            >
              <path
                id="Контур_63"
                data-name="Контур 63"
                d="M6.587,0a6.587,6.587,0,1,0,6.587,6.587A6.595,6.595,0,0,0,6.587,0Zm0,0"
                fill="#077bff"
              />
              <path
                id="Контур_64"
                data-name="Контур 64"
                d="M147.617,166.265l-3.568,3.568a.548.548,0,0,1-.776,0l-1.784-1.784a.549.549,0,0,1,.776-.776l1.4,1.4,3.18-3.18a.549.549,0,0,1,.776.776Zm0,0"
                transform="translate(-137.692 -161.074)"
                fill="#fafafa"
              />
            </svg>
            Забронировано
          </div>
          <div class="message">
            Сообщения
            <span>24</span>
          </div>
        </template>
      </div>
      <div class="status">
        <b-dropdown
          :class="{ status4: activeStatusID === 4 }"
          variant="light"
          no-caret
          block
        >
          <template v-slot:button-content>
            {{ activeStatusDesc }}
          </template>
          <b-dropdown-item
            v-for="(item, index) in status"
            :key="index"
            :active="item.id === activeStatusID"
            @click.prevent="useStatus(item.id)"
            class="stopClickGoTo"
          >
            {{ item.title }}
          </b-dropdown-item>
        </b-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
import ObjectCarouselImage from '~/components/Dashboard/ObjectCarouselImage'

export default {
  components: {
    ObjectCarouselImage
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
      activeStatusID: 4
    }
  },
  computed: {
    activeStatusDesc() {
      const status = this.status.find((x) => x.id === this.activeStatusID)
      return status.desc
    }
  },
  methods: {
    useStatus(id) {
      this.activeStatusID = id
    },
    goTo($event) {
      let click = true
      $event.target.classList.forEach(function(item) {
        if (item === 'stopClickGoTo' || item === 'dropdown-item') {
          click = false
        }
      })
      if (click) {
        this.$router.push('/dashboard/object/' + this.object.iObjectID)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.objectListItem {
  border-radius: 3px;
  box-shadow: 0 0 0 rgba($color: #000000, $alpha: 0);
  transition: box-shadow 0.15s ease-in-out;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 200px 1fr;
  background-color: white;
  cursor: pointer;
  &:hover {
    box-shadow: 0 3px 15px rgba($color: #000000, $alpha: 0.16);
  }
  .data {
    border-radius: 0 0 3px 3px;
    background-color: white;
    padding: 25px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto 1fr auto auto;
    grid-gap: 20px;
    .id {
      grid-column: 1/2;
      grid-row: 1/2;
      color: #818181;
      font-size: 12px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
    }
    .rating {
      grid-column: 2/3;
      grid-row: 1/2;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      font-size: 14px;
      line-height: 20px;
      svg {
        fill: #ffc107;
      }
      span {
        font-weight: bold;
        padding: 0 5px 0 5px;
      }
    }
    .title {
      grid-column: 1/3;
      grid-row: 2/3;
      font-size: 16px;
      line-height: 24px;
    }
    .notifications {
      grid-column: 1/3;
      grid-row: 3/4;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr;
      .success,
      .error,
      .message,
      .application {
        display: flex;
        align-items: center;
        font-weight: 400;
        font-size: 14px;
        color: #818181;
        line-height: 20px;
        span {
          background-color: #077bff;
          color: white;
          padding: 0 10px;
          border-radius: 10px;
          margin-left: 5px;
        }
      }
      .success {
        color: #077bff;
        font-weight: 600;
        svg {
          margin-right: 5px;
        }
      }
      .error {
        grid-column: 1/3;
        font-weight: 600;
      }
      .message {
      }
      .application {
      }
    }
    .status {
      grid-column: 1/3;
      grid-row: 4/5;
      /deep/ .dropdown {
        &.show {
          button.dropdown-toggle {
            background-color: white;
            border: 1px solid black;
          }
        }
        &.status4 {
          button.dropdown-toggle {
            background-color: #f4f4f4;
            border: 1px solid #dbdbdb !important;
          }
        }
        button.dropdown-toggle {
          font-size: 12px;
          font-weight: 500;
          padding: 0;
          line-height: 38px;
          color: black;
          border: 1px solid #dbdbdb;
          border-radius: 5px;
          &:active {
            background-color: white;
            border: 1px solid black;
          }
        }
        .dropdown-menu {
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
    }
  }
}
</style>
