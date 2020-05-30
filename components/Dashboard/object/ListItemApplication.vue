<template>
  <div class="application">
    <div class="name">
      Заявка от пользователя
      <span>{{ application.application.user.sUserFirstName }}</span>
    </div>
    <div class="link">
      <nuxt-link
        :to="
          '/dashboard/object/application/' + application.iApplicationObjectID
        "
      >
        <span>Посмотреть</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#007bff"
          stroke-width="2"
          stroke-linecap="square"
          stroke-linejoin="arcs"
        >
          <path d="M5 12h13M12 5l7 7-7 7" />
        </svg>
      </nuxt-link>
    </div>
    <!-- <pre>{{ application }}</pre> -->
  </div>
</template>

<script>
export default {
  props: {
    application: {
      type: Object,
      defaultValue: {},
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.application {
  padding-bottom: 0.25rem;
  display: flex;
  .name {
    flex-grow: 1;
    flex-shrink: 0;
    span {
      font-weight: 500;
    }
  }
  .link {
    flex-shrink: 0;
    a {
      display: flex;
      align-items: center;
      span {
        padding-right: 0.5rem;
      }
    }
  }
}
</style>
