<template>
  <TutorialPage>
    <template slot="hint">
      <TutorialHint />
    </template>
    <template slot="content">
      <TutorialTitle
        title="Итак, нам осталось только открыть ваш объект для бронирования"
      />
      <TutorialFormLabel
        title="Для этого установите статус вашего жилья с помощью переключателя ниже. Если ваш объект уже свободен и готов принимать гостей, установите статус «Свободен», если освобождается завтра или послезавтра, то «Освобождается завтра» или «Освобождается послезавтра». Если ваше жильё не освобождается в ближайшие два дня или вы передумали его сдавать, установите статус «Занят»."
      />
      <div class="form-group-wrap">
        <b-form-group label="Статус объекта">
          <b-form-select
            v-model="iObjectStatusID"
            :state="iObjectStatusIDValid"
          >
            <option class="placeholder" value="null">
              Выберите один из вариантов
            </option>
            <option
              v-for="(status, index) in objectStatus"
              :key="index"
              :value="status.iObjectStatusID"
            >
              {{ status.sObjectStatusTitle }}
            </option>
          </b-form-select>
          <b-form-invalid-feedback class="error-message">
            Укажите Статус объекта
          </b-form-invalid-feedback>
        </b-form-group>
      </div>
    </template>
  </TutorialPage>
</template>

<script>
import TutorialPage from '@/components/Tutorial/TutorialPage.vue'
import TutorialHint from '@/components/Tutorial/TutorialHint.vue'

import TutorialTitle from '@/components/Tutorial/TutorialTitle.vue'
import TutorialFormLabel from '@/components/Tutorial/TutorialFormLabel.vue'

export default {
  layout: 'tutorial',
  components: {
    TutorialPage,
    TutorialHint,
    TutorialTitle,
    TutorialFormLabel
  },
  data() {
    return {
      iObjectStatusIDValid: null,
      iObjectStatusID: 2,
      objectStatus: [
        {
          iObjectStatusID: 1,
          sObjectStatusTitle: 'Занят'
        },
        {
          iObjectStatusID: 2,
          sObjectStatusTitle: 'Свободен'
        },
        {
          iObjectStatusID: 3,
          sObjectStatusTitle: 'Освобождается завтра'
        },
        {
          iObjectStatusID: 4,
          sObjectStatusTitle: 'Освобождается послезавтра'
        }
      ]
    }
  }
}
</script>
