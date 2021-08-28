import { mount } from '@vue/test-utils'
import Item from './Item.vue'
import store from '@/store/index';
import { generateSingle } from '@/data/generateEmployees';

describe('Employees/Item.vue', () => {
  const employee = generateSingle();
  const wrapper = mount(Item, { global: { plugins: [store] }, props: { employee } })

  test('renders', async () => {
    expect(wrapper.find('img').attributes('src')).toBe(employee.avatar);
    expect(wrapper.find('[data-test="fullName"]').text()).toBe(`${employee.firstName} ${employee.lastName}`);
    expect(wrapper.find('[data-test="position"]').text()).toBe(employee.position);
  })
  // TODO:
  // test('commits setActiveEmployee', async () => {
  //   expect(wrapper.classes()).not.toContain('border-green')
  //   await wrapper.trigger('click');
  //   expect(wrapper.classes()).toContain('border-green')
  // })

})


