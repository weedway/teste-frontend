<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useTaskStore } from './store/tasks';
import Header from './components/header/index.vue';
import StatusTab from './components/statusTab/index.vue';
import ListTask from './components/listTask/index.vue';
import AddTask from './components/addTask/index.vue';
import Loader from './components/loader/index.vue';

const showAddTasks = ref(false);
const taskStore = useTaskStore();

onMounted(() => {
  taskStore.getTasksFromAPI();
});

function handleShowAddTaskCard(value: boolean): void {
  showAddTasks.value = value;
}
</script>

<template>
  <Loader v-if="taskStore.loadingTasks"></Loader>

  <Header></Header>

  <StatusTab></StatusTab>

  <div
    v-if="showAddTasks === false"
    @click="handleShowAddTaskCard(true)"
    class="mx-auto px-4 mt-3 mb-8 flex items-center gap-2 border w-fit cursor-pointer rounded-md hover:text-white hover:bg-slate-400 transition duration-300"
  >
    <font-awesome-icon icon="fa-solid fa-plus" />
    <button class="text-base">Adicionar tarefa</button>
  </div>

  <AddTask
    v-if="showAddTasks === true"
    @close-card="handleShowAddTaskCard(false)"
  ></AddTask>

  <ListTask></ListTask>
</template>

<style scoped></style>
