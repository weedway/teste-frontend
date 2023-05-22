<template>
  <div class="flex gap-3 border-b pb-3 mb-1">
    <input type="checkbox" class="accent-green-500 self-start mt-[6px]" :checked="isDone"/>
    <div>
      <h1 class="text-base mb-1">{{ title }}</h1>
      <p class="text-xs">{{ description }}</p>
    </div>
  </div>
</template>
<script setup lang="ts">
interface Task {
  title: string
  description: string
  isDone: boolean
}

const props = defineProps<Task>()

</script>