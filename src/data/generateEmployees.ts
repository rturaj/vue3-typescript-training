
import faker from 'faker';
import { Employee, Task } from './employee.interface';

export default function generateEmployees(employeesNumber = 20): Employee[] {
  const result: Employee[] = [];
  for (let i = 0; i < employeesNumber; i++) {
    result.push(generateSingle())
  }
  return result;
}

export function generateSingle(): Employee {
  const tasksNumber = faker.datatype.number({
    min: 5,
    max: 25
  })
  const item: Employee = {
    id: faker.datatype.uuid(),
    avatar: faker.image.avatar(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    position: faker.name.jobTitle(),
    tasks: generateTasks(tasksNumber)
  }
  return item;
}

function generateTasks(tasksNumber: number): Task[] {
  const result: Task[] = [];
  for (let i = 0; i < tasksNumber; i++) {
    const item: Task = {
      id: faker.datatype.uuid(),
      name: faker.git.commitMessage(),
      deadline: faker.date.future(),
      completed: faker.datatype.boolean()
    }
    result.push(item)
  }
  return result;
}


