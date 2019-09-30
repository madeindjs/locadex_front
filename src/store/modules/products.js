
const axios = require('axios')
const api_url = require('../../config').api_url

// initial state
const state = {
  term: null,
  products: [],
  productShops: [],
  shops: [],
  isLoading: false,
}

// getters
const getters = {
  products: state => {
    return state.products
  },
  term: state => {
    return state.term
  },
  productShops: (state) => {
    return state.productShops
  }
}

// actions
const actions = {
  search({commit}, term) {
    commit('SET_TERM', term)

    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set("q", term);
    window.history.pushState({}, this.term, searchParams.toString());

    if (!term) {
      commit('SET_PRODUCTS', [])
      commit('SET_PRODUCT_SHOPS', [])
      commit('SET_SHOPS', [])
      return;
    }

    commit('SET_IS_LOADING', true)

    axios.get(`${api_url}/product_shops`, {params: {q: term}})
        .then(response => {
          // this.acts = response.data.data
          const responseData = response.data
          let products = responseData.included.filter(item => item.type == "product")
          let shops = responseData.included.filter(item => item.type == "shop")
          commit('SET_PRODUCTS', products)
          commit('SET_PRODUCT_SHOPS', responseData.data)
          commit('SET_SHOPS', shops)
        })
        .catch(error => alert(error))
        .finally(() => commit('SET_IS_LOADING', false))
  },
}

// mutations
const mutations = {
  SET_IS_LOADING (state, value) {
    state.isLoading = value
  },
  // TODO set mutliples mutators
  SET_TERM (state, term) {
    state.term = term
  },
  SET_PRODUCTS (state, products) {
    state.products = products
  },
  SET_PRODUCT_SHOPS (state, productShops) {
    state.productShops = productShops
  },
  SET_SHOPS (state, shops) {
    state.shops = shops
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
