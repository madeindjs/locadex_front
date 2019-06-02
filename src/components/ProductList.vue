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
          <td>{{ product.name }}</td>
          <td class="text-right">{{ product.price }} €</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: 'ProductList',
  data: () => {
    return {
      products: [
        { id: 1, name: 'Nike AirMax', price: 28.95 },
        { id: 2, name: 'Nike AirMax', price: 28.95 },
        { id: 3, name: 'Nike AirMax', price: 28.95 },
        { id: 4, name: 'Nike AirMax', price: 28.95 },
        { id: 5, name: 'Nike AirMax', price: 28.95 },
        { id: 6, name: 'Nike AirMax', price: 28.95 },
        { id: 7, name: 'Nike AirMax', price: 28.95 },
        { id: 8, name: 'Nike AirMax', price: 28.95 },
      ],
      selectedProductId: null,
    }
  },
}
</script>
