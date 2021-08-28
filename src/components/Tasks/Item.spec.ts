import { mount } from '@vue/test-utils'
import Item from './Item.vue'
import { generateSingleTask } from '@/data/generateEmployees';
import store from '@/store/index';


describe('Tasks/Item.vue', () => {
  const task = generateSingleTask();
  const wrapper = mount(Item, { global: { plugins: [store] }, props: { task } })

  test('renders', async () => {
    expect(wrapper.find('h3').text()).toBe(task.name);
    expect(wrapper.find('[data-test="deadline"]').text()).toBe(`Deadline: ${task.deadline.toLocaleString()}`);
    const statusEl = wrapper.find('[data-test="status"]');
    if (task.completed) {
      expect(statusEl.text()).toBe('completed');
      expect(statusEl.classes()).toContain('text-green');
    } else {
      expect(statusEl.text()).toBe('uncompleted');
      expect(statusEl.classes()).toContain('text-red');
    }
  })

})


