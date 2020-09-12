<template>
  <div class="booking">
    <div class="wrapTitle">
      <h1>Бронирования</h1>
    </div>
    <div class="wrapBookingList">
      <div class="tableTitle">
        <ul>
          <li class="date">Дата</li>
          <li class="id">Номер</li>
          <li class="object">Объект</li>
          <li class="dates">Даты</li>
          <li class="price">Цена</li>
          <li class="commission">Комиссия</li>
          <li class="guests">Гости</li>
          <li class="chat">Чат</li>
          <li class="status">Статус</li>
        </ul>
      </div>
      <BookingListItem v-for="i in 5" :key="i" />
    </div>
  </div>
</template>

<script src="./index.js"></script>
<style src="./index.scss" scoped lang="scss"></style>
