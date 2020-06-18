<template>
  <div>
    <h1>Фотографии объекта</h1>
    <ul class="objectImage">
      <li v-for="(image, imageIndex) in object.object_images" :key="imageIndex">
        <img
          :src="
            SELECTEL_WEB +
              '/object/' +
              image.iObjectID +
              '/preview/' +
              image.sObjectImage
          "
          @click="imageRemove(image)"
        />
      </li>
      <li v-show="!dropzoneLoading">
        <dropzone
          id="objectDropzone"
          ref="objectDropzone"
          :options="objectDropzoneOptions"
        />
      </li>
      <li v-show="dropzoneLoading">
        <b-spinner variant="primary" label="Spinning"></b-spinner>
      </li>
    </ul>
    <!-- {{ dropzoneLoading }} -->
    <b-button :to="'/dashboard/object/' + object.iObjectID" variant="primary">
      Вернуться к объекту
    </b-button>
    <!-- <pre>{{ object }}</pre> -->
  </div>
</template>

<script>
import Dropzone from 'nuxt-dropzone'
export default {
  middleware: 'auth',
  layout: 'dashboard',
  components: {
    Dropzone
  },
  head() {
    return {
      title: 'Object Photo'
    }
  },
  data() {
    return {
      objectDropzoneOptions: {
        url: '/api/object/uploadObjectImages',
        dictDefaultMessage: 'Выберите файл или перетащите его сюда',
        uploadMultiple: true,
        parallelUploads: 64,
        paramName: 'files',
        timeout: 5 * 60 * 1000,
        createImageThumbnails: false,
        addedfile: (file) => {},
        processingmultiple: () => {
          this.$set(this, 'dropzoneLoading', true)
        },
        sendingmultiple: (file, xhr, formData) => {
          formData.append('iObjectID', this.object.iObjectID)
        },
        successmultiple: (file, data) => {
          const objectImages = data.objectImages
          this.$store.dispatch('object/SET_OBJECT_IMAGES', { objectImages })
          // this.$set(this.object, 'object_images', data.objectImages)
          this.$set(this, 'dropzoneLoading', false)
        }
      },
      dropzoneLoading: false
    }
  },
  computed: {
    SELECTEL_WEB() {
      return process.env.SELECTEL_WEB
    },
    object({ $store }) {
      return $store.state.object.item
    }
  },
  async asyncData({ store, $axios, params }) {
    await store.dispatch('object/GET_ITEM', params)
  },
  methods: {
    async imageRemove(image) {
      await this.$store.dispatch('object/REMOVE_IMAGE', { image })
    }
  }
}
</script>

<style lang="scss" scoped>
ul.objectImage {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
  margin: 0 0 1rem;
  padding: 0;
  list-style: none;
  li {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f9f9f9;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    &:last-child {
      width: 100%;
    }
  }
}
.dropzone {
  width: 100%;
  min-height: 150px;
  height: 100%;
  display: block;
  padding: 0;
  margin: 0;
  border: 1px dashed #dee2e6;
  background: #f9f9f9;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  /deep/ .dz-message {
    height: 100%;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      text-align: center;
    }
  }
}
</style>
