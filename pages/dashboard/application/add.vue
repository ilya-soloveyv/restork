<template>
  <div>
    <h1>Новая заявка на размещение</h1>
    <b-form @submit.prevent="add" autocomplete="off">
      <h2>Информация о поездке</h2>
      <b-form-group
        id="label-sApplicationAddress"
        label="Адрес"
        label-for="input-sApplicationAddress"
      >
        <suggestions
          id="input-sApplicationAddress"
          ref="input-sApplicationAddress"
          v-model="application.sApplicationAddress"
          :options="suggestionsOptions"
          :onInputChange="onInputChange"
          :onItemSelected="onItemSelected"
          @change.native="checkApplicationAddress"
          require
        >
          <div slot="item" slot-scope="props">
            {{ props.item.formattedAddress }}
          </div>
        </suggestions>
      </b-form-group>
      <b-row>
        <b-col>
          <b-form-group
            id="label-dApplicationDateFrom"
            label="Дата от"
            label-for="input-dApplicationDateFrom"
          >
            <b-form-datepicker
              id="input-dApplicationDateFrom"
              v-model="application.dApplicationDateFrom"
              label-help=""
            />
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group
            id="label-dApplicationDateTo"
            label="Дата до"
            label-for="input-dApplicationDateTo"
          >
            <b-form-datepicker
              id="input-dApplicationDateTo"
              v-model="application.dApplicationDateTo"
            />
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-form-group
            id="label-iApplicationAdult"
            label="Количество взрослых"
            label-for="input-iApplicationAdult"
          >
            <b-form-spinbutton
              id="demo-sb"
              v-model="application.iApplicationAdult"
              min="1"
              max="10"
            />
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group
            id="label-iApplicationChild"
            label="Количество детей"
            label-for="input-iApplicationChild"
          >
            <b-form-spinbutton
              id="input-iApplicationChild"
              v-model="application.iApplicationChild"
              min="0"
              max="10"
            />
          </b-form-group>
        </b-col>
      </b-row>
      <h2>Дополнительные удобства</h2>
      <b-row>
        <b-col>
          <b-form-group id="label-objectOption" label="Общее">
            <template v-for="(option, optionIndex) in objectOption">
              <b-form-checkbox
                v-if="option.iObjectOptionActive"
                :id="'objectOption_' + optionIndex"
                :key="optionIndex"
                :value="option.iObjectOptionID"
                v-model="application.objectOption"
                name="objectOption"
              >
                {{ option.sObjectOptionTitle }}
              </b-form-checkbox>
            </template>
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group id="label-roomOption" label="В комнате">
            <template v-for="(option, optionIndex) in roomOption">
              <b-form-checkbox
                v-if="option.iRoomOptionActive"
                :id="'roomOption_' + optionIndex"
                :key="optionIndex"
                :value="option.iRoomOptionID"
                v-model="application.roomOption"
                name="roomOption"
              >
                {{ option.sRoomOptionTitle }}
              </b-form-checkbox>
            </template>
          </b-form-group>
        </b-col>
      </b-row>
      <b-button type="submit" variant="primary">Создать заявку</b-button>
      <!-- <pre>{{ application }}</pre> -->
    </b-form>
  </div>
</template>

<script src="./add.js"></script>
<style src="./add.scss" scoped lang="scss"></style>
