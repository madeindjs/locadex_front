
// initial state
const state = {
  term: null,
  products: null,
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
  setProductShops({commit}, products) {
    commit('SET_PRODUCTS', products)
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
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
