<template>
  <div>
    <div class="breadcrumb-box">
      <b-container>
        <b-breadcrumb :items="breadcrumbs"></b-breadcrumb>
      </b-container>
    </div>
    <b-container>
      <h1 class="title">
        <span>Пользователи</span>
      </h1>
      <b-table
        :striped="false"
        :borderless="true"
        :small="true"
        :hover="true"
        :fields="fields"
        :items="usersTable"
        :head-variant="'light'"
      >
        <template v-slot:cell(button)="row">
          <b-button
            :to="'/admin/users/' + row.value"
            variant="primary"
            size="sm"
            class="patientButton"
          >
            Подробнее
          </b-button>
        </template>
      </b-table>
      <b-pagination-nav
        :number-of-pages="users.pages"
        :link-gen="linkGen"
        v-model="page"
        use-router
        class="pagination"
      >
        <template v-slot:first-text>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000000"
            stroke-width="2"
            stroke-linecap="square"
            stroke-linejoin="arcs"
          >
            <path d="M11 17l-5-5 5-5M18 17l-5-5 5-5" />
          </svg>
        </template>
        <template v-slot:prev-text>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000000"
            stroke-width="2"
            stroke-linecap="square"
            stroke-linejoin="arcs"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </template>
        <template v-slot:next-text>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000000"
            stroke-width="2"
            stroke-linecap="square"
            stroke-linejoin="arcs"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </template>
        <template v-slot:last-text>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000000"
            stroke-width="2"
            stroke-linecap="square"
            stroke-linejoin="arcs"
          >
            <path d="M13 17l5-5-5-5M6 17l5-5-5-5" />
          </svg>
        </template>
        <template v-slot:ellipsis-text>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000000"
            stroke-width="2"
            stroke-linecap="square"
            stroke-linejoin="arcs"
          >
            <circle cx="12" cy="12" r="1"></circle>
            <circle cx="19" cy="12" r="1"></circle>
            <circle cx="5" cy="12" r="1"></circle>
          </svg>
        </template>
      </b-pagination-nav>
    </b-container>
    <!-- <pre>{{ page }}</pre> -->
    <!-- <pre>{{ users }}</pre> -->
  </div>
</template>

<script src="./index.js"></script>
<style src="./index.scss" scoped lang="scss"></style>
