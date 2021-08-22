<template>
  <div class="px-8 md:border-r border-grey ">
    <h2 class="my-4 text-3xl font-semibold text-center ">Employees</h2>
    <div class="flex flex-wrap">
      <Item v-for="employee in employees" :key="employee.id" :employee="employee" />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from '@vue/runtime-core';
import { useStore } from 'vuex';
import Item from './Item.vue';

export default defineComponent({
  components: { Item },
  setup() {
    const store = useStore();
    const employees = computed(() => store.state.employees.employees);
    return { employees };
  },
});
</script>

<style></style>
