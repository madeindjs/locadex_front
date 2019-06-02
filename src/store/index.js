import Vue from 'vue'
import Vuex from 'vuex'
import products from './modules/products'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const LOCAL_STORAGE_KEY = 'locadex_vuex_database'

const store = new Vuex.Store({
  modules: {
    products,
  },
  mutations: {
    // Initialize saved state from local localStorage
    // https://www.mikestreety.co.uk/blog/vue-js-using-localstorage-with-the-vuex-store
		initialiseStore(state) {
			if(localStorage.getItem(LOCAL_STORAGE_KEY)) {
				// Replace the state object with the stored item
				this.replaceState(
					Object.assign(state, JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)))
				);
			}
		}
	},
  strict: debug,
  // plugins: debug ? [createLogger()] : []
})

store.subscribe((mutation, state) => {
	// Store the state object as a JSON string
  // https://www.mikestreety.co.uk/blog/vue-js-using-localstorage-with-the-vuex-store
	localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state));
});

export default store
