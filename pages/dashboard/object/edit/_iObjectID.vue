<template>
  <div class="editObject" sticky-container>
    <div class="wrapTitle">
      <h1>Редактирование объекта</h1>
      <div class="titleBtn">
        <nuxt-link to="#">Удалить объект</nuxt-link>
      </div>
    </div>
    <div class="wrapBody">
      <ObjectEditObjectType :object="object" :objectType="objectType" />
    </div>
    <div class="wrapStatusTop">
      <ObjectEditStatus />
    </div>
    <div class="wrapStatus">
      <div v-sticky sticky-offset="{top: 25, bottom: 25}" sticky-side="both">
        <ObjectEditStatus />
      </div>
    </div>
    <div class="wrapStatusBottom">
      <div v-sticky sticky-offset="{top: 25, bottom: 0}" sticky-side="both">
        <div class="bottomStatus">
          bottomStatus
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ObjectEditObjectType from '@/components/Dashboard/object/edit/ObjectEditObjectType.vue'
import ObjectEditStatus from '@/components/Dashboard/object/ObjectEditStatus'

export default {
  middleware: 'auth',
  layout: 'dashboardV2Fluid',
  components: {
    ObjectEditObjectType,
    ObjectEditStatus
  },
  head() {
    return {
      title: 'Редактирование объекта'
    }
  },
  data() {
    // return {
    //   iObjectTypeID: 1
    // }
  },
  computed: {
    object() {
      return this.$store.state.object.item
    },
    objectType() {
      return this.$store.state.objectType.list
    }
    // SELECTEL_WEB() {
    //   return process.env.SELECTEL_WEB
    // },
    // objectOptions({ $store }) {
    //   return $store.state.objectOption.list
    // },
    // objectObjectOptionsArray: {
    //   get() {
    //     // this.$set(this, 'loadingDisabledCheckbox', false)
    //     return this.$store.state.object.item.object_object_options_array
    //   },
    //   set(objectObjectOptionsArray) {
    //     // console.log(objectObjectOptionsArray)
    //   }
    // },
    // roomOptions({ $store }) {
    //   return $store.state.roomOption.list
    // },
    // objectRoomOptionsArray: {
    //   get() {
    //     return this.$store.state.object.item.object_room_options_array
    //   },
    //   set(objectRoomOptionsArray) {
    //     // console.log(objectRoomOptionsArray)
    //   }
    // }
  },
  async asyncData({ store, $axios, params }) {
    await store.dispatch('object/GET_ITEM', {
      iObjectID: params.iObjectID
    })
    // await store.dispatch('objectOption/GET_LIST')
    // await store.dispatch('roomOption/GET_LIST')
  },
  created() {
    this.$store.dispatch('tutorial/GET_OBJECT')
    this.$store.dispatch('objectType/GET_LIST')
  }
}
</script>

<style lang="scss" scoped>
.editObject {
  background: #c1c1c1;
  height: 100%;
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: auto 730px 355px auto;
  grid-column-gap: 25px;
  @media (max-width: 1199px) {
    grid-template-rows: auto 1fr;
    grid-template-columns: auto 600px 305px auto;
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
      // @media (max-width: 767px) {
      //   padding: 40px 0 20px;
      // }
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
  .wrapBody {
    grid-row: 2/3;
    grid-column: 2/3;
    @media (max-width: 991px) {
      grid-row: 3/4;
      grid-column: 2/3;
    }
    @media (max-width: 575px) {
      grid-row: 3/4;
      grid-column: 1/2;
    }
  }
  .wrapStatusTop {
    display: none;
    @media (max-width: 991px) {
      display: grid;
      grid-row: 2/3;
      grid-column: 2/3;
      margin-bottom: 25px;
    }
    @media (max-width: 575px) {
      grid-row: 2/3;
      grid-column: 1/2;
    }
  }
  .wrapStatus {
    grid-row: 2/3;
    grid-column: 3/4;
    margin-bottom: 32px;
    @media (max-width: 991px) {
      display: none;
    }
  }
  .wrapStatusBottom {
    display: none;
    @media (max-width: 991px) {
      display: grid;
      grid-row: 4/5;
      grid-column: 1/4;
    }
    @media (max-width: 575px) {
      grid-row: 4/5;
      grid-column: 1/2;
      margin: 0 -15px;
    }
    .bottomStatus {
      background-color: white;
      box-shadow: 0 3px 10px rgba($color: #000000, $alpha: 0.16);
      padding: 25px;
      @media (max-width: 575px) {
      }
    }
  }
}
</style>
