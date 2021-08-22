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

export default defineComponent({
  name: 'App',
  components: { Employees },
});
</script>

<style></style>
