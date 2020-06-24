<template>
  <div>
    <div class="breadcrumb-box">
      <b-container>
        <b-breadcrumb :items="breadcrumbs"></b-breadcrumb>
      </b-container>
    </div>
    <b-container>
      <h1 class="title">
        <span>{{ sUserName }}</span>
      </h1>
      <b-row>
        <b-col cols="3">
          <b-card
            :img-src="SELECTEL_WEB + '/user/preview/' + user.sUserAvatar"
            title="Card Title"
            img-alt="Image"
            img-top
          >
            <b-card-text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </b-card-text>
            <b-button variant="primary" size="sm">
              Редактировать
            </b-button>
          </b-card>
        </b-col>
        <b-col></b-col>
      </b-row>
      <pre>{{ user }}</pre>
      <pre>{{ object }}</pre>
    </b-container>
  </div>
</template>

<script src="./_iUserID.js"></script>
<style src="./_iUserID.scss" scoped lang="scss"></style>
