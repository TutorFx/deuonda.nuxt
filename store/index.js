import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    links: [
        ['Home', '/'],
        ['Quem Somos', '/quem-somos'],
        ['Portfolio', '/portfolio'],
        ['Download', '/download'],
        ['Contato', '/contato'],
    ]
  },
  getters: {
    links (state) {
        return state.links
    },    
},
})