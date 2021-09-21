<template>
  <TutorialPage>
    <template slot="hint">
      <TutorialHint :hints="hints" />
    </template>
    <template slot="content">
      <TutorialTitle
        title="Поздравляем, ваш объект уcпешно добавлен и отправлен на модерацию"
      />
      <TutorialFormLabel
        title="Отвечайте на запросы гостей, указав общую стоимость их проживания. Гости внесут оплату и на следующий день после их заезда, мы отправим вам деньги."
      />
      <b-button
        class="link-my-object"
        variant="primary"
        size="lg"
        to="/dashboard/object"
      >
        Мои объекты
      </b-button>
    </template>
  </TutorialPage>
</template>

<script>
import TutorialTitle from '@/components/Tutorial/TutorialTitle.vue'
import TutorialHint from '@/components/Tutorial/TutorialHint.vue'
import TutorialPage from '@/components/Tutorial/TutorialPage.vue'
import TutorialFormLabel from '@/components/Tutorial/TutorialFormLabel.vue'

export default {
  layout: 'tutorial',
  components: {
    TutorialTitle,
    TutorialHint,
    TutorialPage,
    TutorialFormLabel
  },
  data() {
    return {
      hints: [
        {
          img: '/tutorial/hint/done.jpeg'
        }
      ]
    }
  },
  mounted() {
    this.$store.dispatch('tutorial/SET_object_done')
  }
}
</script>

<style lang="scss" scoped>
.link-my-object {
  margin-top: 32px;
}
</style>
