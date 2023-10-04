<script setup>
import { EventBus } from '@/event-bus'
import ModulesContainer from "@/components/modules-container.vue";
import {ref} from "vue";

const count = ref(0);
function trigger() {
  count.value++;
  EventBus.publish('test', count.value)
}

</script>

<template>
  <main>
    <div style="border: 1px solid; padding: 10px;">
      <p>I'm core.</p>
      <p>Count: {{ count }}</p>
      <button @click="trigger" style="margin-bottom: 10px;">Increment</button>
      <ModulesContainer/>
    </div>
  </main>
</template>

<style scoped>
</style>
