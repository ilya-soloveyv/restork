<template>
  <div class="item">
    <div class="meta" v-b-toggle="'accordion_' + application.iApplicationID">
      <div class="ico">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#007BFF"
          stroke-width="2"
          stroke-linecap="square"
          stroke-linejoin="arcs"
        >
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      </div>
      <div class="date">Заявка от {{ dDate }}</div>
      <div class="direction">
        Направление: {{ application.sApplicationCountry }},
        {{ application.sApplicationState }},
        {{ application.sApplicationCity }}
      </div>
      <div class="dates">
        {{ application.dApplicationDateFrom }} -
        {{ application.dApplicationDateTo }}
      </div>
      <div class="count">
        {{ applicationObjectNew.length + applicationObjectView.length }} /
        {{ application.application_objects.length }}
      </div>
    </div>
    <b-collapse
      :id="'accordion_' + application.iApplicationID"
      role="tabpanel"
      accordion="accordionApplicationObject"
    >
      <div
        v-if="
          !applicationObjectWait.length &&
            !applicationObjectNew.length &&
            !applicationObjectView.length
        "
      >
        Идет подбор предложений...
      </div>
      <div v-if="applicationObjectWait.length">
        <b>Ожидаем предложения</b>
        <ListItemObject
          v-for="(app, index) in applicationObjectWait"
          :key="index"
          :app="app"
        />
      </div>
      <div v-if="applicationObjectNew.length">
        <b>Новые предложения</b>
        <ListItemObject
          v-for="(app, index) in applicationObjectNew"
          :key="index"
          :app="app"
        />
      </div>
      <div v-if="applicationObjectView.length">
        <b>Просмотренные предложения</b>
        <ListItemObject
          v-for="(app, index) in applicationObjectView"
          :key="index"
          :app="app"
        />
      </div>
    </b-collapse>
  </div>
</template>

<script>
import moment from 'moment'
import ListItemObject from '../../../components/Dashboard/application/ListItemObject'
moment.lang('ru')

export default {
  components: {
    ListItemObject
  },
  props: {
    application: {
      type: Object,
      required: true
    }
  },
  computed: {
    dDate() {
      return moment(this.application.dDate).format('DD MMMM YYYY')
    },
    applicationObjectWait() {
      return this.application.application_objects.filter(
        (application) => application.iObjectPrice === null
      )
    },
    applicationObjectNew() {
      return this.application.application_objects.filter(
        (application) =>
          application.iObjectPrice !== null && !application.iUserView
      )
    },
    applicationObjectView() {
      return this.application.application_objects.filter(
        (application) => application.iUserView
      )
    }
  }
}
</script>

<style lang="scss" scoped>
.item {
  border-bottom: 1px solid #d9d9d9;
  cursor: pointer;
  padding: 1rem 0;
}
</style>
