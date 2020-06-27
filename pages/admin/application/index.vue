<template>
  <div>
    <div class="breadcrumb-box">
      <b-container>
        <b-breadcrumb>
          <b-breadcrumb-item active>Заявки</b-breadcrumb-item>
        </b-breadcrumb>
      </b-container>
    </div>
    <b-container>
      <h1 class="title">
        <span>Заявки</span>
      </h1>
      <b-row>
        <b-col v-for="(application, index) in applications" :key="index">
          <b-card tag="article" class="mb-2">
            <b-card-text>#{{ application.iApplicationID }}</b-card-text>
            <b-button
              :to="'/admin/application/' + application.iApplicationID"
              variant="primary"
              block
            >
              Перейти к заявке
            </b-button>
          </b-card>
        </b-col>
      </b-row>
      <pre>{{ applications }}</pre>
    </b-container>
  </div>
</template>

<script src="./index.js"></script>
<style src="./index.scss" scoped lang="scss"></style>
