<template lang="html">
  <l-map :zoom="zoom" :center="center">
    <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
    <!-- <l-marker :lat-lng="marker"></l-marker> -->
    <l-marker :lat-lng="[shop.attributes.latitude, shop.attributes.longitude]" v-for="shop in shops"></l-marker>
    <v-locatecontrol/>
  </l-map>
</template>

<script>
import { mapState } from 'vuex'
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';
import L from 'leaflet';
import Vue2LeafletLocatecontrol from 'vue2-leaflet-locatecontrol'

export default {
    name: 'ProductMap',
    components: {
      LMap,
      LTileLayer,
      LMarker,
      Vue2LeafletLocatecontrol
    },
    data() {
       return {
         zoom:13,
         center: L.latLng(47.413220, -1.219482),
         url:'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
         attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
         marker: L.latLng(47.413220, -1.219482),
       }
     },
     computed: {
       ...mapState('products', {
         shops: state => state.shops,
       }),
     },
}
</script>

<style lang="css" scoped>
</style>
