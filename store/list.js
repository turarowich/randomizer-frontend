import axios from 'axios'

export default {
  state: {
    count: 1,
    list: [],
  },
  mutations: {
    setCount(state, payload) {
        state.count = payload
    },
    setList(state, payload) {
      state.list = payload
    },
  },
  getters: {
    getList(state) {
      return state.list
    },
  },
}
