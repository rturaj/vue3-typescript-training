<template>
  <div class="m-1">
    <label class="block text-gray-700 text-sm font-bold mb-1 px-2" :for="label">
      {{ label }}
    </label>
    <input
      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      :id="label"
      type="text"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script>
import { defineComponent } from '@vue/runtime-core';

export default defineComponent({
  emits: ['update:modelValue'],
  props: {
    label: String,
    modelValue: String,
  },
});
</script>

<style></style>
