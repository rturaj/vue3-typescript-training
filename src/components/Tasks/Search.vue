<template>
  <div class="flex shadow p-4 mb-4">
    <app-input label="Name" v-model="name" />
  </div>
</template>

<script>
import { defineComponent, ref, watch } from 'vue';
import AppInput from '@/components/UI/AppInput';

export default defineComponent({
  components: {
    AppInput,
  },
  setup(_, context) {
    const name = ref('');

    watch(name, function(name) {
      context.emit('search', { name });
    });
    return { name };
  },
});
</script>

<style></style>
