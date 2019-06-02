<template lang="html">
  <l-marker :lat-lng="[shop.attributes.latitude, shop.attributes.longitude]" >
    <l-popup :title="shop.attributes.name" :content="shopContent" />
  </l-marker>
</template>

<script>
import { LMarker, LPopup } from 'vue2-leaflet';
export default {
  name: 'ShopMarker',
  components: {
    LMarker,
    LPopup,
    // Vue2LeafletLocatecontrol
  },
  props: ['shop'],
  methods: {
    shopContent: function() {
      return `
        <address>
          <strong>${this.shop.attributes.name}</strong><br/>
          ${this.shop.attributes.address},
          ${this.shop.attributes.zip_code},
          ${this.shop.attributes.town}
        </address>
      `
    }
  }
}
</script>

<style lang="css" scoped>
</style>
