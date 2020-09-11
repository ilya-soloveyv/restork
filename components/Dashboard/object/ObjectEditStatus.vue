<template>
  <div class="objectEditStatus">
    <div class="id">
      id
    </div>
    <div class="rating">
      <Rating :rating="4.7" :count="14" />
    </div>
    <div class="create">
      <div class="label">Создан:</div>
      04.04.2020
    </div>
    <div class="update">
      <div class="label">Изменен:</div>
      05.04.2020
    </div>
    <div class="list">
      <div class="item success">
        <div class="title">Базовые настройка</div>
        <div class="ico">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000000"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="bevel"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
      </div>
      <div class="item">
        <div class="title">Описание объекта</div>
        <div class="ico">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000000"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="bevel"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </div>
      </div>
      <div class="item">
        <div class="title">Опции отеля</div>
        <div class="ico">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000000"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="bevel"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </div>
      </div>
      <div class="item">
        <div class="title">Опции комнат</div>
        <div class="ico">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000000"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="bevel"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </div>
      </div>
      <div class="item">
        <div class="title">Расположение объекта</div>
        <div class="ico">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000000"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="bevel"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </div>
      </div>
      <div class="item">
        <div class="title">Места рядом</div>
        <div class="ico">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000000"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="bevel"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </div>
      </div>
      <div class="item">
        <div class="title">Фотографии объекта</div>
        <div class="ico">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000000"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="bevel"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </div>
      </div>
    </div>
    <div class="button">
      <b-button size="lg" variant="primary" block>Сохранить изменения</b-button>
    </div>
  </div>
</template>

<script>
import Rating from '@/components/Rating'
export default {
  components: {
    Rating
  }
}
</script>

<style lang="scss" scoped>
.objectEditStatus {
  background-color: white;
  padding: 25px;
  border: 1px solid #eaeaea;
  border-radius: 8px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto auto auto;
  grid-row-gap: 20px;
  @media (max-width: 991px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: auto auto auto;
    grid-row-gap: 0;
    grid-column-gap: 20px;
  }
  @media (max-width: 767px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto auto;
    grid-gap: 0;
  }
  .id {
    grid-column: 1/2;
    grid-row: 1/2;
    font-size: 12px;
    line-height: 15px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-bottom: 1px solid #f0f0f0;
    padding-bottom: 25px;
    @media (max-width: 991px) {
      grid-column: 1/2;
      grid-row: 1/2;
      padding-bottom: 0;
      border-bottom: none;
    }
    @media (max-width: 767px) {
      grid-column: 1/2;
      grid-row: 1/2;
    }
  }
  .rating {
    grid-column: 2/3;
    grid-row: 1/2;
    display: flex;
    justify-content: flex-end;
    border-bottom: 1px solid #f0f0f0;
    padding-bottom: 25px;
    @media (max-width: 991px) {
      grid-column: 1/2;
      grid-row: 2/3;
      padding-bottom: 20px;
      justify-content: flex-start;
    }
    @media (max-width: 767px) {
      grid-column: 2/3;
      grid-row: 1/2;
    }
  }
  .create {
    grid-column: 1/2;
    grid-row: 2/3;
    border-bottom: 1px solid #f0f0f0;
    padding-bottom: 15px;
    @media (max-width: 991px) {
      grid-column: 2/3;
      grid-row: 1/3;
      padding-bottom: 0;
    }
    @media (max-width: 767px) {
      grid-column: 1/2;
      grid-row: 2/3;
    }
  }
  .update {
    grid-column: 2/3;
    grid-row: 2/3;
    border-bottom: 1px solid #f0f0f0;
    padding-bottom: 15px;
    @media (max-width: 991px) {
      grid-column: 3/5;
      grid-row: 1/3;
      padding-bottom: 0;
    }
    @media (max-width: 767px) {
      grid-column: 2/3;
      grid-row: 2/3;
    }
  }
  .list {
    grid-column: 1/3;
    grid-row: 3/4;
    border-bottom: 1px solid #f0f0f0;
    padding-bottom: 15px;
    @media (max-width: 991px) {
      grid-column: 1/5;
      grid-row: 3/4;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr;
      grid-column-gap: 20px;
      padding-top: 20px;
      padding-bottom: 0;
      border-bottom: none;
    }
    @media (max-width: 767px) {
      grid-column: 1/3;
      grid-row: 3/4;
      grid-template-columns: 1fr;
    }
    .item {
      line-height: 16px;
      font-size: 16px;
      padding: 6px 0;
      display: flex;
      @media (max-width: 767px) {
        font-size: 14px;
        padding: 3px 0;
      }
      &.success {
        .ico {
          border: 1px solid #000000;
          svg {
            stroke: #000000;
          }
        }
      }
      .title {
        flex-grow: 1;
        display: flex;
        justify-content: flex-start;
        align-items: center;
      }
      .ico {
        flex-shrink: 0;
        border: 1px solid #dbdbdb;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 4px;
        @media (max-width: 767px) {
          padding: 2px;
        }
        svg {
          stroke: #dbdbdb;
        }
      }
    }
  }
  .button {
    grid-column: 1/3;
    grid-row: 4/5;
    @media (max-width: 991px) {
      display: none;
    }
  }
  .label {
    color: #818181;
    line-height: 18px;
    font-size: 14px;
  }
}
</style>
