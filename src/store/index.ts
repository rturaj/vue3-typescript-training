import { createStore } from 'vuex'
import employees from './employees';

export default createStore({
  modules: {
    employees
  }
})
