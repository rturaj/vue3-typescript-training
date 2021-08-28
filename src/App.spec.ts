import { shallowMount } from '@vue/test-utils'
import { createStore } from 'vuex'
import App from './App.vue'
import { generateSingleEmployee } from './data/generateEmployees'
describe('App.vue', () => {

  test('renders without activeEmployee', () => {
    const store = createStore({
      modules: {
        employees: {
          namespaced: true,
          state: {
            activeEmployee: null
          }
        }
      }
    });
    const wrapper = shallowMount(App, { global: { provide: { store } } })
    expect(wrapper.findComponent({ name: 'Employees' }).exists()).toBe(true);
    expect(wrapper.findComponent({ name: 'Tasks' }).exists()).toBe(false);
  })

  test('renders with active employee', () => {
    const activeEmployee = generateSingleEmployee();
    const store = createStore({
      modules: {
        employees: {
          namespaced: true,
          state: {
            activeEmployee
          }
        }
      }
    });
    const wrapper = shallowMount(App, { global: { provide: { store } } })
    expect(wrapper.findComponent({ name: 'Employees' }).exists()).toBe(true);
    expect(wrapper.findComponent({ name: 'Tasks' }).exists()).toBe(true);
  })

})


