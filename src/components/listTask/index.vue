<script setup lang="ts">
import { useTaskStore } from '../../store/tasks';
import RenderList from '../renderList/index.vue';

const taskState = useTaskStore();
const day = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  day: 'numeric',
}).format(new Date());
const weekday = new Intl.DateTimeFormat('pt-br', {
  weekday: 'long',
}).format(new Date());
</script>

<template>
  <div class="w-3/5 mx-auto flex flex-col">
    <div
      v-if="
        taskState.getDelayedTasks.length !== 0 ||
        taskState.getTasksForToday.length !== 0
      "
    >
      <div class="mb-6" v-if="taskState.getDelayedTasks.length !== 0">
        <h1
          class="mb-2 border-b-2 lin font-medium leading-7 text-sm task-border-bottom"
        >
          Atrasadas
        </h1>

        <RenderList
          v-bind:list="taskState.getDelayedTasks"
          v-bind:isDelayed="true"
        ></RenderList>
      </div>

      <div v-if="taskState.getTasksForToday.length !== 0">
        <div
          class="flex mb-2 border-b-2 gap-1 font-medium leading-7 text-sm task-border-bottom"
        >
          <h1>{{ day }}</h1>
          •
          <h1>Hoje</h1>
          •
          <h1 class="capitalize">{{ weekday }}</h1>
        </div>

        <RenderList
          v-bind:list="taskState.getTasksForToday"
          v-bind:isDelayed="false"
        ></RenderList>
      </div>
    </div>

    <div
      v-if="
        taskState.getDelayedTasks.length === 0 &&
        taskState.getTasksForToday.length === 0
      "
      class="mt-10 text-center w-1/2 mx-auto leading-8"
    >
      <img
        class="h-48 w-48 mx-auto"
        src="../../assets/noTaskImage.png"
        alt="No task image"
      />

      <p class="mt-8">
        Não há tarefas cadastradas, deseja adicionar alguma? Clique no botão
        acima!
      </p>
    </div>
  </div>
</template>

<style scoped>
.task-border-bottom {
  border-bottom: 1px solid rgb(228, 228, 228);
}
</style>
