import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: []   
  },
  mutations: {
    addProduct: function(state, payload){
      state.products.push(payload);
    },
    deleteProduct: function(state, payload){
      state.products = state.products.filter((product) => !payload.includes(product.sku));
    },
  },
})
