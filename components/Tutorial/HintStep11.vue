<template>
  <div class="hint">
    <div class="titleTop">Вот так выглядит ваш объект для гостей</div>
    <div class="imagesCarousel">
      <ObjectCarouselImage :images="object_images" />
    </div>
    <div class="wrapInfo">
      <div class="advertTitle section">
        <div class="id">
          id23423552
        </div>
        <div class="title">
          Шикарный двух этажный коттедж Париж рядом с морем
        </div>
      </div>

      <div class="lodgeParams section">
        <div class="timeParam">
          <div class="picture">
            <img src="~/static/tutorial/geolocation.svg" />
          </div>
          <div class="desc itemList">
            10 минут пешком до моря
          </div>
        </div>
        <div class="squareParam">
          <div class="areaSquare">
            <div class="square">
              120 <span>м<sup>2</sup></span>
            </div>
            <div class="desc">
              Площадь участка
            </div>
          </div>
          <div class="areaSquare">
            <div class="square">
              78 <span>м<sup>2</sup></span>
            </div>
            <div class="desc">
              Площадь дома
            </div>
          </div>
        </div>
        <div class="appartParam">
          <div class="roomQuantity item">
            <div class="quantity">
              2
            </div>
            <div class="desc">
              Комнаты
            </div>
          </div>
          <div class="bedQuantity item">
            <div class="quantity">
              3
            </div>
            <div class="desc">
              Кровати
            </div>
          </div>
          <div class="stageNumber item">
            <div class="quantity">3<span>/5</span></div>
            <div class="desc">
              Этаж
            </div>
          </div>
        </div>
      </div>

      <div class="advert section">
        <div class="advContent">
          Сдам посуточно двухкомнатная квартира метро Сухаревская, Цветной
          бульвар 5 минут пешком, улица Большой Сухаревский переулок дом
          14.Изолированные комнаты- 19м и 8м, кухня 7м. Две двухспальные
          кровати, двухспальн…
        </div>
        <div class="advLink">
          Читать дальше
        </div>
      </div>

      <div class="facilitiesHotel section">
        <div class="titleSection">Удобства отеля</div>
        <div class="facilityList">
          <div class="facility">
            <div class="picture">
              <img src="~/static/tutorial/dog.svg" />
            </div>
            <div class="desc itemList">
              Можно с животными
            </div>
          </div>
          <div class="facility">
            <div class="picture">
              <img src="~/static/tutorial/dog.svg" />
            </div>
            <div class="desc itemList">
              Можно с животными
            </div>
          </div>
          <div class="facility">
            <div class="picture">
              <img src="~/static/tutorial/dog.svg" />
            </div>
            <div class="desc itemList">
              Можно с животными
            </div>
          </div>
        </div>
      </div>

      <div class="facilitiesRoom section">
        <div class="titleSection">Удобства в номере</div>
        <div class="facilityList">
          <div class="facility">
            <div class="picture">
              <img src="~/static/tutorial/dog.svg" />
            </div>
            <div class="desc itemList">
              Можно с животными
            </div>
          </div>
          <div class="facility">
            <div class="picture">
              <img src="~/static/tutorial/dog.svg" />
            </div>
            <div class="desc itemList">
              Можно с животными
            </div>
          </div>
          <div class="facility">
            <div class="picture">
              <img src="~/static/tutorial/dog.svg" />
            </div>
            <div class="desc itemList">
              Можно с животными
            </div>
          </div>
        </div>
      </div>

      <div class="features section">
        <div class="titleSection">Особенности</div>
        <div class="featureList">
          <div class="feature">
            <div class="picture">
              <img src="~/static/tutorial/dog.svg" />
            </div>
            <div class="desc itemList">
              Можно с животными
            </div>
          </div>
          <div class="feature">
            <div class="picture">
              <img src="~/static/tutorial/dog.svg" />
            </div>
            <div class="desc itemList">
              Можно с животными
            </div>
          </div>
        </div>
      </div>

      <div class="location">
        <div class="titleSection">
          <span>Местоположение</span>
        </div>
        <div class="locationDesc">
          <div class="region">
            Россия, Краснодарский край
          </div>
          <div class="city">
            Городской округ Анапа, село Витязево,Пионерская улица, 8
          </div>
        </div>
        <div class="locationImage">
          <img src="/tutorial/step11-map.jpg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ObjectCarouselImage from '@/components/Dashboard/ObjectCarouselImage'
export default {
  components: {
    ObjectCarouselImage
  },
  data() {
    return {
      object_images: []
    }
  }
}
</script>

