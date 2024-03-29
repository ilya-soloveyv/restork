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
        <div
          v-for="(image, imageIndex) in object.object_images"
          :key="image.iObjectImageID"
          class="photos__item"
        >
          <div class="photos__photo">
            <img
              :src="
                `${SELECTEL_WEB}/object/${object.iObjectID}/preview/${image.sObjectImage}`
              "
              class="photos__photo-img"
            />
            <div @click="removeImage(image)" class="photos__remove">
              <svg width="18" height="18" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
                />
              </svg>
            </div>
            <div
              v-b-tooltip.hover
              @click="setImageIndex(image.iObjectImageID)"
              title="Сделать обложкой"
              class="photos__number"
            >
              <template v-if="image.iObjectImageIndex">
                Обложка
              </template>
              <template v-else>
                {{ imageIndex + 1 }}
              </template>
            </div>
          </div>
        </div>
      </div>
      <!-- <dnd-zone :transition-duration="0.3">
        <dnd-container
          :dnd-model="images"
          dnd-id="grid-example"
          class="photos"
          dense
        >
          <dnd-item
            v-for="(image, imageIndex) in images"
            :key="image.iObjectImageID"
            :dnd-id="image.iObjectImageID"
            :dnd-model="image"
            class="photos__item"
          >
            <div class="photos__photo">
              <img
                :src="
                  `${SELECTEL_WEB}/object/${object.iObjectID}/preview/${image.sObjectImage}`
                "
              />
              <div @click="removeImage(image)" class="photos__remove">
                <svg width="18" height="18" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
                  />
                </svg>
              </div>
              <div
                v-b-tooltip.hover
                title="Сделать обложкой"
                @click="setImageIndex(image.iObjectImageID)"
                class="photos__number"
              >
                <template v-if="image.iObjectImageIndex">
                  Обложка
                </template>
                <template v-else>
                  {{ imageIndex + 1 }}
                </template>
              </div>
            </div>
          </dnd-item>
        </dnd-container>
      </dnd-zone> -->
      <div class="upload">
        <div v-show="dropzoneLoading" class="upload__loading">
          <svg class="upload__spinner" viewBox="0 0 50 50">
            <circle
              class="path"
              cx="25"
              cy="25"
              r="20"
              fill="none"
              stroke-width="5"
            />
          </svg>
        </div>
        <dropzone
          id="objectDropzone"
          ref="objectDropzone"
          v-show="!dropzoneLoading"
          :options="objectDropzoneOptions"
        />
      </div>
    </template>
  </TutorialPage>
</template>

<script>
import Dropzone from 'nuxt-dropzone'
import TutorialPage from '@/components/Tutorial/TutorialPage.vue'
import TutorialHint from '@/components/Tutorial/TutorialHint.vue'

import TutorialFormLabel from '@/components/Tutorial/TutorialFormLabel.vue'

export default {
  layout: 'tutorial',
  components: {
    Dropzone,
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
      ],
      imagesModel: [],
      dropzoneLoading: false,
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
          this.dropzoneLoading = true
        },
        sendingmultiple: (file, xhr, formData) => {
          formData.append('iObjectID', this.object.iObjectID)
        },
        successmultiple: (file, data) => {
          this.$store.dispatch('tutorial/GET_OBJECT')
          this.dropzoneLoading = false
        }
      }
    }
  },
  computed: {
    SELECTEL_WEB() {
      return process.env.SELECTEL_WEB
    },
    object() {
      return this.$store.state.tutorial.object
    },
    images: {
      get() {
        return this.$store.state.tutorial.object.object_images
      }
    }
  },
  methods: {
    removeImage(image) {
      this.$store.dispatch('tutorial/REMOVE_objectImage', image)
    },
    setImageIndex(iObjectImageID) {
      this.$store.dispatch('tutorial/SET_objectImageIndex', {
        iObjectImageID
      })
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

  &__item {
    flex-basis: 173px;
    height: 173px;
    border-radius: 6px;
    background: #eee;
    overflow: hidden;
    position: relative;
    cursor: move;

    @media (max-width: 1199px) {
      flex-basis: calc(25% - 12px);
      height: calc(25% - 12px);
    }

    @media (max-width: 767px) {
      flex-basis: calc(50% - 12px);
      height: calc(50% - 12px);
    }
  }

  &__photo-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__remove {
    position: absolute;
    top: 12px;
    left: 12px;
    width: 24px;
    height: 24px;
    background: white;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  &__number {
    position: absolute;
    top: 12px;
    right: 12px;
    min-width: 24px;
    height: 24px;
    background: white;
    border-radius: 12px;
    padding: 0 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    font-weight: 500;
    cursor: pointer;
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
  cursor: pointer;

  &__loading,
  ::v-deep .dropzone {
    width: 100%;
    height: 114px;
    padding: 32px 0;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__spinner {
    animation: rotate 2s linear infinite;
    z-index: 2;
    width: 50px;
    height: 50px;

    & .path {
      stroke: hsl(210, 70, 75);
      stroke-linecap: round;
      animation: dash 1.5s ease-in-out infinite;
    }
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
}
</style>
