<template>
  <div id="search">
    <div class="form-group-wrap">
      <b-form-group
        id="label-sObjectTitle"
        label="Категорию жилья"
        label-for="input-sObjectTitle"
      >
        <b-form-input
          id="input-sObjectTitle"
          type="text"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="label-sObjectTitle"
        label="Направление"
        label-for="input-sObjectTitle"
      >
        <b-form-input
          id="input-sObjectTitle"
          v-model="search"
          type="text"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="label-sObjectTitle"
        label="Даты"
        label-for="input-sObjectTitle"
      >
        <b-form-input
          id="input-sObjectTitle"
          type="text"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="label-sObjectTitle"
        label="Гости"
        label-for="input-sObjectTitle"
      >
        <b-form-input
          id="input-sObjectTitle"
          type="text"
          required
        ></b-form-input>
      </b-form-group>
    </div>
    <b-form @submit.prevent="searchResult" class="form" autocomplete="off">
      <div class="sApplicationAddress">
        <SmartAutocomplete
          v-model="search"
          :timeout="500"
          :items="items"
          @get="updateItems"
          @clear="clearItems"
          @selectItem="selectItem"
          placeholder="Введите поисковый запрос"
        />
        <!-- <b-input
          v-on:keyup="updateItems"
          v-model="search"
          @focus="focused = true"
          @blur="focused = false"
          :class="{ focus: focused }"
          placeholder="Куда Вы направляетесь?"
        ></b-input>
        <div v-if="focused" class="result">
          {{ items }}
        </div> -->
      </div>
      <!-- <client-only>
        <v-autocomplete
          :min-len="2"
          :auto-select-one-item="false"
          :items="items"
          v-model.lazy="item"
          :wait="0"
          :get-label="getLabel"
          :component-item="template"
          :input-attrs="{ placeholder: 'Введите поисковый запрос' }"
          @update-items="updateItems"
          class="sApplicationAddress"
        >
        </v-autocomplete>
      </client-only> -->
      <!-- <suggestions
        ref="sApplicationAddress"
        v-model="sApplicationAddress"
        :options="suggestionsOptions"
        :onInputChange="onInputChange"
        :onItemSelected="onItemSelected"
        @change.native="checkApplicationAddress"
        class="sApplicationAddress"
        require
        autocomplete="0"
      >
        <div slot="item" slot-scope="props">
          {{ props.item.formattedAddress }}
        </div>
      </suggestions> -->
      <b-form-datepicker
        v-model="dApplicationDateFrom"
        :hide-header="true"
        :start-weekday="1"
        :date-format-options="{
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }"
        label-help=""
        label-no-date-selected="Дата заезда"
        class="dApplicationDateFrom"
      >
        <div slot="button-content">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#2196f3"
            stroke-width="2"
            stroke-linecap="square"
            stroke-linejoin="arcs"
          >
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
        </div>
      </b-form-datepicker>
      <b-form-datepicker
        v-model="dApplicationDateTo"
        :hide-header="true"
        :start-weekday="1"
        :date-format-options="{
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }"
        label-help=""
        label-no-date-selected="Дата выезда"
        class="dApplicationDateTo"
      >
        <div slot="button-content">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#2196f3"
            stroke-width="2"
            stroke-linecap="square"
            stroke-linejoin="arcs"
          >
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
        </div>
      </b-form-datepicker>
      <div class="dApplicationPeopleCount">
        <b-button
          id="popover-people-count"
          :class="{ open: popoverPeopleCountView }"
          block
          href="#"
          tabindex="0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#2196f3"
            stroke-width="2"
            stroke-linecap="square"
            stroke-linejoin="arcs"
          >
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
          <span>{{ peopleCount }}</span>
        </b-button>
        <b-popover
          target="popover-people-count"
          placement="bottom"
          triggers="focus hover"
        >
          <!-- <template v-slot:title>Danger!</template> -->
          <div class="age">
            <span>Взрослые</span>
            <b-form-spinbutton
              id="sb-inline"
              v-model="iApplicationAdult"
              inline
              min="1"
              max="10"
            >
              <template v-slot:button>Danger!</template>
            </b-form-spinbutton>
          </div>
          <div class="age">
            <span>Дети</span>
            <b-form-spinbutton
              id="sb-inline"
              v-model="iApplicationChild"
              inline
              min="0"
              max="10"
            />
          </div>
        </b-popover>
      </div>
      <div class="wrapButtom">
        <b-button type="submit">Показать предложения</b-button>
      </div>
    </b-form>
  </div>
