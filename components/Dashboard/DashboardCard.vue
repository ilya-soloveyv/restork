<template>
  <div class="dashboardCard">
    <div class="avatar">
      <template v-if="$auth.user.sUserAvatar">
        <img :src="SELECTEL_WEB + '/user/preview/' + $auth.user.sUserAvatar" />
      </template>
      <template v-else>
        <div class="empty">
          <img src="~/static/user.svg" />
        </div>
      </template>
    </div>
    <div class="name">{{ sUserFullName }}</div>
    <div class="progressInfo">Профиль заполнен на {{ progressValue }}%</div>
    <div class="progressLine">
      <b-progress :value="progressValue" :max="progressMax"></b-progress>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      progressMax: 100
    }
  },
  computed: {
    SELECTEL_WEB() {
      return process.env.SELECTEL_WEB
    },
    progressValue() {
      let progressValue = 0
      if (this.$auth.user.sUserFirstName) progressValue += 15
      if (this.$auth.user.sUserLastName) progressValue += 15
      if (this.$auth.user.sUserMiddleName) progressValue += 15
      if (this.$auth.user.dUserBirthday) progressValue += 15
      if (this.$auth.user.sUserEmail) progressValue += 15
      if (this.$auth.user.sUserAvatar) progressValue += 25
      return progressValue
    },
    sUserFullName() {
      const arr = []
      if (this.$auth.user.sUserLastName) arr.push(this.$auth.user.sUserLastName)
      if (this.$auth.user.sUserMiddleName)
        arr.push(this.$auth.user.sUserMiddleName)
      if (this.$auth.user.sUserFirstName)
        arr.push(this.$auth.user.sUserFirstName)
      return arr.join(' ')
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
    // padding: 0 3rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: center;
    img {
      width: 200px;
      height: 200px;
      object-fit: cover;
      border-radius: 50%;
    }
    .empty {
      background-color: #ededed;
      width: 200px;
      height: 200px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 70%;
        height: 70%;
        object-fit: contain;
        border-radius: 0;
      }
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
