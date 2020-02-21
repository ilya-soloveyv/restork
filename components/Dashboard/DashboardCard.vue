<template>
  <div class="dashboardCard">
    <div class="avatar">
      <img src="~/static/avatar.jpg" />
    </div>
    <div class="name">{{ $auth.user }}</div>
    <div class="progressInfo">Профиль заполнен на {{ value }}%</div>
    <div class="progressLine">
      <b-progress :value="value" :max="max"></b-progress>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 60,
      max: 100
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboardCard {
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 0 1rem 1px rgba(0, 0, 0, 0.15);
  background: #fff;
  .avatar {
    padding: 0 3rem;
    margin-bottom: 1rem;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 50%;
    }
  }
  .name {
    text-align: center;
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 1rem;
  }
  .progressInfo {
    opacity: 0.7;
    font-size: 15px;
    font-weight: 300;
    margin-bottom: 1rem;
    text-align: center;
  }
}
</style>
