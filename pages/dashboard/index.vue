<template>
  <div>
    <h1>Здавствуйте, {{ $auth.user.sUserFirstName }}!</h1>
    <p>Присоеденяйтесь к нам - открывайте мир с нами!</p>
    <p>
      Выбирите место для своего следующего посещения и хозяева сами отправят вам
      лучшее предложение
    </p>
    <template v-if="applications.length">
      <p>
        У Вас есть <b>{{ countApplicationsString }}:</b>
      </p>
      <div
        v-for="(application, applicationIndex) in applications"
        :key="applicationIndex"
        class="pb-3"
      >
        Заявка:
        <b>
          {{ application.sApplicationCity }} c
          {{ application.dApplicationDateFrom }} по
          {{ application.dApplicationDateTo }}
        </b>
        <template v-if="application.application_objects.length">
          <div
            v-for="(object, objectIndex) in application.application_objects"
            :key="objectIndex"
          >
            <div>
              <template v-if="object.object.object_images.length">
                <img
                  :src="
                    SELECTEL_WEB +
                      '/object/' +
                      object.object.iObjectID +
                      '/preview/' +
                      object.object.object_images[0].sObjectImage
                  "
                  height="75"
                />
              </template>
              {{ object.object.sObjectTitle }}
              <nuxt-link
                :to="'/dashboard/application/' + object.iApplicationObjectID"
              >
                Посмотреть предложение
              </nuxt-link>
            </div>
          </div>
        </template>
        <template v-else>
          <div>По текущей заявке еще нет предложений</div>
        </template>
      </div>
      <div class="buttons">
        <b-button variant="primary" to="/dashboard/application/add">
          Отправить новую заявку
        </b-button>
      </div>
    </template>
    <template v-else>
      <h2>Начнём!</h2>
      <div class="buttons">
        <b-button variant="primary" to="/dashboard/application/add">
          Отправить заявку
        </b-button>
      </div>
    </template>
    <hr />
    <p>Вы можете стать лучшим хозяином!</p>
    <p>
      Добавьте свой объект, принимайте гостей, зарабатывайте и дарите улыбки
      людям.
    </p>
    <div class="buttons">
      <b-button variant="primary" to="/dashboard/object/add">
        Добавить объект
      </b-button>
    </div>
    <!-- <pre>{{ applications }}</pre> -->
  </div>
</template>

<script>
import moment from 'moment'
moment.locale('ru')
export default {
  middleware: 'auth',
  layout: 'dashboard',
  head() {
    return {
      title: 'Dashboard'
    }
  },
  computed: {
    applications({ $store }) {
      const response = []
      const applications = $store.state.application.list
      applications.forEach((application) => {
        const app = {
          iApplicationID: application.iApplicationID,
          sApplicationCity: application.sApplicationCity,
          dApplicationDateFrom: moment(application.dApplicationDateFrom).format(
            'D MMMM'
          ),
          dApplicationDateTo: moment(application.dApplicationDateTo).format(
            'D MMMM'
          ),
          application_objects: []
        }
        if (!application.object) {
          app.application_objects = application.application_objects.filter(
            (object) =>
              object.iObjectPrice !== null && object.iUserView === false
          )
          response.push(app)
        }
      })
      return response
    },
    countApplicationsString() {
      return (
        this.applications.length +
        ' ' +
        this.declOfNum(this.applications.length, [
          'открытая заявка',
          'открытых заявок',
          'открытых заявок'
        ])
      )
    },
    SELECTEL_WEB() {
      return process.env.SELECTEL_WEB
    }
  },
  async asyncData({ store, $axios, params }) {
    await store.dispatch('application/GET_LIST')
  },
  methods: {
    declOfNum(n, a) {
      const c = [2, 0, 1, 1, 1, 2]
      return a[n % 100 > 4 && n % 100 < 20 ? 2 : c[n % 10 < 5 ? n % 10 : 5]]
    }
  }
}
</script>

<style lang="scss" scoped>
h2 {
  font-size: 24px;
  font-weight: 600;
  margin: 5rem 0 2rem;
  text-align: center;
}
.buttons {
  text-align: center;
}
.btn {
  margin: 0 auto 2rem;
}
</style>
