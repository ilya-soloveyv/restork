<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="#">NavBar</b-navbar-brand>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/admin/hotels" active-class="active">
            Hotels
          </b-nav-item>
          <b-nav-item to="/admin/users" active-class="active">
            Users
          </b-nav-item>
          <b-nav-item to="/admin/libraries/hotel_types" active-class="active">
            Hotel types
          </b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <template v-slot:button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <nuxt-link to="/">Index page</nuxt-link>
    <nuxt />
  </div>
</template>
