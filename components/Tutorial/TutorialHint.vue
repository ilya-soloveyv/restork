<template>
  <div class="tutorial-hint">
    <div v-for="hint in hints" :key="hint.id" class="tutorial-hint__hint">
      <img class="tutorial-hint__image" :src="hint.img" />
      <div class="tutorial-hint__title">{{ hint.title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hints: [
        {
          id: 1,
          title: 'Море | Черное море | 350м',
          img: '/tutorial/hint/ocean.jpeg'
        },
        {
          id: 2,
          title: 'Озеро | Байкал | 1500м',
          img: '/tutorial/hint/late.jpeg'
        },
        {
          id: 3,
          title: 'Подъемник | Роза Хутор | 150м',
          img: '/tutorial/hint/snow.jpeg'
        },
        {
          id: 4,
          title: 'Центр города | 850м',
          img: '/tutorial/hint/city.jpeg'
        },
        {
          id: 5,
          title: 'Кафе | Шаурма | 50м',
          img: '/tutorial/hint/eat.jpeg'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.tutorial-hint {
  // background: palegreen;
  padding: 100px 0 100px 30px;
  height: 100%;
  overflow: auto;

  @media (max-width: 1199px) {
    height: 100px;
  }

  &__hint {
    overflow: hidden;
    border-radius: 6px;
    background: #eeeeee;

    &:not(:last-child) {
      margin-bottom: 16px;
    }
  }

  &__image {
    width: 100%;
  }

  &__title {
    padding: 16px;
    font-size: 14px;
    color: #666;
  }
}
</style>
