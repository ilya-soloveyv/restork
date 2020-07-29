<template>
  <div class="item">
    <div v-b-toggle="'accordion_' + application.iApplicationID" class="meta">
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
      <div class="data">
        <div class="date">
          <span>Заявка от:</span>
          {{ dDate }}
        </div>
        <div class="direction">
          <span>Направление:</span>
          {{ application.sApplicationState }},
          {{ application.sApplicationCity }}
        </div>
        <div class="dates">
          <span>Период проживания:</span>
          {{ dApplicationDateFromTo }}
        </div>
      </div>
      <div class="count">
        <span>
          Ответов:
          {{ applicationObjectNew.length + applicationObjectView.length }} /
          {{ application.application_objects.length }}
        </span>
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
    <div class="appliactionObjectList">
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
          class="line"
        >
          Идет подбор предложений...
        </div>
        <div v-if="applicationObjectWait.length" class="line">
          <b>Ожидаем предложения</b>
          <ListItemObject
            v-for="(app, index) in applicationObjectWait"
            :key="index"
            :app="app"
          />
        </div>
        <div v-if="applicationObjectNew.length" class="line">
          <b>Новые предложения</b>
          <ListItemObject
            v-for="(app, index) in applicationObjectNew"
            :key="index"
            :app="app"
          />
        </div>
        <div v-if="applicationObjectView.length" class="line">
          <b>Просмотренные предложения</b>
          <ListItemObject
            v-for="(app, index) in applicationObjectView"
            :key="index"
            :app="app"
          />
        </div>
      </b-collapse>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import ListItemObject from '../../../components/Dashboard/application/ListItemObject'
moment.locale('ru')

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
    },
    dApplicationDateFromTo() {
      return (
        'c ' +
        moment(this.dApplicationDateFrom).format('DD MMMM YYYY') +
        ' по ' +
        moment(this.dApplicationDateTo).format('DD MMMM YYYY')
      )
    }
  }
}
</script>

<style lang="scss" scoped>
.item {
  border-bottom: 1px solid #d9d9d9;
  // padding-bottom: 1rem;
  cursor: pointer;
  // padding: 1rem 0;
  .meta {
    display: flex;
    // background: red;
    padding: 1rem 0 0;
    font-size: 16px;
    &:focus {
      outline: none;
    }
    @media (max-width: 767px) {
      flex-direction: column;
    }
    &.collapsed {
      .count {
        svg.icoClose {
          display: none;
        }
        svg.icoOpen {
          display: inline-block;
        }
      }
    }
    .ico {
      flex-basis: 24px;
      flex-shrink: 0;
      margin-right: 1rem;
      @media (max-width: 767px) {
        display: none;
      }
    }
    .data {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      .date {
      }
      .dates {
      }
      .direction {
      }
      span {
        color: #999999;
      }
    }
    .count {
      flex-basis: 170px;
      flex-shrink: 0;
      text-align: right;
      line-height: 24px;
      display: flex;
      @media (max-width: 767px) {
        flex-basis: auto;
        text-align: left;
      }
      span {
        flex-grow: 1;
        padding-right: 0.75rem;
      }
      svg {
        flex-basis: 24px;
        flex-shrink: 0;
      }
      svg.icoOpen {
        display: none;
      }
    }
  }
  .appliactionObjectList {
    padding: 0 0 1rem 40px;
    cursor: default;
    @media (max-width: 767px) {
      padding: 0 0 1rem 0;
    }
    .line {
      padding-top: 1rem;
    }
    .collapse {
      b {
        display: block;
        text-decoration: underline;
        // margin-top: 1rem;
      }
    }
  }
}
</style>
