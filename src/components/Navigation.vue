<template lang="html">
  <nav class="navbar navbar-light bg-light">
    <a class="navbar-brand">Locadex</a>
    <form class="form-inline" @submit.prevent="search">
      <input
        class="form-control mr-sm-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        v-model="term"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
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
  }
}
</script>

<style lang="css" scoped>
</style>
