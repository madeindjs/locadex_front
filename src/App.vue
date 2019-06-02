<template>
  <div id="app" class="">
    <Navigation />
    <div class="container-fluid row" id="container">
      <div class="col-12 col-sm-6 col-md-4">
        <ProductList />
      </div>
      <div class="col-12 col-sm-6 col-md-8 px-0">
        <ProductMap/>
      </div>
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
  }
}
</script>

<style media="screen">
    #container {
      height: calc(100vh - 56px);
      margin: 0;
      padding: 0;
    }
</style>
