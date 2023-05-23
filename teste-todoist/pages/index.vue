<template>
  <div>
    <h1 class="mb-5 text-xl font-medium">Tarefas</h1>
    <div>
      <ul v-for="task in tasks" >
        <li>
          <TaskItem :id="task.id"/>
        </li>
      </ul>
      <button @click="toggleTaskForm(true)" v-if="!showTaskForm">+ Adicionar tarefa</button>
      <TaskForm :type="'add'" v-if="showTaskForm" @closeForm="toggleTaskForm(false)" @add-task="(newTask)=>tasks.push(newTask)"/>
    </div>
  </div>
</template>
<script setup lang="ts">
const showTaskForm = ref(false)
const tasks = useTasks()
function toggleTaskForm(show: boolean) {
  showTaskForm.value = show
}

</script>