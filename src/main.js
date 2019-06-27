import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
//在vuex中可以访问vue
Vue.use(Vuex)
Vue.config.productionTip = false
const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment(state) {
      state.count++
    }
  },
  actions: {
     increment({state}) {
       setTimeout(()=>{
          commit('increment')
       },3000)
     }
  },
  getters: {
    doubleCount(state){
      return state.count * 2
    }
  }

})
new Vue({
  store,
  render: h => h(App),
}).$mount('#app')