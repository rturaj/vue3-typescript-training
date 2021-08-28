import { mount } from '@vue/test-utils'
import Search from './Search.vue'
import faker from 'faker';

describe('Employees/Search.vue', () => {
  const wrapper = mount(Search);

  test('renders', async () => {
    expect(wrapper.findAllComponents({ name: 'AppInput' })).toHaveLength(3);
    expect(wrapper.find('[label="Firstname"]')).not.toBe(null);
    expect(wrapper.find('[label="Lastname"]')).not.toBe(null);
    expect(wrapper.find('[label="Position"]')).not.toBe(null);
  })

  test('emits search event', async () => {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const position = faker.name.jobTitle();

    await wrapper.find('#Firstname').setValue(firstName);
    await wrapper.find('#Lastname').setValue(lastName);
    await wrapper.find('#Position').setValue(position);

    expect(wrapper.emitted('search')![0]).toEqual([
      {
        firstName,
        lastName: "",
        position: ""
      }
    ])
    expect(wrapper.emitted('search')![1]).toEqual([
      {
        firstName,
        lastName,
        position: ""
      }
    ])
    expect(wrapper.emitted('search')![2]).toEqual([
      {
        firstName,
        lastName,
        position
      }
    ])


  })

})


