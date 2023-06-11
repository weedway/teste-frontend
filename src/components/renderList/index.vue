<script setup lang="ts">
import { useTaskStore } from '../../store/tasks';
import { Task, priorityArr } from '../../interfaces';

const taskState = useTaskStore();

function returnFormattedDate(date: string): string {
  const localDate = new Date(date);
  const formatted = new Intl.DateTimeFormat('pt-br', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  }).format(localDate.setDate(localDate.getDate() + 1));

  return formatted;
}

function markAsDone(taskId: number): void {
  taskState.markAsDone(taskId);
}

defineProps<{ list: Task[]; isDelayed: boolean }>();
</script>

<template>
  <div class="flex flex-col gap-5">
    <div class="flex" v-for="task in list" :key="task.id">
      <input
        class="mr-3 w-4 h-4 self-center"
        type="radio"
        @change="markAsDone(task.id)"
      />

      <div class="flex flex-col gap-1">
        <h3 class="text-xl">{{ task.name }}</h3>

        <p class="text-sm text-gray-400">{{ task.description }}</p>

        <span class="text-sm text-red-400 font-medium" v-if="isDelayed">{{
          returnFormattedDate(task.date)
        }}</span>
      </div>

      <span
        v-if="task.priority !== 'normal'"
        class="text-xs text-white self-center ml-10 p-1 uppercase rounded-lg"
        :class="{
          'bg-red-600': task.priority === priorityArr[0],
          'bg-blue-300': task.priority === priorityArr[2],
        }"
        >{{ task.priority }}</span
      >

      <div class="h-fit cursor-pointer self-center ml-auto">
        <font-awesome-icon icon="fa-solid fa-trash" />
      </div>
    </div>
  </div>
</template>
