import { Employee } from "@/data/employee.interface";
import generateEmployees from "@/data/generateEmployees";
export interface EmployeesState {
  employees: Employee[],
  activeEmployee: Employee
}
export default {
  namespaced: true,
  state: {
    employees: generateEmployees(20),
    activeEmployee: null
  },
  mutations: {
    setActiveEmployee(state: EmployeesState, id: string): void {
      if (state.activeEmployee) {
        state.employees = [...state.employees.filter(el => el.id !== state.activeEmployee.id), state.activeEmployee]
      }
      const employee = state.employees.find(el => el.id === id);
      if (employee) {
        state.activeEmployee = employee;
      }
    },
    toggleTaskCompletion(state: EmployeesState, taskId: string) {
      const newActiveEmployee = { ...state.activeEmployee };
      const task = newActiveEmployee.tasks.find(el => el.id === taskId);
      if (task) { task.completed = !task.completed }
      state.activeEmployee = newActiveEmployee;
    }
  }
}