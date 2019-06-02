<template>
  <div id="app" class="container-fluid">
    <div class="row">
      <div class="col-6">
        <ProductList />
      </div>
      <div class="col-6">
        <HelloWorld msg="Welcome to Your Vue.js App"/>
      </div>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ProductList from './components/ProductList.vue'

export default {
  name: 'app',
  components: {
    ProductList,
    HelloWorld
  }
}
</script>
