<template>
  <div class="content">
    <div
      :style="{ 'background-image': 'url(/landing/' + imagePhone + ')' }"
      class="phone"
    >
      <div class="info">
        <div
          :style="{ 'background-image': 'url(/landing/' + imageFoto + ')' }"
          class="phoneFoto"
        >
          <div class="fotoNumber">{{ fotoNumber }}</div>
        </div>
        <div class="advert">
          <div class="desc">{{ desc }}</div>
          <div class="where">{{ where }}</div>
          <div class="suggestion">
            Предложение отеля:
          </div>
          <div class="price">
            <div class="priceOld">{{ priceOld }}</div>
            <div class="priceNew">{{ priceNew }}</div>
          </div>
          <div class="details">
            <div class="howLongDesc">Проживания:</div>
            <div class="howMuchDesc">Гостей:</div>
            <div class="howLong">{{ howLong }}</div>
            <div class="howMuch">{{ howMuch }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imagePhone: {
      type: String,
      default: null
    },
    imageFoto: {
      type: String,
      default: null
    },
    fotoNumber: {
      type: String,
      default: null
    },
    desc: {
      type: String,
      default: null
    },
    where: {
      type: String,
      default: null
    },
    priceOld: {
      type: String,
      default: null
    },
    priceNew: {
      type: String,
      default: null
    },
    howLong: {
      type: String,
      default: null
    },
    howMuch: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  .phone {
    width: 300px;
    height: 605px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    padding: 70px 20px;
    .info {
      // width: 265px;
      // height: 465px;
      .phoneFoto {
        height: 195px;
        position: relative;
        .fotoNumber {
          content: '';
          position: absolute;
          bottom: 10px;
          right: 20px;
          width: 47px;
          height: 42px;
          background: #ffffff;
          font-family: Montserrat;
          font-size: 16px;
          line-height: 16px;
          font-weight: 300;
          color: #077bff;
          display: grid;
          align-items: center;
          justify-content: center;
        }
      }
      .advert {
        display: flex;
        flex-direction: column;
        padding: 18px 22px;
        border: 1px solid #d6d6d4;
        .desc {
          font-family: Montserrat;
          font-size: 17px;
          line-height: 26px;
          font-weight: 500;
          color: #000000;
          padding-bottom: 18px;
        }
        .where {
          font-family: Montserrat;
          font-size: 12px;
          line-height: 15px;
          font-weight: 300;
          color: #000000;
          padding-bottom: 13px;
        }
        .suggestion {
          font-family: Montserrat;
          font-size: 12px;
          line-height: 15px;
          font-weight: 300;
          color: #000000;
          padding-bottom: 8px;
        }
        .price {
          display: flex;
          height: 26px;
          margin-bottom: 10px;
          .priceOld {
            height: 100%;
            text-decoration: line-through;
            font-family: Montserrat;
            font-size: 14px;
            line-height: 18px;
            font-weight: 600;
            color: #818181;
            display: flex;
            align-items: flex-end;
            padding-right: 10px;
          }
          .priceNew {
            font-family: Montserrat;
            font-size: 26px;
            line-height: 26px;
            font-weight: 600;
            color: #000000;
          }
        }
        .details {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: 1fr 1fr;
          height: 40px;
          .howLongDesc {
            font-family: Montserrat;
            font-size: 12px;
            line-height: 15px;
            font-weight: 300;
            color: #818181;
          }
          .howMuchDesc {
            font-family: Montserrat;
            font-size: 12px;
            line-height: 15px;
            font-weight: 300;
            color: #818181;
          }
          .howLong {
            font-family: Montserrat;
            font-size: 14px;
            line-height: 30px;
            font-weight: 400;
            color: #000000;
          }
          .howMuch {
            font-family: Montserrat;
            font-size: 14px;
            line-height: 30px;
            font-weight: 400;
            color: #000000;
          }
        }
      }
    }
  }
}
</style>
