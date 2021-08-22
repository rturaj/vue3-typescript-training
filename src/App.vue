<template>
  <div class="flex">
    <div class="w-full md:w-1/2">
      <employees :employees="employees" />
    </div>
    <div class="w-full md:w-1/2"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Employees from './components/Employees/index.vue';
import generateEmployees from './data/generateEmployees';

export default defineComponent({
  name: 'App',
  components: { Employees },
  setup() {
    const employees = generateEmployees(20000);
    return { employees };
  },
});
</script>

<style></style>
