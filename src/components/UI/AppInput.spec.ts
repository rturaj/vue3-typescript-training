import { mount } from '@vue/test-utils'
import AppInput from './AppInput.vue'
import faker from 'faker';
describe('UI/AppInput.vue', () => {
  const labelProp = faker.datatype.string();
  const modelValue = faker.datatype.string();
  const wrapper = mount(AppInput, { props: { label: labelProp, modelValue } });
  const label = wrapper.find('label');
  const input = wrapper.find('input');

  test('renders', async () => {
    expect(label.attributes().for).toBe(labelProp);
    expect(label.text()).toBe(labelProp);

    const input = wrapper.find('input');
    expect(input.attributes().id).toBe(labelProp);
    expect(input.element.value).toBe(modelValue);
  })

  test('emits update:modelValue', async () => {
    const randomValue = faker.datatype.string();
    await input.setValue(randomValue);

    expect(wrapper.emitted('update:modelValue')![0]).toEqual([randomValue]);
  })

})


