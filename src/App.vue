<script setup lang="ts">
import { ref } from 'vue';
import Header from './components/header/index.vue';
import StatusTab from './components/statusTab/index.vue';
import ListTask from './components/listTask/index.vue';
import AddTask from './components/addTask/index.vue';

const showAddTasks = ref(false);

function handleShowAddTaskCard(value: boolean): void {
  showAddTasks.value = value;
}
</script>

<template>
  <Header></Header>

  <StatusTab></StatusTab>

  <div
    v-if="showAddTasks === false"
    class="mx-auto px-4 mt-3 mb-8 flex items-center gap-2 border w-fit rounded-md hover:bg-slate-400"
  >
    <font-awesome-icon icon="fa-solid fa-plus" />
    <button @click="handleShowAddTaskCard(true)" class="text-base">
      Adicionar tarefa
    </button>
  </div>

  <AddTask
    v-if="showAddTasks === true"
    @close-card="handleShowAddTaskCard(false)"
  ></AddTask>

  <ListTask v-if="showAddTasks === false"></ListTask>
</template>

<style scoped></style>
