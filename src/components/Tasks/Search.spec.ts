import { mount } from '@vue/test-utils'
import Search from './Search.vue'
import faker from 'faker';

describe('Tasks/Search.vue', () => {
  const wrapper = mount(Search);

  test('renders', async () => {
    expect(wrapper.findAllComponents({ name: 'AppInput' })).toHaveLength(1);
    expect(wrapper.find('[label="Name"]')).not.toBe(null);
  })

  test('emits search event', async () => {
    const name = faker.git.commitMessage()
    await wrapper.find('#Name').setValue(name);
    expect(wrapper.emitted('search')![0]).toEqual([{ name }])
  })

})


