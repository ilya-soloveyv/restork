<template>
  <div>
    <h1>Отправленные заявки</h1>
    <div id="applicationList">
      <ListItem
        v-for="(application, index) in applications"
        :key="index"
        :application="application"
      />
    </div>
    <b-button variant="primary" to="/dashboard/application/add">
      Новая заявка
    </b-button>
  </div>
</template>

<script src="./index.js"></script>
<style src="./index.scss" scoped lang="scss"></style>
