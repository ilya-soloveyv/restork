<template>
  <div>
    <b-list-group>
      <b-list-group-item
        v-for="(application, index) in applications.applications"
        :key="index"
        :to="'/dashboard/application/' + application.iApplicationID"
      >
        <div>iApplicationID: {{ application.iApplicationID }}</div>
        <div>iUserID: {{ application.iUserID }}</div>
        <div>sApplicationAddress: {{ application.sApplicationAddress }}</div>
        <div>
          aApplicationCoordinate: {{ application.aApplicationCoordinate }}
        </div>
        <div>dApplicationDateFrom: {{ application.dApplicationDateFrom }}</div>
        <div>dApplicationDateTo: {{ application.dApplicationDateTo }}</div>
        <div>iApplicationAdult: {{ application.iApplicationAdult }}</div>
        <div>iApplicationChild: {{ application.iApplicationChild }}</div>
        <div>dApplicationDate: {{ application.dApplicationDate }}</div>
        <div>iActive: {{ application.iActive }}</div>
      </b-list-group-item>
    </b-list-group>
    <nuxt-link to="/dashboard/application/add">Новая заявка</nuxt-link>
  </div>
</template>

<script src="./index.js"></script>
<style src="./index.scss" scoped lang="scss"></style>
