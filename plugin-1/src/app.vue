<script setup>
import { ref } from "vue";

const props = defineProps(['eventBus'])
const count = ref(0)
props.eventBus.subscribe('test', (value) => {
  count.value = value
})

</script>

<template>
  <div>
    <div>I'm a plugin.</div>
    <p>Count: {{ count }}</p>
  </div>

</template>

<style scoped>
</style>
