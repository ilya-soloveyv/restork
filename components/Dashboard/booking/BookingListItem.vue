<template>
  <div ref="item" :class="{ open: buttonActive }" class="item">
    <div class="date">12.09.2020</div>
    <div class="id">Id2382354</div>
    <div class="object">Шикарный двух этажный коттедж Париж рядом с морем</div>
    <div class="dates">11 сент. - 12 окт.</div>
    <div class="price"><span>Цена:</span> 22 500₽</div>
    <div class="commission"><span>Комиссия:</span> 2 500₽</div>
    <div class="guests">
      Константин Константин <span>4 взрослых, 2 детей</span>
    </div>
    <div class="chat">
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10.641"
          height="9.369"
          viewBox="0 0 10.641 9.369"
        >
          <g data-name="Сгруппировать 140" transform="translate(0 0)">
            <path
              data-name="Контур 92"
              d="M1.549,39.905H.795l.533-.533A1.8,1.8,0,0,0,1.843,38.3,4.063,4.063,0,0,1,.251,36.422,3.687,3.687,0,0,1,.144,34.06a4.626,4.626,0,0,1,1.772-2.475,5.791,5.791,0,0,1,3.421-1.049,5.736,5.736,0,0,1,3.955,1.348A4.046,4.046,0,0,1,10.3,36.519,4.162,4.162,0,0,1,9.29,37.927,5.722,5.722,0,0,1,5.338,39.28a7.191,7.191,0,0,1-1.789-.228,2.794,2.794,0,0,1-2,.852Z"
              transform="translate(0 -30.536)"
              fill="#fff"
            />
          </g>
        </svg>
        23
      </span>
    </div>
    <div class="status">Отмена</div>
    <div class="img">
      <img src="/object.jpg" alt />
    </div>
    <div class="setting">
      <span>Котедж</span>
      <span>78 м2</span>
      <span>2 ком.</span>
      <span>3 кров.</span>
    </div>
    <div class="options">
      <div class="title">Дополнительные удобства</div>
      Бассейн, Зона мангала, Кондиционер, Собственая кухня, Уборка, Услуги
      прачечной, Смена постельного белья, Смена полотенец, Трансфер, Завтраки,
      Wi-Fi
    </div>
    <div class="rating">
      <Rating :rating="4.7" :count="14" />
    </div>
    <div class="avatar">
      <img src="/avatar.jpg" alt />
    </div>
    <div class="wrapButton">
      <div
        @click="toggleButton"
        :class="{ active: buttonActive }"
        class="toggleBtn"
      >
        <span></span>
      </div>
    </div>
  </div>
</template>

<script>
import Rating from '@/components/Rating'
export default {
  components: {
    Rating
  },
  data() {
    return {
      buttonActive: false
    }
  },
  methods: {
    toggleButton() {
      if (!this.buttonActive) {
        const item = this.$refs.item.getBoundingClientRect()
        window.scrollTo(0, item.top + window.pageYOffset - 15)
      }
      this.buttonActive = !this.buttonActive
    }
  }
}
</script>

