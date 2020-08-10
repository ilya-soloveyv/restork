<template>
  <div>
    <b-row align-h="between">
      <b-col cols="auto">
        <div class="dDate">
          {{ dDate }}
        </div>
      </b-col>
      <b-col cols="auto">
        <div class="cancelApplication">
          <nuxt-link to="#">
            Остановить подбор <span>предложений</span>
          </nuxt-link>
        </div>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <div
          :class="{ showAllData: toggleShowAllData }"
          class="applicationHeader"
        >
          <div class="address">
            <label>Направление:</label>
            <div class="value">{{ application.sApplicationAddress }}</div>
          </div>
          <div class="dates">
            <label>Проживание:</label>
            <div class="value">{{ dates }}</div>
          </div>
          <div class="type">
            <label>Тип:</label>
            <div class="value">Жилье целиком</div>
          </div>
          <div class="guests">
            <label>Гостей:</label>
            <div class="value">
              <div>{{ sApplicationAdult }}</div>
              <div v-if="sApplicationChild">{{ sApplicationChild }}</div>
            </div>
          </div>
          <div class="options">
            <label>Дополнительные удобства:</label>
            <div class="value">
              <template v-if="options">
                {{ options }}
                <span
                  v-if="!toggleShowAllOptions && hideOptionsCount"
                  @click="showAllOptions"
                >
                  +{{ hideOptionsCount }}
                </span>
              </template>
              <template v-else>
                Не выбрано
              </template>
            </div>
          </div>
          <div class="objects">
            <label>Ответов:</label>
            <div class="value">
              {{ applicationObjectNoWaitCount }} /
              {{ application.application_objects.length }}
            </div>
          </div>
          <div class="news">
            <label>Новых:</label>
            <div class="value">
              <span>{{ applicationObjectNew }}</span>
            </div>
          </div>
          <div class="messages">
            <label>Сообщения:</label>
            <div class="value">
              <span>{{ applicationObjectNewAllMessage }}</span>
            </div>
          </div>
          <div v-if="!toggleShowAllData" @click="showAllData" class="showAll">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ffffff"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="bevel"
              >
                <circle cx="12" cy="12" r="1"></circle>
                <circle cx="19" cy="12" r="1"></circle>
                <circle cx="5" cy="12" r="1"></circle>
              </svg>
            </span>
          </div>
        </div>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <div class="applicationObjectsFilter">
          <div class="wrapFavourite">
            <button class="showFavourite">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15.925"
                height="14.278"
                viewBox="0 0 15.925 14.278"
              >
                <path
                  id="heart"
                  d="M13.741,1.3A4.013,4.013,0,0,0,10.756,0,3.755,3.755,0,0,0,8.41.809a4.8,4.8,0,0,0-.948.99,4.8,4.8,0,0,0-.948-.99A3.754,3.754,0,0,0,4.169,0,4.014,4.014,0,0,0,1.184,1.3,4.665,4.665,0,0,0,0,4.485,5.555,5.555,0,0,0,1.48,8.122,31.563,31.563,0,0,0,5.186,11.6c.513.438,1.1.934,1.7,1.462a.876.876,0,0,0,1.154,0c.6-.528,1.187-1.025,1.7-1.463a31.549,31.549,0,0,0,3.705-3.478,5.555,5.555,0,0,0,1.48-3.636A4.665,4.665,0,0,0,13.741,1.3Zm0,0"
                  transform="translate(0.5 0.5)"
                  fill="none"
                  stroke="#000"
                  stroke-width="1"
                />
              </svg>
            </button>
          </div>
          <div class="wrapAddFilter">
            <button class="addFilter">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16.95"
                height="12"
                viewBox="0 0 16.95 12"
              >
                <g
                  id="Сгруппировать_371"
                  data-name="Сгруппировать 371"
                  transform="translate(-103.525 -507)"
                >
                  <line
                    id="Линия_78"
                    data-name="Линия 78"
                    x2="2.279"
                    transform="translate(104.025 509.582)"
                    fill="none"
                    stroke="#000"
                    stroke-linecap="round"
                    stroke-width="1"
                  />
                  <line
                    id="Линия_79"
                    data-name="Линия 79"
                    x2="9.114"
                    transform="translate(110.86 509.582)"
                    fill="none"
                    stroke="#000"
                    stroke-linecap="round"
                    stroke-width="1"
                  />
                  <line
                    id="Линия_80"
                    data-name="Линия 80"
                    x2="9.475"
                    transform="translate(104.025 516.418)"
                    fill="none"
                    stroke="#000"
                    stroke-linecap="round"
                    stroke-width="1"
                  />
                  <path
                    id="Контур_119"
                    data-name="Контур 119"
                    d="M-.781,0h2.3"
                    transform="translate(118.456 516.418)"
                    fill="none"
                    stroke="#000"
                    stroke-linecap="round"
                    stroke-width="1"
                  />
                  <g
                    id="Эллипс_45"
                    data-name="Эллипс 45"
                    transform="translate(106 507)"
                    fill="none"
                    stroke="#000"
                    stroke-width="1"
                  >
                    <circle cx="2.5" cy="2.5" r="2.5" stroke="none" />
                    <circle cx="2.5" cy="2.5" r="2" fill="none" />
                  </g>
                  <g
                    id="Эллипс_46"
                    data-name="Эллипс 46"
                    transform="translate(113 514)"
                    fill="none"
                    stroke="#000"
                    stroke-width="1"
                  >
                    <circle cx="2.5" cy="2.5" r="2.5" stroke="none" />
                    <circle cx="2.5" cy="2.5" r="2" fill="none" />
                  </g>
                </g>
              </svg>
              <span>Добавить фильтр</span>
            </button>
          </div>
          <div class="wrapAddSorting">
            <button class="addSorting">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10.466"
                height="13.955"
                viewBox="0 0 10.466 13.955"
              >
                <g id="sort" transform="translate(-14 -8)">
                  <path
                    id="Контур_121"
                    data-name="Контур 121"
                    d="M19.063,10.206,17.028,8.171a.581.581,0,0,0-.822,0l-2.035,2.035a.581.581,0,0,0,.822.822l1.043-1.043V21.374a.581.581,0,0,0,1.163,0V9.985l1.043,1.043a.581.581,0,0,0,.822-.822Z"
                    transform="translate(0 0)"
                  />
                  <path
                    id="Контур_122"
                    data-name="Контур 122"
                    d="M37.063,18.927a.581.581,0,0,0-.822,0L35.2,19.97V8.581a.581.581,0,1,0-1.163,0V19.97l-1.043-1.043a.581.581,0,0,0-.822.822l2.035,2.035a.581.581,0,0,0,.822,0l2.035-2.035a.581.581,0,0,0,0-.822Z"
                    transform="translate(-12.767)"
                  />
                </g>
              </svg>
              <span>Сортировать: Рейтинг по возрастанию</span>
            </button>
          </div>
          <div class="wrapGoToMap">
            <nuxt-link
              :to="'/dashboard/application/map/' + application.iApplicationID"
              class="goToMap"
            >
              <svg
                id="geo"
                xmlns="http://www.w3.org/2000/svg"
                width="12.246"
                height="19"
                viewBox="0 0 12.246 19"
              >
                <path
                  id="Контур_57"
                  data-name="Контур 57"
                  d="M158.793,63.934a3.9,3.9,0,1,0-3.9,3.9A3.929,3.929,0,0,0,158.793,63.934Zm-6.68,0a2.783,2.783,0,1,1,2.783,2.783A2.805,2.805,0,0,1,152.113,63.934Z"
                  transform="translate(-148.773 -57.773)"
                />
                <path
                  id="Контур_58"
                  data-name="Контур 58"
                  d="M103.246,6.16A6.123,6.123,0,1,0,91,6.16c0,2.251,2.2,5.652,3.512,7.521C93.058,13.974,91,14.729,91,16.217,91,18.345,94.964,19,97.123,19s6.123-.655,6.123-2.783c0-1.488-2.058-2.243-3.512-2.535,1.3-1.859,3.512-5.268,3.512-7.521Zm-11.133,0a5.01,5.01,0,1,1,10.02,0c0,2.357-3.294,7-5.01,9.171-1.716-2.167-5.01-6.813-5.01-9.171Zm10.02,10.057c0,.93-2.726,1.67-5.01,1.67s-5.01-.741-5.01-1.67c0-.443.994-1.211,3.12-1.532.812,1.1,1.423,1.841,1.461,1.887a.557.557,0,0,0,.857,0c.038-.046.649-.785,1.461-1.887C101.138,15.006,102.133,15.774,102.133,16.217Z"
                  transform="translate(-91)"
                />
              </svg>
              <span>Показать на карте</span>
            </nuxt-link>
          </div>
        </div>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <div class="applicationObjectsList">
          <ApplicationObjectItem
            v-for="(object, index) in application.application_objects"
            :key="index"
            :object="object"
          />
        </div>
      </b-col>
    </b-row>
    <!-- <pre>{{ application }}</pre> -->
  </div>
</template>

<script src="./index.js"></script>
<style src="./index.scss" scoped lang="scss"></style>
