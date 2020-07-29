<template>
  <div id="chat">
    <div class="userWrap">
      <div class="userIco">
        <img
          v-if="user.sUserAvatar"
          :src="SELECTEL_WEB + '/user/preview/' + user.sUserAvatar"
        />
        <div v-else class="emptyAvatar"></div>
        <div class="onlineStatus"></div>
      </div>
      <div class="userTitle">
        {{ user.sUserLastName }}
        {{ user.sUserFirstName }}
        {{ user.sUserMiddleName }}
      </div>
    </div>
    <div ref="messageWrap" class="messageWrap">
      <ul class="messages">
        <li
          v-for="(message, index) in messages"
          :key="index"
          :class="{ myMessage: iUserID === message.iUserID }"
        >
          <div class="messageItemWrap">
            {{ message.tMessageText }}
          </div>
        </li>
      </ul>
    </div>
    <div class="formWrap">
      <b-form @submit.prevent="sendMessage">
        <b-form-input
          v-model="tMessageText"
          required
          placeholder="Написать сообщение..."
          autocomplete="off"
        />
        <b-button type="submit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ffffff"
            stroke-width="2"
            stroke-linecap="square"
            stroke-linejoin="arcs"
          >
            <path d="M12 19V6M5 12l7-7 7 7" />
          </svg>
        </b-button>
      </b-form>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    applicationObject: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      tMessageText: ''
    }
  },
  created() {
    console.log(111)
  },
  computed: {
    SELECTEL_WEB() {
      return process.env.SELECTEL_WEB
    },
    messages({ $store }) {
      return $store.state.message.list
    },
    iUserID({ $store }) {
      // ID пользователя который залогинен в текущий момент (моя!)
      return $store.state.auth.user.iUserID
    },
    user() {
      // Данные собеседника (не моя!)
      let user = {}
      const userObject = this.applicationObject.object.user
      const userApplication = this.applicationObject.application.user
      if (this.iUserID === userObject.iUserID) {
        user = userApplication
      } else {
        user = userObject
      }
      return user
    }
  },
  mounted() {
    const _this = this
    this.socket = this.$nuxtSocket({
      name: 'home'
    })
    this.socket.on('newMessage', function(message) {
      if (
        message.iApplicationObjectID ===
        _this.applicationObject.iApplicationObjectID
      ) {
        _this.ADD_MESSAGE(message)
      }
    })
    this.scrollToBottom()
  },
  methods: {
    async sendMessage() {
      const message = {
        iApplicationObjectID: this.applicationObject.iApplicationObjectID,
        iUserID: this.iUserID,
        tMessageText: this.tMessageText
      }
      this.tMessageText = ''
      this.socket.emit('sendMessage', message)
      this.$store.dispatch('message/ADD_MESSAGE_TEST', message)
      this.$nextTick(function() {
        this.scrollToBottom()
      })
      await this.$store.dispatch('message/ADD_MESSAGE', message)
    },
    ADD_MESSAGE(message) {
      this.$store.dispatch('message/ADD_MESSAGE_TEST', message)
      this.$nextTick(function() {
        this.scrollToBottom()
      })
    },
    scrollToBottom() {
      const el = this.$refs.messageWrap
      const h = el.scrollHeight
      el.scrollTo(0, h)
    }
  }
}
</script>

<style lang="scss" scoped>
#chat {
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid #eaeaea;
  border-radius: 8px;
  margin-bottom: 0;
  overflow: hidden;
  height: auto;
  bottom: 25px !important;
  flex-grow: 1;
  background-color: white;
  .userWrap {
    flex-shrink: 0;
    margin: 1.5rem 1.5rem 0 1.5rem;
    padding: 0 0 1.5rem 0;
    border-bottom: 1px solid #f1f1f1;
    display: flex;
    .userIco {
      flex-shrink: 0;
      flex-basis: 2rem;
      height: 2rem;
      position: relative;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
      }
      .emptyAvatar {
        background-color: #eeeeee;
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
      .onlineStatus {
        width: 10px;
        height: 10px;
        background-color: #00ff23;
        border-radius: 5rem;
        position: absolute;
        right: 0;
        bottom: 0;
        border: 1px solid white;
      }
    }
    .userTitle {
      flex-grow: 1;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding-left: 1rem;
      font-weight: 500;
    }
  }
  .messageWrap {
    flex-grow: 1;
    overflow: auto;
    margin: 0 1.5rem 0 1.5rem;
    padding: 0.5rem 0;
    position: relative;
    &::-webkit-scrollbar {
      width: 0.75rem;
    }
    &::-webkit-scrollbar-track {
      background: white;
    }
    &::-webkit-scrollbar-thumb {
      border: 0.5rem solid rgba(0, 0, 0, 0);
      border-right: none;
      background-clip: padding-box;
      background-color: #cccccc;
    }
    &::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
    ul.messages {
      margin: 0;
      padding: 0;
      list-style: none;
      flex-grow: 1;
      overflow: auto;
      li {
        margin: 0 0 0.5rem 0;
        padding: 0;
        display: flex;
        justify-content: flex-start;
        .messageItemWrap {
          background-color: #f2f2f2;
          padding: 0.5rem 1rem;
          margin-right: 5rem;
          border-radius: 0.5rem 0.5rem 0.5rem 0;
        }
        &.myMessage {
          justify-content: flex-end;
          .messageItemWrap {
            background-color: #cce4fe;
            text-align: right;
            margin-right: 0;
            margin-left: 5rem;
            border-radius: 0.5rem 0.5rem 0 0.5rem;
          }
        }
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
  .formWrap {
    flex-shrink: 0;
    background-color: #f8f8f8;
    padding: 1rem 1.5rem;
    border-top: 1px solid #f6f6f6;
    form {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      input {
        flex-grow: 1;
        flex-shrink: 0;
        border: none;
        background-color: white;
        margin: 0;
        padding: 0.5rem 0.75rem;
        // padding: 0;
        height: 2.5rem;
        width: auto;
        border: 1px solid #e9e9e9;
        box-shadow: none;
        border-radius: 0.25rem;
        &::-webkit-scrollbar {
          width: 0.25rem;
          border-radius: 0.125rem;
        }
        &::-webkit-scrollbar-track {
          background: none;
        }
        &::-webkit-scrollbar-thumb {
          background: #cccccc;
        }
        &::-webkit-scrollbar-thumb:hover {
          background: #555;
        }
      }
      button {
        flex-shrink: 0;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin: 0 0 0 1rem;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #047cff;
        border: none;
      }
    }
  }
}
</style>
