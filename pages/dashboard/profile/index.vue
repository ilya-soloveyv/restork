<template>
  <div>
    <h1>Редактирование профиля</h1>
    <div class="userEdit">
      <div class="userAvatar">
        <client-only>
          <!-- {{ dropzoneLoading }} -->
          <dropzone
            id="userAvatar"
            ref="userAvatar"
            :options="userAvatarDropzoneOptions"
          >
            <div class="dropzone-custom-content">
              <div class="image">
                <div :class="{ loading: dropzoneLoading }" class="ico">
                  <template v-if="user.sUserAvatar">
                    <img
                      :src="SELECTEL_WEB + '/user/preview/' + user.sUserAvatar"
                    />
                  </template>
                  <template v-else>
                    <img src="~/static/user.svg" class="empty" />
                  </template>
                  <div v-if="dropzoneLoading" class="spinner">
                    <b-spinner label="Loading..." variant="primary"></b-spinner>
                  </div>
                </div>
              </div>
              <div class="link">
                <span>Изменить фотографию</span>
              </div>
            </div>
          </dropzone>
        </client-only>
      </div>
      <div class="userData">
        <b-form @submit.prevent="update">
          <div class="row">
            <div class="col">
              <h2>Личная информация:</h2>
            </div>
          </div>
          <b-row>
            <b-col cols="4">
              <b-form-group
                id="sUserLastNameLabel"
                label="Фамилия"
                label-for="sUserLastNameInput"
              >
                <b-form-input
                  id="sUserLastNameInput"
                  v-model.trim="user.sUserLastName"
                  type="text"
                ></b-form-input>
              </b-form-group>
            </b-col>
            <b-col cols="4">
              <b-form-group
                id="sUserFirstNameLabel"
                label="Имя"
                label-for="sUserFirstNameInput"
              >
                <b-form-input
                  id="sUserFirstNameInput"
                  v-model.trim="user.sUserFirstName"
                  type="text"
                ></b-form-input>
              </b-form-group>
            </b-col>
            <b-col cols="4">
              <b-form-group
                id="sUserMiddleNameLabel"
                label="Отчество"
                label-for="sUserMiddleNameInput"
              >
                <b-form-input
                  id="sUserMiddleNameInput"
                  v-model.trim="user.sUserMiddleName"
                  type="text"
                ></b-form-input>
              </b-form-group>
            </b-col>
            <b-col cols="4">
              <b-form-group
                id="dUserBirthdayLabel"
                label="Дата рождения"
                label-for="dUserBirthdayInput"
              >
                <client-only>
                  <date-picker
                    id="dUserBirthdayInput"
                    v-model="user.dUserBirthday"
                    :language="ru"
                    :full-month-name="true"
                    :monday-first="true"
                    format="d MMMM yyyy"
                    input-class="form-control"
                  />
                </client-only>
              </b-form-group>
            </b-col>
            <b-col cols="4">
              <b-form-group
                id="sUserPhoneLabel"
                label="Мобильный телефон"
                label-for="sUserPhoneInput"
              >
                <b-form-input
                  id="sUserPhoneInput"
                  v-model="user.sUserPhone"
                  type="text"
                  required
                  disabled
                ></b-form-input>
              </b-form-group>
            </b-col>
            <b-col cols="4">
              <b-form-group
                id="sUserEmailLabel"
                label="Электронная почта"
                label-for="sUserEmailInput"
              >
                <b-form-input
                  id="sUserEmailInput"
                  v-model.trim="user.sUserEmail"
                  type="email"
                ></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <b-button :disabled="updateData" type="submit" variant="primary">
                Сохранить
              </b-button>
            </b-col>
          </b-row>
        </b-form>
      </div>
      <div class="userPassword"></div>
    </div>
    <!-- <pre>{{ $auth.user }}</pre> -->
    <!-- <pre>{{ user }}</pre> -->
  </div>
</template>

<script src="./index.js"></script>
<style src="./index.scss" scoped lang="scss"></style>
