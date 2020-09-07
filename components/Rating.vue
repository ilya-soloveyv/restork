<template>
  <div class="wrapRating">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="19.362"
      height="18.555"
      viewBox="0 0 19.362 18.555"
      data-v-de33f406=""
    >
      <path
        id="star"
        d="M19.311,7.5a1.027,1.027,0,0,0-.886-.708l-5.588-.507-2.21-5.172a1.029,1.029,0,0,0-1.893,0L6.525,6.289.936,6.8A1.03,1.03,0,0,0,.352,8.6l4.224,3.7L3.33,17.788A1.027,1.027,0,0,0,4.861,18.9l4.82-2.881L14.5,18.9a1.029,1.029,0,0,0,1.531-1.112L14.785,12.3l4.224-3.7A1.03,1.03,0,0,0,19.311,7.5Zm0,0"
        transform="translate(0 -0.492)"
      />
    </svg>
    <span>{{ rating }}</span>
    ({{ count }})
  </div>
</template>

<script>
export default {
  props: {
    rating: {
      type: Number,
      default: 0
    },
    count: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapRating {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  font-size: 14px;
  line-height: 20px;
  svg {
    fill: #ffc107;
  }
  span {
    font-weight: bold;
    padding: 0 5px;
  }
}
</style>
