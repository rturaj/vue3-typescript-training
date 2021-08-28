<template>
  <div
    class="shadow bg-grey m-4 p-4  transform hover:scale-105 duration-500 cursor-pointer w-96"
    @click="toggleCompleted"
  >
    <h3 class="font-semibold text-lg">{{ task.name }}</h3>
    <p data-test="deadline">Deadline: {{ formattedDeadline }}</p>
    <p data-test="status" v-if="task.completed" class="text-green font-bold text-sm mt-2">
      completed
    </p>
    <p data-test="status" v-else class="text-red font-bold text-sm mt-2">uncompleted</p>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from '@vue/runtime-core';
import { PropType } from 'vue';
import { useStore } from 'vuex';
import { Task } from '../../data/employee.interface';

export default defineComponent({
  props: {
    task: {
      type: Object as PropType<Task>,
      required: true,
    },
  },
  setup(props) {
    const formattedDeadline = computed(() => props.task.deadline.toLocaleString());
    const store = useStore();
    function toggleCompleted() {
      store.commit('employees/toggleTaskCompletion', props.task.id);
    }
    return { formattedDeadline, toggleCompleted };
  },
});
</script>

<style></style>
