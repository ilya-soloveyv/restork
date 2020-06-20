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
      <pre>{{ user }}</pre>
    </b-container>
  </div>
</template>

<script src="./_iUserID.js"></script>
<style src="./_iUserID.scss" scoped lang="scss"></style>
