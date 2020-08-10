<template>
  <div class="map">
    <client-only>
      <yandex-map
        :coords="application.aApplicationCoordinate.coordinates"
        :show-all-markers="true"
        :controls="[]"
      >
        <!-- <div slot="balloon">
            <div class="balloonCard">balloonCard</div>
          </div>
          <div slot="contentLayout">
            <div class="contentLayout">contentLayout</div>
          </div> -->
        <!-- </ymap-marker> -->
        <YMMarker
          v-for="(applicationObject, index) in application.application_objects"
          :key="index"
          :applicationObject="applicationObject"
        />
      </yandex-map>
    </client-only>
    <!-- <pre>{{ application }}</pre> -->
    <!-- :coords="object.aObjectCoordinate.coordinates" -->
  </div>
</template>

<script src="./_iApplicationID.js"></script>
<style src="./_iApplicationID.scss" scoped lang="scss"></style>
