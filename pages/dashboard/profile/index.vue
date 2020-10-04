<template>
  <div class="profileEdit">
    <h1>Редактирование профиля</h1>
    <div class="wrap">
      <div class="wrapTitle1">Личная информация:</div>
      <div class="wrapCard">
        <div class="userCard">
          <div class="avatar">
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
                          :src="
                            SELECTEL_WEB + '/user/preview/' + user.sUserAvatar
                          "
                        />
                      </template>
                      <template v-else>
                        <img src="~/static/user.svg" class="empty" />
                      </template>
                      <div v-if="dropzoneLoading" class="spinner">
                        <b-spinner label="Loading..." variant="primary" />
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
          <div class="payment">
            <template v-if="$auth.loggedIn && $auth.state.user.B2PPan">
              <div class="usercard">
                <div class="usercard__title">Карта</div>
                <div class="usercard__number">
                  {{ $auth.state.user.B2PPan }}
                </div>
                <div @click="removeCard" class="usercard__remove">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#000000"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="bevel"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </div>
              </div>
            </template>
            <template v-else>
              <a @click="addCard" href="#" class="link">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000000"
                  stroke-width="1"
                  stroke-linecap="round"
                  stroke-linejoin="bevel"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M7 15h0M2 9.5h20" />
                </svg>
                <span>Добавить карту</span>
              </a>
            </template>
          </div>
        </div>
      </div>
      <div class="wrapLastname">
        <b-form-group
          id="sUserLastNameLabel"
          class="form-group-restork"
          label="Фамилия"
          label-for="sUserLastNameInput"
        >
          <b-form-input
            id="sUserLastNameInput"
            v-model.trim="user.sUserLastName"
            placeholder="Ваша фамилия"
            type="text"
          ></b-form-input>
        </b-form-group>
      </div>
      <div class="wrapFirstname">
        <b-form-group
          id="sUserFirstNameLabel"
          class="form-group-restork"
          label="Имя"
          label-for="sUserFirstNameInput"
        >
          <b-form-input
            id="sUserFirstNameInput"
            v-model.trim="user.sUserFirstName"
            placeholder="Ваше имя"
            type="text"
          ></b-form-input>
        </b-form-group>
      </div>
      <div class="wrapMiddlename">
        <b-form-group
          id="sUserMiddleNameLabel"
          class="form-group-restork"
          label="Отчество"
          label-for="sUserMiddleNameInput"
        >
          <b-form-input
            id="sUserMiddleNameInput"
            v-model.trim="user.sUserMiddleName"
            placeholder="Ваше отчество"
            type="text"
          ></b-form-input>
        </b-form-group>
      </div>
      <div class="wrapBirthday">
        <b-form-group
          id="dUserBirthdayLabel"
          class="form-group-restork"
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
      </div>
      <div class="wrapPhone">
        <b-form-group
          id="sUserPhoneLabel"
          class="form-group-restork"
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
      </div>
      <div class="wrapEmail">
        <b-form-group
          id="sUserEmailLabel"
          class="form-group-restork"
          label="Электронная почта"
          label-for="sUserEmailInput"
        >
          <b-form-input
            id="sUserEmailInput"
            v-model.trim="user.sUserEmail"
            type="email"
          ></b-form-input>
        </b-form-group>
      </div>
      <div class="wrapButtonUpdate">
        <b-button
          :disabled="updateData"
          @click="update"
          type="submit"
          variant="primary"
          size="lg"
        >
          Сохранить изменения
        </b-button>
      </div>
      <div class="wrapTitle2">Изменить пароль:</div>
      <div class="wrapPassword1">
        <b-form-group
          id="oldPasswordLabel"
          class="form-group-restork"
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
              autocomplete="new-password"
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
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </b-button>
            </b-input-group-append>
            <b-form-invalid-feedback v-if="error && error.message">
              {{ error.message }}
            </b-form-invalid-feedback>
          </b-input-group>
        </b-form-group>
      </div>
      <div class="wrapPassword2">
        <b-form-group
          id="newPasswordLabel"
          class="form-group-restork"
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
              autocomplete="new-password"
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
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </b-button>
            </b-input-group-append>
            <b-form-invalid-feedback v-if="error && error.message">
              {{ error.message }}
            </b-form-invalid-feedback>
          </b-input-group>
        </b-form-group>
      </div>
      <div v-if="!newPasswordView" class="wrapPassword3">
        <b-form-group
          id="repeatPasswordLabel"
          class="form-group-restork"
          label="Подтверждение пароля"
          label-for="repeatPasswordInput"
        >
          <b-form-input
            id="repeatPasswordInput"
            ref="repeatPassword"
            v-model.trim="repeatPassword"
            type="password"
            autocomplete="new-password"
          ></b-form-input>
        </b-form-group>
      </div>
      <div class="wrapButtonPassword">
        <b-button
          :disabled="updateData || !updateDataPassword"
          @click="updatePassword"
          type="submit"
          variant="primary"
          size="lg"
        >
          Обновить пароль
        </b-button>
        <small v-if="updatePasswordSuccess">
          <span class="text-success">Ваш пароль успешно обновлен</span>
        </small>
      </div>
    </div>

    <!-- <pre>{{ $auth.user }}</pre> -->
    <!-- <pre>{{ user }}</pre> -->
  </div>
</template>

<script src="./index.js"></script>
<style src="./index.scss" scoped lang="scss"></style>
