<template>
  <div class="hint">
    <div class="titleTop">Вот так выглядит ваш объект для гостей</div>
    <div class="wrapInfo">
      <div class="facilitiesHotel">
        <div class="titleSection">Удобства отеля</div>
      </div>

      <div class="facilitiesRoom">
        <div class="titleSection">Удобства в номере</div>
      </div>

      <div class="features">
        <div class="titleSection">Особенности</div>
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
export default {}
</script>

<style lang="scss" scoped>
.hint {
  .titleTop {
    font-family: Montserrat;
    font-size: 14px;
    line-height: 26px;
    color: #000000;
    // margin-bottom: 15px;
  }
  .titleSection {
    font-family: Montserrat;
    font-size: 14px;
    line-height: 18px;
    font-weight: 600;
    color: #000000;
    margin-bottom: 15px;
  }

  .wrapInfo {
    margin-bottom: 15px;
    padding: 0 25px 25px;
    border-radius: 3px;
    border: 1px solid #ffffff;
    box-shadow: 0 3px 15px rgba(0, 0, 0, 0.16%);
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
