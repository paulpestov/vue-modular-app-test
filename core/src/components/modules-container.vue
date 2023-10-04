<script setup>
 import {store} from "@/store";
 import {EventBus} from "@/event-bus";
 import {defineAsyncComponent, ref} from "vue";
 const { modules } = store.config
 const comps = ref([])
 modules.forEach(module => {
   if (module === 'plugin-1') {
     comps.value.push(defineAsyncComponent(() => import('../../../plugin-1/src/app.vue')))
   }
 })
</script>

<template>
  <div style="border: 1px solid; padding: 10px;">
    <component v-for="comp in comps" :is="comp" :event-bus="EventBus"></component>
  </div>
</template>

<style scoped>

</style>
