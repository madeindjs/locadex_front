<template>
  <div>
    <table class="table table-borderless table-hover">
      <thead>
        <tr>
          <th>Nom</th>
          <th class="text-right">Prix</th>
        </tr>
      </thead>
      <tbody>
        <tr
          :key="product.id"
          v-for="product in products"
          :class="selectedProductId == product.id ? 'active' : ''"
          @click="selectedProductId = product.id"
        >
          <td>{{ product.attributes.name }}</td>
          <td class="text-right">{{ product.price }} €</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import { mapState } from 'vuex'

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
