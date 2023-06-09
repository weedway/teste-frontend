<script setup lang="ts">
const dateFormatted = new Intl.DateTimeFormat('pt-br', {
  weekday: 'short',
  month: 'short',
  day: 'numeric',
}).format(new Date());
</script>

<template>
  <div
    class="flex justify-between items-center w-3/5 h-10 mx-auto mt-10 bg-red-600"
  >
    <div class="flex items-center gap-2.5">
      <h2>Hoje</h2>
      <span>{{ dateFormatted }}</span>
    </div>

    <div>filter</div>
  </div>
</template>
