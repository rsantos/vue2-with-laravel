// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import {sync} from 'vuex-router-sync'

import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'

Vue.use(Vuex)
Vue.use(VueResource)
Vue.use(VueRouter)

import App from './App'
import routes from './router'
import VuexStore from './vuex/store'

Vue.http.options.root = process.env.SERVER

Vue.http.interceptors.push((request, next) => {
  request.headers.set('Authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImRmNDEwYzRjZWNlZGFjMGVkZjg5MjUwM2RiZGNiYjRiNGRmZjMwNjY1M2UzZGQ0NGQ0MTVlNDliODVkZTIwZTBkYTI2ZjRiMWI3YzE5NWI1In0.eyJhdWQiOiIyIiwianRpIjoiZGY0MTBjNGNlY2VkYWMwZWRmODkyNTAzZGJkY2JiNGI0ZGZmMzA2NjUzZTNkZDQ0ZDQxNWU0OWI4NWRlMjBlMGRhMjZmNGIxYjdjMTk1YjUiLCJpYXQiOjE0OTkzNTY0MTAsIm5iZiI6MTQ5OTM1NjQxMCwiZXhwIjoxNTMwODkyNDEwLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.Oxp8X5PZRMQw3dndcyUgj6hT1a4tcbvh2Xu9xz5b4RqDN9HMgPH69rIEWt637EMYrLKKj3flwH7kZbE7sGr8MdqAUOf8mABIiPHQv7LU7QkycsmOfevUfChs4GFfFu4DzMUY3o3DuZ0jEe-kb0pzA_188cyVHtxBTFbxeYA4Kfeag_7oVx0reOEAmNFjmotSbB0P1scQk8KJ2oB_puMEe2jS29Qex1kduQz_OoVgoBHFaGerNIn0vZpOtWaVY8g9AbhSQiOp2EZAFK5w8IYmH7R-yBkYr60vRSHNa7dEAo4TlluIqWonaxhB8JoBXvE2UKDeHHrjCjoIAtnXemBC3vL3YnSP0JcUXqVZjQwz-aINnJAAXbLw7QShoK-J1Enw65-CrEq6ZRRPzHk8_gXUFouxyp9md6Fm8Y0uIlCJvhuPfnmhVQvs_krITwPF8RHHGYZC3MWdVNDAcQzkCwixyjvaKmGcphzTYSjwo0oD7hTQo1vNGPgJO617lJfPCUGXEBTkTP0vCXQIxo3p8-7_X-juJ5L27uMPHYBm88w_3cNWucX_P53yy3gD0NyQVzPzMm76fV5vgH0BD09vDiX47jRJqx4F-qO_cyfS-LDXKtddzfG_C_1Eqg5ERnkBQmiM_3LcjiF093W1b7jW9Qglv3KdZlaITHPFiioKBUEovoU')
  next()
})

const store = new Vuex.Store(VuexStore)
const router = new VueRouter({
  routes
})

sync(store, router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
