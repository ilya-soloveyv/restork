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
      <div class="userPassword">
        <b-form @submit.prevent="updatePassword">
          <div class="row">
            <div class="col">
              <h2>Изменить пароль:</h2>
            </div>
          </div>
          <b-row>
            <b-col cols="4">
              <b-form-group
                id="oldPasswordLabel"
                label="Старый пароль"
                label-for="oldPasswordInput"
              >
                <b-input-group>
                  <b-form-input
                    id="oldPasswordInput"
                    ref="oldPassword"
                    v-model.trim="oldPassword"
                    :class="{
                      'is-invalid': error && error.ref === 'oldPassword'
                    }"
                    :type="oldPasswordView ? 'text' : 'password'"
                  />
                  <b-input-group-append>
                    <b-button
                      :class="{ viewPasswordActive: oldPasswordView }"
                      @click="oldPasswordToggle"
                      type="button"
                      class="viewPassword"
                      variant="secondary"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke-width="2"
                        stroke-linecap="square"
                        stroke-linejoin="arcs"
                      >
                        <path
                          d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                        ></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                    </b-button>
                  </b-input-group-append>
                  <b-form-invalid-feedback v-if="error && error.message">
                    {{ error.message }}
                  </b-form-invalid-feedback>
                </b-input-group>
              </b-form-group>
            </b-col>
            <b-col cols="4">
              <b-form-group
                id="newPasswordLabel"
                label="Новый пароль"
                label-for="newPasswordInput"
              >
                <b-input-group>
                  <b-form-input
                    id="newPasswordInput"
                    ref="newPassword"
                    v-model.trim="newPassword"
                    :class="{
                      'is-invalid': error && error.ref === 'newPassword'
                    }"
                    :type="newPasswordView ? 'text' : 'password'"
                  ></b-form-input>
                  <b-input-group-append>
                    <b-button
                      :class="{ viewPasswordActive: newPasswordView }"
                      @click="newPasswordToggle"
                      type="button"
                      class="viewPassword"
                      variant="secondary"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke-width="2"
                        stroke-linecap="square"
                        stroke-linejoin="arcs"
                      >
                        <path
                          d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                        ></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                    </b-button>
                  </b-input-group-append>
                  <b-form-invalid-feedback v-if="error && error.message">
                    {{ error.message }}
                  </b-form-invalid-feedback>
                </b-input-group>
              </b-form-group>
            </b-col>
            <b-col v-if="!newPasswordView" cols="4">
              <b-form-group
                id="repeatPasswordLabel"
                label="Подтверждение пароля"
                label-for="repeatPasswordInput"
              >
                <b-form-input
                  id="repeatPasswordInput"
                  ref="repeatPassword"
                  v-model.trim="repeatPassword"
                  type="password"
                ></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <b-button
                :disabled="updateData || !updateDataPassword"
                type="submit"
                variant="primary"
              >
                Обновить пароль
              </b-button>
              <small v-if="updatePasswordSuccess">
                <span class="text-success">Ваш пароль успешно обновлен</span>
              </small>
            </b-col>
          </b-row>
        </b-form>
      </div>
    </div>
    <!-- <pre>{{ $auth.user }}</pre> -->
    <!-- <pre>{{ user }}</pre> -->
  </div>
</template>

<script src="./index.js"></script>
<style src="./index.scss" scoped lang="scss"></style>