</template>

<script>
// import Suggestions from 'v-suggestions'
// import 'v-suggestions/dist/v-suggestions.css'
import AutocompleteItem from '~/components/AutocompleteItem'
import SmartAutocomplete from '~/components/SmartAutocomplete'
export default {
  components: {
    SmartAutocomplete
    // Suggestions
  },
  data() {
    return {
      sApplicationAddress: '',
      dApplicationDateFrom: null,
      dApplicationDateTo: null,
      iApplicationAdult: 1,
      iApplicationChild: 0,
      popoverPeopleCountView: false,
      suggestionsOptions: {
        inputClass: 'form-control',
        // debounce: 250,
        placeholder: 'Куда Вы направляетесь?'
      },
      locale: 'ru-RU',
      items: [],
      item: {},
      template: AutocompleteItem,
      search: '',
      focused: false
    }
  },
  computed: {
    peopleCount() {
      const count = this.iApplicationAdult + this.iApplicationChild
      return count + ' ' + this.declOfNum(count, ['гость', 'гостя', 'гостей'])
    }
  },
  mounted() {
    this.$root.$on('bv::popover::show', (e) => {
      const id = e.target.id
      if (id === 'popover-people-count') {
        this.popoverPeopleCountView = true
      }
    })
    this.$root.$on('bv::popover::hide', (e) => {
      const id = e.target.id
      if (id === 'popover-people-count') {
        this.popoverPeopleCountView = false
      }
    })
  },
  methods: {
    declOfNum(n, a) {
      const c = [2, 0, 1, 1, 1, 2]
      return a[n % 100 > 4 && n % 100 < 20 ? 2 : c[n % 10 < 5 ? n % 10 : 5]]
    },
    onInputChange(query) {
      query = query.trim() || null
      if (query === null) return null
      return new Promise((resolve) => {
        this.$axios
          .post('/api/object/search_address', {
            search: query
          })
          .then((response) => {
            resolve(response.data.list)
          })
      })
    },
    onItemSelected(item) {
      this.$set(this, 'sApplicationAddress', item.formattedAddress)
    },
    checkApplicationAddress() {
      // console.log('checkApplicationAddress')
    },
    getLabel(item) {
      // this.item = null
      // console.log('getLabel', item)
      // return item
      // this.item = item
      // console.log(item)
      // return item.name
    },
    updateItems(e) {
      // console.log(e)
      // const key = String.fromCharCode(e.keyCode)
      // console.log(key)
      // if (/[a-zA-Zа-яА-Я\d.,]/.test(key)) {
      //   console.log('success')
      // }

      // console.log('updateItems', text)
      this.$axios
        .post('/api/object/search_address', {
          search: this.search
        })
        .then((response) => {
          this.items = response.data.list
          return 111
        })
      // console.log(text)
      // this.items = [
      //   {
      //     id: 1,
      //     name: '111',
      //     description: '111 111 111'
      //   },
      //   {
      //     id: 2,
      //     name: '222',
      //     description: '222 222 222'
      //   },
      //   {
      //     id: 3,
      //     name: '333',
      //     description: '333 333 333'
      //   },
      //   {
      //     id: 4,
      //     name: '444',
      //     description: '444 444 444'
      //   },
      //   {
      //     id: 5,
      //     name: '555',
      //     description: '555 555 555'
      //   }
      // ]
      // this.item = text
      // console.log(text)
      // this.$axios
      //   .post('/api/object/search_address', {
      //     search: query
      //   })
      //   .then((response) => {
      //     resolve(response.data.list)
      //   })
      // yourGetItemsMethod(text).then( (response) => {
      //   this.items = response
      // })
    },
    searchResult() {
      this.$store.dispatch('searchForm/SET_sApplicationAddress', this.item)
      this.$store.dispatch(
        'searchForm/SET_dApplicationDateFrom',
        this.dApplicationDateFrom
      )
      this.$store.dispatch(
        'searchForm/SET_dApplicationDateTo',
        this.dApplicationDateTo
      )
      this.$store.dispatch(
        'searchForm/SET_iApplicationAdult',
        this.iApplicationAdult
      )
      this.$store.dispatch(
        'searchForm/SET_iApplicationChild',
        this.iApplicationChild
      )

      if (this.$store.state.auth.user) {
        this.$router.push('/dashboard/application/add')
      } else {
        this.$router.push('/signup?redirect=new-application')
      }
    },
    clearItems() {
      this.items = []
    },
    selectItem(item) {
      // console.log(item)
      this.item = item
      this.search = item.formattedAddress
    }
  }
}
</script>

