<template lang="html">
  <l-map :zoom="zoom" :center="center">
    <l-tile-layer :url="url"  :attribution="attribution"></l-tile-layer>
    <ShopMarker  :shop="shop" :key="shop.id" v-for="shop in shops" />
  </l-map>
</template>

<script>
import { mapState } from 'vuex'
import { LMap, LTileLayer } from 'vue2-leaflet';
import { latLng } from 'leaflet';
// import Vue2LeafletLocatecontrol from 'vue2-leaflet-locatecontrol'

import ShopMarker from './ShopMarker.vue'

export default {
    name: 'ProductMap',
    components: {
      LMap,
      LTileLayer,
      ShopMarker,
      // Vue2LeafletLocatecontrol
    },
    data() {
       return {
         zoom:5,
         center: latLng(46.9483, 7.4513),
         url:'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
         attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
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
