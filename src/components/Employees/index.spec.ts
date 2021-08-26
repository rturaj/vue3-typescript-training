import { shallowMount } from '@vue/test-utils'
import Index from './index.vue'
import store from '@/store/index';
import { EmployeesState } from '@/store/employees';
describe('Employees/index.vue', () => {
  const wrapper = shallowMount(Index, { global: { provide: { store } } })

  test('renders Search component', async () => {
    expect(wrapper.findComponent({ name: 'Search' }).exists()).toBe(true);
  })

  test('renders Item components with correct length', async () => {
    expect(wrapper.findComponent({ name: 'Search' }).exists()).toBe(true);
    const { employees: { employees } } = store.state as { employees: EmployeesState };
    expect(wrapper.findAllComponents({ name: 'Item' })).toHaveLength(employees.length);
  })

})


