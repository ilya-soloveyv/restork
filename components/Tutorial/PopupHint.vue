<template>
  <b-modal id="modalHint" scrollable hide-backdrop class="modalStepHint">
    <div class="popup">
      <div class="wrapCloseBtn">
        <div class="closeBtn" v-on:click="closeModal">
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
      </div>

      <div class="wrapHint">
        <HintStep1
          :list="[
            {
              name: 'Single',
              desc:
                'Однокомнатный, для размещения одного отдыхающего. Спальное место одно.'
            },
            {
              name: 'Double',
              desc:
                'Однокомнатный номер для двоих. Может быть с одной большой кроватью или с двумя раздельными кроватями.'
            },
            {
              name: 'Triple',
              desc: 'Номер для троих отдыхающих.'
            },
            {
              name: 'Family Room',
              desc: 'Семейный двух- или трехкомнатный номер.'
            }
          ]"
        />
      </div>
    </div>
  </b-modal>
</template>
<script>
import HintStep1 from '~/components/Tutorial/HintStep1'

export default {
  components: {
    HintStep1
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
      console.log('currentStep ' + this.currentStep)
      this.$store.commit('tutorial/SET_STEP', step)
      console.log('currentStep ' + this.currentStep)
      const url = '/tutorial/step' + this.currentStep
      this.$router.push(url)
    },
    closeModal() {
      this.$bvModal.hide('modalHint')
    }
  }
}
</script>
<style lang="scss" scoped>
/deep/ #modalHint {
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
          .wrapCloseBtn {
            display: flex;
            justify-content: flex-end;
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
          }
          .wrapHint {
            display: flex;
            justify-content: center;
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
