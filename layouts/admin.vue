admin.vue
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
            <b-nav-item to="/admin/object" active-class="active">
              Объекты
            </b-nav-item>
            <b-nav-item to="/admin/users" active-class="active">
              Пользователи
            </b-nav-item>
            <b-nav-item-dropdown text="Справочники">
              <b-dropdown-item
                to="/admin/libraries/object_type_group"
                active-class="active"
              >
                Группы объектов
              </b-dropdown-item>
              <b-dropdown-item
                to="/admin/libraries/object_type"
                active-class="active"
              >
                Виды объектов
              </b-dropdown-item>
              <b-dropdown-item
                to="/admin/libraries/object_options"
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
                to="/admin/libraries/room_type"
                active-class="active"
              >
                Категории номеров
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

<style lang="scss" scoped>
/deep/ table.tableList {
  td {
    cursor: pointer;
    &.ID {
      width: 55px;
    }
    &.iActive {
      width: 105px;
    }
  }
}
</style>
