<script setup lang="ts">
const dateFormatted = new Intl.DateTimeFormat('pt-br', {
  weekday: 'short',
  month: 'short',
  day: 'numeric',
}).format(new Date());
</script>

<template>
  <div
    class="flex justify-between items-center w-3/5 h-10 mx-auto mt-10 border-b-2 pb-2"
  >
    <div class="flex items-end gap-5">
      <h1 class="text-2xl">Hoje</h1>
      <span class="text-xs">{{ dateFormatted }}</span>
    </div>

    <div>filter</div>
  </div>
</template>
