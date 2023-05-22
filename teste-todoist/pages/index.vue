<template>
  <div>
    <h1 class="mb-5 text-xl font-medium">Tarefas</h1>
    <div>
      <ul>
        <li>
          <TaskItem :title="'Tarefa 1'" :description="'Comprar pão'"  :is-done="true" />
        </li>
      </ul>
      <button>+ Adicionar tarefa</button>
      <TaskForm />
    </div>
  </div>
</template>
<script setup>

</script>