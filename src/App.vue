<template>
  <div id="app" class="">
    <Navigation />
    <div class="container-fluid row" id="container">
      <ProductMap class="col-12 col-sm-6 col-md-8 px-0" id="map-container"/>
      <ProductList class="col-12 col-sm-6 col-md-4" id="product-container" />
    </div>
  </div>
</template>

<script>
import ProductList from './components/ProductList.vue'
import ProductMap from './components/ProductMap.vue'
import Navigation from './components/Navigation.vue'

export default {
  name: 'app',
  components: {
    Navigation,
    ProductMap,
    ProductList,
    // HelloWorld,
  },
  data: function() {
    return {
      loading: true,
    }
  },
  methods:{
    loadProducts: function() {
      this.$store.dispatch('products/search', null)
    }
  },
  
}
</script>

<style media="screen">
    #container {
      height: calc(100vh - 56px);
      margin: 0;
      padding: 0;
    }
    #product-container{
      height:100%;
      overflow-y: scroll;
    }
    @media screen and (max-width: 640px) {
      #map-container{
        height: 50%;
      }
    }
</style>
