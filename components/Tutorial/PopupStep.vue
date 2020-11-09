<template>
  <b-modal id="modalHintStep" scrollable hide-backdrop class="modalStepHint">
    <div class="popup">
      <div v-on:click="closeModal" class="closeBtn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#818181"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </div>
      <div class="stepList">
        <div
          v-for="(item, index) in steps"
          :key="index"
          v-on:click="setCurrentStep(index + 1)"
          class="item"
        >
          <div class="desc">Шаг {{ index + 1 }} | {{ item }}</div>
          <div class="circle">
            <CrossOrTickWithCircle
              :currentStepNumber="currentStep"
              :stepNumber="index + 1"
            />
          </div>
        </div>
      </div>
      <pre>{{ steps }}</pre>
    </div>
  </b-modal>
</template>
<script>
import CrossOrTickWithCircle from '~/components/Tutorial/CrossOrTickWithCircle'
export default {
  components: {
    CrossOrTickWithCircle
  },
  computed: {
    currentStep() {
      return this.$store.state.tutorial.step
    },
    steps() {
      return this.$store.state.tutorial.steps
    }
  },
  methods: {
    setCurrentStep(step) {
      this.$store.commit('tutorial/SET_STEP', step)
      const url = '/tutorial/step' + this.currentStep
      this.$router.push(url)
    },
    closeModal() {
      this.$bvModal.hide('modalHintStep')
    }
  }
}
</script>
<style lang="scss" scoped>
/deep/ #modalHintStep {
  .modal-dialog {
    height: 100%;
    max-width: 100%;
    margin: 79px 0 0;
    @media (max-width: 991px) {
      margin: 63px 0 0;
    }
    .modal-content {
      border-radius: 0;
      border: 0;
      .modal-header {
        display: none;
      }
      .modal-body {
        padding: 0;
        .popup {
          padding: 0 25px;
          .closeBtn {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            border: 1px solid #818181;
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 30px 0;
          }
          .item {
            display: flex;
            justify-content: space-between;
            margin-bottom: 25px;
            cursor: pointer;
            .desc {
              font-family: Montserrat;
              font-size: 14px;
              line-height: 20px;
              font-weight: 500;
              color: #000000;
            }
            .circle {
              border-radius: 50%;
              height: 20px;
              width: 20px;
              border: 1px solid #000;
              display: flex;
              justify-content: center;
              align-items: center;
            }
          }
        }
      }
      .modal-footer {
        display: none;
      }
    }
  }
}
</style>