<style lang="scss" scoped>
.item {
  margin-top: 25px;
  border: 1px solid #dbdbdb;
  border-radius: 8px;
  padding: 15px;
  font-weight: 500;
  display: grid;
  grid-template-columns: 70px 70px 90px 90px 70px 70px 80px 1fr 1fr 70px 70px;
  grid-template-rows: auto 1fr;
  grid-column-gap: 15px;
  grid-row-gap: 25px;
  font-size: 14px;
  line-height: 20px;
  overflow: hidden;
  @media (max-width: 991px) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto;
    grid-row-gap: 15px;
    &.open {
      .img {
        grid-row: 3/7;
      }
      .setting {
        display: flex !important;
      }
      .options {
        display: block !important;
      }
    }
  }
  @media (max-width: 767px) {
    grid-gap: 15px;
    &.open {
      box-shadow: 0 20px 15px rgba($color: black, $alpha: 0.16);
      .price {
        display: flex;
      }
      .commission {
        display: flex;
      }
      .avatar {
        display: flex;
      }
      .rating {
        display: flex;
      }
      .img {
        display: block;
        grid-row: auto;
      }
    }
  }
  .date {
    grid-column: 1/2;
    grid-row: 1/2;
    word-wrap: break-word;
    font-size: 12px;
    @media (max-width: 991px) {
      grid-column: 2/3;
      grid-row: 1/2;
    }
    @media (max-width: 767px) {
      grid-column: 3/4;
      grid-row: 1/2;
      text-align: right;
    }
  }
  .id {
    grid-column: 2/3;
    grid-row: 1/2;
    font-size: 12px;
    @media (max-width: 991px) {
      grid-column: 3/4;
      grid-row: 1/2;
    }
    @media (max-width: 767px) {
      grid-column: 4/5;
      grid-row: 1/2;
      text-align: right;
    }
  }
  .object {
    grid-column: 3/5;
    grid-row: 1/2;
    height: 40px;
    overflow: hidden;
    @media (max-width: 991px) {
      grid-column: 1/3;
      grid-row: 3/4;
    }
    @media (max-width: 767px) {
      grid-column: 1/4;
      grid-row: 3/4;
      height: auto;
    }
  }
  .dates {
    grid-column: 5/6;
    grid-row: 1/2;
    @media (max-width: 991px) {
      grid-column: 3/4;
      grid-row: 3/4;
    }
    @media (max-width: 767px) {
      grid-column: 1/4;
      grid-row: 4/5;
    }
  }
  .price {
    grid-column: 6/7;
    grid-row: 1/2;
    @media (max-width: 991px) {
      grid-column: 1/2;
      grid-row: 4/5;
      display: flex;
      align-items: center;
    }
    @media (max-width: 767px) {
      grid-column: 1/3;
      grid-row: 7/8;
      display: none;
    }
    span {
      color: #818181;
      display: none;
      @media (max-width: 991px) {
        display: block;
        padding-right: 5px;
      }
    }
  }
  .commission {
    grid-column: 7/8;
    grid-row: 1/2;
    @media (max-width: 991px) {
      grid-column: 2/3;
      grid-row: 4/5;
      display: flex;
      align-items: center;
    }
    @media (max-width: 767px) {
      grid-column: 3/5;
      grid-row: 7/8;
      display: none;
    }
    span {
      color: #818181;
      display: none;
      @media (max-width: 991px) {
        display: block;
        padding-right: 5px;
      }
    }
  }
  .guests {
    grid-column: 8/10;
    grid-row: 1/2;
    @media (max-width: 991px) {
      grid-column: 1/3;
      grid-row: 2/3;
    }
    @media (max-width: 767px) {
      grid-column: 1/4;
      grid-row: 2/3;
    }
    span {
      display: block;
      color: #818181;
      font-size: 12px;
    }
  }
  .chat {
    grid-column: 10/11;
    grid-row: 1/2;
    @media (max-width: 991px) {
      grid-column: 3/4;
      grid-row: 2/3;
    }
    @media (max-width: 767px) {
      grid-column: 4/5;
      grid-row: 2/3;
      text-align: right;
    }
    span {
      background-color: #077bff;
      color: white;
      line-height: 24px;
      padding: 0 10px;
      border-radius: 12px;
      display: inline-flex;
      align-items: center;
      svg {
        margin-right: 5px;
      }
    }
  }
  .status {
    grid-column: 11/12;
    grid-row: 1/2;
    color: #818181;
    @media (max-width: 991px) {
      grid-column: 1/2;
      grid-row: 1/2;
    }
    @media (max-width: 767px) {
      grid-column: 1/2;
      grid-row: 1/2;
    }
  }
  .img {
    grid-column: 1/3;
    grid-row: 2/3;
    margin: 0 0 -15px -15px;
    @media (max-width: 991px) {
      grid-column: 4/5;
      grid-row: 3/5;
      margin: 0 -15px -15px 0;
      position: relative;
    }
    @media (max-width: 767px) {
      grid-column: 3/5;
      grid-row: 8/9;
      // margin: 0;
      display: none;
      // position: static;
      // overflow: hidden;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      @media (max-width: 991px) {
        position: absolute;
      }
      @media (max-width: 767px) {
        // position: static;
      }
    }
  }
  .setting {
    grid-column: 3/4;
    grid-row: 2/3;
    display: flex;
    flex-direction: column;
    border-right: 1px solid #dbdbdb;
    color: #818181;
    @media (max-width: 991px) {
      grid-column: 1/4;
      grid-row: 5/6;
      border: none;
      flex-direction: row;
      display: none;
    }
    @media (max-width: 767px) {
      grid-column: 1/5;
      grid-row: 5/6;
      border-top: 1px solid #dbdbdb;
      padding-top: 15px;
      margin-top: 5px;
    }
    span {
      @media (max-width: 991px) {
        padding: 0 0 0 8px;
        margin: 0 0 0 8px;
        border-left: 1px solid #818181;
        line-height: 14px;
        &:first-child {
          margin: 0;
          padding: 0;
          border: none;
        }
      }
    }
  }
  .options {
    grid-column: 4/9;
    grid-row: 2/3;
    border-right: 1px solid #dbdbdb;
    @media (max-width: 991px) {
      grid-column: 1/4;
      grid-row: 6/7;
      border: none;
      display: none;
    }
    @media (max-width: 767px) {
      grid-column: 1/5;
      grid-row: 6/7;
    }
    .title {
      color: #818181;
      font-weight: normal;
      @media (max-width: 767px) {
        font-size: 10px;
      }
    }
  }
  .rating {
    grid-column: 9/10;
    grid-row: 2/3;
    display: flex;
    align-items: center;
    @media (max-width: 991px) {
      grid-column: 4/5;
      grid-row: 2/3;
      background-color: rgba($color: #dbdbdb, $alpha: 0.1);
      margin: -15px -15px -15px 0;
      display: flex;
      justify-content: center;
    }
    @media (max-width: 767px) {
      grid-column: 2/3;
      grid-row: 8/9;
      margin: 0;
      display: none;
    }
  }
  .avatar {
    grid-column: 10/11;
    grid-row: 2/3;
    display: flex;
    align-items: center;
    @media (max-width: 991px) {
      grid-column: 4/5;
      grid-row: 1/2;
      background-color: rgba($color: #dbdbdb, $alpha: 0.1);
      margin: -15px -15px 0 0;
      padding: 15px 0 0;
      display: flex;
      justify-content: center;
    }
    @media (max-width: 767px) {
      grid-column: 1/2;
      grid-row: 8/9;
      margin: 0;
      padding: 0;
      display: none;
    }
    img {
      width: 100%;
      border-radius: 50%;
      @media (max-width: 991px) {
        width: 50px;
        height: 50px;
        margin-bottom: -15px;
      }
      @media (max-width: 767px) {
        width: 100%;
        height: 100%;
        object-fit: cover;
        margin: 0;
      }
    }
  }
  .wrapButton {
    display: none;
    @media (max-width: 991px) {
      display: block;
      grid-column: 3/4;
      grid-row: 4/5;
      display: flex;
      justify-content: flex-end;
    }
    @media (max-width: 767px) {
      grid-column: 4/5;
      grid-row: 3/5;
      align-items: flex-end;
    }
    .toggleBtn {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background-color: #077bff;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      &.active {
        background-color: white;
        border: 1px solid #007bff;
        span {
          background-color: #007bff;
          &::before {
            background-color: #007bff;
          }
          &::after {
            background-color: #007bff;
          }
        }
      }
      span {
        display: block;
        width: 4px;
        height: 4px;
        background-color: white;
        border-radius: 50%;
        position: relative;
        &::before {
          content: '';
          width: 100%;
          height: 100%;
          background-color: white;
          border-radius: 50%;
          position: absolute;
          left: -7px;
          top: 0;
        }
        &::after {
          content: '';
          width: 100%;
          height: 100%;
          background-color: white;
          border-radius: 50%;
          position: absolute;
          left: 7px;
          top: 0;
        }
      }
    }
  }
}
</style>
