<template>
  <div class="flex shadow p-4 mb-4">
    <app-input label="Firstname" v-model="firstName" />
    <app-input label="Lastname" v-model="lastName" />
    <app-input label="Position" v-model="position" />
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
    const firstName = ref('');
    const lastName = ref('');
    const position = ref('');

    watch([firstName, lastName, position], function([firstName, lastName, position]) {
      context.emit('search', { firstName, lastName, position });
    });
    return { firstName, lastName, position };
  },
});
</script>

<style></style>
