<template>
  <div class="item">
    <div v-b-toggle="'accordion_' + object.iObjectID" class="head">
      <div class="image">
        <img
          v-if="object.object_images.length"
          :src="
            SELECTEL_WEB +
              '/object/' +
              object.iObjectID +
              '/preview/' +
              object.object_images[0].sObjectImage
          "
        />
      </div>
      <div class="title">
        <span class="sObjectTitle">
          {{ object.sObjectTitle }}
        </span>
        <span class="sObjectTypeTitle">
          {{ object.object_type.sObjectTypeTitle }}
        </span>
        <nuxt-link :to="'/dashboard/object/' + object.iObjectID">
          Редактировать данные
        </nuxt-link>
      </div>
      <div class="info">
        Заявки: {{ applicationObjectNoViewOrNoPriceCount }} /
        {{ applicationObjectCount }}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icoOpen"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#000000"
          stroke-width="2"
          stroke-linecap="square"
          stroke-linejoin="arcs"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icoClose"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#000000"
          stroke-width="2"
          stroke-linecap="square"
          stroke-linejoin="arcs"
        >
          <path d="M18 15l-6-6-6 6" />
        </svg>
      </div>
    </div>
    <b-collapse
      :id="'accordion_' + object.iObjectID"
      accordion="my-accordion"
      class="data"
    >
      <div v-if="applicationObjectNoView.length" class="title">
        Новые заявки
      </div>
      <ListItemApplication
        v-for="(application, applicationIndex) in applicationObjectNoView"
        :key="'NoView' + applicationIndex"
        :application="application"
      />
      <div v-if="applicationObjectViewNoPrice.length" class="title">
        Заявки требующие вашей оценки
      </div>
      <ListItemApplication
        v-for="(application, applicationIndex) in applicationObjectViewNoPrice"
        :key="'NoPrice' + applicationIndex"
        :application="application"
      />
      <div v-if="applicationObjectViewPrice.length" class="title">
        Просмотренные заявки
      </div>
      <ListItemApplication
        v-for="(application, applicationIndex) in applicationObjectViewPrice"
        :key="'Price' + applicationIndex"
        :application="application"
      />
    </b-collapse>
  </div>
</template>

<script>
import ListItemApplication from '~/components/Dashboard/object/ListItemApplication'
export default {
  components: {
    ListItemApplication
  },
  props: {
    object: {
      type: Object,
      required: true,
      defaultValue: {}
    }
  },
  computed: {
    SELECTEL_WEB() {
      return process.env.SELECTEL_WEB
    },
    applicationObjectCount() {
      return this.object.application_objects.length
    },
    applicationObjectNoView() {
      return this.object.application_objects.filter(
        (application) => application.iObjectView === false
      )
    },
    applicationObjectViewNoPrice() {
      return this.object.application_objects.filter(
        (application) =>
          application.iObjectView === true && application.iObjectPrice === null
      )
    },
    applicationObjectViewPrice() {
      return this.object.application_objects.filter(
        (application) =>
          application.iObjectView === true && application.iObjectPrice !== null
      )
    },
    applicationObjectNoViewOrNoPriceCount() {
      return (
        this.applicationObjectNoView.length +
        this.applicationObjectViewNoPrice.length
      )
    }
  }
}
</script>

<style lang="scss" scoped>
.item {
  border-bottom: 1px solid #d9d9d9;
  padding: 1rem 0;
  .head {
    display: grid;
    grid-template-columns: 130px 1fr 150px;
    grid-template-rows: 1fr;
    grid-column-gap: 1rem;
    cursor: pointer;
    @media (max-width: 575px) {
      // background-color: red;
      grid-template-columns: 90px 1fr;
      grid-template-rows: 1fr auto;
    }
    &.collapsed {
      .info {
        svg {
          &.icoOpen {
            display: block;
          }
          &.icoClose {
            display: none;
          }
        }
      }
    }
    .image {
      height: 130px;
      background-color: #f5f5f5;
      border-radius: 0.5rem;
      overflow: hidden;
      @media (max-width: 575px) {
        height: auto;
        grid-column-start: 1;
        grid-column-end: 2;
        grid-row-start: 1;
        grid-row-end: 3;
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .title {
      padding: 0;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: flex-start;
      @media (max-width: 575px) {
        grid-column-start: 2;
        grid-column-end: 3;
        grid-row-start: 1;
        grid-row-end: 2;
      }
      .sObjectTitle {
        font-weight: 500;
      }
      .sObjectTypeTitle {
        font-size: 12px;
        text-transform: uppercase;
        font-weight: 500;
        color: #999999;
      }
      a {
        text-decoration: underline;
      }
    }
    .info {
      border-left: 1px solid #dddddd;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      @media (max-width: 575px) {
        grid-column-start: 2;
        grid-column-end: 3;
        grid-row-start: 2;
        grid-row-end: 3;
        border-left: none;
        justify-content: flex-start;
        align-items: flex-end;
      }
      svg {
        margin-left: 0.25rem;
        &.icoOpen {
          display: none;
        }
      }
    }
  }
  .data {
    .title {
      font-weight: 500;
      padding: 1rem 0 0.5rem;
      text-decoration: underline;
    }
  }
}
</style>
