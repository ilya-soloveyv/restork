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
    <div :class="{ showMore: more }" class="wrapObject">
      <div v-sticky sticky-offset="{top: 25, bottom: 115}" sticky-side="both">
        <div class="object">
          <div class="images">
            <ObjectCarouselImage
              :iObjectID="object.iObjectID"
              :images="object.object_images"
            />
          </div>
          <ObjectRequestCard :object="object" @showMore="showMore($event)" />
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
        <UserListAvatar :users="users" />
      </div>
    </div>
  </div>
</template>

<script>
import ObjectCarouselImage from '@/components/Dashboard/ObjectCarouselImage'
import ObjectRequestCard from '@/components/Dashboard/ObjectRequestCard'
import RequestItemApplication from '@/components/Dashboard/object/RequestItemApplication'
import UserListAvatar from '@/components/Dashboard/UserListAvatar'
export default {
  middleware: 'auth',
  layout: 'dashboardV2Fluid',
  components: {
    ObjectCarouselImage,
    ObjectRequestCard,
    RequestItemApplication,
    UserListAvatar
  },
  head() {
    return {
      title: 'Запросы от гостей'
    }
  },
  data() {
    return {
      more: false
    }
  },
  computed: {
    object({ $store }) {
      return $store.state.object.item
    },
    applicationObject({ $store }) {
      return $store.state.application_object.list
    },
    users() {
      const users = this.applicationObject.map((x) => x.application.user)
      return users
    }
  },
  async asyncData({ store, $axios, params }) {
    await store.dispatch('object/GET_ITEM', params)
    await store.dispatch('application_object/GET_LIST', params)
  },
  methods: {
    showMore(more) {
      this.more = more
    }
  }
}
</script>

<style lang="scss" scoped>
.objectRequest {
  height: 100%;
  margin-bottom: 70px;
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
    padding: 0 15px;
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
      @media (max-width: 767px) {
        padding: 40px 0 20px;
      }
    }
    .titleBtn {
      grid-column: 2/3;
      grid-row: 1/2;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      @media (max-width: 767px) {
        display: none;
      }
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
      margin-top: 25px;
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
      &.showMore {
        .images {
          height: 100% !important;
        }
        .object {
          /deep/ .objectData {
            grid-template-columns: 3fr repeat(3, 1fr);
            grid-template-rows: repeat(4, auto);
            .params {
              display: flex;
              grid-column: 1/5;
              grid-row: 2/3;
            }
            .location {
              display: flex;
              grid-column: 1/4;
              grid-row: 3/4;
            }
            .rating {
              display: flex;
              grid-column: 4/5;
              grid-row: 3/4;
            }
            .button {
              display: block;
              grid-column: 1/5;
              grid-row: 4/5;
            }
          }
        }
      }
    }
    @media (max-width: 767px) {
      &.showMore {
        .images {
          height: 100% !important;
        }
        .object {
          /deep/ .objectData {
            grid-template-columns: 5fr 1fr;
            grid-template-rows: 48px repeat(3, auto);
            .params {
              display: flex;
              grid-column: 1/3;
              grid-row: 2/3;
            }
            .location {
              display: flex;
              grid-column: 1/2;
              grid-row: 3/4;
            }
            .rating {
              display: flex;
              grid-column: 2/3;
              grid-row: 3/4;
            }
            .button {
              display: block;
              grid-column: 1/3;
              grid-row: 4/5;
            }
          }
        }
      }
    }
    @media (max-width: 575px) {
      grid-column: 1/2;
      grid-row: 2/3;
    }
    .object {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 200px 1fr;
      @media (max-width: 991px) {
        grid-template-columns: 160px 1fr;
        grid-template-rows: 1fr;
        background-color: white;
      }
      @media (max-width: 767px) {
        grid-template-columns: 90px 1fr;
        grid-template-rows: 1fr;
      }
      .images {
        grid-column: 1/2;
        grid-row: 1/2;
        border-radius: 3px 3px 0 0;
        overflow: hidden;
        @media (max-width: 991px) {
          border-radius: 3px 0 0 3px;
          height: 90px;
          /deep/ .slick-prev,
          /deep/ .slick-next,
          /deep/ .slick-dots {
            display: none !important;
          }
        }
      }
      /deep/ .objectData {
        grid-column: 1/2;
        grid-row: 2/3;
        @media (max-width: 991px) {
          grid-column: 2/3;
          grid-row: 1/2;
          border-radius: 0 3px 3px 0;
          border: 1px solid #eaeaea;
          border-left: none;
          padding: 20px;
          grid-template-columns: 3fr repeat(3, 1fr);
          grid-template-rows: 1fr;
          .params {
            display: none;
          }
          .title {
            grid-column: 1/2;
            grid-row: 1/2;
            display: flex;
            justify-content: flex-start;
            align-items: center;
          }
          .location {
            display: none;
          }
          .rating {
            display: none;
          }
          .application {
            grid-column: 2/3;
            grid-row: 1/2;
          }
          .new {
            grid-column: 3/4;
            grid-row: 1/2;
          }
          .button {
            display: none;
          }
          .wrapMore {
            grid-column: 4/5;
            grid-row: 1/2;
            display: flex;
            justify-content: flex-end;
            align-items: center;
          }
        }
        @media (max-width: 767px) {
          grid-template-columns: 5fr 1fr;
          grid-template-rows: 48px;
          .params {
            display: none;
          }
          .title {
            grid-column: 1/2;
            grid-row: 1/2;
            display: flex;
            justify-content: flex-start;
            align-items: center;
          }
          .location {
            display: none;
          }
          .rating {
            display: none;
          }
          .application {
            display: none;
          }
          .new {
            display: none;
          }
          .button {
            display: none;
          }
          .wrapMore {
            grid-column: 2/3;
            grid-row: 1/2;
            display: flex;
            justify-content: flex-end;
            align-items: center;
          }
        }
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
      margin-top: 25px;
    }
    @media (max-width: 767px) {
      grid-column: 1/4;
    }
    @media (max-width: 575px) {
      grid-column: 1/2;
      grid-row: 4/5;
      margin: 0 -15px;
    }
    .userlistavatar {
      flex-grow: 1;
    }
  }
}
</style>
