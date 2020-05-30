<template>
  <div class="listItemObject">
    <div>
      Предложение от
      <span class="sObjectTitle">{{ app.object.sObjectTitle }}</span>
    </div>
    <nuxt-link :to="'/dashboard/application/' + app.iApplicationObjectID">
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
</template>

<script>
export default {
  props: {
    app: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.listItemObject {
  padding: 0.15rem 0;
  display: flex;
  justify-content: space-between;
  span.sObjectTitle {
    font-weight: 500;
  }
  a {
    display: flex;
    align-items: center;
    span {
      flex-grow: 1;
      padding-right: 0.5rem;
    }
    svg {
      flex-shrink: 0;
    }
  }
}
</style>
