<script setup>
 import {EventBus} from "@/event-bus";
</script>

<template>
  <div style="border: 1px solid; padding: 10px;">
    <component is="PluginOne" :event-bus="EventBus"></component>
  </div>
</template>

<style scoped>

</style>
