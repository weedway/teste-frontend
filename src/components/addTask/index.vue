<script setup lang="ts">
import { ref, Ref } from 'vue';
import { Task, priorityArr, Priority } from '../../interfaces';
import { useTaskStore } from '../../store/tasks';

const taskState = useTaskStore();
const auxTask: Ref<Task> = ref({
  isDone: false,
  priority: 'normal',
} as Task);

function addTaskToState(): void {
  taskState.addTask(auxTask.value);
}

function validateForm(): boolean {
  const { date, name } = auxTask.value;
  return date === undefined || name === undefined || name === '';
}

function selectPriority(type: Priority): void {
  auxTask.value.priority = type;
}
</script>

<template>
  <div class="flex w-3/5 rounded-2xl mx-auto mt-2 border-gray-500 border">
    <div class="w-4/6 p-2 py-3">
      <div class="flex flex-col">
        <label for="name" class="text-sm">Sobre o que é essa tarefa?</label>
        <input
          class="outline-none px-1 text-sm text-gray-500"
          type="text"
          name="name"
          id="name"
          v-model="auxTask.name"
        />
      </div>

      <div class="flex flex-col">
        <label for="date" class="text-sm"
          >Quando irá ocorrer esta tarefa?</label
        >
        <input
          type="date"
          name="date"
          id="date"
          class="outline-none px-1 text-sm text-gray-500"
          v-model="auxTask.date"
        />
      </div>

      <div class="flex flex-col">
        <label for="description" class="text-sm">Qual a prioridade?</label>

        <div class="flex gap-2">
          <div
            class="cursor-pointer capitalize px-1 rounded-md"
            v-for="priority in priorityArr"
            :key="priority"
            @click="selectPriority(priority)"
            :class="{
              'bg-red-500': priority === auxTask.priority,
              'text-white': priority === auxTask.priority,
            }"
          >
            {{ priority }}
          </div>
        </div>
      </div>

      <div class="flex flex-col">
        <label for="description" class="text-sm"
          >Diga mais sobre esta tarefa!</label
        >
        <textarea
          name="description"
          id="description"
          class="outline-none px-1 text-sm text-gray-500 resize-none"
          v-model="auxTask.description"
        ></textarea>
      </div>
    </div>

    <div class="flex flex-col p-2 justify-end gap-2">
      <button
        @click="$emit('closeCard')"
        class="bg-gray-200 text-sm px-3 py-2 rounded font-medium tracking-wide"
      >
        Cancelar
      </button>

      <button
        class="bg-red-500 text-white text-sm px-3 py-2 rounded font-medium tracking-wide disabled:opacity-50"
        @click="
          addTaskToState();
          $emit('closeCard');
        "
        :disabled="validateForm()"
      >
        Adicionar tarefa
      </button>
    </div>
  </div>
</template>
