export interface Task {
  id: string,
  name: string,
  deadline: Date,
  completed: boolean;
}
export interface Employee {
  id: string,
  firstName: string,
  lastName: string,
  position: string
  tasks: Task[]
}