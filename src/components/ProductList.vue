<template>
  <div>
    <div v-if="isLoading == false">
      <div class="card border-light" :key="product.id" v-for="product in products">
        <div class="card-body">
          <div class="row no-gutters">
            <div class="col-md-4">
              <img
                v-if="product.attributes.properties.image"
                v-lazy="product.attributes.properties.image"
                src="https://image.flaticon.com/icons/svg/265/265693.svg"
                class="card-img"
                alt="..."
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title d-flex justify-content-between align-items-center">
                  <a
                    href="#"
                    @click="searchEAN(product.attributes.ean)"
                  >{{ product.attributes.name }}</a>
                  <!-- <span class="badge badge-secondary">{{ countShops(product.id) }}</span> -->
                  <small>
                    <a
                      v-if="displayProductInformations != product.id"
                      class="card-link text-info"
                      @click="displayProductInformations = product.id"
                    >about</a>
                  </small>
                </h5>
                <p class="card-text">
                  <small class="text-muted">Available in {{ countShops(product.id) }} stores</small>
                </p>
                <ul
                  class="list-group list-group-flush"
                  v-if="displayProductInformations == product.id"
                >
                  <li
                    v-for="(value, property) in getProductProperties(product)"
                    :key="property"
                    class="list-group-item"
                  >
                    <strong>{{ property }}</strong>
                    {{ value }}
                  </li>
                </ul>
              </div>
            </div>
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
import { mapState } from "vuex";

export default {
  name: "ProductList",
  computed: {
    ...mapState("products", {
      products: state => state.products,
      isLoading: state => state.isLoading,
      productShops: state => state.productShops
    })
  },
  data: () => {
    return {
      displayProductInformations: null,
      selectedProductId: null
    };
  },
  methods: {
    countShops(productId) {
      return this.productShops.filter(p => p.attributes.product_id == productId)
        .length;
    },
    searchEAN(ean) {
      this.$store.dispatch("products/search", ean);
    },
    getProductProperties(product) {
      delete product.attributes.properties["url"];
      delete product.attributes.properties["image"];

      return product.attributes.properties;
    }
  }
};
</script>
