<template lang="html">

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <a class="navbar-brand" href="https://locadex.ch/">Locadex</a>

  <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="https://myshop.locadex.ch/">My Shop</a>
      </li>
      <li class="nav-item active">
        <a class="nav-link disabled" href="#">About us</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0" @submit.prevent="search">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" v-model="term">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
</template>

<script>
export default {
  name: 'ProductList',
  data: () => {
    return {
      term: null,
    }
  },
  methods: {
    search: function () {
      this.$store.dispatch('products/search', this.term)
    }
  },
  mounted() {
    const searchParams = new URLSearchParams(window.location.search);
    const q = searchParams.get('q');

    if (q) {
      this.term = q;
      this.search();
    }
  }
}
</script>

<style lang="css" scoped>
</style>
