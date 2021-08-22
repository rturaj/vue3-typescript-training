import generateEmployees from "@/data/generateEmployees";

export default {
  state: {
    employees: generateEmployees()
  }
}