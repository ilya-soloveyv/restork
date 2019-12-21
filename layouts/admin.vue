<template>
  <div>
    <b-navbar toggleable="sm" type="dark" variant="dark">
      <b-container>
        <b-navbar-brand>Restork</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item to="/admin/application" active-class="active">
              Заявки
            </b-nav-item>
            <b-nav-item to="/admin/hotel" active-class="active">
              Объекты
            </b-nav-item>
            <b-nav-item to="/admin/users" active-class="active">
              Пользователи
            </b-nav-item>
            <b-nav-item-dropdown text="Библиотека">
              <b-dropdown-item
                to="/admin/libraries/hotel_type"
                active-class="active"
              >
                Виды объектов
              </b-dropdown-item>
              <b-dropdown-item
                to="/admin/libraries/hotel_options"
                active-class="active"
              >
                Опции отеля
              </b-dropdown-item>
              <b-dropdown-item
                to="/admin/libraries/room_options"
                active-class="active"
              >
                Опции комнат
              </b-dropdown-item>
              <b-dropdown-item
                to="/admin/libraries/hotel_guest"
                active-class="active"
              >
                Только для гостей
              </b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
          <b-navbar-nav v-if="$auth.$state.loggedIn" class="ml-auto">
            <b-nav-item-dropdown right>
              <template v-slot:button-content>
                {{ $auth.$state.user.sUserFirstName }}
              </template>
              <b-dropdown-item to="/">
                К сайту
              </b-dropdown-item>
              <b-dropdown-item to="/profile" active-class="active">
                Профиль
              </b-dropdown-item>
              <b-dropdown-item @click.prevent="$auth.logout()">
                Выйти
              </b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
    <nuxt />
  </div>
</template>
