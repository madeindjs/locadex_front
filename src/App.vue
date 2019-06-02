<template>
  <div id="app" class="container-fluid">
    <div class="row">
      <div class="col-6">
        <ProductList />
      </div>
      <div class="col-6">
        <ProductMap/>
        <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
      </div>
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import ProductList from './components/ProductList.vue'
import ProductMap from './components/ProductMap.vue'

export default {
  name: 'app',
  components: {
    ProductMap,
    ProductList,
    // HelloWorld,
  }
}
</script>
