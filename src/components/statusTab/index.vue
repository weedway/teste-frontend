<script setup lang="ts">
import { ref } from 'vue';
import { useTaskStore } from '../../store/tasks';

const taskStore = useTaskStore();
const dateFormatted = new Intl.DateTimeFormat('pt-br', {
  weekday: 'short',
  month: 'short',
  day: 'numeric',
}).format(new Date());

const showFilter = ref(false);
const filterByName = ref(true);
const filterByPriority = ref(false);
</script>

<template>
  <div
    class="flex justify-between items-center w-3/5 h-10 mx-auto mt-10 border-b-2 pb-2"
  >
    <div class="flex items-end gap-4">
      <h1 class="text-2xl">Hoje</h1>
      <span class="text-xs">{{ dateFormatted }}</span>
    </div>

    <div
      class="relative px-1 hover:bg-gray-200 transition duration-200 cursor-pointer"
      @click="showFilter = !showFilter"
    >
      <font-awesome-icon icon="fa-solid fa-filter" />

      <div
        v-if="showFilter"
        class="bg-white rounded-lg border w-48 absolute right-0 p-4 shadow"
      >
        <h2 class="mb-4 text-sm font-medium">Classificar</h2>

        <div
          class="flex items-center mb-3 gap-2 cursor-pointer"
          @click="
            filterByName = !filterByName;
            taskStore.filterTasksByName(filterByName);
          "
        >
          <font-awesome-icon
            icon="fa-solid fa-arrow-up-a-z"
            v-if="filterByName"
          />

          <font-awesome-icon
            icon="fa-solid fa-arrow-down-a-z"
            v-if="!filterByName"
          />

          <h4 class="text-sm">Nome</h4>
        </div>

        <div
          class="flex items-center mb-3 gap-2 cursor-pointer"
          @click="
            filterByPriority = !filterByPriority;
            taskStore.filterTasksByPriority(filterByPriority);
          "
        >
          <font-awesome-icon icon="fa-solid fa-triangle-exclamation" />

          <h4 class="text-sm">Prioridade</h4>
        </div>
      </div>
    </div>
  </div>
</template>
