<script setup lang="ts">
import { useTaskStore } from '../../store/tasks';

const taskState = useTaskStore();
</script>

<template>
  <div>
    <div v-for="task in taskState.tasks" :key="task.id">
      <h3>{{ task.name }}</h3>

      <p>{{ task.description }}</p>

      <span>{{ task.date }}</span>
    </div>

    <div v-if="taskState.tasks.length === 0">
      Não há tarefas cadastradas, deseja adicionar alguma? Clique no botão
      acima!
    </div>
  </div>
</template>
