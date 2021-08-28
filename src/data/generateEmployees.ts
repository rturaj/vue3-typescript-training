
import faker from 'faker';
import { Employee, Task } from './employee.interface';

export default function generateEmployees(employeesNumber = 20): Employee[] {
  const result: Employee[] = [];
  for (let i = 0; i < employeesNumber; i++) {
    result.push(generateSingleEmployee())
  }
  return result;
}

export function generateSingleEmployee(): Employee {
  const tasksNumber = faker.datatype.number({
    min: 5,
    max: 25
  })
  return {
    id: faker.datatype.uuid(),
    avatar: faker.image.avatar(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    position: faker.name.jobTitle(),
    tasks: generateTasks(tasksNumber)
  }
}

function generateTasks(tasksNumber: number): Task[] {
  const result: Task[] = [];
  for (let i = 0; i < tasksNumber; i++) {
    result.push(generateSingleTask());
  }
  return result;
}

export function generateSingleTask(): Task {
  return {
    id: faker.datatype.uuid(),
    name: faker.git.commitMessage(),
    deadline: faker.date.future(),
    completed: faker.datatype.boolean()
  }
}




