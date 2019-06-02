
// initial state
const state = {
  term: null,
  products: [],
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
}

// actions
const actions = {
  search({commit}, term) {
    commit('SET_TERM', term)
  },
  setProducts({commit}, products) {
    commit('SET_PRODUCTS', products)
  },
  setProductShops({commit}, responseData) {
    let products = responseData.included.filter(item => item.type == "product")
    let shops = responseData.included.filter(item => item.type == "shop")
    commit('SET_PRODUCTS', products)
    commit('SET_SHOPS', shops)
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
