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
        <span class="sObjectTitle">{{ object.sObjectTitle }}</span>
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
    display: flex;
    cursor: pointer;
    @media (max-width: 991px) {
      flex-direction: column;
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
      flex-basis: 130px;
      height: 90px;
      background-color: #f5f5f5;
      border-radius: 0.5rem;
      flex-shrink: 0;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .title {
      flex-grow: 1;
      flex-shrink: 0;
      padding: 0 1rem;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: flex-start;
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
      flex-basis: 150px;
      flex-shrink: 0;
      border-left: 1px solid #dddddd;
      display: flex;
      justify-content: flex-end;
      align-items: center;
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
