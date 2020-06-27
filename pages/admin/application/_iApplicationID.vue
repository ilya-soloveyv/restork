<template>
  <div>
    <div class="breadcrumb-box">
      <b-container>
        <b-breadcrumb :items="breadcrumb"></b-breadcrumb>
      </b-container>
    </div>
    <b-container>
      <h1 class="title">
        <span>Заявка #{{ application.iApplicationID }}</span>
      </h1>
      <b-row>
        <b-col>
          {{ application.iApplicationID }}
        </b-col>
        <b-col>
          {{ application.application_objects }}
        </b-col>
      </b-row>
      <pre>{{ application }}</pre>
    </b-container>
  </div>
</template>

<script src="./_iApplicationID.js"></script>
<style src="./_iApplicationID.scss" scoped lang="scss"></style>
