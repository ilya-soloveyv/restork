<template>
  <TutorialPage>
    <template slot="hint">
      <TutorialHint :hints="hints" />
    </template>
    <template slot="content">
      <TutorialFormLabel
        title="Загрузите как можно больше ярких и красивых фотографий. Гости большое внимание уделяют качеству изображений и при выборе жилья это может стать решающим фактором."
      />
      <div class="photos">
        <div v-for="i in 7" :key="i" class="photos__photo"></div>
      </div>
      <div class="upload">Выберете файл или перетащите его сюда</div>
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
      hints: [
        {
          desc: 'Снимайте горизонтально'
        },
        {
          desc: 'Cледите за горизонтом'
        },
        {
          desc:
            'Фотографии получаются привлекательней при большом количестве света'
        },
        {
          desc: 'Снимите все комнаты, доступные для гостей'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.photos {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 32px;

  &__photo {
    flex-basis: 173px;
    height: 173px;
    border-radius: 6px;
    background: #eee;
  }
}
.upload {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  background: #eee;
  border: 2px dashed #ddd;
  font-size: 14px;
  padding: 32px 0;
}
</style>
