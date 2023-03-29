import { Store } from 'vuex'
import list from '@/store/list'

const store = () =>
  new Store({
    modules: {
        list
    },
  })

export default store