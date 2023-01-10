<template>
  <TutorialPage>
    <template slot="hint">
      <TutorialHint :hints="hints" />
    </template>
    <template slot="content">
      <ObjectEditObjectType :object="object" :objectType="objectType" />
    </template>
  </TutorialPage>
</template>

<script>
import TutorialPage from '@/components/Tutorial/TutorialPage.vue'
import TutorialHint from '@/components/Tutorial/TutorialHint.vue'
import ObjectEditObjectType from '@/components/Dashboard/object/edit/ObjectEditObjectType.vue'

export default {
  layout: 'tutorial',
  components: {
    TutorialPage,
    TutorialHint,
    ObjectEditObjectType
  },
  data() {
    return {
      basicHints: [
        {
          title: 'Коттедж / Дом',
          desc:
            'небольшое жильё, как правило в 1-2 этажа с участком прилегающей земли'
        },
        {
          title: 'Вилла',
          desc:
            'роскошный жилой дом, как правило, с отличными видовыми характеристиками'
        },
        {
          title: 'Апартаменты / Квартира',
          desc:
            'отдельное жилое помещение, состоящее из одной или нескольких смежных комнат'
        },
        {
          title: 'Номер в отеле / Номер в гостинице',
          desc: 'отдельный номер в отеле или гостинице'
        },
        {
          title: 'Хостел',
          desc:
            'система размещения, предоставляющая своим постояльцам спальное место без дополнительных удобств'
        }
      ],
      hotelHints: [
        {
          title: 'Single',
          desc:
            'Однокомнатный, для размещения одного отдыхающего. Спальное место одно'
        },
        {
          title: 'Double',
          desc:
            'Однокомнатный номер для двоих. Может быть с одной большой кроватью или с двумя раздельными кроватями.'
        },
        {
          title: 'Triple',
          desc: 'Номер для троих отдыхающих'
        },
        {
          title: 'Family Room',
          desc: 'Семейный двух- или трехкомнатный номер.'
        }
      ]
    }
  },
  computed: {
    object() {
      return this.$store.state.tutorial.object
    },
    objectType() {
      return this.$store.state.objectType.list
    },
    hints() {
      return this.isRoom ? this.hotelHints : this.basicHints
    }
  }
}
</script>
