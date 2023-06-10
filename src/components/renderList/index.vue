<script setup lang="ts">
import { useTaskStore } from '../../store/tasks';
import { Task } from '../../interfaces';

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
      <input class="mr-3" type="checkbox" @change="markAsDone(task.id)" />

      <div class="flex flex-col gap-1">
        <h3 class="text-xl">{{ task.name }}</h3>

        <p class="text-sm text-gray-400">{{ task.description }}</p>

        <span class="text-sm text-red-400 font-medium" v-if="isDelayed">{{
          returnFormattedDate(task.date)
        }}</span>
      </div>

      <div class="h-fit cursor-pointer self-center ml-auto">
        <font-awesome-icon icon="fa-solid fa-trash" />
      </div>
    </div>
  </div>
</template>
