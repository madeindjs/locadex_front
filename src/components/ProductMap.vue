<template lang="html">
  <l-map :zoom="zoom" :center="center">
    <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
    <l-marker :lat-lng="marker"></l-marker>
    <v-locatecontrol/>
  </l-map>
</template>

<script>
import L from 'leaflet';
import {LMap, LTileLayer, LMarker } from 'vue2-leaflet';
import Vue2LeafletLocatecontrol from 'vue2-leaflet-locatecontrol'

export default {
    name: 'ProductMap',
    data() {
       return {
         zoom:13,
         center: L.latLng(47.413220, -1.219482),
         url:'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
         attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
         marker: L.latLng(47.413220, -1.219482),
       }
     },
    components: {
        LMap,
        LTileLayer,
        LMarker,
        'v-locatecontrol': Vue2LeafletLocatecontrol
    }
}
</script>

<style lang="css" scoped>
</style>
