<template>
<div>
  <div v-if="isLoading == false">
    <div class="card border-light" :key="product.id" v-for="product in products">
      <img v-if="product.attributes.properties.image" :src="product.attributes.properties.image" class="card-img-top" alt="...">  
      <div class="card-body">
        <h5 class="card-title"><a href="#"  @click="searchEAN(product.attributes.ean)">{{ product.attributes.name }}</a></h5>
        <div class="card-text">
          <ul class="list-unstyled">
            <li v-for="(value, property) in getProductProperties(product)" :key="property">
              <strong>{{ property }}</strong> {{ value }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <div class="spinner-grow" role="status">
      <span class="sr-only">Loading...</span>
    </div>
  </div>
</div>
</template>
<script>
import {
  mapState
} from 'vuex'

export default {
  name: 'ProductList',
  computed: {
    ...mapState('products', {
      products: state => state.products,
      isLoading: state => state.isLoading,
    }),
  },
  data: () => {
    return {
      selectedProductId: null,
    }
  },
  methods: {
    searchEAN(ean) {
      this.$store.dispatch('products/search', ean)
    },
    getProductProperties(product) {
      delete product.attributes.properties['url'];
      delete product.attributes.properties['image'];

      return product.attributes.properties;
    }
  }
}
</script>
