<template lang="html">
  <l-marker :lat-lng="[shop.attributes.latitude, shop.attributes.longitude]" >
    <l-popup :title="shop.attributes.name" >
      <address>
          <strong>{{ shop.attributes.name }}</strong><br/>
          {{ shop.attributes.address }},
          {{ shop.attributes.zip_code }},
          {{ shop.attributes.town }}
      </address>
      <table class="table table-sm">
          <tr :key="productShop.id"  v-for="productShop in productShops">
            <th>{{ productName(productShop.attributes.product_id) }}</th>
            <td class="text-right">{{ productShop.attributes.price / 100 }} €</td>
          </tr>
      </table>
    </l-popup>
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
  computed: {
    productShops: function() {
      return this.$store
                 .getters['products/productShops']
                 .filter(productShop => productShop.attributes.shop_id == this.shop.id)
                 .slice(0, 5)
    }
  },
  methods: {
    productName: function(productId) {
      return this.$store
                 .getters['products/products']
                 .filter( product => product.id == productId )[0]
                 .attributes.name
    }
  }
}
</script>

