
const axios = require('axios')
const api_url = require('../../config').api_url

// initial state
const state = {
  term: null,
  products: [],
  productShops: [],
  shops: [],
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
        .catch(error => {
          alert(error)
        })
  },
}

// mutations
const mutations = {
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
