<script setup lang="ts">
import { Task } from '../../interfaces/index';

defineProps<{ arrayOfTasks: Task[] }>();
</script>

<template>
  <div>
    <button>Adicionar tarefa</button>
  </div>

  <div>
    <div v-for="task in arrayOfTasks">
      <h3>{{ task.name }}</h3>

      <p>{{ task.description }}</p>

      <span>{{ task.date }}</span>
    </div>

    <div v-if="arrayOfTasks.length === 0">
      Não há tarefas cadastradas, deseja adicionar alguma? Clique no botão
      acima!
    </div>
  </div>
</template>

<style scoped>
.status-tab {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60%;
  height: 40px;
  background-color: red;
  margin: 40px auto 0 auto;
}
</style>
