<template>
  <div>
    <h1>Новая заявка на размещение</h1>
    <b-form @submit.prevent="login" autocomplete="off">
      <h2>Информация о поездке</h2>
      <b-form-group
        id="label-sApplicationAddress"
        label="Адрес"
        label-for="input-sApplicationAddress"
      >
        <suggestions
          id="input-sApplicationAddress"
          v-model="application.sApplicationAddress"
          :options="suggestionsOptions"
          :onInputChange="onInputChange"
          :onItemSelected="onItemSelected"
        >
          <div slot="item" slot-scope="props">
            {{ props.item.formattedAddress }}
          </div>
        </suggestions>
      </b-form-group>
    </b-form>
  </div>
</template>

<script src="./add.js"></script>
<style src="./add.scss" scoped lang="scss"></style>
