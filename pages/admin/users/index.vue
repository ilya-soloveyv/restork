<template>
  <div>
    <div class="breadcrumb-box">
      <b-container>
        <b-breadcrumb :items="breadcrumbs"></b-breadcrumb>
      </b-container>
    </div>
    <b-container>
      <h1 class="title">
        <span>Пользователи</span>
        <b-button-group>
          <b-button size="sm" variant="primary">
            Добавить
          </b-button>
        </b-button-group>
      </h1>
    </b-container>
  </div>
</template>

<script>
export default {
  middleware: 'admin',
  layout: 'admin',
  data() {
    return {
      breadcrumbs: [
        {
          text: 'Пользователи',
          active: true
        }
      ]
    }
  }
}
</script>
