<template>
  <nuxt-link
    :class="{ noActive: !application.iActive }"
    :to="'/dashboard/application/' + application.iApplicationID"
    class="application"
  >
    <div class="date">
      <label>Дата:</label>
      {{ dDate }}
    </div>
    <div class="adress">
      <label>Направление:</label>
      {{ application.sApplicationAddress }}
    </div>
    <div class="dates">
      <label>Даты:</label>
      {{ dates }}
    </div>
    <div class="objects">
      <label>Предложения:</label>
      <span v-if="applicationObjectNew">
        {{ applicationObjectNew }} / {{ applicationObjectCount }}
      </span>
      <template v-else>
        {{ applicationObjectCount }}
      </template>
    </div>
    <div class="messages">
      <label>Сообщения:</label>
      0
    </div>
    <div class="status">
      <label>Статус:</label>
      <template v-if="application.iActive">Активен</template>
      <template v-else>Отменен</template>
    </div>
    <!-- <pre>{{ application }}</pre> -->
  </nuxt-link>
</template>

<script>
import moment from 'moment'
moment.locale('ru')

export default {
  props: {
    application: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    dDate() {
      return moment(this.application.dDate).format('DD MMMM YYYY')
    },
    dates() {
      return (
        moment(this.application.dApplicationDateFrom).format('DD MMM') +
        ' - ' +
        moment(this.application.dApplicationDateTo).format('DD MMM')
      )
    },
    applicationObjectCount() {
      return this.application.application_objects.length
    },
    applicationObjectNew() {
      return this.application.application_objects.filter(
        (application) =>
          application.iObjectPrice !== null && !application.iUserView
      ).length
    }
  }
}
</script>

<style lang="scss" scoped>
a.application {
  border: 1px solid #eaeaea;
  // padding: 1rem;
  margin-top: 25px;
  border-radius: 8px;
  font-weight: 500;
  color: black;
  font-size: 16px;
  text-decoration: none;
  min-height: 85px;
  display: grid;
  grid-template-columns: 2fr 4fr 2fr 150px 130px 120px;
  grid-template-rows: 1fr;
  box-shadow: 0 0 0 rgba($color: #000000, $alpha: 0);
  transition: box-shadow 0.15s ease-in-out;
  @media (max-width: 991px) {
    font-size: 14px;
    grid-template-columns: 2fr 4fr 2fr 100px 100px 100px;
  }
  @media (max-width: 767px) {
    margin-top: 20px;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 3;
    padding: 1rem;
    grid-gap: 1rem;
  }
  &:hover {
    box-shadow: 0 3px 15px rgba($color: #000000, $alpha: 0.16);
  }
  &.noActive {
    color: #818181;
    &:hover {
      // box-shadow: none;
    }
  }
  label {
    display: none;
    margin: 0 0 5px;
    font-size: 12px;
    color: #818181;
    @media (max-width: 767px) {
      display: block;
    }
  }
  .date,
  .adress,
  .dates,
  .objects,
  .messages,
  .status {
    padding: 1rem;
    @media (max-width: 767px) {
      // padding: 0.5rem;
      padding: 0;
    }
  }
  .date {
    @media (max-width: 767px) {
      grid-column: 1/4;
      grid-row: 1/2;
    }
  }
  .adress {
    overflow: hidden;
    @media (max-width: 767px) {
      grid-column: 1/7;
      grid-row: 2/3;
    }
  }
  .dates {
    @media (max-width: 767px) {
      grid-column: 4/7;
      grid-row: 1/2;
    }
  }
  .objects {
    @media (max-width: 767px) {
      grid-column: 1/3;
      grid-row: 3/4;
    }
    span {
      display: inline-block;
      background-color: #077bff;
      color: white;
      height: 25px;
      line-height: 25px;
      border-radius: 25px;
      padding: 0 1rem;
    }
  }
  .messages {
    @media (max-width: 767px) {
      grid-column: 3/5;
      grid-row: 3/4;
    }
  }
  .status {
    text-align: right;
    @media (max-width: 767px) {
      grid-column: 5/7;
      grid-row: 3/4;
    }
  }
}
</style>
