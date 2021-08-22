<template>
  <div>
    {{ employees }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import generateEmployees from './data/generateEmployees';

export default defineComponent({
  name: 'App',
  components: {},
  setup() {
    const employees = generateEmployees();
    console.log(employees);
    return { employees };
  },
});
</script>

<style></style>
