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

  <div v-if="showAddTasks === false">
    <button @click="handleShowAddTaskCard(true)">Adicionar tarefa</button>
  </div>

  <AddTask
    v-if="showAddTasks === true"
    @close-card="handleShowAddTaskCard(false)"
  ></AddTask>

  <ListTask></ListTask>
</template>

<style scoped></style>
