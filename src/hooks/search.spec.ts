import { Employee, Task } from '@/data/employee.interface';
import generateEmployees, { generateSingleEmployee } from '@/data/generateEmployees';
import useSearch from './search';
import faker from "faker";

describe('search hook', () => {

  test('searches by 1 param', () => {
    const employee = generateSingleEmployee();
    const { items, setParams } = useSearch<Task>(employee.tasks);
    expect(items.value.length).toBe(employee.tasks.length);
    const name = faker.lorem.word().substring(0, 1);
    setParams({ name });
    const expectedResult = employee.tasks.filter(el => el.name.includes(name))
    expect(items.value).toEqual(expectedResult);
  })

  test('searches by multiple params', () => {
    const employees = generateEmployees();
    const { items, setParams } = useSearch<Employee>(employees);
    expect(items.value.length).toBe(employees.length);
    const firstName = faker.lorem.word().substring(0, 1);
    const lastName = faker.lorem.word().substring(0, 1);
    const position = faker.lorem.word().substring(0, 1);
    setParams({ firstName, lastName, position });
    const expectedResult = employees.filter(el => el.firstName.includes(firstName) && el.lastName.includes(lastName) && el.position.includes(position))
    expect(items.value).toEqual(expectedResult);
  })

})


