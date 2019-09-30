import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import { Icon }  from 'leaflet'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'leaflet/dist/leaflet.css'
import LazyLoad from "vanilla-lazyload";
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'https://image.flaticon.com/icons/svg/265/265693.svg',
  loading: 'https://image.flaticon.com/icons/svg/265/265693.svg',
  attempt: 1
})

import store from './store'

// this part resolve an issue where the markers would not appear
delete Icon.Default.prototype._getIconUrl;

Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

Vue.config.productionTip = false
Vue.use(Vuex)

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
