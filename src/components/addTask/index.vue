<script setup lang="ts">
import { useTaskStore } from '../../store/tasks';

const taskState = useTaskStore();
</script>

<template>
  <div class="add-task-card">
    add task card

    <div>
      <button>Cancelar</button>

      <button>Adicionar tarefa</button>
    </div>
  </div>
</template>

<style scoped>
.add-task-card {
  display: flex;
  width: 60%;
  height: 130px;
  border-radius: 15px;
  border: 1px solid gray;
  margin: 0 auto;
}
</style>
