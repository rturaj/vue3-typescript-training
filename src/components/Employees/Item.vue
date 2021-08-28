<template>
  <div
    class="shadow bg-grey m-4 p-4 flex items-center transform hover:scale-105 transition-transform duration-500 cursor-pointer w-96 rounded-xl"
    :class="{ 'border-2 border-green': isActive }"
    @click="changeActiveEmployee"
  >
    <div class="w-24 w-24 rounded-full mr-3">
      <img :src="employee.avatar" class="rounded-full" />
    </div>
    <div>
      <h3 class="font-semibold text-xl" data-test="fullName">
        {{ employee.firstName }} {{ employee.lastName }}
      </h3>
      <p data-test="position">{{ employee.position }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from '@vue/runtime-core';
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
    const isActive = computed(() => store.state.employees.activeEmployee?.id === props.employee.id);
    return { changeActiveEmployee, isActive };
  },
});
</script>

<style></style>
