<template>
  <div
    class="shadow bg-grey m-4 p-4 flex items-center transform hover:scale-105 duration-500 cursor-pointer w-96"
    @click="changeActiveEmployee"
  >
    <div class="w-24 w-24 rounded-full mr-3">
      <img :src="employee.avatar" class="rounded-full" />
    </div>
    <div>
      <h3 class="font-semibold text-xl">{{ employee.firstName }} {{ employee.lastName }}</h3>
      <p>{{ employee.position }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core';
import { PropType } from 'vue';
import { useStore } from 'vuex';
import { Employee } from '../../data/employee.interface';

export default defineComponent({
  props: {
    employee: {
      type: Object as PropType<Employee>,
      required: true,
    },
  },
  setup(props) {
    const store = useStore();
    function changeActiveEmployee() {
      store.commit('employees/setActiveEmployee', props.employee.id);
    }
    return { changeActiveEmployee };
  },
});
</script>

<style></style>
