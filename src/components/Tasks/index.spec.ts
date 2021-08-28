import { generateSingleEmployee } from '@/data/generateEmployees'
import { shallowMount } from '@vue/test-utils'
import Index from './index.vue'
describe('Tasks/index.vue', () => {
  const activeEmployee = generateSingleEmployee();
  const wrapper = shallowMount(Index, { props: { activeEmployee } })

  test('renders a correct title', async () => {
    expect(wrapper.find('h2').text()).toBe(`${activeEmployee.firstName} ${activeEmployee.lastName}'s tasks:`);
  })

  test('renders Search component', async () => {
    expect(wrapper.findComponent({ name: 'Search' }).exists()).toBe(true);
  })

  test('renders Item components with correct length', async () => {
    expect(wrapper.findAllComponents({ name: 'Item' })).toHaveLength(activeEmployee.tasks.length);
  })

})


