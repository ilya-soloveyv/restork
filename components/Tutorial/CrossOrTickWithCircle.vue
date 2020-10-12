<template>
  <div>
    <!-- <div>
      <span>csn = {{ currentStepNumber }}</span>
      <span>sn = {{ stepNumber }}</span>
    </div> -->
    <div>
      <svg
        v-if="currentStepNumber >= stepNumber"
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#000000"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
      <svg
        v-else
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#000000"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    currentStepNumber: {
      type: Number,
      default: null
    },
    stepNumber: {
      type: Number,
      default: null
    }
  }
}
</script>
<style lang="scss" scoped></style>
