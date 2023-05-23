<template>
  <form  class="bg-gray-100 rounded p-3">
    <input type="text" placeholder="Título" class="w-full bg-gray-100 p-2 focus:outline-0" v-model="newTask.title"/>
    <textarea placeholder="Descrição" rows="1" class="w-full bg-gray-100 p-2 resize-none focus:outline-0" v-model="newTask.description"></textarea>
    <div class="flex flex-row-reverse border-t pt-2">
      <button data-modal-hide="editTaskModal" type="button" 
      class="bg-green-500 text-white px-3 py-2 text-sm rounded font-medium" 
      :class="isTitleEmpty?'opacity-50 cursor-not-allowed':'hover:bg-green-600'"
      @click.prevent="submitForm" :disabled="isTitleEmpty">
        {{ type==='add'?'Adicionar': 'Salvar'}}
      </button>
      <button data-modal-hide="editTaskModal" type="button" class="bg-gray-300  px-3 py-2 text-sm rounded mr-2 font-medium" @click.prevent="closeModal()">Cancelar</button>
    </div>
  </form>
</template>
<script setup lang="ts">
import { v4 as randomUUID } from 'uuid';

interface Form {
  type: 'edit' | 'add'
}

const props = defineProps<Form>()
const emit = defineEmits(['addTask', 'closeForm', 'editTask'])

const tasks = useTasks()
const selectedTask = useSelectedTask()
const showModal = useShowModal()
const itemIndex = tasks.value.findIndex((task => task.id == selectedTask.value));
const newTask = ref({id: tasks.value[itemIndex]?.id || randomUUID(),title: tasks.value[itemIndex]?.title || '', 
  description: tasks.value[itemIndex]?.description || '', isDone: tasks.value[itemIndex]?.isDone || false})

function submitForm():void {
  if(props.type === 'add') {
   tasks.value.unshift(newTask.value)
  } else{
    tasks.value[itemIndex] = newTask.value
    showModal.value = false
  }
  
  newTask.value = {id:randomUUID() ,title: '', description: '', isDone: false}
}
function closeModal(): void {
  if (props.type === 'add') {
    emit('closeForm')
  }
  else {
    showModal.value = false
  }
}
const isTitleEmpty = computed(()=>{
     return newTask.value.title === ''
})
</script>