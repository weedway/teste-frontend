<script setup lang="ts">
import { useTaskStore } from '../../store/tasks';

const taskState = useTaskStore();
</script>

<template>
  <div class="w-3/5 mx-auto flex flex-col">
    <div v-for="task in taskState.tasks" :key="task.id">
      <h3>{{ task.name }}</h3>

      <p>{{ task.description }}</p>

      <span>{{ task.date }}</span>
    </div>

    <div
      v-if="taskState.tasks.length === 0"
      class="mt-10 text-center w-1/2 mx-auto leading-8"
    >
      <img src="../../assets/noTaskImage.png" alt="No task image" />

      <p class="mt-8">
        Não há tarefas cadastradas, deseja adicionar alguma? Clique no botão
        acima!
      </p>
    </div>
  </div>
</template>
