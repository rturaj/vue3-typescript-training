<template>
  <div class="px-8 md:border-r border-grey ">
    <h2 class="my-4 text-3xl font-semibold text-center ">Employees</h2>
    <Search @search="setParams" />
    <div class="flex flex-wrap">
      <Item v-for="employee in items" :key="employee.id" :employee="employee" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/runtime-core';
import Item from './Item.vue';
import Search from './Search.vue';
import useSearch from '@/hooks/search';
import { Employee } from '@/data/employee.interface';
import generateEmployees from '@/data/generateEmployees';

export default defineComponent({
  props: {
    employees: {
      type: Array as PropType<Employee[]>,
    },
  },
  components: { Item, Search },
  setup() {
    const employees = generateEmployees(1000);
    const { items, setParams } = useSearch<Employee>(employees);
    return { items, setParams };
  },
});
</script>

<style></style>
