<template>
  <div
    class="shadow bg-grey m-4 p-4 flex items-center transform hover:scale-105 duration-500 cursor-pointer w-96"
  >
    {{ task }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core';
import { PropType } from 'vue';
import { Task } from '../../data/employee.interface';

export default defineComponent({
  props: {
    task: {
      type: Object as PropType<Task>,
    },
  },
});
</script>

<style></style>
