<template>
  <div id="app" class="">
    <Navigation />
    <div class="container-fluid row" id="container">
      <ProductMap class="col-12 col-sm-6 col-md-8 px-0" id="map-container"/>
      <ProductList class="col-12 col-sm-6 col-md-4" id="product-container" />
    </div>
    <!-- Footer -->
    <footer class="page-footer font-small bg-light pt-4">

    <!-- Footer Links -->
    <div class="container-fluid text-center text-md-left">

      <!-- Grid row -->
      <div class="row">

        <!-- Grid column -->
        <div class="col-md-6 mt-md-0 mt-3">

          <!-- Content -->
          <h5 class="text-uppercase">Locadex.ch</h5>
          <p>Find products in local stores</p>

        </div>
        <!-- Grid column -->

        <hr class="clearfix w-100 d-md-none pb-3">

        <!-- Grid column -->
        <div class="col-md-3 mb-md-0 mb-3">

          <!-- Links -->
          <h5 class="text-uppercase">Links</h5>

          <ul class="list-unstyled">
            <li>
              <a href="https://myshop.locadex.ch/">My store</a>
            </li>
            <li>
              <a href="https://products.locadex.ch/">Product locator</a>
            </li>
            <li>
              <a href="#!">Help</a>
            </li>
            <li>
              <a href="#!">About us</a>
            </li>
          </ul>

        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="col-md-3 mb-md-0 mb-3">

          <!-- Links -->
          <h5 class="text-uppercase">Follow and contact Locadex</h5>

          <ul class="list-unstyled">
            <li>
              <a href="#!">About us</a>
            </li>
            <li>
              <a href="#!">Contact</a>
            </li>
            <li>
              <a href="#!">Facebook</a>
            </li>
            <li>
              <a href="#!">Youtube</a>
            </li>
          </ul>

        </div>
        <!-- Grid column -->

      </div>
      <!-- Grid row -->

    </div>
    <!-- Footer Links -->

    <!-- Copyright -->
    <div class="footer-copyright text-center py-3">© 2019 Copyright:
      <a href="https://locadex.ch/"> Locadex.ch</a>
    </div>
    <!-- Copyright -->

    </footer>
    <!-- Footer -->
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
  mounted() {
    const urlParams = new URLSearchParams(window.location.search);
    const q = urlParams.get('q');

    if (q) {
      this.lo
    }
  }

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