<style lang="scss" scoped>
.hint {
  .titleTop {
    font-family: Montserrat;
    font-size: 16px;
    line-height: 26px;
    font-weight: 500;
    margin-bottom: 15px;
    padding: 0 25px;
    @media (min-width: 768px) and (max-width: 991px) {
      display: none;
    }
    @media (max-width: 767px) {
      margin-top: 40px;
    }
  }

  .imagesCarousel {
    @media (min-width: 768px) {
      padding: 0 25px;
    }
  }

  .section {
    margin-bottom: 40px;
  }

  .titleSection {
    font-family: Montserrat;
    font-size: 14px;
    line-height: 18px;
    font-weight: 600;
    color: #000000;
    margin-bottom: 15px;
  }

  .itemList {
    font-family: Montserrat;
    font-size: 14px;
    line-height: 14px;
    font-weight: 400;
  }

  .wrapInfo {
    margin-bottom: 15px;
    padding: 0 25px 25px;
    border-radius: 3px;
    border: 1px solid #ffffff;
    box-shadow: 0 3px 15px rgba(0, 0, 0, 0.16%);

    .advertTitle {
      margin-top: 30px;
      .id {
        margin-bottom: 20px;
        font-family: Montserrat;
        font-size: 12px;
        line-height: 15px;
        font-weight: 400;
        color: #818181;
      }
      .title {
        font-family: Montserrat;
        font-size: 16px;
        line-height: 24px;
        font-weight: 500;
      }
    }

    .lodgeParams {
      .timeParam {
        display: flex;
        align-items: center;
        margin-bottom: 25px;
        .picture {
          height: 20px;
          width: 20px;
          margin-right: 12px;
        }
        .desc {
          font-family: Montserrat;
          font-size: 12px;
          line-height: 15px;
          font-weight: 400;
        }
      }
      .squareParam {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        background: #fafafa;
        border-radius: 5px;
        padding: 15px 0;
        margin-bottom: 20px;
        .areaSquare {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          .square {
            font-size: 22px;
            line-height: 27px;
            font-weight: 500;
            margin-bottom: 7px;
            span {
              font-size: 14px;
              line-height: 18px;
              font-weight: 500;
            }
          }
          .desc {
            font-size: 11px;
            line-height: 14px;
            font-weight: 400;
          }
        }
      }
      .appartParam {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-column-gap: 5px;
        .item {
          background: #fafafa;
          border-radius: 5px;
          padding: 15px 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          .quantity {
            font-size: 22px;
            line-height: 27px;
            font-weight: 500;
            margin-bottom: 7px;
            margin-bottom: 7px;
            span {
              font-size: 11px;
              line-height: 14px;
              font-weight: 500;
            }
          }
          .desc {
            font-size: 11px;
            line-height: 14px;
            font-weight: 400;
          }
        }
        .secondColumn {
        }
      }
    }

    .advert {
      font-family: Montserrat;
      font-size: 14px;
      line-height: 22px;
      font-weight: 400;
      .advContent {
        margin-bottom: 20px;
      }
      .advLink {
        color: #747474;
        text-decoration: underline;
      }
    }

    .facilitiesHotel {
      .facilityList {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto;
        grid-gap: 10px;
        .facility {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          border: 1px solid #f0f0f0;
          border-radius: 3px;
          padding: 25px;
          .picture {
            img {
              width: 32px;
              height: 32px;
            }
            margin-bottom: 18px;
          }
          .desc {
          }
        }
      }
    }

    .facilitiesRoom {
      .facilityList {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto;
        grid-column-gap: 10px;
        grid-row-gap: 20px;
        .facility {
          display: flex;
          align-items: center;
          .picture {
            margin-right: 20px;
            img {
              width: 25px;
              height: 25px;
            }
          }
          .desc {
          }
        }
      }
    }

    .features {
      .featureList {
        .feature {
          display: flex;
          margin-bottom: 20px;
          .picture {
            margin-right: 20px;
            img: {
              width: 25px;
              height: 25px;
            }
          }
          .desc {
            display: flex;
            align-items: center;
          }
        }
      }
    }
    .location {
      .locationDesc {
        font-family: Montserrat;
        font-size: 14px;
        line-height: 18px;
        margin-bottom: 15px;
        .region {
          color: #767676;
          font-weight: 400;
        }
        .city {
          color: #000000;
          font-weight: 500;
        }
      }
      .locationImage {
        img {
          width: 100%;
        }
      }
    }
  }
}
</style>
