import { Employee } from "@/data/employee.interface";
import generateEmployees from "@/data/generateEmployees";
interface EmployeesState {
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
      const employee = state.employees.find(el => el.id === id);
      if (employee) {
        state.activeEmployee = employee;
      }
    }
  }
}