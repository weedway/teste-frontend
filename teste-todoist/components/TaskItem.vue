<template>
  <div class="flex gap-3 border-b pb-3 mb-1" :class="tasks[itemIndex].isDone?'opacity-50':''">
    <input type="checkbox" class="accent-green-500 self-start mt-[6px]" :checked="tasks[itemIndex].isDone" @click="updateTaskStatus"/>
    <div class="grow">
      <div class="flex justify-between">
        <h1 class="text-base mb-1">{{ tasks[itemIndex].title }}</h1>
        <div>
          <button class="text-xs text-gray-500 mr-2" @click="editTask">Editar</button>
          <button class="text-xs text-gray-500" @click="deleteTask">Excluir</button>
        </div>
      </div>
      
      <p class="text-xs">{{ tasks[itemIndex].description }}</p>
    </div>
  </div>
  <ModalEditTask v-if="showModal"></ModalEditTask>
</template>
<script setup lang="ts">
import { UUID } from 'crypto';
import {useShowModal} from '~/composables/task'
interface TaskItem {
  id: UUID
}

const props = defineProps<TaskItem>()
const showModal = useShowModal()
const tasks = useTasks()
const selectedTask = useSelectedTask()
const itemIndex = tasks.value.findIndex((task => task.id == props.id));
function updateTaskStatus(): void {
  
  tasks.value[itemIndex].isDone = !tasks.value[itemIndex].isDone
}
function editTask(): void {
  selectedTask.value = props.id
  showModal.value = true
}
function deleteTask(): void {
 tasks.value.splice(itemIndex, 1)
}
</script>