<style lang="scss" scoped>
#search {
  position: relative;
  z-index: 1;
  color: white;
  width: 100%;
  .form-group-wrap {
    grid-template-rows: 1fr;
    grid-template-columns: 3fr 5fr 3fr 3fr;
  }
  .form {
    display: grid;
    grid-template-columns: 1fr 210px 210px 210px;
    grid-template-rows: 60px auto;
    grid-gap: 2px;
    @media (max-width: 991px) {
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 60px 60px auto;
    }
    @media (max-width: 767px) {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 60px 60px 60px auto;
    }
    @media (max-width: 575px) {
      grid-template-columns: 1fr;
      grid-template-rows: 60px 60px 60px 60px auto;
    }
    .sApplicationAddress {
      grid-column: 1 / 2;
      grid-row: 1 / 2;
      box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.15);
      @media (max-width: 991px) {
        grid-column: 1 / 4;
        grid-row: 1 / 2;
      }
      @media (max-width: 767px) {
        grid-column: 1 / 3;
        grid-row: 1 / 2;
      }
      @media (max-width: 575px) {
        grid-column: 1 / 2;
        grid-row: 1 / 2;
      }
      /deep/ input {
        border: none;
        background-color: white;
        padding: 0 1rem;
        height: 60px;
        border-radius: 0.35rem 0 0 0.35rem;
        outline: none;
        &.smart-autocomplete-focus {
          &.smart-autocomplete-isResult {
            border-radius: 0.35rem 0 0 0;
          }
        }
        @media (max-width: 991px) {
          border-radius: 0.35rem 0.35rem 0 0;
        }
        &.focus {
          background-color: red;
        }
      }
      // /deep/ .v-autocomplete-input-group {
      //   border: none;
      //   input {
      //     width: 100%;
      //     border: none;
      //     background-color: white;
      //     padding: 0 1rem;
      //     height: 60px;
      //     border-radius: 0.35rem 0 0 0.35rem;
      //     -webkit-box-shadow: none;
      //     box-shadow: none;
      //     outline: none;
      //     &:focus {
      //       // border-radius: 0.35rem 0 0 0;
      //     }
      //     @media (max-width: 991px) {
      //       border-radius: 0.35rem 0.35rem 0 0;
      //     }
      //   }
      // }
      // /deep/ .v-autocomplete-list {
      //   background: red;
      //   .v-autocomplete-list-item {
      //     &.v-autocomplete-item-active {
      //       background: green;
      //     }
      //   }
      // }
    }
    .dApplicationDateFrom {
      grid-column: 2 / 3;
      grid-row: 1 / 2;
      border: none;
      border-radius: 0;
      background-color: white;
      background-clip: border-box;
      box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.15);
      padding: 0 1rem 0 0;
      @media (max-width: 991px) {
        grid-column: 1 / 2;
        grid-row: 2 / 3;
        border-radius: 0 0 0 0.35rem;
      }
      @media (max-width: 767px) {
        grid-column: 1 / 2;
        grid-row: 2 / 3;
        border-radius: 0;
      }
      @media (max-width: 575px) {
        grid-column: 1 / 2;
        grid-row: 2 / 3;
        border-radius: 0;
      }
      /deep/ button.btn {
        padding: 0;
        padding-left: 1rem;
        flex-basis: auto;
        flex-shrink: 0;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      /deep/ .dropdown-menu {
        margin: 2px 0 0;
        border: none;
        border-radius: 0 0 0.35rem 0.35rem;
        button {
          padding: 0;
        }
      }
      /deep/ label {
        padding: 0;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        min-height: auto;
        height: auto !important;
      }
    }
    .dApplicationDateTo {
      grid-column: 3 / 4;
      grid-row: 1 / 2;
      border: none;
      border-radius: 0;
      background-color: white;
      background-clip: border-box;
      box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.15);
      padding: 0 1rem 0 0;
      @media (max-width: 991px) {
        grid-column: 2 / 3;
        grid-row: 2 / 3;
      }
      @media (max-width: 767px) {
        grid-column: 2 / 3;
        grid-row: 2 / 3;
      }
      @media (max-width: 575px) {
        grid-column: 1 / 2;
        grid-row: 3 / 4;
      }
      /deep/ button.btn {
        padding: 0;
        padding-left: 1rem;
        flex-basis: auto;
        flex-shrink: 0;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      /deep/ .dropdown-menu {
        margin: 2px 0 0;
        border: none;
        border-radius: 0 0 0.35rem 0.35rem;
        button {
          padding: 0;
        }
      }
      /deep/ label {
        padding: 0;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        min-height: auto;
        height: auto !important;
      }
    }
    .dApplicationPeopleCount {
      grid-column: 4 / 5;
      grid-row: 1 / 2;
      @media (max-width: 991px) {
        grid-column: 3 / 4;
        grid-row: 2 / 3;
      }
      @media (max-width: 767px) {
        grid-column: 1 / 3;
        grid-row: 3 / 4;
      }
      @media (max-width: 575px) {
        grid-column: 1 / 2;
        grid-row: 4 / 5;
      }
      a {
        border-radius: 0 0.35rem 0.35rem 0;
        background-color: white;
        color: #6c757d;
        border: none;
        padding: 0 1rem;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        &.open {
          border-radius: 0 0.35rem 0 0;
          @media (max-width: 991px) {
            border-radius: 0;
          }
        }
        @media (max-width: 991px) {
          border-radius: 0 0 0.35rem 0;
        }
        @media (max-width: 767px) {
          border-radius: 0 0 0.35rem 0.35rem;
        }
      }
    }
    .wrapButtom {
      // background-color: orange;
      grid-column: 1 / 5;
      grid-row: 2 / 3;
      display: flex;
      justify-content: center;
      align-items: center;
      padding-top: 2rem;
      @media (max-width: 991px) {
        grid-column: 1 / 4;
        grid-row: 3 / 4;
      }
      @media (max-width: 767px) {
        grid-column: 1 / 3;
        grid-row: 4 / 5;
      }
      @media (max-width: 575px) {
        grid-column: 1 / 2;
        grid-row: 5 / 6;
      }
      button {
        background-color: #007bff;
        padding: 1rem 2rem;
        font-size: 1.2rem;
        font-weight: 500;
        border: none;
        box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.15);
        &:active {
          box-shadow: inset 0 -3px 2px 1px rgba(0, 0, 0, 0.5);
        }
      }
    }
  }
}
.popover {
  width: 210px;
  top: -6px !important;
  border: none;
  border-radius: 0 0 0.35rem 0.35rem;
  /deep/ .arrow {
    display: none;
  }
  /deep/ .popover-body {
    padding: 0.5rem 1rem;
    .age {
      display: flex;
      justify-content: space-between;
      padding: 0.25rem 0;
      span {
        display: flex;
        justify-content: flex-start;
        align-items: center;
      }
      .b-form-spinbutton {
        // background-color: red;
        border: none;
        border-radius: 0;
        height: auto;
        button {
          padding: 0;
          width: 24px;
          height: 24px;
        }
        output {
          border: none !important;
          bdi {
            width: 2rem;
            min-width: auto;
            height: auto !important;
            line-height: auto !important;
          }
        }
      }
    }
  }
}
</style>
