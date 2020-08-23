<template>
  <div class="editObject" sticky-container>
    <div class="wrapTitle">
      <h1>Редактирование объекта</h1>
      <div class="titleBtn">
        <nuxt-link to="#">Удалить объект</nuxt-link>
      </div>
    </div>
    <div class="wrapBody">
      <div class="form-group-wrap form-group-wrap-line1">
        <b-form-group
          id="label-sObjectTitle"
          label="Название объекта"
          label-for="input-sObjectTitle"
        >
          <b-form-input
            id="input-1"
            v-model="object.sObjectTitle"
            type="text"
            required
          ></b-form-input>
        </b-form-group>
      </div>
      <div class="form-group-wrap form-group-wrap-line2">
        <b-form-group
          id="label-sObjectTitle"
          label="Категорию жилья"
          label-for="input-sObjectTitle"
        >
          <b-form-input
            id="input-1"
            v-model="object.sObjectTitle"
            type="text"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="label-sObjectTitle"
          label="Комнат"
          label-for="input-sObjectTitle"
        >
          <b-form-input
            id="input-1"
            v-model="object.sObjectTitle"
            type="text"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="label-sObjectTitle"
          label="Спальных мест"
          label-for="input-sObjectTitle"
        >
          <b-form-input
            id="input-1"
            v-model="object.sObjectTitle"
            type="text"
            required
          ></b-form-input>
        </b-form-group>
      </div>
      <div class="form-group-wrap form-group-wrap-line3">
        <b-form-group
          id="label-sObjectTitle"
          label="Площадь участка"
          label-for="input-sObjectTitle"
        >
          <b-form-input
            id="input-1"
            v-model="object.sObjectTitle"
            type="text"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="label-sObjectTitle"
          label="Площадь дома"
          label-for="input-sObjectTitle"
        >
          <b-form-input
            id="input-1"
            v-model="object.sObjectTitle"
            type="text"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="label-sObjectTitle"
          label="Этаж"
          label-for="input-sObjectTitle"
        >
          <b-form-input
            id="input-1"
            v-model="object.sObjectTitle"
            type="text"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="label-sObjectTitle"
          label="Этажность"
          label-for="input-sObjectTitle"
        >
          <b-form-input
            id="input-1"
            v-model="object.sObjectTitle"
            type="text"
            required
          ></b-form-input>
        </b-form-group>
      </div>
      <div class="form-group-wrap form-group-wrap-line1">
        <b-form-group
          id="label-sObjectTitle"
          label="Название объекта"
          label-for="input-sObjectTitle"
        >
          <b-form-textarea
            id="input-1"
            v-model="object.sObjectTitle"
            rows="5"
            max-rows="10"
          ></b-form-textarea>
        </b-form-group>
      </div>
      <p v-for="i in 10" :key="i">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium,
        quos accusamus! Nostrum omnis autem exercitationem! Incidunt
        perspiciatis fugiat error pariatur nihil nemo adipisci consectetur eaque
        voluptate, placeat dolor possimus obcaecati.
      </p>
      <!-- <pre>{{ object }}</pre> -->
    </div>
    <div class="wrapStatusTop">
      <ObjectEditStatus />
    </div>
    <div class="wrapStatus">
      <div v-sticky sticky-offset="{top: 25, bottom: 25}" sticky-side="both">
        <ObjectEditStatus />
      </div>
    </div>
    <div class="wrapStatusBottom">
      <div v-sticky sticky-offset="{top: 25, bottom: 0}" sticky-side="both">
        <div class="bottomStatus">
          bottomStatus
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./_iObjectID.js"></script>
<style src="./_iObjectID.scss" scoped lang="scss"></style>
