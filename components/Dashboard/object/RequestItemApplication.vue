<template>
  <div class="item">
    <div class="user">
      <div class="ico">
        <img
          :src="
            SELECTEL_WEB +
              '/user/preview/' +
              application.application.user.sUserAvatar
          "
        />
        <div class="online"></div>
        <div class="message">25</div>
      </div>
      <div class="name">
        {{ application.application.user.sUserFirstName }}
        {{ application.application.user.sUserLastName }}
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
        <span>4.9</span>
        (25)
      </div>
    </div>
    <div class="data">
      <div class="time">
        {{ time }}
      </div>
      <div class="id">
        №
        {{ application.iApplicationObjectID }}
      </div>
      <div class="dates">
        <div class="label">Даты:</div>
        <div class="value">{{ dates }}</div>
      </div>
      <div class="guests">
        <div class="label">Гости:</div>
        <div class="value">4 взрослых, 2 детей</div>
      </div>
      <div class="options">
        <div class="label">Дополнительные удобства:</div>
        <div class="value">
          Бассейн, Зона мангала, Кондиционер, Собственая кухня
          <span>+7</span>
        </div>
      </div>
      <div class="cancel">
        <nuxt-link to="#">Отклонить запрос</nuxt-link>
      </div>
      <div class="price">
        <div class="label">Цена за весь период проживания:</div>
        <div class="value">
          <template v-if="price">
            {{ price }}
          </template>
          <template v-else>
            <nuxt-link to="#">Выставить цену</nuxt-link>
          </template>
        </div>
      </div>
      <!-- <pre>{{ application }}</pre> -->
    </div>
  </div>
</template>

<script>
import moment from 'moment'
moment.locale('ru')
export default {
  props: {
    application: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    SELECTEL_WEB() {
      return process.env.SELECTEL_WEB
    },
    time() {
      return moment(this.application.dDate).fromNow()
    },
    dates() {
      return (
        'c ' +
        moment(this.application.application.dApplicationDateFrom).format(
          'DD MMM'
        ) +
        ' по ' +
        moment(this.application.application.dApplicationDateTo).format('DD MMM')
      )
    },
    price() {
      return this.application.iObjectPrice
        ? new Intl.NumberFormat('ru-RU').format(this.application.iObjectPrice) +
            ' ₽'
        : false
    }
  }
}
</script>

<style lang="scss" scoped>
.item {
  border: 1px solid #eaeaea;
  border-radius: 8px;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 190px 1fr;
  box-shadow: 0 0 0 rgba($color: white, $alpha: 0);
  transition: all 0.15s ease-in-out;
  @media (max-width: 1199px) {
    grid-template-columns: 150px 1fr;
  }
  &:hover {
    border-color: rgba($color: #077bff, $alpha: 0.5);
    box-shadow: 0 3px 15px rgba($color: black, $alpha: 0.16);
  }
  .user {
    background-color: rgba($color: #dbdbdb, $alpha: 0.1);
    padding: 25px;
    display: grid;
    grid-template-rows: 140px 48px 1fr;
    grid-template-columns: 1fr;
    grid-gap: 20px;
    @media (max-width: 1199px) {
      grid-template-rows: 100px 48px 1fr;
      grid-gap: 10px;
    }
    .ico {
      position: relative;
      cursor: pointer;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
      }
      .message {
        position: absolute;
        top: 0;
        right: 0;
        height: 25px;
        padding: 0 15px;
        border-radius: 13px;
        font-size: 16px;
        font-weight: 500;
        line-height: 25px;
        background-color: rgba($color: #077bff, $alpha: 1);
        color: white;
        @media (max-width: 1199px) {
          height: 20px;
          line-height: 20px;
          font-size: 14px;
          padding: 0 10px;
        }
      }
      .online {
        position: absolute;
        bottom: 13px;
        right: 13px;
        background-color: rgba($color: #00ff27, $alpha: 1);
        border-radius: 50%;
        width: 15px;
        height: 15px;
        @media (max-width: 1199px) {
          bottom: 8px;
          right: 8px;
        }
      }
    }
    .name {
      font-size: 16px;
      line-height: 24px;
      font-weight: normal;
      overflow: hidden;
    }
    .rating {
      display: flex;
      justify-content: flex-start;
      align-items: flex-end;
      font-size: 14px;
      svg {
        fill: #ffc107;
        margin-right: 10px;
      }
      span {
        font-weight: bold;
        padding-right: 5px;
      }
    }
  }
  .data {
    // background-color: grey;
    // overflow: auto;
    margin: 25px 25px 25px 95px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(3, auto) 1fr;
    grid-row-gap: 20px;
    @media (max-width: 1199px) {
      margin: 25px;
    }
    .label {
      display: block;
      margin: 0 0 5px;
      color: #818181;
      font-size: 14px;
      line-height: 18px;
    }
    .value {
      font-size: 16px;
      font-weight: 500;
      line-height: 20px;
    }
    .time {
      // background-color: blue;
      grid-row: 1/2;
      grid-column: 1/4;
    }
    .id {
      // background-color: green;
      grid-row: 1/2;
      grid-column: 4/6;
      display: flex;
      justify-content: flex-end;
    }
    .time,
    .id {
      font-size: 12px;
      line-height: 15px;
      color: #9d9d9d;
    }
    .dates {
      // background-color: orange;
      grid-row: 2/3;
      grid-column: 1/4;
    }
    .guests {
      // background-color: red;
      grid-row: 2/3;
      grid-column: 4/6;
    }
    .options {
      // background-color: orchid;
      grid-row: 3/4;
      grid-column: 1/6;
    }
    .cancel {
      // background-color: pink;
      grid-row: 4/5;
      grid-column: 1/3;
      font-size: 12px;
      line-height: 20px;
      display: flex;
      justify-content: flex-start;
      align-items: flex-end;
      a {
        color: #818181;
        text-decoration: underline;
        &:hover {
          text-decoration: none;
        }
      }
    }
    .price {
      // background-color: peru;
      grid-row: 4/5;
      grid-column: 1/6;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: flex-end;
      .label {
        text-align: right;
      }
      .value {
        font-size: 30px;
        line-height: 38px;
        font-weight: bold;
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
        a {
          color: #077bff;
          font-size: 16px;
          line-height: 20px;
          margin-top: 18px;
        }
      }
    }
    .cancel,
    .price {
      border-top: 1px solid #f0f0f0;
      padding-top: 20px;
    }
    pre {
      grid-column: 1/6;
    }
  }
}
</style>
