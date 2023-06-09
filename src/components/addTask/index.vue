<script setup lang="ts">
import { ref, Ref } from 'vue';
import { Task } from '../../interfaces';
import { useTaskStore } from '../../store/tasks';

const taskState = useTaskStore();
const auxTask: Ref<Task> = ref({} as Task);

function addTaskToState(): void {
  taskState.addTask(auxTask.value);
}
</script>

<template>
  <div class="flex w-3/5 h-32 rounded-2xl mx-auto mt-2 border-gray-500 border">
    <div>
      <div class="flex flex-col">
        <label for="name">Sobre o que é essa tarefa?</label>
        <input type="text" name="name" id="name" v-model="auxTask.name" />
      </div>

      <div class="flex flex-col">
        <label for="date">Quando irá ocorrer esta tarefa?</label>
        <input type="date" name="date" id="date" v-model="auxTask.date" />
      </div>

      <div class="flex flex-col">
        <label for="">Diga mais sobre esta tarefa!</label>
        <textarea
          name="description"
          id="description"
          cols="30"
          rows="10"
          v-model="auxTask.description"
        ></textarea>
      </div>
    </div>

    <div class="flex flex-col">
      <button @click="$emit('closeCard')">Cancelar</button>

      <button @click="addTaskToState()">Adicionar tarefa</button>
    </div>
  </div>
</template>
