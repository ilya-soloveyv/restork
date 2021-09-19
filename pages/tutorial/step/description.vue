<template>
  <TutorialPage>
    <template slot="hint">
      <TutorialHint :hints="hints" />
    </template>
    <template slot="content">
      <TutorialFormLabel title="Напишите название вашего объекта" />
      <b-row>
        <b-col xl="12">
          <div class="form-group-wrap">
            <b-form-group label="Название">
              <b-form-input
                v-model="sObjectTitle"
                :state="sObjectTitleValid"
                placeholder="Название"
              />
              <b-form-invalid-feedback class="error-message">
                Укажите Название
              </b-form-invalid-feedback>
            </b-form-group>
          </div>
        </b-col>
      </b-row>
      <TutorialFormLabel
        title="Расскажите, чем интересен ваш район, и укажите особенности жилья, например быстрый Wi-Fi или парковку"
      />
      <b-row>
        <b-col xl="12">
          <div class="form-group-wrap">
            <b-form-group label="Описание">
              <b-form-textarea
                v-model="tObjectDesc"
                :state="tObjectDescValid"
                placeholder="Описание"
                rows="4"
              />
              <b-form-invalid-feedback class="error-message">
                Укажите Описание
              </b-form-invalid-feedback>
            </b-form-group>
          </div>
        </b-col>
      </b-row>
    </template>
  </TutorialPage>
</template>

<script>
import TutorialPage from '@/components/Tutorial/TutorialPage.vue'
import TutorialHint from '@/components/Tutorial/TutorialHint.vue'

import TutorialFormLabel from '@/components/Tutorial/TutorialFormLabel.vue'

export default {
  layout: 'tutorial',
  components: {
    TutorialPage,
    TutorialHint,
    TutorialFormLabel
  },
  data() {
    return {
      sObjectTitleValid: null,
      tObjectDescValid: null,
      hints: [
        {
          title: 'Загородный дом в тихом месте',
          img: '/tutorial/hint/dom.jpeg',
          desc:
            'Жилье находится в достаточно тихом районе Москвы. В шаговой доступности 2 станции метро, Авиамоторная и Площадь Ильи, пешком примерно 15 минут. По близости есть круглосуточные супермаркеты. До ближайшего гипермаркета Ашан примерно 15 минут пешком. Есть кафешки и забегаловки в шаговой доступности . Если вы на машине'
        }
      ]
    }
  },
  computed: {
    sObjectTitle: {
      get() {
        return this.$store.state.tutorial.object.sObjectTitle
      },
      set(value) {
        this.$store.commit('tutorial/SET_sObjectTitle', value)
      }
    },
    tObjectDesc: {
      get() {
        return this.$store.state.tutorial.object.tObjectDesc
      },
      set(value) {
        this.$store.commit('tutorial/SET_tObjectDesc', value)
      }
    }
  }
}
</script>
