<template>
  <div class="landing">
    <div class="wrapWelcome">
      <Welcome
        :title="'Получите самые горячие предложения'"
        :desc="
          'Укажите детали своей поездки и хозяева в ответ дадут вам индивидуальные горячие предложения'
        "
        :image="'main-client.jpg'"
        :isClient="true"
      />
    </div>
    <div class="wrapHowWork">
      <HowWork
        :title="'Как это работает'"
        :list="[
          {
            image: 'howWork4.svg',
            title: 'Заполните детали своей поездки',
            desc:
              'Выберите категорию желаемого объекта для проживания (Дом, Квартира, Номер в отеле и т.п.) Укажите куда вы направляетесь , когда вы планируете заселиться (сегодня, завтра, послезавтра) и сколько будет взрослых и детей.'
          },
          {
            image: 'howWork5.svg',
            title: 'Выберите подходящее предложение от хозяев',
            desc:
              'Хозяева будут присылать свои предложения. Просматривайте их, задавайте уточняющие вопросы через чат и выбирайте самое подходящее.'
          },
          {
            image: 'howWork6.svg',
            title: 'Совершите бронирование',
            desc: 'Оплатите бронирование.'
          }
        ]"
      />
    </div>
    <div class="wrapOpportunity">
      <Opportunity
        :title="'Преимущества'"
        :list="[
          {
            id: 1,
            desc: 'Вы будете получать только самые выгодные предложения'
          },
          {
            id: 2,
            desc: 'Вы не будете тратить лишнее время на поиски жилья'
          },
          {
            id: 3,
            desc: 'Каждое предложение будет индивидуальным, только для вас'
          }
        ]"
      />
    </div>
    <Description
      :registerObj="{
        image: 'desc-home.svg',
        title:
          'Restork – сервис онлайн бронирования, с совершенно новым видением работы сферы гостеприимства',
        desc:
          'Сервис разработан для максимального упрощения поиска лучшего предложения для Вашего отдыха.Мы искренне верим что отдых может быть не дорогим и максимально подходящим для Вас по условиям проживания.'
      }"
      :advertObj="{
        imagePhone: 'desc-phone.svg',
        imageFoto: 'desc-phone-foto.svg',
        fotoNumber: '+16 фото',
        desc: 'Шикарный двух этажный коттедж Париж рядом с морем',
        where: '10 минут пешком до моря',
        priceOld: '27 000₽',
        priceNew: '22 500₽',
        howLong: '5 дней',
        howMuch: '4 взрос., 2 дет.'
      }"
    />
    <div class="wrapRequest">
      <Request
        :title="'Популярные запросы'"
        :list="[
          {
            id: 1,
            accomType: 'Номер в отеле',
            where: 'Анапа',
            when: 'Завтра',
            howMuch: '2 человека'
          },
          {
            id: 2,
            accomType: 'Номер в отеле',
            where: 'Геленджик',
            when: 'Сегодня',
            howMuch: '1 человека'
          },
          {
            id: 3,
            accomType: 'Дом',
            where: 'Сочи',
            when: 'Завтра',
            howMuch: '4 взр., 2 дет.'
          },
          {
            id: 4,
            accomType: 'Хостел',
            where: 'Ялта',
            when: 'Завтра',
            howMuch: '3 человека'
          }
        ]"
      />
    </div>
    <div class="wrapQuestion">
      <Question
        :title="'Частые вопросы'"
        :image="'question-image.svg'"
        :list="[
          {
            id: 1,
            req: 'Как установить стоимость моего жилья за ночь?',
            res:
              'В сервисе Restork вам не нужно устанавливать тарифы и расценки на проживание. Вам остаётся только выставить гостю в ответ на его запрос общую стоимость проживания.'
          },
          {
            id: 2,
            req: 'Сколько стоит опубликовать объявление?',
            res: 'Добавление объекта в систему не требует оплаты.'
          },
          {
            id: 3,
            req: 'Как получать запросы на проживание от гостей?',
            res:
              'Следите за статусом вашего жилья. Для приёма запросов от гостей в зависимости от занятости вашего объекта установите его в положение Свободен, Освобождается завтра или Освобождается послезавтра.'
          }
        ]"
      />
    </div>
  </div>
</template>
<script>
import Welcome from '~/components/Landing/Welcome'
import HowWork from '~/components/Landing/HowWork'
import Opportunity from '~/components/Landing/Opportunity'
import Description from '~/components/Landing/Description'
import Request from '~/components/Landing/Request'
import Question from '~/components/Landing/Question'
export default {
  layout: 'dashboardV2Fluid',
  components: {
    Welcome,
    HowWork,
    Opportunity,
    Description,
    Request,
    Question
  }
}
</script>

<style lang="scss" scoped></style>
