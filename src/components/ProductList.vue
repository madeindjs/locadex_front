<template>
  <div>
    <h2>Liste des produits</h2>
    <ul class="list-group">
      <li
        class="list-group-item"
        :class="selectedProductId == product.id ? 'active' : ''"
        :key="product.id"
        v-for="product in products"
        @click="selectedProductId = product.id"
      >
        {{ product.name }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'ProductList',
  data: () => {
    return {
      products: [
        { id: 1, name: 'Nike AirMax' },
        { id: 2, name: 'Nike AirMax' },
        { id: 3, name: 'Nike AirMax' },
        { id: 4, name: 'Nike AirMax' },
        { id: 5, name: 'Nike AirMax' },
        { id: 6, name: 'Nike AirMax' },
        { id: 7, name: 'Nike AirMax' },
        { id: 8, name: 'Nike AirMax' },
      ],
      selectedProductId: null,
    }
  },
}
</script>
