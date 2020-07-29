<template>
  <div>
    <b-row>
      <b-col>
        <h1>История поездок</h1>
      </b-col>
      <b-col sm="12" md="5" lg="4" xl="3" align-self="center">
        <b-button
          to="/dashboard/application/add"
          variant="primary"
          size="lg"
          block
        >
          Подобрать жилье
        </b-button>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <div class="tableTitle">
          <ul>
            <li class="date">Дата</li>
            <li class="adress">Направление</li>
            <li class="dates">Даты</li>
            <li class="objects">
              <span class="d-none d-md-block d-lg-none">Предл.</span>
              <span class="d-none d-lg-block">Предложений</span>
            </li>
            <li class="messages">
              <span class="d-none d-md-block d-lg-none">Сообщ.</span>
              <span class="d-none d-lg-block">Сообщений</span>
            </li>
            <li class="status">Статус</li>
          </ul>
        </div>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <div id="applicationList">
          <ApplicationListItem
            v-for="(application, index) in applications"
            :key="index"
            :application="application"
          />
        </div>
      </b-col>
    </b-row>
    <!-- <pre>{{ applications }}</pre> -->
  </div>
</template>

<script src="./index.js"></script>
<style src="./index.scss" scoped lang="scss"></style>
