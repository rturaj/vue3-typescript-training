<template>
  <div class="flex">
    <div class="w-full md:w-1/2">
      <employees />
    </div>
    <div class="w-full md:w-1/2">
      <tasks :activeEmployee="activeEmployee" v-if="activeEmployee" :key="activeEmployee.id" />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';
import Employees from './components/Employees/index.vue';
import Tasks from './components/Tasks/index.vue';

export default defineComponent({
  name: 'App',
  components: { Employees, Tasks },
  setup() {
    const store = useStore();
    const activeEmployee = computed(() => store.state.employees.activeEmployee);
    return { activeEmployee };
  },
});
</script>

<style></style>
