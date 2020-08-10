<template>
  <ymap-marker
    :marker-id="applicationObject.iApplicationObjectID"
    :coords="applicationObject.object.aObjectCoordinate.coordinates"
    :icon="markerIcon"
    :iApplicationObjectID="applicationObject.iApplicationObjectID"
    :balloon-template="balloonTemplate"
  >
    <div slot="balloon">
      <div class="balloonCard">
        <!-- <ObjectCarouselImage
          :iObjectID="applicationObject.object.iObjectID"
          :images="applicationObject.object.object_images"
        /> -->
        <ApplicationObjectItem :object="applicationObject" />
        <pre>{{ applicationObject }}</pre>
      </div>
    </div>
  </ymap-marker>
</template>

<script>
import ApplicationObjectItem from '@/components/Dashboard/application/ApplicationObjectItem'
export default {
  components: {
    ApplicationObjectItem
  },
  props: {
    applicationObject: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      markerIcon: {
        layout: 'default#imageWithContent',
        imageHref: '/marketYM.png',
        imageSize: [91, 50],
        imageOffset: [-45, -37],
        content: this.applicationObject.iObjectPrice || 'ожидаем',
        contentOffset: [10, 10],
        contentLayout:
          '<div class="balloonContent">$[properties.iconContent]</div>'
      }
    }
  },
  computed: {
    balloonTemplate() {
      return `
        <h1 class="red">Hi, everyone!</h1>
        <p>I am here: ${this.applicationObject.iApplicationObjectID}</p>
        <img src="http://via.placeholder.com/350x150">
      `
    }
  }
}
</script>

<style lang="scss" scoped>
.market {
  background-color: red;
}
</style>
