<template>
<div>
  <div class="card border-light" :key="product.id" v-for="product in products">
    <div class="card-body">
      <h5 class="card-title">{{ product.attributes.name }}</h5>
      <h6 class="card-subtitle mb-2 text-muted">{{ product.attributes.ean }}</h6>
      <div class="card-text">
        <ul class="list-unstyled">
          <li v-for="(value, property) in product.attributes.properties">
            <strong>{{ property }}</strong> {{ value }}
          </li>
        </ul>
        <!-- <table class="table table-borderless">
          <tr v-for="(value, property) in product.attributes.properties">
            <th>{{ property }}</th>
            <td>{{ value }}</td>
          </tr>
        </table> -->
      </div>
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
    }),
  },
  data: () => {
    return {
      selectedProductId: null,
    }
  },
}
</script>
