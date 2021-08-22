<template>
  <div class="px-8 md:border-r border-grey ">
    <h2 class="my-4 text-3xl font-semibold text-center ">{{ title }}</h2>
    <Search @search="setParams" />
    <div class="flex flex-wrap">
      <Item v-for="task in items" :key="task.id" :task="task" />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from '@vue/runtime-core';
import Item from './Item.vue';
import Search from './Search.vue';
import useSearch from '@/hooks/search';
import { Employee, Task } from '@/data/employee.interface';

export default defineComponent({
  components: { Item, Search },
  props: {
    activeEmployee: {
      type: Object as PropType<Employee>,
      required: true,
    },
  },
  setup(props) {
    if (props.activeEmployee) {
      const title = computed(() => {
        const { firstName, lastName } = props.activeEmployee;
        return `${firstName} ${lastName}'s tasks: `;
      });
      const { items, setParams } = useSearch<Task>(props.activeEmployee.tasks);
      return { items, setParams, title };
    }
  },
});
</script>

<style></style>
