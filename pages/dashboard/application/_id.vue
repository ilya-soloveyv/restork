<template>
  <div>
    <pre>{{ application }}</pre>
    <b-form @submit.prevent="search">
      <b-form-group label="Радиус поиска">
        <b-form-input v-model="radius" required />
      </b-form-group>
      <b-button type="submit" primary="primary">Получить результаты</b-button>
      <pre>{{ objects }}</pre>
    </b-form>
  </div>
</template>

<script src="./_id.js"></script>
<style src="./_id.scss" scoped lang="scss"></style>
