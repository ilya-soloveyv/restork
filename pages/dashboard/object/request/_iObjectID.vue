<template>
  <div class="objectRequest" sticky-container>
    <div class="wrapTitle">
      <h1>Запросы от гостей</h1>
      <div class="titleBtn">
        <nuxt-link :to="'/dashboard/object/edit/' + object.iObjectID">
          Редактировать объект
        </nuxt-link>
      </div>
    </div>
    <div class="wrapList">
      <!-- {{ applicationObject }} -->
      <!-- <pre>{{ applicationObject }}</pre> -->
      <!-- <pre>{{ object }}</pre> -->
      <RequestItemApplication
        v-for="(application, index) in applicationObject"
        :key="index"
        :application="application"
      />
    </div>
    <div class="wrapObject">
      <div v-sticky sticky-offset="{top: 25, bottom: 0}" sticky-side="both">
        <div class="object">
          <div class="images">
            <ObjectCarouselImage
              :iObjectID="object.iObjectID"
              :images="object.object_images"
            />
          </div>
          <ObjectRequestCard :object="object" />
        </div>
      </div>
    </div>
    <div class="wrapChat">
      <div v-sticky sticky-offset="{top: 0, bottom: 25}" sticky-side="both">
        <div class="chat">
          Chat Module
        </div>
      </div>
    </div>
    <div class="wrapUsers">
      <div v-sticky sticky-offset="{top: 0, bottom: 0}" sticky-side="bottom">
        <div class="users">
          Users
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ObjectCarouselImage from '@/components/Dashboard/ObjectCarouselImage'
import ObjectRequestCard from '@/components/Dashboard/ObjectRequestCard'
import RequestItemApplication from '@/components/Dashboard/object/RequestItemApplication'
export default {
  middleware: 'auth',
  layout: 'dashboardV2Fluid',
  components: {
    ObjectCarouselImage,
    ObjectRequestCard,
    RequestItemApplication
  },
  head() {
    return {
      title: 'Запросы от гостей'
    }
  },
  computed: {
    object({ $store }) {
      return $store.state.object.item
    },
    applicationObject({ $store }) {
      return $store.state.application_object.list
    }
  },
  async asyncData({ store, $axios, params }) {
    await store.dispatch('object/GET_ITEM', params)
    await store.dispatch('application_object/GET_LIST', params)
  }
}
</script>

<style lang="scss" scoped>
.objectRequest {
  height: 100%;
  padding-bottom: 70px;
  display: grid;
  grid-template-rows: auto auto 1fr auto;
  grid-template-columns: auto 730px 355px auto;
  grid-column-gap: 25px;
  @media (max-width: 1199px) {
    grid-template-rows: auto auto 1fr auto;
    grid-template-columns: auto 550px 355px auto;
  }
  @media (max-width: 991px) {
    grid-template-rows: auto auto 1fr auto;
    grid-template-columns: auto 690px auto;
  }
  @media (max-width: 767px) {
    grid-template-rows: auto auto 1fr auto;
    grid-template-columns: auto 510px auto;
  }
  @media (max-width: 575px) {
    grid-template-rows: auto auto 1fr auto;
    grid-template-columns: 1fr;
  }
  .wrapTitle {
    grid-row: 1/2;
    grid-column: 2/4;
    display: grid;
    grid-template-columns: 1fr auto;
    grid-template-rows: 1fr;
    @media (max-width: 991px) {
      grid-row: 1/2;
      grid-column: 2/3;
    }
    @media (max-width: 575px) {
      grid-row: 1/2;
      grid-column: 1/2;
    }
    h1 {
      grid-column: 1/2;
      grid-row: 1/2;
      margin: 0;
      padding: 50px 0;
    }
    .titleBtn {
      grid-column: 2/3;
      grid-row: 1/2;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      a {
        font-size: 14px;
        line-height: 18px;
        color: #818181;
        text-decoration: underline;
        &:hover {
          text-decoration: none;
        }
      }
    }
  }
  .wrapList {
    // background-color: green;
    grid-column: 2/3;
    grid-row: 2/5;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-gap: 25px;
    @media (max-width: 991px) {
      grid-column: 2/3;
      grid-row: 3/4;
    }
    @media (max-width: 575px) {
      grid-column: 1/2;
      grid-row: 3/4;
    }
  }
  .wrapObject {
    grid-column: 3/4;
    grid-row: 2/3;
    @media (max-width: 991px) {
      grid-column: 2/3;
      grid-row: 2/3;
    }
    @media (max-width: 575px) {
      grid-column: 1/2;
      grid-row: 2/3;
    }
    .object {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 200px 1fr;
      .images {
        grid-column: 1/2;
        grid-row: 1/2;
        border-radius: 3px 3px 0 0;
        overflow: hidden;
      }
    }
  }
  .wrapChat {
    grid-column: 3/4;
    grid-row: 4/5;
    // background-color: blue;
    z-index: 2;
    @media (max-width: 991px) {
      display: none;
    }
    .chat {
      flex-grow: 1;
      // background-color: yellow;
      z-index: 3;
    }
  }
  .wrapUsers {
    display: none;
    @media (max-width: 991px) {
      display: block;
      grid-column: 1/4;
      grid-row: 4/5;
    }
    @media (max-width: 575px) {
      grid-column: 1/2;
      grid-row: 4/5;
    }
    .users {
      flex-grow: 1;
      background-color: purple;
    }
  }
}
</style>
